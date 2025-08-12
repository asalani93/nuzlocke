import z from "zod"

export const stepStatus = z.enum(["LOCKED", "INCOMPLETE", "COMPLETED", "FAILED"])
export type StepStatus = z.infer<typeof stepStatus>
export const StepStatus = stepStatus.enum
