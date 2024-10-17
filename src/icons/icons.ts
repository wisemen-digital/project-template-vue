import type { Component } from 'vue'

export const icons = {
  barChartSquare02: import('./BarChartSquare02Icon.vue'),
  edit05: import('./Edit05Icon.vue'),
  logOut01: import('./LogOut01Icon.vue'),
} satisfies Record<string, Component>

type CustomIcons = {
  [K in keyof typeof icons]: Component
}

declare module '@wisemen/vue-core' {
  interface Icons extends CustomIcons {}
}
