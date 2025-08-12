import z from "zod"
import { evolutionId } from "./evolution"
import { pokemonType } from "./pokemon_type"

export const pokemonId = z.string().brand("pokemon")
export type PokemonId = z.infer<typeof pokemonId>

export const pokemonBaseStats = z.object({
  hp: z.number(),
  attack: z.number(),
  defense: z.number(),
  specialAttack: z.number(),
  specialDefense: z.number(),
  speed: z.number(),
})
export type PokemonBaseStats = z.infer<typeof pokemonBaseStats>

export const pokemon = z.object({
  id: pokemonId,
  name: z.string(),
  evolutionId: evolutionId,
  type1: pokemonType,
  type2: pokemonType.optional(),
  baseStats: pokemonBaseStats,
})
export type Pokemon = z.infer<typeof pokemon>
