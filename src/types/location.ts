import z from "zod"

export const locationId = z.string().brand("location")
export type LocationId = z.infer<typeof locationId>

export const location = z.object({
  id: locationId,
  name: z.string(),
})
export type Location = z.infer<typeof location>
