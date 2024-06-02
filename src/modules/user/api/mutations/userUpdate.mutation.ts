import {
  useMutation,
  UseMutationReturnType,
} from '@wisemen/vue-core'

import type { User } from '@/models/user/detail/user.model'
import type { UserUpdateForm } from '@/models/user/update/userUpdateForm.model'
import type { UserUuid } from '@/models/user/userUuid.model'

import { UserService } from '../services/user.service'

interface Params {
  userUuid: UserUuid
}

export function useUserUpdateMutation(): UseMutationReturnType<UserUpdateForm, User, Params> {
  return useMutation<UserUpdateForm, User, Params>({
    queryFn: async ({ body, params }) => {
      return await UserService.update(params.userUuid, body)
    },
    queryKeysToInvalidate: {
      userDetail: {
        userUuid: params => params.userUuid,
      },
      userIndex: {},
    },
  })
}
