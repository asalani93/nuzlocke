import { Text } from "@mantine/core"

import { useLocation } from "../state/game_data_hooks"
import type { LocationId } from "../types/location"

export interface LocationNameProps {
  className?: string
  locationId: LocationId
  span?: boolean
}

export function LocationName({ className, locationId, span }: LocationNameProps) {
  const location = useLocation(locationId)!
  return (
    <Text className={className} span={span}>
      {location.name}
    </Text>
  )
}
