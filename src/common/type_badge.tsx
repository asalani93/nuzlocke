import { Text, type MantineStyleProps } from "@mantine/core"
import { typeColors } from "../app/colors"
import type { PokemonType } from "../types/pokemon"

const typeLabels: Record<PokemonType, string> = {
  normal: "Normal",
  fire: "Fire",
  fighting: "Fighting",
  water: "Water",
  flying: "Flying",
  grass: "Grass",
  poison: "Poison",
  electric: "Electric",
  ground: "Ground",
  psychic: "Psychic",
  rock: "Rock",
  ice: "Ice",
  bug: "Bug",
  dragon: "Dragon",
  ghost: "Ghost",
  dark: "Dark",
  steel: "Steel",
  fairy: "Fairy",
}

export interface TypeBadgePropsBase {
  type: PokemonType
}

export type TypeBadgeProps = TypeBadgePropsBase & MantineStyleProps

export function TypeBadge({ type, ...style }: TypeBadgeProps) {
  // return <Badge color={typeColors[type]}>{typeLabels[type]}</Badge>
  return (
    <Text c={typeColors[type]} fw="bold" inherit span {...style}>
      {typeLabels[type]}
    </Text>
  )
}
