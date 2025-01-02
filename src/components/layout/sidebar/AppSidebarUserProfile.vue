<script setup lang="ts">
import {
  type DropdownMenuItem,
  VcDropdownMenu,
  VcDropdownMenuTrigger,
} from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppSeparator from '@/components/app/AppSeparator.vue'
import {
  CURRENT_BUILD_NUMBER,
  CURRENT_ENVIRONMENT,
} from '@/constants/environment.constant'
import { TEST_ID } from '@/constants/testId.constant.ts'
import type { User } from '@/models/user/detail/user.model.ts'

const props = defineProps<{
  isCollapsed: boolean
  sidebarItemHeightInRem: number
  user: User
}>()

const emit = defineEmits<{
  signOut: []
}>()

const { t } = useI18n()

const dropdownMenuItems = computed<DropdownMenuItem[]>(() => [
  {
    icon: 'settings',
    keyboardKeys: [
      'g',
      's',
    ],
    label: t('module.setting.title'),
    to: {
      name: 'settings',
    },
    type: 'route',
  },
  {
    type: 'separator',
  },
  {
    icon: 'logout',
    keyboardKeys: [
      's',
      'o',
    ],
    label: t('component.sidebar.footer.sign_out'),
    type: 'option',
    onSelect: (): void => {
      emit('signOut')
    },
  },
])

const userInitials = computed<string>(() => (
  `${props.user?.firstName?.[0] ?? '-'}${props.user?.lastName?.[0] ?? ''}`
))
</script>

<template>
  <VcDropdownMenu
    :items="dropdownMenuItems"
    :enable-global-keyboard-shortcuts="true"
    :is-arrow-hidden="true"
    :popover-offset-in-px="10"
    popover-side="right"
    popover-align="end"
  >
    <template #content-top>
      <div class="min-w-56 pb-xs">
        <span class="block px-lg py-md text-sm text-primary">
          {{ props.user?.fullName ?? '-' }}
        </span>

        <AppSeparator />

        <div class="px-lg py-md">
          <span class="block text-sm text-tertiary">
            {{ `${t('component.sidebar.footer.version')}: ${CURRENT_BUILD_NUMBER}` }}
          </span>

          <span class="mt-sm block text-sm text-tertiary">
            {{ `${t('component.sidebar.footer.environment')}: ${CURRENT_ENVIRONMENT}` }}
          </span>
        </div>

        <AppSeparator />
      </div>
    </template>

    <VcDropdownMenuTrigger>
      <button
        :data-test-id="TEST_ID.APP_PAGE.USER_BUTTON"
        type="button"
        class="flex w-full items-center gap-x-xl rounded-full text-left outline-none ring-brand-primary-500 ring-offset-1 duration-200 focus-visible:ring-2"
      >
        <div
          :style="{
            height: `${props.sidebarItemHeightInRem}rem`,
          }"
          class="flex aspect-square items-center justify-center rounded-full bg-quaternary"
        >
          <span class="text-sm font-medium text-primary">
            {{ userInitials }}
          </span>
        </div>

        <div
          :style="{
            height: `${props.sidebarItemHeightInRem}rem`,
          }"
          class="relative size-full"
        >
          <Transition
            enter-active-class="not-motion-reduce:duration-500 ease-sidebar-collapse"
            leave-active-class="not-motion-reduce:duration-500 ease-sidebar-collapse"
            leave-to-class="opacity-0 -translate-x-4 scale-90"
            enter-from-class="opacity-0 -translate-x-4 scale-90"
          >
            <div
              v-if="!props.isCollapsed"
              :data-test-id="TEST_ID.APP_PAGE.USER_NAME"
              class="absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-start overflow-hidden"
            >
              <span class="w-full truncate text-left text-sm font-semibold text-primary">
                {{ props.user.fullName ?? '-' }}
              </span>

              <span class="w-full truncate text-sm text-secondary">
                {{ props.user.email ?? '-' }}
              </span>
            </div>
          </Transition>
        </div>
      </button>
    </VcDropdownMenuTrigger>
  </VcDropdownMenu>
</template>
