import z from "zod"

export const versionId = z.string().brand("version")
export type VersionId = z.infer<typeof versionId>

export const version = z.object({
  id: versionId,
  name: z.string(),
})
export type Version = z.infer<typeof version>
