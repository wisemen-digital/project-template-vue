<script setup lang="ts">
import { VcTableCell } from '@wisemen/vue-core'
import { computed } from 'vue'

import AppRouterLink from '@/components/app/link/AppRouterLink.vue'
import { TEST_ID } from '@/constants/testId.constant'
import type { UserIndex } from '@/models/user/index/userIndex.model.ts'
import type { UserUuid } from '@/models/user/userUuid.model'
import { useUserDetailPrefetchQuery } from '@/modules/user/api/queries/userDetail.query'

const props = defineProps<{
  user: UserIndex
}>()

const userDetailPrefetchQuery = useUserDetailPrefetchQuery(computed<UserUuid>(() => props.user.uuid))

function onMouseEnter(): void {
  userDetailPrefetchQuery.execute()
}
</script>

<template>
  <VcTableCell
    :is-primary-cell="true"
    :data-test-id="TEST_ID.USERS.OVERVIEW.TABLE.EMAIL"
  >
    <AppRouterLink
      :to="{
        name: 'user-detail',
        params: {
          userUuid: props.user.uuid,
        },
      }"
      class="hover:underline"
      @mouseenter="onMouseEnter"
    >
      {{ props.user.email }}
    </AppRouterLink>
  </VcTableCell>
</template>
