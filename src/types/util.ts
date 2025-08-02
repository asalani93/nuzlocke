export type Id<T extends string> = string & { _brand: T };

export type IdInstance<TId extends Id<string>, TValue extends string> = TId & {
  _value: TValue;
};

export function createId<T extends Id<string>>() {
  return <TKey extends string>(value: TKey): IdInstance<T, TKey> =>
    value as unknown as IdInstance<T, TKey>;
}

export type Table<T extends string, T1 extends () => unknown> = {
  [K in T]: ReturnType<T1>;
};

export function createTable<
  T extends string,
  T1 extends Table<T, () => unknown>
>(table: T1): T1 {
  return table;
}

export function lookup<T>(table: Table<string, () => unknown>, id: Id<string>) {
  return table[id as unknown as string] as unknown as T;
}
