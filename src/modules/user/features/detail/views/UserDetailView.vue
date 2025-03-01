<script setup lang="ts">
import type { BreadcrumbItem } from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { Permission } from '@/client'
import AppEditItemButton from '@/components/app/button/AppEditItemButton.vue'
import AppPage from '@/components/layout/AppPage.vue'
import { TEST_ID } from '@/constants/testId.constant.ts'
import type { UserDetail } from '@/models/user/detail/userDetail.model'
import { useAuthStore } from '@/stores/auth.store.ts'

const props = defineProps<{
  user: UserDetail
}>()

const i18n = useI18n()
const authStore = useAuthStore()

const breadcrumbs: BreadcrumbItem[] = [
  {
    label: i18n.t('user.label.plural'),
    to: {
      name: 'user-overview',
    },
    type: 'route',
  },
  {
    label: props.user.email,
    type: 'page',
  },
]

const isEditButtonVisible = computed<boolean>(() => authStore.hasPermission(Permission.USER_UPDATE))
</script>

<template>
  <AppPage
    :title="props.user.email"
    :breadcrumbs="breadcrumbs"
  >
    <template #header-actions>
      <AppEditItemButton
        v-if="isEditButtonVisible"
        :to="{
          name: 'user-update',
          params: {
            userUuid: props.user.uuid,
          },
        }"
        :data-test-id="TEST_ID.USERS.DETAIL.EDIT_BUTTON"
        :label="i18n.t('module.user.detail.edit_user')"
      />
    </template>
  </AppPage>
</template>
