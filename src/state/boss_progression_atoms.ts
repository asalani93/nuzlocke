import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { StepTypes, type Step } from "../types/step"
import type { VersionId } from "../types/version"

import {
  BossProgressStatuses,
  serializedBossProgression,
  type BossProgression,
  type BossProgressionReducerAction,
  type SerializedBossProgression,
} from "./boss_progression"
import { createValidatedJsonStorage } from "./state_utils"
import type { Atom } from "jotai"
import type { CurrentVersionId } from "./current_version"

function initializeBossProgression(versionId: VersionId, stepOrder: Step[]) {
  const progression: BossProgression = {}

  for (const step of stepOrder) {
    if (step.type !== StepTypes.BOSS) {
      continue
    }

    if (!step.versionIds.includes(versionId)) {
      continue
    }

    progression[step.bossId] = {
      bossId: step.bossId,
      status: BossProgressStatuses.INCOMPLETE,
    }
  }

  return progression
}

export function createBossProgressionState(
  initialVersionId: VersionId,
  stepOrder: Step[],
  currentVersionIdAtom: Atom<CurrentVersionId>
) {
  const validatedStorage = createValidatedJsonStorage<SerializedBossProgression, BossProgression>(
    serializedBossProgression,
    1
  )

  const bossProgressionAtomInner = atomWithStorage<BossProgression>(
    "nuzlocke_boss_progression",
    initializeBossProgression(initialVersionId, stepOrder),
    validatedStorage,
    { getOnInit: true }
  )

  const bossProgressionAtom = atom<BossProgression, [BossProgressionReducerAction], void>(
    (get) => get(bossProgressionAtomInner),
    (get, set, action) => {
      const currentVersionId = get(currentVersionIdAtom).versionId
      const oldBossProgression = get(bossProgressionAtomInner)

      switch (action.type) {
        case "RESET_ALL": {
          set(bossProgressionAtomInner, initializeBossProgression(currentVersionId, stepOrder))
          break
        }

        case "RESET": {
          const newBossProgression = {
            ...oldBossProgression,
            [action.bossId]: {
              ...oldBossProgression[action.bossId],
              status: BossProgressStatuses.INCOMPLETE,
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
              status: BossProgressStatuses.COMPLETED,
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
              status: BossProgressStatuses.FAILED,
            },
          }
          set(bossProgressionAtomInner, newBossProgression)
          break
        }
      }
    }
  )

  return {
    bossProgressionAtom,
  } as const
}
