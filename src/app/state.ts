import { atom } from "jotai";
import { StepOrder, Versions } from "../data/steps";
import type { Version } from "../types/step";
import type { Route, RouteId } from "../types/route";
import type { Pokemon, PokemonId } from "../types/pokemon";
import { Routes } from "../data/routes";
import type { EvolutionId } from "../types/evolution";
import { lookup } from "../types/util";
import { Pokemons } from "../data/pokemons";

export const versionAtom = atom<Version>(Versions.SCARLET);

export type EncounterTable = Record<RouteId, PokemonId | undefined>;

function calculateEncounters(
  encounters: EncounterTable,
  version: Version,
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
      const possibleEncounters =
        version === "scarlet"
          ? [...currentRoute.baseEncounters, ...currentRoute.scarletEncounters]
          : [...currentRoute.baseEncounters, ...currentRoute.violetEncounters];
      const filteredEncounters = possibleEncounters
        .map((routeEncounter) =>
          lookup<Pokemon>(Pokemons, routeEncounter.pokemon)
        )
        .filter((encounter) => !foundEvolutions.has(encounter.line));
      const selectedEncounterIndex = Math.floor(
        Math.random() * filteredEncounters.length
      );
      newEncounter = filteredEncounters[selectedEncounterIndex]!;
    } else {
      newEncounter = lookup<Pokemon>(Pokemons, currentEncounter);
    }

    foundEvolutions.add(newEncounter.line);
    newEncounters[step.route] = newEncounter.id;
  }

  window.encounters = newEncounters;

  return newEncounters;
}

type EncountersReducerActions =
  | { type: "RESET_ALL" }
  | { type: "RESET_FROM"; route: RouteId };

const encountersAtomInner = atom<EncounterTable>(
  calculateEncounters({}, Versions.SCARLET)
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
