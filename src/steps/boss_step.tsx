import { Card, Group, Stack, Text } from "@mantine/core"
import { IconBoom } from "@tabler/icons-react"
import { useMemo } from "react"

import { BossDetails } from "../bosses/boss_details"
import { BossName } from "../bosses/boss_name"
import { useBoss, useBossStepVariantId } from "../state/game_data_hooks"
import { type BossStep } from "../types/step"

import { BossStepStatusIndicator } from "./boss_step_status_indicator"

export interface BossStepProps {
  bossStep: BossStep
}

export function BossStep({ bossStep }: BossStepProps) {
  const bossId = useBossStepVariantId(bossStep.id)
  const boss = useBoss(bossId)!

  const maxLevel = useMemo(
    () => Math.max(...boss.team.map((teamMember) => teamMember.level)),
    [boss]
  )

  const levelCap = bossStep.enforceCap ? (
    <Text c="gray.4" fw="bold" inherit span>
      Level Cap: {maxLevel}
    </Text>
  ) : null

  return (
    <Card padding="md" radius="md" shadow="sm" withBorder>
      <Card.Section inheritPadding withBorder>
        <Group justify="space-between" py="md">
          <Group gap="sm">
            <IconBoom size={24} />
            <BossName bossId={boss.id} span />
          </Group>
          <Group gap="sm">
            {levelCap}
            <BossStepStatusIndicator bossId={bossStep.bossId} />
          </Group>
        </Group>
      </Card.Section>
      <Card.Section inheritPadding withBorder>
        <Stack py="md">
          <BossDetails bossId={boss.id} />
        </Stack>
      </Card.Section>
    </Card>
  )
}
