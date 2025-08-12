import { Table, Tooltip } from "@mantine/core"

import { DamageTypeBadge } from "../common/damage_type_badge"
import { TypeBadge } from "../common/type_badge"
import { useMove } from "../state/game_data_hooks"
import type { MoveId } from "../types/move"

export interface MoveTableRowProps {
  moveId: MoveId
}

export function MoveTableRow({ moveId }: MoveTableRowProps) {
  const move = useMove(moveId)!

  const moveEffect = move.effect === "null" ? "No additional effect." : move.effect

  return (
    <Tooltip label={moveEffect} position="bottom" withArrow>
      <Table.Tr>
        <Table.Td>{move.name}</Table.Td>
        <Table.Td>
          <TypeBadge type={move.type} />
        </Table.Td>
        <Table.Td>
          <DamageTypeBadge type={move.damageType} />
        </Table.Td>
        <Table.Td>{move.power ?? "\u2014"}</Table.Td>
      </Table.Tr>
    </Tooltip>
  )
}
