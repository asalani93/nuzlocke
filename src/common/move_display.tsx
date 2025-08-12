import { Group, Text } from "@mantine/core"

import { useMove } from "../state/game_data_hooks"
import type { MoveId } from "../types/move"

import { DamageTypeBadge } from "./damage_type_badge"
import { TypeBadge } from "./type_badge"

export interface MoveDisplayProps {
  moveId: MoveId
}

export function MoveDisplay({ moveId }: MoveDisplayProps) {
  const move = useMove(moveId)!

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
