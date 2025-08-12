import { useStep } from "../state/game_data_hooks"
import { StepTypes, type StepId } from "../types/step"

import { BossStep } from "./boss_step"
import { RouteStep } from "./route_step"

export interface StepProps {
  stepId: StepId
}

export function Step({ stepId }: StepProps) {
  const step = useStep(stepId)!

  return step.type === StepTypes.ROUTE ? (
    <RouteStep routeStep={step} />
  ) : (
    <BossStep bossStep={step} />
  )
}
