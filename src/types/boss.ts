import type { AbilityId } from "./ability";
import type { LocationId } from "./location";
import type { MoveId } from "./move";
import type { PokemonId } from "./pokemon";
import {
  createTable,
  createId,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type BossId = Id<"boss">;

export type BossIdInstance<T extends string> = IdInstance<BossId, T>;

export type BossTable<T extends string> = Table<T, () => _Boss<T>>;

export const bossId = createId<BossId>();

export function createBossTable<T extends string>(
  table: BossTable<T>
): BossTable<T> {
  return createTable<T, BossTable<T>>(table);
}

interface _Boss<T extends string> {
  id: BossIdInstance<T>;
  name: string;
  type: BossType;
  location: LocationId;
  team: BossPokemon[];
}

export type Boss = _Boss<string>;

export type BossType = "rival" | "gym" | "titan" | "team_star" | "elite_four";

export interface BossPokemon {
  pokemon: PokemonId;
  level: number;
  ability: AbilityId;
  moves: MoveId[];
}

export function boss<T extends string>(
  id: T,
  { name, type, location, team }: Omit<Boss, "id">
): _Boss<T> {
  return {
    id: bossId(id),
    name,
    type,
    location,
    team,
  };
}
