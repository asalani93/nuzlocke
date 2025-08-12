import { Text, type MantineStyleProps } from "@mantine/core"

import { damageTypeColors } from "../app/colors"
import { DamageTypes, type DamageType } from "../types/move"

const damageLabels: Record<DamageType, string> = {
  [DamageTypes.PHYSICAL]: "Physical",
  [DamageTypes.SPECIAL]: "Special",
  [DamageTypes.STATUS]: "Status",
}

export interface DamageTypeBadgePropsBase {
  type: DamageType
}

export type DamageTypeBadgeProps = DamageTypeBadgePropsBase & MantineStyleProps

export function DamageTypeBadge({ type, ...style }: DamageTypeBadgeProps) {
  return (
    <Text c={damageTypeColors[type]} fw="bold" inherit span {...style}>
      {damageLabels[type]}
    </Text>
  )
}
