import { Card, CardHeader } from "@heroui/react";
import { useRoute } from "../app/hooks";
import { LocationName } from "../locations/location_name";
import { type RouteStep } from "../types/step";

export interface RouteStepProps {
  routeStep: RouteStep;
}

export function RouteStep({ routeStep }: RouteStepProps) {
  const route = useRoute(routeStep.route);
  return (
    <Card isBlurred>
      <CardHeader>
        <span className="font-bold">Route: </span>{" "}
        <LocationName inline locationId={route.location} />
      </CardHeader>
    </Card>
  );
}
