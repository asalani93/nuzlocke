import { useMantineTheme } from "@mantine/core"
import { IconCircleCheck, IconCircleX, IconLock } from "@tabler/icons-react"

import { StepStatus } from "../state/step_status"

export interface StepStatusIndicatorProps {
  status: StepStatus
}

export function StatusIndicator({ status: state }: StepStatusIndicatorProps) {
  const theme = useMantineTheme()
  switch (state) {
    case StepStatus.COMPLETED:
      return <IconCircleCheck color={theme.colors.green[5]} size={24} />
    case StepStatus.FAILED:
      return <IconCircleX color={theme.colors.red[5]} size={24} />
    case StepStatus.INCOMPLETE:
      return null
    case StepStatus.LOCKED:
      return <IconLock color={theme.colors.gray[4]} size={24} />
  }
}
