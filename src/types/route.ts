import type { LocationId } from "./location";
import type { PokemonId } from "./pokemon";
import type { VersionId } from "./version";
import {
  createId,
  createTable,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type RouteId = Id<"route">;

type RouteIdInstance<T extends string> = IdInstance<RouteId, T>;

export type RouteTable<T extends string> = Table<T, () => _Route<T>>;

export const routeId = createId<RouteId>();

export function routeTable<T extends string>(
  table: RouteTable<T>
): RouteTable<T> {
  return createTable<T, RouteTable<T>>(table);
}

interface _Route<T extends string> {
  id: RouteIdInstance<T>;
  location: LocationId;
  encounters: RouteEncounter[];
}

export type Route = _Route<string>;

export interface RouteEncounter {
  pokemon: PokemonId;
  weight: number;
  versions: VersionId[];
  minLevel: number;
  maxLevel: number;
}

export function route<T extends string>(
  id: T,
  { location, encounters }: Omit<Route, "id">
): _Route<T> {
  return {
    id: routeId(id),
    location,
    encounters,
  };
}
