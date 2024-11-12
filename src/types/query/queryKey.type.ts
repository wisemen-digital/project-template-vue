import type { PaginationOptions } from '@wisemen/vue-core'
import type { ComputedRef } from 'vue'

import type { UserIndexFilters } from '@/models/user/index/userIndexFilters.model'
import type { UserUuid } from '@/models/user/userUuid.model'
import type { RefOrGetter } from '@/types/reactivity.type.ts'

interface ProjectQueryKeys {
  permissions: void
  roles: void
  userDetail: {
    userUuid: RefOrGetter<UserUuid>
  }
  userIndex: {
    paginationOptions?: ComputedRef<PaginationOptions<UserIndexFilters>>
  }
}

declare module '@wisemen/vue-core' {
  interface QueryKeys extends ProjectQueryKeys {}
}
