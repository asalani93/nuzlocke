import {
  createTable,
  createId,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type VersionId = Id<"version">;

export type VersionIdInstance<T extends string> = IdInstance<VersionId, T>;

export type VersionTable<T extends string> = Table<T, () => _Version<T>>;

export const versionId = createId<VersionId>();

export function createVersionTable<T extends string>(
  table: VersionTable<T>
): VersionTable<T> {
  return createTable<T, VersionTable<T>>(table);
}

interface _Version<T extends string> {
  id: VersionIdInstance<T>;
  name: string;
}

export type Ability = _Version<string>;

export function version<T extends string>(
  id: T,
  { name }: Omit<Ability, "id">
): _Version<T> {
  return {
    id: versionId(id),
    name,
  };
}
