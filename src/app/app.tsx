import { Step } from "../steps/step"
import { Container, Group, MantineProvider, Stack } from "@mantine/core"
import { useAllStepsForCurrentVersion } from "../state/current_version"
import { ExportButton } from "./export_button"
import { useTheme } from "./theme"
import { ResetButton } from "./reset_button"

export function App() {
  const steps = useAllStepsForCurrentVersion()
  const theme = useTheme()

  const stepComponents = steps.map((step) => {
    return <Step stepId={step.id} key={step.id} />
  })

  return (
    <MantineProvider theme={theme}>
      <Container size="sm">
        <Stack gap="sm" p="sm">
          <Group justify="end">
            <ResetButton />
            <ExportButton />
          </Group>
          {stepComponents}
        </Stack>
      </Container>
    </MantineProvider>
  )
}
