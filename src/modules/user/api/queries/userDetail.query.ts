import {
  useQuery,
  type UseQueryOptions,
  type UseQueryReturnType,
} from '@wisemen/vue-core-query'
import { type ComputedRef, toValue } from 'vue'

import {
  type PrefetchQueryReturnType,
  usePrefetchQuery,
} from '@/composables/prefetch-query/prefetchQuery.composable'
import type { UserDetail } from '@/models/user/detail/userDetail.model'
import type { UserUuid } from '@/models/user/userUuid.model'
import { UserService } from '@/modules/user/api/services/user.service'
import { TimeUtil } from '@/utils/time.util'

export function userDetailQuery(userUuid: ComputedRef<UserUuid>): UseQueryOptions<UserDetail> {
  return {
    staleTime: TimeUtil.seconds(30),
    queryFn: () => UserService.getByUuid(toValue(userUuid)),
    queryKey: {
      userDetail: {
        userUuid,
      },
    },
  }
}

export function useUserDetailQuery(userUuid: ComputedRef<UserUuid>): UseQueryReturnType<UserDetail> {
  return useQuery(userDetailQuery(userUuid))
}

export function useUserDetailPrefetchQuery(userUuid: ComputedRef<UserUuid>): PrefetchQueryReturnType {
  return usePrefetchQuery(userDetailQuery(userUuid))
}
