import { z } from 'zod'

import { preferenceThemeSchema } from '@/models/preference/preferenceTheme.enum.ts'

export const preferenceDtoSchema = z.object({
  fontSize: z.string().nullable(),
  highContrast: z.boolean().nullable(),
  language: z.string().nullable(),
  reduceMotion: z.boolean().nullable(),
  showShortcuts: z.boolean().nullable(),
  theme: preferenceThemeSchema.nullable(),
})

export type PreferenceDto = z.infer<typeof preferenceDtoSchema>
