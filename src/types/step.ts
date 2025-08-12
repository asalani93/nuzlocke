import z from "zod"
import { bossId } from "./boss"
import { routeId } from "./route"
import { versionId } from "./version"

export const stepId = z.string().brand("step")
export type StepId = z.infer<typeof stepId>

export const stepType = z.enum(["BOSS", "ROUTE"])
export type StepType = z.infer<typeof stepType>
export const StepTypes = stepType.enum

export const bossStepId = stepId.brand("bossStep")
export type BossStepId = z.infer<typeof bossStepId>

export const routeStepId = stepId.brand("routeStep")
export type RouteStepId = z.infer<typeof routeStepId>

export const bossStep = z.object({
  id: bossStepId,
  index: z.number(),
  type: z.literal(StepTypes.BOSS),
  bossId: bossId,
  versionIds: z.array(versionId),
  enforceCap: z.boolean(),
})
export type BossStep = z.infer<typeof bossStep>

export const routeStep = z.object({
  id: routeStepId,
  index: z.number(),
  type: z.literal(StepTypes.ROUTE),
  routeId: routeId,
  versionIds: z.array(versionId),
})
export type RouteStep = z.infer<typeof routeStep>

export const step = z.discriminatedUnion("type", [bossStep, routeStep])
export type Step = z.infer<typeof step>
