<script lang="ts" setup>
import { useRouteQuery } from '@vueuse/router'
import { useToast } from '@wisemen/vue-core'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { TEST_ID } from '@/constants/testId.constant.ts'
import { useAuthStore } from '@/stores/auth.store.ts'

const { t } = useI18n()
const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()
const authorizationCode = useRouteQuery<string | null>('code', null)

onMounted(async () => {
  if (authorizationCode.value === null) {
    toast.error({
      message: t('module.auth.login.error'),
    })

    await router.push({
      name: 'auth-logout',
    })

    return
  }
  try {
    await authStore.loginWithCode(authorizationCode.value)

    await router.push({
      name: 'index',
    })
  }
  catch (error) {
    toast.error({
      message: error?.toString() ?? 'Unknown error',
    })

    await router.push({
      name: 'auth-logout',
    })
  }
})
</script>

<template>
  <div
    :data-test-id="TEST_ID.AUTH.CALLBACK"
    class="h-dvh bg-primary"
  />
</template>
