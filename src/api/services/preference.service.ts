import { z } from 'zod'

import { httpClient } from '@/libs/http.lib.ts'
import type { Preference } from '@/models/preference/preference.model.ts'
import { PreferenceTransformer } from '@/models/preference/preference.transformer.ts'
import { preferenceDtoSchema } from '@/models/preference/preferenceDto.model.ts'
import type { PreferenceUpdateForm } from '@/models/preference/preferenceUpdateForm.model.ts'
import type { UserUuid } from '@/models/user/userUuid.model.ts'

export class PreferenceService {
  static async get(userUuid: UserUuid): Promise<Preference> {
    const dto = await httpClient.get({
      responseSchema: preferenceDtoSchema,
      url: `users/${userUuid}/preferences`,
    })

    return PreferenceTransformer.fromDto(dto)
  }

  static async update(userUuid: UserUuid, preference: PreferenceUpdateForm): Promise<void> {
    await httpClient.patch({
      body: PreferenceTransformer.toDto(preference),
      responseSchema: z.unknown(),
      url: `users/${userUuid}/preferences`,
    })
  }
}
