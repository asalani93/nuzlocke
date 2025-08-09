import { Group, Text } from "@mantine/core"
import { useMove } from "../app/hooks"
import type { MoveId } from "../types/move"
import { DamageTypeBadge } from "./damage_type_badge"
import { TypeBadge } from "./type_badge"

export interface MoveDisplayProps {
  moveId: MoveId
}

export function MoveDisplay({ moveId }: MoveDisplayProps) {
  const move = useMove(moveId)

  return (
    <Group>
      <Text size="sm">{move.name}</Text>
      <Group gap="xs">
        <TypeBadge type={move.type} />
        <DamageTypeBadge type={move.damageType} />
      </Group>
    </Group>
  )
}
