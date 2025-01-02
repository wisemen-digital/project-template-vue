import type { PreferenceTheme } from '@/models/preference/preferenceTheme.enum.ts'
import type { Locale } from '@/plugins/i18n/i18n.plugin.ts'

export interface Preference {
  fontSize: string | null
  highContrast: boolean | null
  language: Locale | null
  reduceMotion: boolean | null
  showShortcuts: boolean | null
  theme: PreferenceTheme | null
}
