<script setup lang="ts">
import type { BreadcrumbItem } from '@wisemen/vue-core'
import { useI18n } from 'vue-i18n'

import FormPage from '@/components/form/FormPage.vue'
import type { UserDetail } from '@/models/user/detail/userDetail.model'
import UserUpdateRoleForm from '@/modules/user/features/update/components/UserUpdateRoleForm.vue'

const props = defineProps<{
  user: UserDetail
}>()

const i18n = useI18n()

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
    to: {
      name: 'user-detail',
      params: {
        userUuid: props.user.uuid,
      },
    },
    type: 'route',
  },
  {
    label: i18n.t('shared.edit'),
    type: 'page',
  },
]
</script>

<template>
  <FormPage
    :breadcrumbs="breadcrumbs"
    :title="props.user.email"
  >
    <UserUpdateRoleForm :user="user" />
  </FormPage>
</template>
