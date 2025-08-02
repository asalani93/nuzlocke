import { HeroUIProvider } from "@heroui/react";
import { useAllStepsForCurrentVersion, useEncounterTable } from "./hooks";
import { Step } from "../steps/step";
import { useEffect } from "react";
import type { EncounterTable } from "./state";
import { StepOrder } from "../data/steps";
import { lookup } from "../types/util";
import { Routes } from "../data/routes";
import type { Route } from "../types/route";
import { type Pokemon } from "../types/pokemon";
import { Pokemons } from "../data/pokemons";
import { Locations } from "../data/locations";
import type { Location } from "../types/location";
import type { Boss } from "../types/boss";
import { Bosses } from "../data/bosses";

function cool(encounters: EncounterTable) {
  const output: string[] = [];
  for (const step of StepOrder) {
    if (step.type === "route") {
      const stepRoute = lookup<Route>(Routes, step.route)!;
      const stepLocation = lookup<Location>(Locations, stepRoute.location)!;
      const encounterPokemon = lookup<Pokemon>(
        Pokemons,
        encounters[step.route]!
      )!;
      output.push(`${stepLocation.name}: ||${encounterPokemon.name}||`);
    }

    if (step.type === "boss") {
      const stepBoss = lookup<Boss>(Bosses, step.boss)!;
      const levelCap = Math.max(
        ...stepBoss.team.map((pokemon) => pokemon.level)
      );
      output.push(`${stepBoss.name} (Cap: ${levelCap})`);
    }
  }
}

export function App() {
  const encounters = useEncounterTable();
  const steps = useAllStepsForCurrentVersion();

  useEffect(() => {
    cool(encounters);
  }, [encounters]);

  const stepComponents = steps.map((step) => {
    return <Step stepId={step.id} key={step.id} />;
  });

  return (
    <HeroUIProvider>
      <div className="flex flex-col gap-2 p-2">{stepComponents}</div>
    </HeroUIProvider>
  );
}
