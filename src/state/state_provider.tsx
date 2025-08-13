import React, { useMemo } from "react"

import { loadGameData } from "./game_data"

import { createBossProgressionState } from "./boss_progression_atoms"
import { createCurrentVersionIdState } from "./current_version_atoms"
import { createEncountersState } from "./encounters_atoms"
import { stateContext, type StateContext } from "./state_context"

export interface StateProviderProps {
  children?: React.ReactNode
}

export function StateProvider({ children }: StateProviderProps) {
  const state = useMemo(() => {
    const { gameData, stepOrder } = loadGameData()

    const initialVersionId = gameData.defaultVersionId
    const starterRouteId = gameData.starterRouteId

    const { currentVersionIdAtom } = createCurrentVersionIdState(initialVersionId)

    const { bossProgressionAtom } = createBossProgressionState(
      initialVersionId,
      stepOrder,
      currentVersionIdAtom
    )

    const { encountersAtom } = createEncountersState(
      initialVersionId,
      starterRouteId,
      currentVersionIdAtom,
      gameData,
      stepOrder
    )

    const data: StateContext = {
      bossProgressionAtom,
      currentVersionIdAtom,
      encountersAtom,
      gameData,
      stepOrder,
    }

    return data
  }, [])

  return <stateContext.Provider value={state}>{children}</stateContext.Provider>
}
