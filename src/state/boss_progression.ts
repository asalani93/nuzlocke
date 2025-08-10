import { atom, useAtomValue, useSetAtom } from "jotai"
import type { BossId } from "../types/boss"
import { Versions } from "../data/versions"
import type { VersionId } from "../types/version"
import { StepOrder } from "../data/steps"
import { currentVersionIdAtom } from "./current_version"
import { useCallback, useMemo } from "react"
import { atomWithStorage } from "jotai/utils"

type Enum<T extends { [K in keyof T]: K }> = T[keyof T]

export const BossProgressStatus = {
  INCOMPLETE: "INCOMPLETE",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const

export type BossProgressStatus = Enum<typeof BossProgressStatus>

export interface BossProgress {
  bossId: BossId
  status: BossProgressStatus
}

export type BossProgression = Record<BossId, BossProgress | undefined>

function initializeBossProgression(versionId: VersionId) {
  const progression: BossProgression = {}

  for (const step of StepOrder) {
    if (step.type !== "boss") {
      continue
    }

    if (step.version != null && step.version !== versionId) {
      continue
    }

    progression[step.boss] = {
      bossId: step.boss,
      status: BossProgressStatus.INCOMPLETE,
    }
  }

  return progression
}

const bossProgressionAtomInner = atomWithStorage<BossProgression>(
  "nuzlocke_boss_progression",
  initializeBossProgression(Versions.SCARLET.id),
  undefined,
  { getOnInit: true }
)

type BossProgressionReducerAction =
  | { type: "RESET_ALL" }
  | { type: "RESET"; bossId: BossId }
  | { type: "COMPLETE"; bossId: BossId }
  | { type: "FAIL"; bossId: BossId }

export const bossProgressionAtom = atom<BossProgression, [BossProgressionReducerAction], void>(
  (get) => get(bossProgressionAtomInner),
  (get, set, action) => {
    const currentVersionId = get(currentVersionIdAtom)
    const oldBossProgression = get(bossProgressionAtomInner)
    switch (action.type) {
      case "RESET_ALL": {
        set(bossProgressionAtomInner, initializeBossProgression(currentVersionId))
        break
      }
      case "RESET": {
        const newBossProgression = {
          ...oldBossProgression,
          [action.bossId]: {
            ...oldBossProgression[action.bossId],
            status: BossProgressStatus.INCOMPLETE,
          },
        }
        set(bossProgressionAtomInner, newBossProgression)
        break
      }
      case "COMPLETE": {
        const newBossProgression = {
          ...oldBossProgression,
          [action.bossId]: {
            ...oldBossProgression[action.bossId],
            status: BossProgressStatus.COMPLETED,
          },
        }
        set(bossProgressionAtomInner, newBossProgression)
        break
      }
      case "FAIL": {
        const newBossProgression: BossProgression = {
          ...oldBossProgression,
          [action.bossId]: {
            ...oldBossProgression[action.bossId],
            status: BossProgressStatus.FAILED,
          },
        }
        set(bossProgressionAtomInner, newBossProgression)
        break
      }
    }
  }
)

export function useBossProgression() {
  return useAtomValue(bossProgressionAtom)
}

export function useProgressForBoss(bossId: BossId) {
  const progressForBossAtom = useMemo(() => {
    return atom((get) => {
      return get(bossProgressionAtom)[bossId]
    })
  }, [bossId])

  return useAtomValue(progressForBossAtom)
}

function useBossProgressionDispatch() {
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
