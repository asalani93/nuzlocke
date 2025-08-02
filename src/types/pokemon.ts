import type { EvolutionId } from "./evolution";
import {
  createId,
  createTable,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type PokemonId = Id<"pokemon">;

type PokemonIdInstance<T extends string> = IdInstance<PokemonId, T>;

export type PokemonTable<T extends string> = Table<T, () => _Pokemon<T>>;

export const pokemonId = createId<PokemonId>();

export function pokemonTable<T extends string>(
  table: PokemonTable<T>
): PokemonTable<T> {
  return createTable<T, PokemonTable<T>>(table);
}

interface _Pokemon<T extends string> {
  id: PokemonIdInstance<T>;
  name: string;
  line: EvolutionId;
  type1: PokemonType;
  type2: PokemonType | null;
  baseStats: PokemonBaseStats;
}

export type Pokemon = _Pokemon<string>;

export interface PokemonBaseStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export type PokemonType =
  | "normal"
  | "fire"
  | "fighting"
  | "water"
  | "flying"
  | "grass"
  | "poison"
  | "electric"
  | "ground"
  | "psychic"
  | "rock"
  | "ice"
  | "bug"
  | "dragon"
  | "ghost"
  | "dark"
  | "steel"
  | "fairy";

export function pokemon<T extends string>(
  id: T,
  {
    name,
    type1,
    type2,
    baseStats,
    line,
  }: Omit<Pokemon, "id" | "type2"> & Partial<Pick<Pokemon, "type2">>
): _Pokemon<T> {
  return {
    id: pokemonId(id),
    name,
    line,
    type1,
    type2: type2 ?? null,
    baseStats,
  };
}
