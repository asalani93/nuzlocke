import z from "zod"

import scarletVioletGameData from "../data/scarlet_violet.json"
import { ability, abilityId } from "../types/ability"
import { boss, bossId } from "../types/boss"
import { evolution, evolutionId } from "../types/evolution"
import { location, locationId } from "../types/location"
import { move, moveId } from "../types/move"
import { pokemon, pokemonId } from "../types/pokemon"
import { route, routeId } from "../types/route"
import { step, stepId } from "../types/step"
import { version, versionId } from "../types/version"

function arrayToRecord<TId extends string, TData extends { id: TId }>(
  data: TData[]
): Record<TId, TData | undefined> {
  return Object.fromEntries(data.map((element) => [element.id, element])) as Record<
    TId,
    TData | undefined
  >
}

export const serializedGameData = z.object({
  abilities: z.array(ability),
  bosses: z.array(boss),
  defaultVersion: versionId,
  evolutions: z.array(evolution),
  locations: z.array(location),
  moves: z.array(move),
  pokemon: z.array(pokemon),
  routes: z.array(route),
  steps: z.array(step),
  versions: z.array(version),
})
export type SerializedGameData = z.infer<typeof serializedGameData>

export const deserializedGameData = z.object({
  abilities: z.record(abilityId, ability.optional()),
  bosses: z.record(bossId, boss.optional()),
  defaultVersion: versionId,
  evolutions: z.record(evolutionId, evolution.optional()),
  locations: z.record(locationId, location.optional()),
  moves: z.record(moveId, move.optional()),
  pokemon: z.record(pokemonId, pokemon.optional()),
  routes: z.record(routeId, route.optional()),
  steps: z.record(stepId, step.optional()),
  versions: z.record(versionId, version.optional()),
})
export type DeserializedGameData = z.infer<typeof deserializedGameData>

export const gameData = serializedGameData.transform(
  (gameData): DeserializedGameData => ({
    abilities: arrayToRecord(gameData.abilities),
    bosses: arrayToRecord(gameData.bosses),
    defaultVersion: gameData.defaultVersion,
    evolutions: arrayToRecord(gameData.evolutions),
    locations: arrayToRecord(gameData.locations),
    moves: arrayToRecord(gameData.moves),
    pokemon: arrayToRecord(gameData.pokemon),
    routes: arrayToRecord(gameData.routes),
    steps: arrayToRecord(gameData.steps),
    versions: arrayToRecord(gameData.versions),
  })
)
export type GameData = z.infer<typeof gameData>

export function loadGameData() {
  const loadedGameData = gameData.parse(scarletVioletGameData)

  const stepOrder = Object.values(loadedGameData.steps).filter(
    <T>(step: T): step is Exclude<T, undefined> => step != null
  )
  stepOrder.sort((l, r) => l.index - r.index)

  return {
    gameData: loadedGameData,
    stepOrder,
  } as const
}
