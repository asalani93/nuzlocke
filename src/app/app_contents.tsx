import { Container, Group, Stack } from "@mantine/core"

import { useOrderedStepsForCurrentVersion } from "../state/current_version_hooks"
import { Step } from "../steps/step"

import { ExportButton } from "./export_button"
import { ResetButton } from "./reset_button"

export function AppContents() {
  const stepOrder = useOrderedStepsForCurrentVersion()

  const stepComponents = stepOrder.map((step) => {
    return <Step stepId={step.id} key={step.id} />
  })

  return (
    <Container size="sm">
      <Stack gap="sm" p="sm">
        <Group justify="end">
          <ResetButton />
          <ExportButton />
        </Group>
        {stepComponents}
      </Stack>
    </Container>
  )
}
