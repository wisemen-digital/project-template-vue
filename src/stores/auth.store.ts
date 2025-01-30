import { defineStore } from 'pinia'
import {
  computed,
  ref,
} from 'vue'

import { oAuthClient } from '@/libs/oAuth.lib.ts'
import type { User } from '@/models/user/detail/user.model.ts'
import { UserService } from '@/modules/user/api/services/user.service.ts'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<User | null>(null)

  const isAuthenticated = computed<boolean>(() => authUser.value === null)

  const logoutCallback = ref<(() => void) | null>(null)

  async function getAuthUser(): Promise<User> {
    if (authUser.value !== null) {
      return authUser.value
    }

    authUser.value = await UserService.getMe()

    return authUser.value
  }

  function setAuthUser(user: User | null): void {
    authUser.value = user
  }

  function logout(): void {
    oAuthClient.logout()
    setAuthUser(null)
    logoutCallback.value?.()
  }

  function onLogout(callback: () => void): void {
    logoutCallback.value = callback
  }

  return {
    isAuthenticated,
    isLoggedIn,
    authUser,
    getAuthUser,
    getLoginUrl,
    getLogoutUrl,
    loginWithCode,
    logout,
    onLogout,
  }
})

async function getLoginUrl(): Promise<string> {
  return await oAuthClient.getLoginUrl()
}

function getLogoutUrl(): string {
  return oAuthClient.getLogoutUrl()
}

async function loginWithCode(code: string): Promise<void> {
  await oAuthClient.loginWithCode(code)
}

async function isLoggedIn(): Promise<boolean> {
  return await oAuthClient.isLoggedIn()
}
