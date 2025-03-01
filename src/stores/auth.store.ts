import { defineStore } from 'pinia'
import {
  computed,
  ref,
} from 'vue'

import { AuthService } from '@/api/services/auth.service'
import type { Permission } from '@/client'
import { oAuthClient } from '@/libs/oAuth.lib.ts'
import type { UserDetail } from '@/models/user/detail/userDetail.model.ts'

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<UserDetail | null>(null)

  const isAuthenticated = computed<boolean>(() => authUser.value === null)

  const logoutCallback = ref<(() => void) | null>(null)

  async function getAuthUser(): Promise<UserDetail> {
    if (authUser.value !== null) {
      return authUser.value
    }

    const user = await AuthService.getMe()

    setAuthUser(user)

    return user
  }

  function setAuthUser(user: UserDetail | null): void {
    authUser.value = user
  }

  function hasPermission(permission: Permission): boolean {
    if (authUser.value === null) {
      return false
    }

    return authUser.value.permissions.includes(permission)
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
    hasPermission,
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
