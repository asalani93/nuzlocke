import z from "zod"
import { pokemonType } from "./pokemon_type"

export const moveId = z.string().brand("move")
export type MoveId = z.infer<typeof moveId>

export const damageType = z.enum(["PHYSICAL", "SPECIAL", "STATUS"])
export type DamageType = z.infer<typeof damageType>
export const DamageTypes = damageType.enum

export const physicalMove = z.object({
  id: moveId,
  name: z.string(),
  power: z.union([z.number(), z.null()]),
  type: pokemonType,
  damageType: z.literal(DamageTypes.PHYSICAL),
  effect: z.string(),
})
export type PhysicalMove = z.infer<typeof physicalMove>

export const specialMove = z.object({
  id: moveId,
  name: z.string(),
  power: z.union([z.number(), z.null()]),
  type: pokemonType,
  damageType: z.literal(DamageTypes.SPECIAL),
  effect: z.string(),
})
export type SpecialMove = z.infer<typeof specialMove>

export const statusMove = z.object({
  id: moveId,
  name: z.string(),
  power: z.null(),
  type: pokemonType,
  damageType: z.literal(DamageTypes.STATUS),
  effect: z.string(),
})
export type StatusMove = z.infer<typeof statusMove>

export const move = z.discriminatedUnion("damageType", [physicalMove, specialMove, statusMove])
export type Move = z.infer<typeof move>
