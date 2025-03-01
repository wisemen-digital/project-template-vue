<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { computed, ref } from 'vue'

import AppSidebarBottom from '@/components/layout/sidebar/AppSidebarBottom.vue'
import AppSidebarCollapseToggle from '@/components/layout/sidebar/AppSidebarCollapseToggle.vue'
import AppSidebarTop from '@/components/layout/sidebar/AppSidebarTop.vue'
import AppSidebarNavMenu from '@/components/layout/sidebar/navigation/AppSidebarNavMenu.vue'
import { onCreated } from '@/composables/created/created.composable'
import type { UserDetail } from '@/models/user/detail/userDetail.model.ts'
import type {
  NavigationGroup,
  NavigationItem,
} from '@/types/navigationItem.type'
import { CssUnitUtil } from '@/utils/cssUnit.util'

const props = withDefaults(defineProps<{
  bottomItems?: NavigationItem[]
  mainItems: NavigationGroup[]
  user: UserDetail
  variant: 'fixed-sidebar' | 'floating-content' | 'floating-sidebar'
}>(), {
  bottomItems: () => [],
})

const emit = defineEmits<{
  signOut: []
}>()

const isSidebarCollapsed = useLocalStorage<boolean>('isSidebarCollapsed', false)

const sidebarWidthWhenCollapsedInRem = ref<number>(CssUnitUtil.pxToRem(72))
const sidebarWidthWhenExpandedInRem = ref<number>(CssUnitUtil.pxToRem(256))
const sidebarPaddingXInRem = ref<number>(CssUnitUtil.pxToRem(16))
const sidebarItemPaddingXInRem = ref<number>(CssUnitUtil.pxToRem(10))
const sidebarItemIconSizeInRem = ref<number>(CssUnitUtil.pxToRem(20))

const sidebarWidth = computed<string>(() => {
  if (isSidebarCollapsed.value) {
    return `${sidebarWidthWhenCollapsedInRem.value}rem`
  }

  return `${sidebarWidthWhenExpandedInRem.value}rem`
})

const sidebarItemHeightInRem = computed<number>(() => {
  return sidebarWidthWhenCollapsedInRem.value - sidebarPaddingXInRem.value * 2
})

function onSignOut(): void {
  emit('signOut')
}

onCreated(() => {
  if (
    sidebarPaddingXInRem.value * 2 + sidebarItemPaddingXInRem.value * 2 + sidebarItemIconSizeInRem.value
    > sidebarWidthWhenCollapsedInRem.value
  ) {
    throw new Error('Invalid sidebar configuration. Please check the dimensions.')
  }
})
</script>

<template>
  <div
    :class="{
      'p-xl': props.variant === 'floating-sidebar' || props.variant === 'floating-content',
      'border-r border-solid border-secondary': props.variant === 'fixed-sidebar',
    }"
    class="sticky top-0 h-dvh z-20 bg-primary"
  >
    <div
      :class="{
        'rounded-2xl border border-solid border-secondary': props.variant === 'floating-sidebar',
      }"
      class="h-full bg-secondary"
    >
      <div
        :style="{
          width: sidebarWidth,
          paddingLeft: `${sidebarPaddingXInRem}rem`,
          paddingRight: `${sidebarPaddingXInRem}rem`,
        }"
        class="group/sidebar relative flex h-full flex-col justify-between not-motion-reduce:duration-500 ease-sidebar-collapse"
      >
        <AppSidebarCollapseToggle v-model="isSidebarCollapsed" />

        <div class="flex h-full flex-col">
          <AppSidebarTop :is-collapsed="isSidebarCollapsed" />

          <AppSidebarNavMenu
            :is-collapsed="isSidebarCollapsed"
            :main-items="props.mainItems"
            :sidebar-item-padding-x-in-rem="sidebarItemPaddingXInRem"
            :sidebar-item-icon-size-in-rem="sidebarItemIconSizeInRem"
            :sidebar-item-height-in-rem="sidebarItemHeightInRem"
            :bottom-items="props.bottomItems"
          />
        </div>

        <AppSidebarBottom
          :is-collapsed="isSidebarCollapsed"
          :sidebar-item-height-in-rem="sidebarItemHeightInRem"
          :user="props.user"
          @sign-out="onSignOut"
        />
      </div>
    </div>
  </div>
</template>
