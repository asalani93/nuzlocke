import { StatusIndicator } from "../common/status_indicator"
import { useProgressForBossStep } from "../state/step_status_hooks"
import type { BossId } from "../types/boss"

export interface BossStepStatusIndicator {
  bossId: BossId
}

export function BossStepStatusIndicator({ bossId }: BossStepStatusIndicator) {
  const stepStatus = useProgressForBossStep(bossId)
  return <StatusIndicator status={stepStatus} />
}
