<script setup lang="ts">
import AppSeparator from '@/components/app/AppSeparator.vue'
import AppSidebarUserProfile from '@/components/layout/sidebar/AppSidebarUserProfile.vue'
import type { User } from '@/models/user/detail/user.model.ts'

const props = defineProps<{
  isCollapsed: boolean
  sidebarItemHeightInRem: number
  user: User
}>()

const emit = defineEmits<{
  signOut: []
}>()

function onSignOut(): void {
  emit('signOut')
}
</script>

<template>
  <div class="mb-3xl">
    <AppSeparator class="my-xl" />

    <AppSidebarUserProfile
      :is-collapsed="props.isCollapsed"
      :sidebar-item-height-in-rem="props.sidebarItemHeightInRem"
      :user="props.user"
      @sign-out="onSignOut"
    />
  </div>
</template>
