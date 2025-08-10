import { Stack, Text } from "@mantine/core"
import { useAbility } from "../app/hooks"
import type { AbilityId } from "../types/ability"

export interface AbilityDisplayProps {
  abilityId: AbilityId
}

export function AbilityDisplay({ abilityId }: AbilityDisplayProps) {
  const ability = useAbility(abilityId)

  return (
    <Stack gap={0} px="xs">
      <Text>{ability.name}</Text>
      <Text size="xs">{ability.effect}</Text>
    </Stack>
  )
}
