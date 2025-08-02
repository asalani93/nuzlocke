import {
  createTable,
  createId,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type LocationId = Id<"location">;

export type LocationIdInstance<T extends string> = IdInstance<LocationId, T>;

export type LocationTable<T extends string> = Table<T, () => _Location<T>>;

export const locationId = createId<LocationId>();

export function locationTable<T extends string>(
  table: LocationTable<T>
): LocationTable<T> {
  return createTable<T, LocationTable<T>>(table);
}

interface _Location<T extends string> {
  id: LocationIdInstance<T>;
  name: string;
}

export type Location = _Location<string>;

export function location<T extends string>(
  id: T,
  { name }: Omit<Location, "id">
): _Location<T> {
  return {
    id: locationId(id),
    name,
  };
}
