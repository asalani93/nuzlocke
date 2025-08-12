import { Text, type MantineStyleProps } from "@mantine/core"

import { typeColors } from "../app/colors"
import { type PokemonType, PokemonTypes } from "../types/pokemon_type"

const typeLabels: Record<PokemonType, string> = {
  [PokemonTypes.NORMAL]: "Normal",
  [PokemonTypes.FIRE]: "Fire",
  [PokemonTypes.FIGHTING]: "Fighting",
  [PokemonTypes.WATER]: "Water",
  [PokemonTypes.FLYING]: "Flying",
  [PokemonTypes.GRASS]: "Grass",
  [PokemonTypes.POISON]: "Poison",
  [PokemonTypes.ELECTRIC]: "Electric",
  [PokemonTypes.GROUND]: "Ground",
  [PokemonTypes.PSYCHIC]: "Psychic",
  [PokemonTypes.ROCK]: "Rock",
  [PokemonTypes.ICE]: "Ice",
  [PokemonTypes.BUG]: "Bug",
  [PokemonTypes.DRAGON]: "Dragon",
  [PokemonTypes.GHOST]: "Ghost",
  [PokemonTypes.DARK]: "Dark",
  [PokemonTypes.STEEL]: "Steel",
  [PokemonTypes.FAIRY]: "Fairy",
}

export interface TypeBadgePropsBase {
  type: PokemonType
}

export type TypeBadgeProps = TypeBadgePropsBase & MantineStyleProps

export function TypeBadge({ type, ...style }: TypeBadgeProps) {
  return (
    <Text c={typeColors[type]} fw="bold" inherit span {...style}>
      {typeLabels[type]}
    </Text>
  )
}
