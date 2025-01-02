import { isAxiosError } from 'axios'

import { useAuthStore } from '@/stores/auth.store.ts'
import { LoggerUtil } from '@/utils/logger.util'
import { MiddlewareUtil } from '@/utils/middleware.util'

export const authMiddleware = MiddlewareUtil.createMiddleware(async () => {
  const authStore = useAuthStore()
  const isLoggedIn = await authStore.isLoggedIn()

  if (!isLoggedIn) {
    return {
      name: 'auth-login',
    }
  }

  try {
    await authStore.getAuthUser()
  }
  catch (error) {
    if (isAxiosError(error)) {
      authStore.logout()
    }

    LoggerUtil.logError(error)

    return {
      name: 'auth-login',
    }
  }
})
