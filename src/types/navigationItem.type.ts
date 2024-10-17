import type {
  Icon,
  KeyboardShortcut,
} from '@wisemen/vue-core'

import type { Routes } from '@/routes/routes.ts'

import type { RouteLocationTyped } from './router/router.type.ts'

export interface NavigationItem {
  hasAlertDot?: boolean
  icon: Icon
  keyboardShortcut?: KeyboardShortcut
  label: string
  to: RouteLocationTyped<keyof Routes>
}

export interface NavigationGroup {
  items: NavigationItem[]
  label: string
}
