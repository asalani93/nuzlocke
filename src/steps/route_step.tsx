import { Card, Group, Stack } from "@mantine/core"
import { useRoute } from "../app/hooks"
import { LocationName } from "../locations/location_name"
import { type RouteStep } from "../types/step"
import { IconCompass } from "@tabler/icons-react"
import { RouteDetails } from "../routes/route_details"
import { RouteStepStatusIndicator } from "./route_step_status_indicator"

export interface RouteStepProps {
  routeStep: RouteStep
}

export function RouteStep({ routeStep }: RouteStepProps) {
  const route = useRoute(routeStep.route)

  return (
    <Card padding="md" radius="md" shadow="sm" withBorder>
      <Card.Section inheritPadding withBorder>
        <Group justify="space-between" py="md">
          <Group gap="sm">
            <IconCompass size={24} />
            <LocationName className="font-bold" locationId={route.location} />
          </Group>
          <RouteStepStatusIndicator routeId={routeStep.route} />
        </Group>
      </Card.Section>
      <Card.Section inheritPadding withBorder>
        <Stack py="md">
          <RouteDetails routeId={route.id} />
        </Stack>
      </Card.Section>
    </Card>
  )
}
