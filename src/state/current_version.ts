import { atom, useAtomValue, useSetAtom } from "jotai"
import { Versions } from "../data/versions"
import type { VersionId } from "../types/version"
import { useCallback } from "react"
import { useAllStepsForVersionId, useVersion } from "../app/hooks"
import type { Step } from "../types/step"

const currentVersionIdAtomInner = atom<VersionId>(Versions.SCARLET.id)

export const currentVersionIdAtom = atom(
  (get) => get(currentVersionIdAtomInner),
  (_get, set, newCurrentVersionId: VersionId) => {
    set(currentVersionIdAtomInner, newCurrentVersionId)
  }
)

export function useCurrentVersionId() {
  return useAtomValue(currentVersionIdAtom)
}

export function useCurrentVersion() {
  const currentVersionId = useCurrentVersionId()
  return useVersion(currentVersionId)
}

export function useSetCurrentVersion() {
  const setVersionId = useSetAtom(currentVersionIdAtom)
  return useCallback(
    (versionId: VersionId) => {
      setVersionId(versionId)
    },
    [setVersionId]
  )
}

export function useAllStepsForCurrentVersion(): Step[] {
  const versionId = useCurrentVersionId()
  return useAllStepsForVersionId(versionId)
}
