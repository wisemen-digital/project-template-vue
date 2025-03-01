<script setup lang="ts">
import { VcDialog } from '@wisemen/vue-core'

import AppDialogActionCancel from '@/components/app/dialog/AppDialogActionCancel.vue'
import AppDialogActionPrimary from '@/components/app/dialog/AppDialogActionPrimary.vue'
import AppDialogActions from '@/components/app/dialog/AppDialogActions.vue'
import AppDialogContent from '@/components/app/dialog/AppDialogContent.vue'
import AppDialogHeader from '@/components/app/dialog/AppDialogHeader.vue'

const props = withDefaults(defineProps<{
  title: string
  isDestructive: boolean
  isLoading?: boolean
  cancelText: string
  confirmText: string
  description: string
}>(), {
  isLoading: false,
})

const emit = defineEmits<{
  closed: []
  confirm: []
}>()

function onConfirm(): void {
  emit('confirm')
}

function onClose(): void {
  emit('closed')
}
</script>

<template>
  <VcDialog
    class="w-dialog-sm"
    @close="onClose"
  >
    <AppDialogContent>
      <AppDialogHeader
        :title="props.title"
        :description="props.description"
      />

      <AppDialogActions>
        <AppDialogActionCancel
          :label="props.cancelText"
          :is-disabled="props.isLoading"
        />

        <AppDialogActionPrimary
          :label="props.confirmText"
          :is-destructive="props.isDestructive"
          :is-loading="props.isLoading"
          @confirm="onConfirm"
        />
      </AppDialogActions>
    </AppDialogContent>
  </VcDialog>
</template>
