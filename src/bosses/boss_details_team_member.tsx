import { Group, Stack, Text } from "@mantine/core"
import type { BossPokemon } from "../types/boss"
import { usePokemon } from "../app/hooks"
import { TypeDisplay } from "../common/type_display"
import { LevelDisplay } from "../common/level_display"
import { AbilityDisplay } from "../common/ability_display"
import { MoveTable } from "../moves/move_table"

export interface BossDetailsTeamMemberProps {
  bossPokemon: BossPokemon
}

export function BossDetailsTeamMember({ bossPokemon }: BossDetailsTeamMemberProps) {
  const pokemon = usePokemon(bossPokemon.pokemon)

  const pokemonDisplay = (
    <Stack gap={0}>
      <Text fw="bold" size="lg">
        {pokemon.name}
      </Text>
    </Stack>
  )

  return (
    <Stack gap="xs" mb="lg">
      <Group gap="xs" align="center" px="xs">
        <Group gap="xs" align="baseline">
          <LevelDisplay level={bossPokemon.level} short />
          {pokemonDisplay}
        </Group>
        <TypeDisplay type1={pokemon.type1} type2={pokemon.type2 ?? undefined} />
      </Group>
      <AbilityDisplay abilityId={bossPokemon.ability} />
      <MoveTable moveIds={bossPokemon.moves} />
    </Stack>
  )
}
