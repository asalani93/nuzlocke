import { useStep } from "../app/hooks";
import type { StepId } from "../types/step";
import { BossStep } from "./boss_step";
import { RouteStep } from "./route_step";

export interface StepProps {
  stepId: StepId;
}

export function Step({ stepId }: StepProps) {
  const step = useStep(stepId);

  return step.type === "route" ? (
    <RouteStep routeStep={step} />
  ) : (
    <BossStep bossStep={step} />
  );
}
