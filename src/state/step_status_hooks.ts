import { useMemo } from "react"

import type { BossId } from "../types/boss"
import type { RouteId } from "../types/route"
import { StepTypes } from "../types/step"

import { useBossProgression, useProgressForBoss } from "./boss_progression_hooks"
import { BossProgressStatuses } from "./boss_progression"
import { useEncounterForRoute } from "./encounters_hooks"
import { useStateContext } from "./state_context"
import { StepStatus } from "./step_status"

export function useProgressForBossStep(bossId: BossId) {
  const { stepOrder } = useStateContext()
  const bossProgression = useBossProgression()
  const progressForBoss = useProgressForBoss(bossId)

  return useMemo(() => {
    let isLocked = false

    for (const step of stepOrder) {
      if (step.type !== StepTypes.BOSS) {
        continue
      }

      if (bossId === step.bossId) {
        break
      }

      const bossProgressStatus = bossProgression[step.bossId]?.status
      if (bossProgressStatus == null) {
        continue
      }

      isLocked = bossProgressStatus === BossProgressStatuses.INCOMPLETE
    }

    if (isLocked) {
      return StepStatus.LOCKED
    }

    switch (progressForBoss?.status) {
      case "INCOMPLETE":
        return StepStatus.INCOMPLETE
      case "COMPLETED":
        return StepStatus.COMPLETED
      case "FAILED":
        return StepStatus.FAILED
      default:
        return StepStatus.INCOMPLETE
    }
  }, [bossId, bossProgression, progressForBoss?.status, stepOrder])
}

export function useProgressForRouteStep(routeId: RouteId) {
  const { stepOrder } = useStateContext()
  const bossProgression = useBossProgression()
  const encounterForRoute = useEncounterForRoute(routeId)

  return useMemo(() => {
    let isLocked = false

    for (const step of stepOrder) {
      if (step.type === StepTypes.ROUTE && step.routeId === routeId) {
        break
      }

      if (step.type !== StepTypes.BOSS) {
        continue
      }

      const bossProgressStatus = bossProgression[step.bossId]?.status
      if (bossProgressStatus == null) {
        continue
      }

      isLocked = bossProgressStatus === BossProgressStatuses.INCOMPLETE
    }

    if (isLocked) {
      return StepStatus.LOCKED
    }

    switch (encounterForRoute?.status) {
      case "HIDDEN":
        return StepStatus.INCOMPLETE
      case "UNCAUGHT":
        return StepStatus.INCOMPLETE
      case "CAUGHT":
        return StepStatus.COMPLETED
      case "DEFEATED":
        return StepStatus.FAILED
      default:
        return StepStatus.INCOMPLETE
    }
  }, [bossProgression, encounterForRoute?.status, routeId, stepOrder])
}
