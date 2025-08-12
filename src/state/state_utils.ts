import { createJSONStorage } from "jotai/utils"
import type { SyncStorage } from "jotai/vanilla/utils/atomWithStorage"
import z from "zod"

export function createValidatedJsonStorage<T extends { value: U }, U>(
  schema: z.ZodType<T>,
  version: number
) {
  const baseStorage = createJSONStorage()

  const validatedStorage: SyncStorage<U> = {
    getItem(key, initialValue): U {
      const data = baseStorage.getItem(key, {
        value: initialValue,
        version,
      })
      const validatedData = schema.safeParse(data)
      return validatedData.success ? validatedData.data.value : initialValue
    },
    removeItem(key) {
      baseStorage.removeItem(key)
    },
    setItem(key, newValue) {
      baseStorage.setItem(key, {
        value: newValue,
        version,
      })
    },
  }

  return validatedStorage
}

export function versionedState<T>(version: number, schema: z.ZodType<T>) {
  return z.object({ version: z.literal(version), value: schema })
}
