<script setup lang="ts">
import {
  useDarkMode,
  useDocumentTitle,
  VcConfigProvider,
  VcDialogContainer,
  VcThemeProvider,
  VcToastContainer,
} from '@wisemen/vue-core'
import { useI18n } from 'vue-i18n'
import { RouterView, useRouter } from 'vue-router'

import AppPageLoader from '@/components/app/loader/AppPageLoader.vue'
import { useAutoRefresh } from '@/composables/auto-refresh/autoRefresh.composable.ts'
import { useFontSize } from '@/composables/font-size/fontSize.composable'
import { useLanguage } from '@/composables/language/language.composable'
import { useReduceMotion } from '@/composables/reduce-motion/reduceMotion.composable'
import { useTheme } from '@/composables/theme/theme.composable'
import { logBuildInformation } from '@/constants/environment.constant.ts'
import { useAuthStore } from '@/stores/auth.store.ts'

const { setTemplate } = useDocumentTitle()
const { locale } = useI18n()
const router = useRouter()
const appearance = useDarkMode()
const authStore = useAuthStore()
const theme = useTheme()

setTemplate('{title} | $projectName')

useAutoRefresh()
useFontSize()
useLanguage()
useReduceMotion()
// useRouterViewTransition()

logBuildInformation()

authStore.onLogout(() => {
  router.replace({
    name: 'auth-login',
  })
})
</script>

<template>
  <VcConfigProvider :locale="locale">
    <VcThemeProvider
      :appearance="appearance"
      :theme="theme"
      class="flex size-full flex-1 flex-col overflow-hidden"
    >
      <RouterView />
      <AppPageLoader />
      <VcDialogContainer />
      <VcToastContainer />
    </VcThemeProvider>
  </VcConfigProvider>
</template>
