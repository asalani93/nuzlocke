import type { BossId } from "./boss";
import type { RouteId } from "./route";
import {
  createId,
  createTable,
  type Id,
  type IdInstance,
  type Table,
} from "./util";
import type { VersionId } from "./version";

export type StepId = Id<"step">;

type StepInstanceId<T extends string> = IdInstance<StepId, T>;

export type StepTable<T extends string> = Table<T, () => _Step<T>>;

export const stepId = createId<StepId>();

export function stepTable<T extends string>(table: StepTable<T>): StepTable<T> {
  return createTable<T, StepTable<T>>(table);
}

interface _BossStep<T extends string> {
  id: StepInstanceId<T>;
  index: number;
  type: "boss";
  boss: BossId;
  version: VersionId | null;
  blocking: boolean;
}

export type BossStep = _BossStep<string>;

interface _RouteStep<T extends string> {
  id: StepInstanceId<T>;
  index: number;
  type: "route";
  route: RouteId;
  version: VersionId | null;
}

export type RouteStep = _RouteStep<string>;

type _Step<T extends string> = _BossStep<T> | _RouteStep<T>;

export type Step = _Step<string>;

export function bossStep<T extends string>(
  id: T,
  {
    index,
    boss,
    version,
    blocking,
  }: Omit<BossStep, "id" | "type" | "version" | "blocking"> &
    Partial<Pick<BossStep, "version" | "blocking">>
): _BossStep<T> {
  return {
    id: stepId(id),
    index,
    type: "boss",
    boss,
    version: version ?? null,
    blocking: blocking ?? false,
  };
}

export function routeStep<T extends string>(
  id: T,
  {
    index,
    route,
    version,
  }: Omit<RouteStep, "id" | "type" | "version"> &
    Partial<Pick<BossStep, "version">>
): _RouteStep<T> {
  return {
    id: stepId(id),
    index,
    type: "route",
    route,
    version: version ?? null,
  };
}
