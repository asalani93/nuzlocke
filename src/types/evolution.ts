import z from "zod"

export const evolutionId = z.string().brand("evolution")
export type EvolutionId = z.infer<typeof evolutionId>

export const evolution = z.object({
  id: evolutionId,
})
export type Evolution = z.infer<typeof evolution>
