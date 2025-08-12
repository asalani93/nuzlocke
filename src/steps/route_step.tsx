import { Card, Group, Stack } from "@mantine/core"
import { IconCompass } from "@tabler/icons-react"

import { LocationName } from "../locations/location_name"
import { RouteDetails } from "../routes/route_details"
import { useRoute } from "../state/game_data_hooks"
import { type RouteStep } from "../types/step"

import { RouteStepStatusIndicator } from "./route_step_status_indicator"

export interface RouteStepProps {
  routeStep: RouteStep
}

export function RouteStep({ routeStep }: RouteStepProps) {
  const route = useRoute(routeStep.routeId)!

  return (
    <Card padding="md" radius="md" shadow="sm" withBorder>
      <Card.Section inheritPadding withBorder>
        <Group justify="space-between" py="md">
          <Group gap="sm">
            <IconCompass size={24} />
            <LocationName className="font-bold" locationId={route.locationId} />
          </Group>
          <RouteStepStatusIndicator routeId={routeStep.routeId} />
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
