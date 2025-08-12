import z from "zod"
import { locationId } from "./location"
import { pokemonId } from "./pokemon"
import { versionId } from "./version"

export const routeId = z.string().brand("route")
export type RouteId = z.infer<typeof routeId>

export const routeEncounter = z.object({
  pokemonId: pokemonId,
  weight: z.number(),
  versionIds: z.array(versionId),
  minLevel: z.number(),
  maxLevel: z.number(),
})
export type RouteEncounter = z.infer<typeof routeEncounter>

export const route = z.object({
  id: routeId,
  locationId: locationId,
  encounters: z.array(routeEncounter),
})
export type Route = z.infer<typeof route>
