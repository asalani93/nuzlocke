import z from "zod"

export const pokemonType = z.enum([
  "NORMAL",
  "FIRE",
  "FIGHTING",
  "WATER",
  "FLYING",
  "GRASS",
  "POISON",
  "ELECTRIC",
  "GROUND",
  "PSYCHIC",
  "ROCK",
  "ICE",
  "BUG",
  "DRAGON",
  "GHOST",
  "DARK",
  "STEEL",
  "FAIRY",
])
export type PokemonType = z.infer<typeof pokemonType>
export const PokemonTypes = pokemonType.enum
