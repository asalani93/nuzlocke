import { useCallback, useMemo } from "react"

import type { AbilityId } from "../types/ability"
import type { BossId } from "../types/boss"
import { ConditionType } from "../types/condition"
import type { EvolutionId } from "../types/evolution"
import type { LocationId } from "../types/location"
import type { MoveId } from "../types/move"
import type { PokemonId } from "../types/pokemon"
import type { RouteId } from "../types/route"
import { StepTypes, type BossStepId, type RouteStepId, type StepId } from "../types/step"
import type { VersionId } from "../types/version"

import type { GameData } from "./game_data"
import { useStateContext } from "./state_context"
import { useEncounters } from "./encounters_hooks"

export function useGameData(): GameData {
  const { gameData } = useStateContext()
  return gameData
}

export function useAbilityLookup() {
  const loadedGameData = useGameData()
  return useCallback(
    (abilityId: AbilityId) => loadedGameData.abilities[abilityId],
    [loadedGameData]
  )
}

export function useBossLookup() {
  const loadedGameData = useGameData()
  return useCallback((bossId: BossId) => loadedGameData.bosses[bossId], [loadedGameData])
}

export function useEvolutionLookup() {
  const loadedGameData = useGameData()
  return useCallback(
    (evolutionId: EvolutionId) => loadedGameData.evolutions[evolutionId],
    [loadedGameData]
  )
}

export function useLocationLookup() {
  const loadedGameData = useGameData()
  return useCallback(
    (locationId: LocationId) => loadedGameData.locations[locationId],
    [loadedGameData]
  )
}

export function useMoveLookup() {
  const loadedGameData = useGameData()
  return useCallback((moveId: MoveId) => loadedGameData.moves[moveId], [loadedGameData])
}

export function usePokemonLookup() {
  const loadedGameData = useGameData()
  return useCallback((pokemonId: PokemonId) => loadedGameData.pokemon[pokemonId], [loadedGameData])
}

export function useRouteLookup() {
  const loadedGameData = useGameData()
  return useCallback((routeId: RouteId) => loadedGameData.routes[routeId], [loadedGameData])
}

export function useStepLookup() {
  const loadedGameData = useGameData()
  return useCallback((stepId: StepId) => loadedGameData.steps[stepId], [loadedGameData])
}

export function useVersionLookup() {
  const loadedGameData = useGameData()
  return useCallback((versionId: VersionId) => loadedGameData.versions[versionId], [loadedGameData])
}

export function useAbility(abilityId: AbilityId) {
  const abilityLookup = useAbilityLookup()
  return useMemo(() => abilityLookup(abilityId), [abilityId, abilityLookup])
}

export function useBoss(bossId: BossId) {
  const bossLookup = useBossLookup()
  return useMemo(() => bossLookup(bossId), [bossId, bossLookup])
}

export function useEvolution(evolutionId: EvolutionId) {
  const evolutionLookup = useEvolutionLookup()
  return useMemo(() => evolutionLookup(evolutionId), [evolutionId, evolutionLookup])
}

export function useLocation(locationId: LocationId) {
  const locationLookup = useLocationLookup()
  return useMemo(() => locationLookup(locationId), [locationId, locationLookup])
}

export function useMove(moveId: MoveId) {
  const moveLookup = useMoveLookup()
  return useMemo(() => moveLookup(moveId), [moveId, moveLookup])
}

export function usePokemon(pokemonId: PokemonId) {
  const pokemonLookup = usePokemonLookup()
  return useMemo(() => pokemonLookup(pokemonId), [pokemonId, pokemonLookup])
}

export function useRoute(routeId: RouteId) {
  const routeLookup = useRouteLookup()
  return useMemo(() => routeLookup(routeId), [routeId, routeLookup])
}

export function useBossStep(bossStepId: BossStepId) {
  const step = useStep(bossStepId)
  return step?.type === StepTypes.BOSS ? step : undefined
}

export function useRouteStep(routeStepId: RouteStepId) {
  const step = useStep(routeStepId)
  return step?.type === StepTypes.ROUTE ? step : undefined
}

export function useStep(stepId: StepId) {
  const stepLookup = useStepLookup()
  return useMemo(() => stepLookup(stepId), [stepId, stepLookup])
}

export function useVersion(versionId: VersionId) {
  const versionLookup = useVersionLookup()
  return useMemo(() => versionLookup(versionId), [versionId, versionLookup])
}

export function useBossStepVariantId(bossStepId: BossStepId) {
  const bossStep = useBossStep(bossStepId)!
  const encounters = useEncounters()

  let bossId = bossStep.bossId
  for (const bossVariant of bossStep.bossVariants) {
    const condition = bossVariant.condition

    switch (condition.type) {
      case ConditionType.ENCOUNTER: {
        if (encounters[condition.routeId]?.pokemonId === condition.pokemonId) {
          bossId = bossVariant.bossId
        }
      }
    }
  }

  return bossId
}

export function useOrderedSteps() {
  const { stepOrder } = useStateContext()
  return stepOrder
}

export function useOrderedStepsForVersionId(versionId: VersionId) {
  const orderedSteps = useOrderedSteps()
  return useMemo(() => {
    return orderedSteps.filter((step) => step.versionIds.includes(versionId))
  }, [orderedSteps, versionId])
}
