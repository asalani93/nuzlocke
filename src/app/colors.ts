import type { DamageType } from "../types/move"
import type { PokemonType } from "../types/pokemon"

export const damageTypeColors: Record<DamageType, string> = {
  physical: "#EB5628",
  special: "#375AB2",
  status: "#828282",
}

export const typeColors: Record<PokemonType, string> = {
  normal: "#9FA19F",
  fire: "#E62829",
  fighting: "#FF8000",
  water: "#2980EF",
  flying: "#81B9EF",
  grass: "#3FA129",
  poison: "#9141CB",
  electric: "#FAC000",
  ground: "#915121",
  psychic: "#EF4179",
  rock: "#AFA981",
  ice: "#3DCEF3",
  bug: "#91A119",
  dragon: "#5060E1",
  ghost: "#704170",
  dark: "#624D4E",
  steel: "#60A1B8",
  fairy: "#EF70EF",
}
