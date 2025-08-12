import type { WritableAtom } from "jotai"
import z from "zod"

import { pokemonId, type PokemonId } from "../types/pokemon"
import { routeId, type RouteId } from "../types/route"

import { versionedState } from "./state_utils"

export const encounterStatus = z.enum(["HIDDEN", "UNCAUGHT", "CAUGHT", "DEFEATED"])
export type EncounterStatus = z.infer<typeof encounterStatus>
export const EncounterStatuses = encounterStatus.enum

export const encounter = z.object({
  routeId: routeId,
  pokemonId: pokemonId,
  status: encounterStatus,
})
export type Encounter = z.infer<typeof encounter>

export const encounters = z.record(routeId, encounter.optional())
export type Encounters = z.infer<typeof encounters>

export const serializedEncounters = versionedState(1, encounters)
export type SerializedEncounters = z.infer<typeof serializedEncounters>

export type EncountersAtom = WritableAtom<Encounters, [EncountersReducerAction], void>

export type EncountersReducerAction =
  | { type: "RESET_ALL" }
  | { type: "REROLL"; routeId: RouteId }
  | { type: "OVERRIDE"; routeId: RouteId; pokemonId: PokemonId }
  | { type: "REVEAL"; routeId: RouteId }
  | { type: "HIDE"; routeId: RouteId }
  | { type: "CATCH"; routeId: RouteId }
  | { type: "DEFEAT"; routeId: RouteId }
