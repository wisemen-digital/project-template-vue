import { isAxiosError } from 'axios'

import { useEnvironment } from '@/composables/core/environment.composable.ts'
import { oAuthClient } from '@/libs/oAuth.lib.ts'
import { useAuthStore } from '@/stores/auth.store.ts'
import { logError } from '@/utils/logger.util'
import { createMiddleware } from '@/utils/middleware.util'

export const authMiddleware = createMiddleware(async () => {
	const authStore = useAuthStore()

	const { isDevelopment } = useEnvironment()
	const hasTokens = oAuthClient.isLoggedIn()

	if (!hasTokens && !isDevelopment.value) {
		return {
			name: 'login-form',
		}
	}

	try {
		await authStore.getCurrentUser()
	} catch (error) {
		if (isAxiosError(error)) {
			authStore.logout()
		}

		logError(error)

		return {
			name: 'login-form',
		}
	}
})
