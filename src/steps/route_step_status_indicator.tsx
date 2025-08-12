import { StatusIndicator } from "../common/status_indicator"
import { useProgressForRouteStep } from "../state/step_status_hooks"
import type { RouteId } from "../types/route"

export interface RouteStepStatusIndicator {
  routeId: RouteId
}

export function RouteStepStatusIndicator({ routeId }: RouteStepStatusIndicator) {
  const stepStatus = useProgressForRouteStep(routeId)
  return <StatusIndicator status={stepStatus} />
}
