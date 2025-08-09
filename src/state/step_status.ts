import { useMemo } from "react"
import type { BossId } from "../types/boss"
import type { RouteId } from "../types/route"
import { BossProgressStatus, useBossProgression, useProgressForBoss } from "./boss_progression"
import { StepOrder } from "../data/steps"
import { useEncounterForRoute } from "./encounters"

type Enum<T extends { [K in keyof T]: K }> = T[keyof T]

export const StepStatus = {
  LOCKED: "LOCKED",
  INCOMPLETE: "INCOMPLETE",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const

export type StepStatus = Enum<typeof StepStatus>

export function useProgressForBossStep(bossId: BossId) {
  const bossProgression = useBossProgression()
  const progressForBoss = useProgressForBoss(bossId)

  return useMemo(() => {
    let isLocked = false

    for (const step of StepOrder) {
      if (step.type !== "boss") {
        continue
      }

      if (bossId === step.boss) {
        break
      }

      const bossProgressStatus = bossProgression[step.boss]?.status
      if (bossProgressStatus == null) {
        continue
      }

      isLocked = bossProgressStatus === BossProgressStatus.INCOMPLETE
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
  }, [bossId, bossProgression, progressForBoss])
}

export function useProgressForRouteStep(routeId: RouteId) {
  const bossProgression = useBossProgression()
  const encounterForRoute = useEncounterForRoute(routeId)

  return useMemo(() => {
    let isLocked = false

    for (const step of StepOrder) {
      if (step.type === "route" && step.route === routeId) {
        break
      }

      if (step.type !== "boss") {
        continue
      }

      const bossProgressStatus = bossProgression[step.boss]?.status
      if (bossProgressStatus == null) {
        continue
      }

      isLocked = bossProgressStatus === BossProgressStatus.INCOMPLETE
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
  }, [bossProgression, encounterForRoute, routeId])
}
