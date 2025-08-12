import { createContext, useContext } from "react"

import type { Step } from "../types/step"

import type { BossProgressionAtom } from "./boss_progression"
import type { CurrentVersionIdAtom } from "./current_version"
import type { EncountersAtom } from "./encounters"
import type { GameData } from "./game_data"

export interface StateContext {
  bossProgressionAtom: BossProgressionAtom
  currentVersionIdAtom: CurrentVersionIdAtom
  encountersAtom: EncountersAtom
  gameData: GameData
  stepOrder: Step[]
}

export const stateContext = createContext<StateContext | null>(null)

export function useStateContext() {
  const context = useContext(stateContext)
  if (context == null) {
    throw new Error("test")
  }
  return context
}
