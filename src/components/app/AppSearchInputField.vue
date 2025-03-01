<script setup lang="ts" generic="T">
import {
  type Pagination,
  VcIconButton,
  VcKeyboardShortcut,
  VcKeyboardShortcutProvider,
  VcTextField,
} from '@wisemen/vue-core'
import {
  computed,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import { useKeyboardShortcutVisibilityValue } from '@/composables/keyboard-shortcut-visibility/keyboardShortcutVisibility.composable'

const props = withDefaults(defineProps<{
  isDisabled?: boolean
  isLoading: boolean
  disableKeyboardCommand?: boolean
  pagination: Pagination<T>
  placeholder?: string | null
}>(), {
  isDisabled: false,
  disableKeyboardCommand: false,
  placeholder: null,
})

const i18n = useI18n()
const isKeyboardShortcutHintVisible = useKeyboardShortcutVisibilityValue()

let timeout: ReturnType<typeof setTimeout> | null = null

const search = computed<string>({
  get: () => props.pagination.paginationOptions.value.search ?? '',
  set: (value) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      props.pagination.handleSearchChange(value)
    }, 300)
  },
})

const VcTextFieldRef = ref<InstanceType<any> | null>(null)

function onClearInput(): void {
  props.pagination.handleSearchChange('')
}
</script>

<template>
  <VcKeyboardShortcutProvider
    :config="{
      keys: [
        'meta',
        'f',
      ],
      preventDefault: true,
    }"
    class="w-64"
  >
    <VcTextField
      ref="VcTextFieldRef"
      v-model="search"
      :is-disabled="props.isDisabled"
      :placeholder="props.placeholder ?? i18n.t('component.search_input.placeholder')"
      :is-loading="props.isLoading"
      icon-left="search"
    >
      <template #right>
        <div>
          <VcKeyboardShortcut
            v-if="(search === null || search === '') && !props.disableKeyboardCommand && isKeyboardShortcutHintVisible"
            :keyboard-keys="['meta', 'f']"
            keyboard-classes="border-primary text-tertiary"
            class="mr-md"
          />

          <VcIconButton
            v-else-if="search !== null && search !== ''"
            :style-config="{
              '--icon-button-size-default': '2rem',
              '--icon-button-icon-size-default': '1rem',
              '--icon-button-ring-color-focus': 'transparent',
              '--icon-button-bg-color-focus': 'var(--bg-secondary-hover)',
              '--icon-button-bg-color-disabled': 'transparent',
              '--icon-button-border-color-disabled': 'transparent',
            }"
            :label="i18n.t('component.search_input.clear')"
            variant="tertiary"
            size="sm"
            icon="close"
            class="mr-[0.1875rem]"
            @click="onClearInput"
          />
        </div>
      </template>
    </VcTextField>
  </VcKeyboardShortcutProvider>
</template>
