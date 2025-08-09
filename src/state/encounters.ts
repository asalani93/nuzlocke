import { atom, useAtomValue, useSetAtom } from "jotai"
import { Pokemons } from "../data/pokemons"
import { Routes } from "../data/routes"
import { StepOrder } from "../data/steps"
import { Versions } from "../data/versions"
import type { EvolutionId } from "../types/evolution"
import type { Pokemon, PokemonId } from "../types/pokemon"
import type { Route, RouteId } from "../types/route"
import { lookup } from "../types/util"
import type { VersionId } from "../types/version"
import { currentVersionIdAtom } from "./current_version"
import { useCallback, useMemo } from "react"

type Enum<T extends { [K in keyof T]: K }> = T[keyof T]

export const EncounterStatus = {
  HIDDEN: "HIDDEN",
  UNCAUGHT: "UNCAUGHT",
  CAUGHT: "CAUGHT",
  DEFEATED: "DEFEATED",
} as const

export type EncounterStatus = Enum<typeof EncounterStatus>

export interface Encounter {
  routeId: RouteId
  pokemonId: PokemonId
  status: EncounterStatus
}

export type Encounters = Record<RouteId, Encounter | undefined>

function getFoundEvolutions(encounters: Encounters) {
  const foundEvolutions = new Set<EvolutionId>()

  for (const step of StepOrder) {
    if (step.type !== "route") {
      continue
    }

    const currentEncounter = encounters[step.route]
    if (currentEncounter == null) {
      continue
    }

    if (currentEncounter.status !== EncounterStatus.HIDDEN) {
      const pokemon = lookup<Pokemon>(Pokemons, currentEncounter.pokemonId)
      foundEvolutions.add(pokemon.line)
    }
  }

  return foundEvolutions
}

function calculateEncounter(
  routeId: RouteId,
  versionId: VersionId,
  foundEvolutions: Set<EvolutionId>
) {
  const currentRoute = lookup<Route>(Routes, routeId)

  const availableEncounters = currentRoute.encounters
    .filter((encounter) => encounter.versions.includes(versionId))
    .map((routeEncounter) => lookup<Pokemon>(Pokemons, routeEncounter.pokemon))
    .filter((encounter) => !foundEvolutions.has(encounter.line))

  const selectedEncounterIndex = Math.floor(Math.random() * availableEncounters.length)

  return availableEncounters[selectedEncounterIndex]!
}

interface CalculateEncountersOptions {
  rerollHidden?: boolean
}

function calculateEncounters(
  encounters: Encounters,
  versionId: VersionId,
  options: CalculateEncountersOptions = {}
) {
  const newEncounters = { ...encounters }
  const foundEvolutions = getFoundEvolutions(encounters)
  const rerollHidden = options.rerollHidden ?? false

  for (const step of StepOrder) {
    if (step.type !== "route") {
      continue
    }

    const currentEncounter = encounters[step.route]
    const shouldRoll =
      currentEncounter == null ||
      (rerollHidden && currentEncounter.status === EncounterStatus.HIDDEN)

    const newEncounter: Pokemon = shouldRoll
      ? calculateEncounter(step.route, versionId, foundEvolutions)
      : lookup<Pokemon>(Pokemons, currentEncounter.pokemonId)

    const status = shouldRoll ? EncounterStatus.HIDDEN : currentEncounter.status

    newEncounters[step.route] = {
      routeId: step.route,
      pokemonId: newEncounter.id,
      status,
    }

    foundEvolutions.add(newEncounter.line)
  }

  return newEncounters
}

function overrideEncounter(
  encounters: Encounters,
  routeId: RouteId,
  pokemonId: PokemonId,
  versionId: VersionId
) {
  const oldEncounter = encounters[routeId]

  const newEncounter =
    oldEncounter != null
      ? { ...oldEncounter, pokemonId }
      : { pokemonId, status: EncounterStatus.HIDDEN }

  const newEncounters = {
    ...encounters,
    [routeId]: newEncounter,
  }

  for (const encounter of Object.values(encounters)) {
    if (encounter == null) {
      continue
    }

    if (encounter.status === EncounterStatus.HIDDEN) {
      delete encounters[encounter.routeId]
    }
  }

  return calculateEncounters(newEncounters, versionId)
}

