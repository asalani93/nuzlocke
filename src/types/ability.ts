import z from "zod"

export const abilityId = z.string().brand("ability")
export type AbilityId = z.infer<typeof abilityId>

export const ability = z.object({
  id: abilityId,
  name: z.string(),
  effect: z.string(),
})
export type Ability = z.infer<typeof ability>
