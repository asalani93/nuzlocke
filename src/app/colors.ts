import { DamageTypes, type DamageType } from "../types/move"
import { PokemonTypes, type PokemonType } from "../types/pokemon_type"

export const damageTypeColors: Record<DamageType, string> = {
  [DamageTypes.PHYSICAL]: "#EB5628",
  [DamageTypes.SPECIAL]: "#375AB2",
  [DamageTypes.STATUS]: "#828282",
}

export const typeColors: Record<PokemonType, string> = {
  [PokemonTypes.NORMAL]: "#9FA19F",
  [PokemonTypes.FIRE]: "#E62829",
  [PokemonTypes.FIGHTING]: "#FF8000",
  [PokemonTypes.WATER]: "#2980EF",
  [PokemonTypes.FLYING]: "#81B9EF",
  [PokemonTypes.GRASS]: "#3FA129",
  [PokemonTypes.POISON]: "#9141CB",
  [PokemonTypes.ELECTRIC]: "#FAC000",
  [PokemonTypes.GROUND]: "#915121",
  [PokemonTypes.PSYCHIC]: "#EF4179",
  [PokemonTypes.ROCK]: "#AFA981",
  [PokemonTypes.ICE]: "#3DCEF3",
  [PokemonTypes.BUG]: "#91A119",
  [PokemonTypes.DRAGON]: "#5060E1",
  [PokemonTypes.GHOST]: "#704170",
  [PokemonTypes.DARK]: "#624D4E",
  [PokemonTypes.STEEL]: "#60A1B8",
  [PokemonTypes.FAIRY]: "#EF70EF",
}
