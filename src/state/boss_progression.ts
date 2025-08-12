import type { WritableAtom } from "jotai"
import z from "zod"

import { bossId, type BossId } from "../types/boss"

import { versionedState } from "./state_utils"

export const bossProgressStatus = z.enum(["INCOMPLETE", "COMPLETED", "FAILED"])
export type BossProgressStatus = z.infer<typeof bossProgressStatus>
export const BossProgressStatuses = bossProgressStatus.enum

export const bossProgress = z.object({
  bossId: bossId,
  status: bossProgressStatus,
})
export type BossProgress = z.infer<typeof bossProgress>

export const bossProgression = z.record(bossId, bossProgress.optional())
export type BossProgression = z.infer<typeof bossProgression>

export const serializedBossProgression = versionedState(1, bossProgression)
export type SerializedBossProgression = z.infer<typeof serializedBossProgression>

export type BossProgressionAtom = WritableAtom<
  BossProgression,
  [BossProgressionReducerAction],
  void
>

export type BossProgressionReducerAction =
  | { type: "RESET_ALL" }
  | { type: "RESET"; bossId: BossId }
  | { type: "COMPLETE"; bossId: BossId }
  | { type: "FAIL"; bossId: BossId }
