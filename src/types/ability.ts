import {
  createId,
  createTable,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type AbilityId = Id<"ability">;

type AbilityIdInstance<T extends string> = IdInstance<AbilityId, T>;

export type AbilityTable<T extends string> = Table<T, () => _Ability<T>>;

export const abilityId = createId<AbilityId>();

export function abilityTable<T extends string>(
  table: AbilityTable<T>
): AbilityTable<T> {
  return createTable<T, AbilityTable<T>>(table);
}

interface _Ability<T extends string> {
  id: AbilityIdInstance<T>;
  name: string;
  effect: string;
}

export type Ability = _Ability<string>;

export function ability<T extends string>(
  id: T,
  { name, effect }: Omit<Ability, "id">
): _Ability<T> {
  return {
    id: abilityId(id),
    name,
    effect,
  };
}
