import { Stack } from "@mantine/core"
import type { RouteId } from "../types/route"
import { RouteDetailsActions } from "./route_details_actions"
import { RouteDetailsEncounter } from "./route_details_encounter"

export interface RouteDetailsProps {
  routeId: RouteId
}

export function RouteDetails({ routeId }: RouteDetailsProps) {
  return (
    <Stack gap="md">
      <RouteDetailsEncounter routeId={routeId} />
      <RouteDetailsActions routeId={routeId} />
    </Stack>
  )
}
