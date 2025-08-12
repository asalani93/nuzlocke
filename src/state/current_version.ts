import type { WritableAtom } from "jotai"
import z from "zod"

import { versionId, type VersionId } from "../types/version"

import { versionedState } from "./state_utils"

export const currentVersionId = z.object({
  versionId: versionId,
})
export type CurrentVersionId = z.infer<typeof currentVersionId>

export const serializedCurrentVersionId = versionedState(1, currentVersionId)
export type SerializedCurrentVersionId = z.infer<typeof serializedCurrentVersionId>

export type CurrentVersionIdAtom = WritableAtom<CurrentVersionId, [VersionId], void>
