import { z } from 'zod'

import { preferenceThemeSchema } from '@/models/preference/preferenceTheme.enum.ts'

export const preferenceUpdateFormSchema = z.object({
  fontSize: z.string().optional(),
  highContrast: z.boolean().optional(),
  language: z.string().optional(),
  reduceMotion: z.boolean().optional(),
  showShortcuts: z.boolean().optional(),
  theme: preferenceThemeSchema.optional(),
})

export type PreferenceUpdateForm = z.infer<typeof preferenceUpdateFormSchema>
