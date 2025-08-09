import { useCallback } from "react";
import { useProgressForStep, useStepUnlockedStatus } from "../app/hooks";
import type { StepId } from "../types/step";
import { CompletedButton } from "../common/completed_button";

export interface StepCompletedButtonProps {
  stepId: StepId;
}

export function StepCompletedButton({ stepId }: StepCompletedButtonProps) {
  const [completed, { complete, uncomplete }] = useProgressForStep(stepId);
  const isStepUnlocked = useStepUnlockedStatus(stepId);

  const handleChange = useCallback(
    (checked: boolean) => {
      if (checked) {
        complete();
      } else {
        uncomplete();
      }
    },
    [complete, uncomplete]
  );

  return (
    <CompletedButton
      checked={completed}
      disabled={!isStepUnlocked}
      onChange={handleChange}
    />
  );
}
