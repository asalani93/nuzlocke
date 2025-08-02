import type { PokemonType } from "./pokemon";
import {
  createId,
  createTable,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type MoveId = Id<"move">;

export type MoveIdInstance<T extends string> = IdInstance<MoveId, T>;

export type MoveTable<T extends string> = Table<T, () => _Move<T>>;

export const moveId = createId<MoveId>();

export function moveTable<T extends string>(table: MoveTable<T>): MoveTable<T> {
  return createTable<T, MoveTable<T>>(table);
}

interface _PhysicalMove<T extends string> {
  id: MoveIdInstance<T>;
  name: string;
  power: number;
  type: PokemonType;
  damageType: "physical";
  effect: string;
}

export type PhysicalMove = _PhysicalMove<string>;

interface _SpecialMove<T extends string> {
  id: MoveIdInstance<T>;
  name: string;
  power: number;
  type: PokemonType;
  damageType: "special";
  effect: string;
}

export type SpecialMove = _SpecialMove<string>;

interface _StatusMove<T extends string> {
  id: MoveIdInstance<T>;
  name: string;
  power: null;
  type: PokemonType;
  damageType: "status";
  effect: string;
}

export type StatusMove = _StatusMove<string>;

type _Move<T extends string> =
  | _PhysicalMove<T>
  | _SpecialMove<T>
  | _StatusMove<T>;

export type Move = PhysicalMove | SpecialMove | StatusMove;

export type DamageType = "physical" | "special" | "status";

export function physicalMove<T extends string>(
  id: T,
  { name, power, type, damageType, effect }: Omit<PhysicalMove, "id">
): _PhysicalMove<T> {
  return {
    id: moveId(id),
    name: name,
    power: power,
    type: type,
    damageType: damageType,
    effect: effect,
  };
}

export function specialMove<T extends string>(
  id: T,
  { name, power, type, damageType, effect }: Omit<SpecialMove, "id">
): _SpecialMove<T> {
  return {
    id: moveId(id),
    name: name,
    power: power,
    type: type,
    damageType: damageType,
    effect: effect,
  };
}

export function statusMove<T extends string>(
  id: T,
  { name, type, damageType, effect }: Omit<StatusMove, "id" | "power">
): _StatusMove<T> {
  return {
    id: moveId(id),
    name: name,
    power: null,
    type: type,
    damageType: damageType,
    effect: effect,
  };
}

export function move<T extends string>(
  id: T,
  move: Omit<Move, "id">
): _Move<T> {
  switch (move.damageType) {
    case "physical":
      return physicalMove(id, move as Omit<PhysicalMove, "id">);
    case "special":
      return specialMove(id, move as Omit<SpecialMove, "id">);
    case "status":
      return statusMove(id, move as Omit<StatusMove, "id">);
  }
}
