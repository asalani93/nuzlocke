import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { VersionId } from "../types/version"

import {
  type CurrentVersionId,
  type SerializedCurrentVersionId,
  serializedCurrentVersionId,
} from "./current_version"
import { createValidatedJsonStorage } from "./state_utils"

export function createCurrentVersionIdState(initialVersionId: VersionId) {
  const validatedStorage = createValidatedJsonStorage<SerializedCurrentVersionId, CurrentVersionId>(
    serializedCurrentVersionId,
    1
  )

  const currentVersionIdAtomInner = atomWithStorage<CurrentVersionId>(
    "nuzlocke_current_version",
    { versionId: initialVersionId },
    validatedStorage,
    { getOnInit: true }
  )

  const currentVersionIdAtom = atom(
    (get) => get(currentVersionIdAtomInner),
    (_get, set, newCurrentVersionId: VersionId) => {
      set(currentVersionIdAtomInner, { versionId: newCurrentVersionId })
    }
  )

  return {
    currentVersionIdAtom,
  }
}
