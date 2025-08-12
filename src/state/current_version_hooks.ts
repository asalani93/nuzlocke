import { useAtomValue, useSetAtom } from "jotai"
import { useCallback } from "react"

import type { Step } from "../types/step"
import type { VersionId } from "../types/version"

import { useOrderedStepsForVersionId, useVersion } from "./game_data_hooks"
import { useStateContext } from "./state_context"

export function useCurrentVersionId() {
  const { currentVersionIdAtom } = useStateContext()
  return useAtomValue(currentVersionIdAtom).versionId
}

export function useCurrentVersion() {
  const currentVersionId = useCurrentVersionId()
  return useVersion(currentVersionId)
}

export function useSetCurrentVersion() {
  const { currentVersionIdAtom } = useStateContext()
  const setVersionId = useSetAtom(currentVersionIdAtom)
  return useCallback(
    (versionId: VersionId) => {
      setVersionId(versionId)
    },
    [setVersionId]
  )
}

export function useOrderedStepsForCurrentVersion(): Step[] {
  const versionId = useCurrentVersionId()
  return useOrderedStepsForVersionId(versionId)
}
