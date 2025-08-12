import z from "zod"
import { abilityId } from "./ability"
import { locationId } from "./location"
import { moveId } from "./move"
import { pokemonId } from "./pokemon"

export const bossId = z.string().brand("boss")
export type BossId = z.infer<typeof bossId>

export const bossType = z.enum(["RIVAL", "GYM", "TITAN", "TEAM_STAR", "ELITE_FOUR"])
export type BossType = z.infer<typeof bossType>
export const BossTypes = bossType.enum

export const bossPokemon = z.object({
  pokemonId: pokemonId,
  level: z.number(),
  abilityId: abilityId,
  moveIds: z.array(moveId),
})
export type BossPokemon = z.infer<typeof bossPokemon>

export const boss = z.object({
  id: bossId,
  name: z.string(),
  type: bossType,
  locationId: locationId,
  team: z.array(bossPokemon),
})
export type Boss = z.infer<typeof boss>
