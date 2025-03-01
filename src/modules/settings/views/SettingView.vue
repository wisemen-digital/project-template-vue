<script setup lang="ts">
import { type RouteTabItem, VcRouteTabs } from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'

import AppPage from '@/components/layout/AppPage.vue'

const i18n = useI18n()

const routeTabItems = computed<RouteTabItem[]>(() => [
  {
    label: i18n.t('module.setting.application.title'),
    to: {
      name: 'application-settings',
    },
  },
  {
    label: i18n.t('module.setting.roles_and_permissions.title'),
    to: {
      name: 'role-and-permission-settings',
    },
  },
])
</script>

<template>
  <AppPage :title="i18n.t('module.setting.title')">
    <template #tabs>
      <VcRouteTabs :items="routeTabItems" />
    </template>

    <template #default>
      <RouterView />
    </template>
  </AppPage>
</template>
