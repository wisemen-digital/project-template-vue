<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppDashboardLayoutFloating from '@/components/layout/dashboard/AppDashboardLayoutFloating.vue'
import AppSidebar from '@/components/layout/sidebar/AppSidebar.vue'
import { usePreferences } from '@/composables/preference/preferences.composable.ts'
import type { User } from '@/models/user/detail/user.model.ts'
import { useAuthStore } from '@/stores/auth.store'

const { t } = useI18n()

usePreferences()

const authStore = useAuthStore()

const authUser = computed<User | null>(() => authStore.authUser)

function onSignOut(): void {
  const logoutUrl = authStore.getLogoutUrl()

  window.location.replace(logoutUrl)
}
</script>

<template>
  <AppDashboardLayoutFloating v-if="authUser !== null">
    <template #sidebar>
      <AppSidebar
        :user="authUser"
        :main-items="[
          {
            label: 'General',
            items: [
              {
                to: {
                  name: 'user-overview',
                },
                label: t('user.label.plural'),
                icon: 'barChartSquare',
              },
            ],
          },
        ]"
        variant="floating-content"
        @sign-out="onSignOut"
      />
    </template>
  </AppDashboardLayoutFloating>
</template>
