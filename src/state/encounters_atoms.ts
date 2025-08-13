import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { EvolutionId } from "../types/evolution"
import type { Pokemon, PokemonId } from "../types/pokemon"
import type { RouteId } from "../types/route"
import { StepTypes, type Step } from "../types/step"
import type { VersionId } from "../types/version"

import type { CurrentVersionIdAtom } from "./current_version"
import {
  EncounterStatuses,
  serializedEncounters,
  type Encounters,
  type EncountersReducerAction,
  type SerializedEncounters,
} from "./encounters"
import type { GameData } from "./game_data"
import { createValidatedJsonStorage } from "./state_utils"

function TBD_HANDLE_ERROR(): never {
  throw new Error("Handle me!")
}

interface CalculateEncountersOptions {
  rerollHidden?: boolean
}

class EncounterManager {
  private readonly gameData: GameData
  private readonly stepOrder: Step[]
  private readonly starterRouteId: RouteId

  constructor(gameData: GameData, stepOrder: Step[], starterRouteId: RouteId) {
    this.gameData = gameData
    this.stepOrder = stepOrder
    this.starterRouteId = starterRouteId
  }

  public calculateEncounters(
    encounters: Encounters,
    versionId: VersionId,
    options: CalculateEncountersOptions = {}
  ) {
    const newEncounters = { ...encounters }
    const foundEvolutions = this.getFoundEvolutions(encounters)
    const rerollHidden = options.rerollHidden ?? false

    for (const step of this.stepOrder) {
      if (step.type !== StepTypes.ROUTE) {
        continue
      }

      const currentEncounter = encounters[step.routeId]
      const shouldRoll =
        currentEncounter == null ||
        (rerollHidden && currentEncounter.status === EncounterStatuses.HIDDEN)

      const newEncounterId = shouldRoll
        ? this.calculateEncounterId(step.routeId, versionId, foundEvolutions)
        : currentEncounter.pokemonId

      const newEncounter = this.gameData.pokemon[newEncounterId]
      if (newEncounter == null) {
        TBD_HANDLE_ERROR()
      }

      const status =
        shouldRoll && step.routeId === this.starterRouteId
          ? EncounterStatuses.UNCAUGHT
          : shouldRoll
          ? EncounterStatuses.HIDDEN
          : currentEncounter.status

      newEncounters[step.routeId] = {
        routeId: step.routeId,
        pokemonId: newEncounterId,
        status,
      }

      foundEvolutions.add(newEncounter.evolutionId)
    }

    return newEncounters
  }

  public overrideEncounter(
    encounters: Encounters,
    routeId: RouteId,
    pokemonId: PokemonId,
    versionId: VersionId
  ) {
    const oldEncounter = encounters[routeId]

    const newEncounter =
      oldEncounter != null
        ? { ...oldEncounter, pokemonId }
        : { pokemonId, status: EncounterStatuses.HIDDEN }

    const newEncounters = {
      ...encounters,
      [routeId]: newEncounter,
    }

    for (const encounter of Object.values(encounters)) {
      if (encounter == null) {
        continue
      }

      if (encounter.status === EncounterStatuses.HIDDEN) {
        delete encounters[encounter.routeId]
      }
    }

    return this.calculateEncounters(newEncounters, versionId)
  }

  public rerollEncounter(encounters: Encounters, routeId: RouteId, versionId: VersionId) {
    const foundEvolutions = this.getFoundEvolutions(encounters)
    const rerolledEncounterId = this.calculateEncounterId(routeId, versionId, foundEvolutions)

    return this.overrideEncounter(encounters, routeId, rerolledEncounterId, versionId)
  }

