import z from "zod"

import { pokemonId } from "./pokemon"
import { routeId } from "./route"

export const conditionType = z.enum(["ENCOUNTER"])
export type ConditionType = z.infer<typeof conditionType>
export const ConditionType = conditionType.enum

export const encounterCondition = z.object({
  type: z.literal(ConditionType.ENCOUNTER),
  routeId: routeId,
  pokemonId: pokemonId,
})
export type EncounterCondition = z.infer<typeof encounterCondition>

export const condition = z.discriminatedUnion("type", [encounterCondition])
export type Condition = z.infer<typeof condition>
