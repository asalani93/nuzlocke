import { Table, type MantineStyleProps } from "@mantine/core"
import type { MoveId } from "../types/move"
import { MoveTableRow } from "./move_table_row"

export interface MoveTablePropsBase {
  moveIds: MoveId[]
}

export type MoveTableProps = MoveTablePropsBase & MantineStyleProps

export function MoveTable({ moveIds, ...styles }: MoveTableProps) {
  const rows = moveIds.map((moveId, idx) => <MoveTableRow key={idx} moveId={moveId} />)

  return (
    <Table {...styles}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Power</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
}
