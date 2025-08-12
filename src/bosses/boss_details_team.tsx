import { Stack } from "@mantine/core"

import type { BossId } from "../types/boss"

import { BossDetailsTeamMember } from "./boss_details_team_member"
import { useBoss } from "../state/game_data_hooks"

export interface BossDetailsTeamProps {
  bossId: BossId
}

export function BossDetailsTeam({ bossId }: BossDetailsTeamProps) {
  const boss = useBoss(bossId)!

  const team = boss.team.map((bossPokemon, index) => {
    return <BossDetailsTeamMember key={index} bossPokemon={bossPokemon} />
  })

  return <Stack>{team}</Stack>
}
