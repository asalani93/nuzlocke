import { useLocation } from "../app/hooks";
import { Text } from "../common/text";
import type { LocationId } from "../types/location";

export interface LocationNameProps {
  className?: string;
  inline?: boolean;
  locationId: LocationId;
}

export function LocationName({
  className,
  inline,
  locationId,
}: LocationNameProps) {
  const location = useLocation(locationId);
  return (
    <Text className={className} inline={inline}>
      {location.name}
    </Text>
  );
}
