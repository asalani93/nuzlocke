import { Stack } from "@mantine/core"
import { useBoss } from "../app/hooks"
import type { BossId } from "../types/boss"
import { BossDetailsTeamMember } from "./boss_details_team_member"

export interface BossDetailsTeamProps {
  bossId: BossId
}

export function BossDetailsTeam({ bossId }: BossDetailsTeamProps) {
  const boss = useBoss(bossId)

  const team = boss.team.map((bossPokemon, index) => {
    return <BossDetailsTeamMember key={index} bossPokemon={bossPokemon} />
  })

  return <Stack>{team}</Stack>
}
