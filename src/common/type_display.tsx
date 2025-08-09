import { Group, Text } from "@mantine/core"
import type { PokemonType } from "../types/pokemon"
import { TypeBadge } from "./type_badge"

export interface TypeDisplayProps {
  type1: PokemonType
  type2?: PokemonType
}

export function TypeDisplay({ type1, type2 }: TypeDisplayProps) {
  return (
    <Group gap={4}>
      <TypeBadge type={type1} />
      {type2 != null ? (
        <>
          <Text size="sm">/</Text>
          <TypeBadge type={type2} />
        </>
      ) : null}
    </Group>
  )
}
