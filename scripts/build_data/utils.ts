import type { AbilityId, Ability } from "@/src/types/ability"
import type { Boss, BossId } from "@/src/types/boss"
import type { Evolution, EvolutionId } from "@/src/types/evolution"
import type { Location, LocationId } from "@/src/types/location"
import {
  DamageTypes,
  type Move,
  type MoveId,
  type PhysicalMove,
  type SpecialMove,
  type StatusMove,
} from "@/src/types/move"
import type { Pokemon, PokemonId } from "@/src/types/pokemon"
import type { Route, RouteId } from "@/src/types/route"
import {
  StepTypes,
  type BossStep,
  type BossStepId,
  type RouteStep,
  type RouteStepId,
  type Step,
  type StepId,
} from "@/src/types/step"
import type { Version, VersionId } from "@/src/types/version"

export function createId<T extends string>(id: string): T {
  return id as T
}

export type Table<T extends string, T1 extends () => unknown> = {
  [K in T]: ReturnType<T1>
}
export function createTable<T extends string, T1 extends Table<T, () => unknown>>(table: T1): T1 {
  return table
}

export type IdBrand<T, U extends string> = T & { __idBrand: U }
export function withIdBrand<T, U extends string>(t: T): IdBrand<T, U> {
  return t as IdBrand<T, U>
}

// Entity builders

export const createAbilityId = createId<AbilityId>
export function createAbility<T extends string>(
  id: T,
  data: Omit<Ability, "id">
): IdBrand<Ability, T> {
  return withIdBrand({ id: createAbilityId(id), ...data })
}

export const createBossId = createId<BossId>
export function createBoss<T extends string>(id: T, data: Omit<Boss, "id">): IdBrand<Boss, T> {
  return withIdBrand({ id: createBossId(id), ...data })
}

export const createEvolutionId = createId<EvolutionId>
export function createEvolution<T extends string>(
  id: T,
  data: Omit<Evolution, "id">
): IdBrand<Evolution, T> {
  return withIdBrand({ id: createEvolutionId(id), ...data })
}

export const createLocationId = createId<LocationId>
export function createLocation<T extends string>(
  id: T,
  data: Omit<Location, "id">
): IdBrand<Location, T> {
  return withIdBrand({ id: createLocationId(id), ...data })
}

export const createMoveId = createId<MoveId>
export function createPhysicalMove<T extends string>(
  id: T,
  data: Omit<PhysicalMove, "id" | "damageType">
): IdBrand<PhysicalMove, T> {
  return withIdBrand({ id: createMoveId(id), damageType: DamageTypes.PHYSICAL, ...data })
}
export function createSpecialMove<T extends string>(
  id: T,
  data: Omit<SpecialMove, "id" | "damageType">
): IdBrand<SpecialMove, T> {
  return withIdBrand({ id: createMoveId(id), damageType: DamageTypes.SPECIAL, ...data })
}
export function createStatusMove<T extends string>(
  id: T,
  data: Omit<StatusMove, "id" | "damageType">
): IdBrand<StatusMove, T> {
  return withIdBrand({ id: createMoveId(id), damageType: DamageTypes.STATUS, ...data })
}
// export function createMove<T extends string>(id: T, data: Omit<Move, "id">): IdBrand<Move, T> {
//   switch (data.damageType) {
//     case DamageTypes.PHYSICAL:
//       return createPhysicalMove(id, data as Omit<PhysicalMove, "id">)
//     case DamageTypes.SPECIAL:
//       return createSpecialMove(id, data as Omit<SpecialMove, "id">)
//     case DamageTypes.STATUS:
//       return createStatusMove(id, data as Omit<StatusMove, "id">)
//   }
// }

export const createPokemonId = createId<PokemonId>
export function createPokemon<T extends string>(
  id: T,
  data: Omit<Pokemon, "id">
): IdBrand<Pokemon, T> {
  return withIdBrand({ id: createPokemonId(id), ...data })
}

export const createRouteId = createId<RouteId>
export function createRoute<T extends string>(id: T, data: Omit<Route, "id">): IdBrand<Route, T> {
  return withIdBrand({ id: createRouteId(id), ...data })
}

export const createStepId = createId<StepId>
export const createBossStepId = createId<BossStepId>
export const createRouteStepId = createId<RouteStepId>
export function createBossStep<T extends string>(
  id: T,
  data: Omit<BossStep, "id" | "type">
): IdBrand<BossStep, T> {
  return withIdBrand({ id: createBossStepId(id), type: StepTypes.BOSS, ...data })
}
export function createRouteStep<T extends string>(
  id: T,
  data: Omit<RouteStep, "id" | "type">
): IdBrand<RouteStep, T> {
  return withIdBrand({ id: createRouteStepId(id), type: StepTypes.ROUTE, ...data })
}
export function createStep<T extends string>(
  id: T,
  { type, ...data }: Omit<Step, "id">
): IdBrand<Step, T> {
  switch (type) {
    case StepTypes.BOSS:
      return createBossStep(id, data as Omit<BossStep, "id" | "type">)
    case StepTypes.ROUTE:
      return createRouteStep(id, data as Omit<RouteStep, "id" | "type">)
  }
}

export const createVersionId = createId<VersionId>
export function createVersion<T extends string>(
  id: T,
  data: Omit<Version, "id">
): IdBrand<Version, T> {
  return withIdBrand({ id: createVersionId(id), ...data })
}

// Table builders

export type AbilityTable<T extends string> = Table<T, () => IdBrand<Ability, T>>
export const createAbilityTable = <T extends string>(table: AbilityTable<T>) =>
  createTable<T, AbilityTable<T>>(table)

export type BossTable<T extends string> = Table<T, () => IdBrand<Boss, T>>
export const createBossTable = <T extends string>(table: BossTable<T>) =>
  createTable<T, BossTable<T>>(table)

export type EvolutionTable<T extends string> = Table<T, () => IdBrand<Evolution, T>>
export const createEvolutionTable = <T extends string>(table: EvolutionTable<T>) =>
  createTable<T, EvolutionTable<T>>(table)

export type LocationTable<T extends string> = Table<T, () => IdBrand<Location, T>>
export const createLocationTable = <T extends string>(table: LocationTable<T>) =>
  createTable<T, LocationTable<T>>(table)

export type MoveTable<T extends string> = Table<T, () => IdBrand<Move, T>>
export const createMoveTable = <T extends string>(table: MoveTable<T>) =>
  createTable<T, MoveTable<T>>(table)

export type PokemonTable<T extends string> = Table<T, () => IdBrand<Pokemon, T>>
export const createPokemonTable = <T extends string>(table: PokemonTable<T>) =>
  createTable<T, PokemonTable<T>>(table)

export type RouteTable<T extends string> = Table<T, () => IdBrand<Route, T>>
export const createRouteTable = <T extends string>(table: RouteTable<T>) =>
  createTable<T, RouteTable<T>>(table)

export type StepTable<T extends string> = Table<T, () => IdBrand<Step, T>>
export const createStepTable = <T extends string>(table: StepTable<T>) =>
  createTable<T, StepTable<T>>(table)

export type VersionTable<T extends string> = Table<T, () => IdBrand<Version, T>>
export const createVersionTable = <T extends string>(table: VersionTable<T>) =>
  createTable<T, VersionTable<T>>(table)
