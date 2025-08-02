import { atom } from "jotai";
import { Routes } from "../data/routes";
import { Pokemons } from "../data/pokemons";
import { StepOrder } from "../data/steps";
import { Versions } from "../data/versions";
import type { EvolutionId } from "../types/evolution";
import type { Pokemon, PokemonId } from "../types/pokemon";
import type { Route, RouteId } from "../types/route";
import { lookup } from "../types/util";
import type { VersionId } from "../types/version";

export const versionAtom = atom<VersionId>(Versions.SCARLET.id);

export type EncounterTable = Record<RouteId, PokemonId | undefined>;

function calculateEncounters(
  encounters: EncounterTable,
  version: VersionId,
  from?: RouteId
) {
  const newEncounters = { ...encounters };

  const fromRoute = from != null ? from : Routes.STARTER.id;

  let hitStart = false;
  const foundEvolutions = new Set<EvolutionId>();

  for (const step of StepOrder) {
    if (step.type !== "route") {
      continue;
    }

    if (step.route === fromRoute) {
      hitStart = true;
    }

    const currentEncounter = encounters[step.route];

    let newEncounter: Pokemon;
    if (currentEncounter == null || hitStart) {
      const currentRoute = lookup<Route>(Routes, step.route);
      const encounters = currentRoute.encounters
        .filter((encounter) => encounter.versions.includes(version))
        .map((routeEncounter) =>
          lookup<Pokemon>(Pokemons, routeEncounter.pokemon)
        )
        .filter((encounter) => !foundEvolutions.has(encounter.line));
      const selectedEncounterIndex = Math.floor(
        Math.random() * encounters.length
      );
      newEncounter = encounters[selectedEncounterIndex]!;
    } else {
      newEncounter = lookup<Pokemon>(Pokemons, currentEncounter);
    }

    foundEvolutions.add(newEncounter.line);
    newEncounters[step.route] = newEncounter.id;
  }

  return newEncounters;
}

type EncountersReducerActions =
  | { type: "RESET_ALL" }
  | { type: "RESET_FROM"; route: RouteId };

const encountersAtomInner = atom<EncounterTable>(
  calculateEncounters({}, Versions.SCARLET.id)
);

export const encountersAtom = atom<
  EncounterTable,
  [EncountersReducerActions],
  void
>(
  (get) => get(encountersAtomInner),
  (get, set, action) => {
    const encounters = get(encountersAtomInner);
    const version = get(versionAtom);

    switch (action.type) {
      case "RESET_ALL": {
        set(encountersAtomInner, calculateEncounters(encounters, version));
        break;
      }
      case "RESET_FROM": {
        set(
          encountersAtomInner,
          calculateEncounters(encounters, version, action.route)
        );
        break;
      }
    }
  }
);
