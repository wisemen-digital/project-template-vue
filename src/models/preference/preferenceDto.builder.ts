import type { PreferenceDto } from '@/models/preference/preferenceDto.model.ts'
import { PreferenceTheme } from '@/models/preference/preferenceTheme.enum.ts'

export class PreferenceDtoBuilder {
  value: PreferenceDto = {
    fontSize: 'default',
    highContrast: false,
    language: 'en-US',
    reduceMotion: false,
    showShortcuts: true,
    theme: PreferenceTheme.LIGHT,
  }

  constructor() {}

  build(): PreferenceDto {
    return this.value
  }

  withFontSize(fontSize: string): PreferenceDtoBuilder {
    this.value.fontSize = fontSize

    return this
  }

  withHighContrast(highContrast: boolean): PreferenceDtoBuilder {
    this.value.highContrast = highContrast

    return this
  }

  withLanguage(language: string): PreferenceDtoBuilder {
    this.value.language = language

    return this
  }

  withReduceMotion(reduceMotion: boolean): PreferenceDtoBuilder {
    this.value.reduceMotion = reduceMotion

    return this
  }

  withShowShortcuts(showShortcuts: boolean): PreferenceDtoBuilder {
    this.value.showShortcuts = showShortcuts

    return this
  }

  withTheme(theme: PreferenceTheme): PreferenceDtoBuilder {
    this.value.theme = theme

    return this
  }
}
