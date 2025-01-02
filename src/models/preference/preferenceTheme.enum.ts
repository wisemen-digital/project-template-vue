import { z } from 'zod'

export enum PreferenceTheme {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export const preferenceThemeSchema = z.nativeEnum(PreferenceTheme)