function rerollEncounter(encounters: Encounters, routeId: RouteId, versionId: VersionId) {
  const foundEvolutions = getFoundEvolutions(encounters)

  const rerolledEncounter = calculateEncounter(routeId, versionId, foundEvolutions)

  return overrideEncounter(encounters, routeId, rerolledEncounter.id, versionId)
}

const encountersAtomInner = atom<Encounters>(calculateEncounters({}, Versions.SCARLET.id))

type EncountersReducerAction =
  | { type: "RESET_ALL" }
  | { type: "REROLL"; routeId: RouteId }
  | { type: "OVERRIDE"; routeId: RouteId; pokemonId: PokemonId }
  | { type: "REVEAL"; routeId: RouteId }
  | { type: "HIDE"; routeId: RouteId }
  | { type: "CATCH"; routeId: RouteId }
  | { type: "DEFEAT"; routeId: RouteId }

const encountersAtom = atom<Encounters, [EncountersReducerAction], void>(
  (get) => get(encountersAtomInner),
  (get, set, action) => {
    const currentVersionId = get(currentVersionIdAtom)
    const oldEncounters = get(encountersAtomInner)
    switch (action.type) {
      case "RESET_ALL": {
        const newEncounters = calculateEncounters({}, currentVersionId)
        set(encountersAtomInner, newEncounters)
        break
      }
      case "REROLL": {
        const newEncounters = rerollEncounter(oldEncounters, action.routeId, currentVersionId)
        set(encountersAtomInner, newEncounters)
        break
      }
      case "OVERRIDE": {
        const newEncounters = overrideEncounter(
          oldEncounters,
          action.routeId,
          action.pokemonId,
          currentVersionId
        )
        set(encountersAtomInner, newEncounters)
        break
      }
      case "REVEAL": {
        if (oldEncounters[action.routeId]?.status !== EncounterStatus.HIDDEN) {
          return
        }
        const newEncounter = {
          ...oldEncounters[action.routeId],
          status: EncounterStatus.UNCAUGHT,
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
          status: EncounterStatus.HIDDEN,
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
          status: EncounterStatus.CAUGHT,
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
          status: EncounterStatus.DEFEATED,
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

export function useEncounters() {
  return useAtomValue(encountersAtom)
}

export function useEncounterForRoute(routeId: RouteId) {
  const encounterForRouteAtom = useMemo(() => {
    return atom((get) => {
      return get(encountersAtom)[routeId]
    })
  }, [routeId])

  return useAtomValue(encounterForRouteAtom)
}

function useEncountersDispatch() {
  return useSetAtom(encountersAtom)
}

export function useResetAllEncounters() {
  const dispatch = useEncountersDispatch()
  return useCallback(() => {
    dispatch({ type: "RESET_ALL" })
  }, [dispatch])
}

export function useRerollEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "REROLL", routeId })
    },
    [dispatch]
  )
}

export function useOverrideEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId, pokemonId: PokemonId) => {
      dispatch({ type: "OVERRIDE", routeId, pokemonId })
    },
    [dispatch]
  )
}

export function useRevealEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "REVEAL", routeId })
    },
    [dispatch]
  )
}

export function useHideEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "HIDE", routeId })
    },
    [dispatch]
  )
}

export function useCatchEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "CATCH", routeId })
    },
    [dispatch]
  )
}

export function useDefeatEncounter() {
  const dispatch = useEncountersDispatch()
  return useCallback(
    (routeId: RouteId) => {
      dispatch({ type: "DEFEAT", routeId })
    },
    [dispatch]
  )
}
