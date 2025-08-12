import { Stack } from "@mantine/core"

import type { BossId } from "../types/boss"

import { BossDetailsActions } from "./boss_details_actions"
import { BossDetailsTeam } from "./boss_details_team"

export interface BossDetailsProps {
  bossId: BossId
}

export function BossDetails({ bossId }: BossDetailsProps) {
  return (
    <Stack gap="md">
      <BossDetailsTeam bossId={bossId} />
      <BossDetailsActions bossId={bossId} />
    </Stack>
  )
}
