import { Stack } from "@mantine/core"

import { useBossTeam } from "../state/game_data_hooks"
import type { BossId } from "../types/boss"

import { BossDetailsTeamMember } from "./boss_details_team_member"

export interface BossDetailsTeamProps {
  bossId: BossId
}

export function BossDetailsTeam({ bossId }: BossDetailsTeamProps) {
  const bossTeam = useBossTeam(bossId)!

  const teamMembers = bossTeam.map((bossPokemon, index) => {
    return <BossDetailsTeamMember key={index} bossPokemon={bossPokemon} />
  })

  return <Stack>{teamMembers}</Stack>
}
