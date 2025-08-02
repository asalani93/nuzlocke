import {
  createTable,
  createId,
  type Id,
  type IdInstance,
  type Table,
} from "./util";

export type EvolutionId = Id<"evolution">;

export type EvolutionIdInstance<T extends string> = IdInstance<EvolutionId, T>;

export type EvolutionTable<T extends string> = Table<
  T,
  () => EvolutionIdInstance<T>
>;

export const evolutionId = createId<EvolutionId>();

export function createEvolutionTable<T extends string>(
  table: EvolutionTable<T>
): EvolutionTable<T> {
  return createTable<T, EvolutionTable<T>>(table);
}
