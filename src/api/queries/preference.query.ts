import {
  useQuery,
  type UseQueryReturnType,
} from '@wisemen/vue-core-query'
import type { ComputedRef } from 'vue'

import { PreferenceService } from '@/api/services/preference.service.ts'
import type { Preference } from '@/models/preference/preference.model.ts'
import type { UserUuid } from '@/models/user/userUuid.model.ts'

export function usePreferenceQuery(
  userUuid: ComputedRef<UserUuid | null>,
): UseQueryReturnType<Preference> {
  return useQuery<Preference>({
    isEnabled: userUuid.value !== null,
    queryFn: () => {
      if (userUuid.value === null) {
        throw new Error('User UUID is null')
      }

      return PreferenceService.get(userUuid.value)
    },
    queryKey: {
      preference: {
        userUuid,
      },
    },
  })
}
