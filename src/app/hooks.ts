import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useMemo } from "react";
import { Abilities } from "../data/abilities";
import { Bosses } from "../data/bosses";
import { Locations } from "../data/locations";
import { Moves } from "../data/moves";
import { Pokemons } from "../data/pokemons";
import { Routes } from "../data/routes";
import { Steps } from "../data/steps";
import { encountersAtom, versionAtom, type EncounterTable } from "./state";
import type { Ability, AbilityId } from "../types/ability";
import type { Boss, BossId } from "../types/boss";
import type { Location, LocationId } from "../types/location";
import type { Move, MoveId } from "../types/move";
import type { Pokemon, PokemonId } from "../types/pokemon";
import type { Route, RouteId } from "../types/route";
import type { Step, StepId, Version } from "../types/step";
import { lookup } from "../types/util";

export function useAbility(id: AbilityId): Ability {
  return useMemo(() => lookup(Abilities, id), [id]);
}

export function useBoss(id: BossId): Boss {
  return useMemo(() => lookup(Bosses, id), [id]);
}

export function useLocation(id: LocationId): Location {
  return useMemo(() => lookup(Locations, id), [id]);
}

export function useMove(id: MoveId): Move {
  return useMemo(() => lookup(Moves, id), [id]);
}

export function usePokemon(id: PokemonId): Pokemon {
  return useMemo(() => lookup(Pokemons, id), [id]);
}

export function useRoute(id: RouteId): Route {
  return useMemo(() => lookup(Routes, id), [id]);
}

export function useStep(id: StepId): Step {
  return useMemo(() => lookup(Steps, id), [id]);
}

export function useAllSteps(): Step[] {
  return useMemo(() => {
    const steps = Object.values(Steps);
    steps.sort((l, r) => l.index - r.index);
    return steps;
  }, []);
}

export function useAllStepsForVersion(): Step[] {
  const version = useVersion();
  const allSteps = useAllSteps();
  return useMemo(() => {
    return allSteps.filter(
      (step) => step.version == null || step.version === version
    );
  }, [allSteps, version]);
}

export function useEncounterTable(): EncounterTable {
  return useAtomValue(encountersAtom);
}

export function useEncounterForRoute(id: RouteId): PokemonId | undefined {
  const encounterTable = useEncounterTable();
  return encounterTable[id];
}

export function useResetEncountersCallback() {
  const dispatch = useSetAtom(encountersAtom);
  return useCallback(() => {
    dispatch({ type: "RESET_ALL" });
  }, [dispatch]);
}

export function useRerollEncounterCallback() {
  const dispatch = useSetAtom(encountersAtom);
  return useCallback(
    (id: RouteId) => {
      dispatch({ type: "RESET_FROM", route: id });
    },
    [dispatch]
  );
}

export function useVersion(): Version {
  return useAtomValue(versionAtom);
}

export function useChangeVersionCallback() {
  const resetEncounters = useResetEncountersCallback();
  const setVersion = useSetAtom(versionAtom);
  return useCallback(
    (version: Version) => {
      setVersion(version);
      resetEncounters();
    },
    [resetEncounters, setVersion]
  );
}
