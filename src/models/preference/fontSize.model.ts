import { z } from 'zod'

export const fontSizeSchema = z.enum([
  'default',
  'large',
  'larger',
  'small',
  'smaller',
])

export type FontSize = z.infer<typeof fontSizeSchema>
