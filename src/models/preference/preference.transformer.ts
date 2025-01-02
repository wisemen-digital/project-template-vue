import type { Preference } from '@/models/preference/preference.model.ts'
import type { PreferenceDto } from '@/models/preference/preferenceDto.model.ts'
import type { PreferenceUpdateDto } from '@/models/preference/preferenceUpdateDto.model.ts'
import type { PreferenceUpdateForm } from '@/models/preference/preferenceUpdateForm.model.ts'
import type { Locale } from '@/plugins/i18n/i18n.plugin.ts'

export class PreferenceTransformer {
  static fromDto(dto: PreferenceDto): Preference {
    return {
      fontSize: dto.fontSize,
      highContrast: dto.highContrast,
      language: dto.language as Locale,
      reduceMotion: dto.reduceMotion,
      showShortcuts: dto.showShortcuts,
      theme: dto.theme,
    }
  }

  static toDto(model: PreferenceUpdateForm): PreferenceUpdateDto {
    return {
      fontSize: model.fontSize,
      highContrast: model.highContrast,
      language: model.language,
      reduceMotion: model.reduceMotion,
      showShortcuts: model.showShortcuts,
      theme: model.theme,
    }
  }
}
