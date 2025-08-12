import { atom, useAtomValue, useSetAtom } from "jotai"
import { useCallback, useMemo } from "react"

import type { BossId } from "../types/boss"

import { useStateContext } from "./state_context"

export function useBossProgression() {
  const { bossProgressionAtom } = useStateContext()
  return useAtomValue(bossProgressionAtom)
}

export function useProgressForBoss(bossId: BossId) {
  const { bossProgressionAtom } = useStateContext()
  const progressForBossAtom = useMemo(() => {
    return atom((get) => {
      return get(bossProgressionAtom)[bossId]
    })
  }, [bossId, bossProgressionAtom])

  return useAtomValue(progressForBossAtom)
}

export function useBossProgressionDispatch() {
  const { bossProgressionAtom } = useStateContext()
  return useSetAtom(bossProgressionAtom)
}

export function useResetAllBossProgression() {
  const dispatch = useBossProgressionDispatch()
  return useCallback(() => {
    dispatch({ type: "RESET_ALL" })
  }, [dispatch])
}

export function useResetBoss() {
  const dispatch = useBossProgressionDispatch()
  return useCallback(
    (bossId: BossId) => {
      dispatch({ type: "RESET", bossId })
    },
    [dispatch]
  )
}

export function useCompleteBoss() {
  const dispatch = useBossProgressionDispatch()
  return useCallback(
    (bossId: BossId) => {
      dispatch({ type: "COMPLETE", bossId })
    },
    [dispatch]
  )
}

export function useFailBoss() {
  const dispatch = useBossProgressionDispatch()
  return useCallback(
    (bossId: BossId) => {
      dispatch({ type: "FAIL", bossId })
    },
    [dispatch]
  )
}
