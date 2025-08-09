import { useMemo } from "react"
import { Abilities } from "../data/abilities"
import { Bosses } from "../data/bosses"
import { Locations } from "../data/locations"
import { Moves } from "../data/moves"
import { Pokemons } from "../data/pokemons"
import { Routes } from "../data/routes"
import { Steps } from "../data/steps"
import { Versions } from "../data/versions"
import type { Ability, AbilityId } from "../types/ability"
import type { Boss, BossId } from "../types/boss"
import type { Location, LocationId } from "../types/location"
import type { Move, MoveId } from "../types/move"
import type { Pokemon, PokemonId } from "../types/pokemon"
import type { Route, RouteId } from "../types/route"
import type { Step, StepId } from "../types/step"
import type { Version, VersionId } from "../types/version"
import { lookup } from "../types/util"

export function useAbility(abilityId: AbilityId): Ability {
  return useMemo(() => lookup(Abilities, abilityId), [abilityId])
}

export function useBoss(bossId: BossId): Boss {
  return useMemo(() => lookup(Bosses, bossId), [bossId])
}

export function useLocation(locationId: LocationId): Location {
  return useMemo(() => lookup(Locations, locationId), [locationId])
}

export function useMove(moveId: MoveId): Move {
  return useMemo(() => lookup(Moves, moveId), [moveId])
}

export function usePokemon(pokemonId: PokemonId): Pokemon {
  return useMemo(() => lookup(Pokemons, pokemonId), [pokemonId])
}

export function useRoute(routeId: RouteId): Route {
  return useMemo(() => lookup(Routes, routeId), [routeId])
}

export function useStep(stepId: StepId): Step {
  return useMemo(() => lookup(Steps, stepId), [stepId])
}

export function useVersion(id: VersionId): Version {
  return useMemo(() => lookup(Versions, id), [id])
}

export function useAllSteps(): Step[] {
  return useMemo(() => {
    const steps = Object.values(Steps)
    steps.sort((l, r) => l.index - r.index)
    return steps
  }, [])
}

export function useAllStepsForVersionId(versionId: VersionId): Step[] {
  const allSteps = useAllSteps()
  return useMemo(() => {
    return allSteps.filter((step) => step.version == null || step.version === versionId)
  }, [allSteps, versionId])
}