  private calculateEncounterId(
    routeId: RouteId,
    versionId: VersionId,
    foundEvolutions: Set<EvolutionId>
  ) {
    const currentRoute = this.gameData.routes[routeId]
    if (currentRoute == null) {
      TBD_HANDLE_ERROR()
    }

    const availableEncounters = currentRoute.encounters
      .filter((encounter) => encounter.versionIds.includes(versionId))
      .map((routeEncounter) => this.gameData.pokemon[routeEncounter.pokemonId])
      .filter((encounter): encounter is Pokemon => {
        if (encounter == null) TBD_HANDLE_ERROR()
        return !foundEvolutions.has(encounter.evolutionId)
      })
      .map((encounter) => encounter.id)

    const selectedEncounterIndex = Math.floor(Math.random() * availableEncounters.length)
    return availableEncounters[selectedEncounterIndex]!
  }

  private getFoundEvolutions(encounters: Encounters) {
    const foundEvolutions = new Set<EvolutionId>()

    for (const step of this.stepOrder) {
      if (step.type !== StepTypes.ROUTE) {
        continue
      }

      const currentEncounter = encounters[step.routeId]
      if (currentEncounter == null) {
        continue
      }

      if (currentEncounter.status !== EncounterStatuses.HIDDEN) {
        const pokemon = this.gameData.pokemon[currentEncounter.pokemonId]
        if (pokemon == null) {
          TBD_HANDLE_ERROR()
        } else {
          foundEvolutions.add(pokemon.evolutionId)
        }
      }
    }

    return foundEvolutions
  }
}

export function createEncountersState(
  initialVersionId: VersionId,
  starterRouteId: RouteId,
  currentVersionIdAtom: CurrentVersionIdAtom,
  gameData: GameData,
  stepOrder: Step[]
) {
  const validatedStorage = createValidatedJsonStorage<SerializedEncounters, Encounters>(
    serializedEncounters,
    1
  )

  const encounterManager = new EncounterManager(gameData, stepOrder, starterRouteId)
  const encountersAtomInner = atomWithStorage<Encounters>(
    "nuzlocke_encounters",
    encounterManager.calculateEncounters({}, initialVersionId),
    validatedStorage,
    { getOnInit: true }
  )

  const encountersAtom = atom<Encounters, [EncountersReducerAction], void>(
    (get) => get(encountersAtomInner),
    (get, set, action) => {
      const currentVersionId = get(currentVersionIdAtom).versionId
      const oldEncounters = get(encountersAtomInner)
      switch (action.type) {
        case "RESET_ALL": {
          set(encountersAtomInner, encounterManager.calculateEncounters({}, initialVersionId))
          break
        }

        case "REROLL": {
          const newEncounters = encounterManager.rerollEncounter(
            oldEncounters,
            action.routeId,
            currentVersionId
          )
          set(encountersAtomInner, newEncounters)
          break
        }

        case "OVERRIDE": {
          const newEncounters = encounterManager.overrideEncounter(
            oldEncounters,
            action.routeId,
            action.pokemonId,
            currentVersionId
          )
          set(encountersAtomInner, newEncounters)
          break
        }

        case "REVEAL": {
          if (oldEncounters[action.routeId]?.status !== EncounterStatuses.HIDDEN) {
            return
          }
          const newEncounter = {
            ...oldEncounters[action.routeId],
            status: EncounterStatuses.UNCAUGHT,
          }
          set(encountersAtomInner, {
            ...oldEncounters,
            [action.routeId]: newEncounter,
          })
          break
        }

        case "HIDE": {
          const newEncounter = {
            ...oldEncounters[action.routeId],
            status: EncounterStatuses.HIDDEN,
          }
          set(encountersAtomInner, {
            ...oldEncounters,
            [action.routeId]: newEncounter,
          })
          break
        }

        case "CATCH": {
          const newEncounter = {
            ...oldEncounters[action.routeId],
            status: EncounterStatuses.CAUGHT,
          }
          set(encountersAtomInner, {
            ...oldEncounters,
            [action.routeId]: newEncounter,
          })
          break
        }

        case "DEFEAT": {
          const newEncounter = {
            ...oldEncounters[action.routeId],
            status: EncounterStatuses.DEFEATED,
          }
          set(encountersAtomInner, {
            ...oldEncounters,
            [action.routeId]: newEncounter,
          })
          break
        }
      }
    }
  )

  return { encountersAtom } as const
}
