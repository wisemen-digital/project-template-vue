<script setup lang="ts">
import {
  VcKeyboardShortcutProvider,
  VcRouterLinkButton,
} from '@wisemen/vue-core'

import AppButtonTooltip from '@/components/app/tooltip/AppButtonTooltip.vue'
import type { RouteLocationCurrent } from '@/types/global/vueRouter'

const props = defineProps<{
  label: string
  to: RouteLocationCurrent
}>()
</script>

<template>
  <VcKeyboardShortcutProvider
    v-slot="{ keys }"
    :config="{
      keys: ['n'],
    }"
  >
    <AppButtonTooltip
      :label="props.label"
      :keyboard-shortcut-keys="keys"
    >
      <VcRouterLinkButton
        :to="props.to"
        icon-left="plus"
        size="sm"
      >
        {{ props.label }}
      </VcRouterLinkButton>
    </AppButtonTooltip>
  </VcKeyboardShortcutProvider>
</template>
