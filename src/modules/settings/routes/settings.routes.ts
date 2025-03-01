import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export const settingRoutes = [
  {
    name: 'settings',
    path: '/settings',
    component: (): Component => import('@/modules/settings/views/SettingView.vue'),
    redirect: {
      name: 'application-settings',
    },
    children: [
      {
        name: 'application-settings',
        path: 'application',
        component: (): Component => import('@/modules/settings/features/application/views/SettingApplicationOverviewView.vue'),
      },
      {
        name: 'role-and-permission-settings',
        path: 'roles-and-permissions',
        component: (): Component => import('@/modules/settings/features/roles-and-permissions/views/SettingRoleAndPermissionDataProviderView.vue'),
      },
    ],
  },
] as const satisfies RouteRecordRaw[]
