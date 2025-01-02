<script setup lang="ts">
import {
  VcButton,
  VcKeyboardShortcut,
  VcSwitch,
} from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppGroup from '@/components/app/AppGroup.vue'
import FormFieldset from '@/components/form/FormFieldset.vue'
import { useKeyboardShortcutVisibilityValue } from '@/composables/keyboard-shortcut-visibility/keyboardShortcutVisibility.composable'
import { usePreferences } from '@/composables/preference/preferences.composable.ts'

const { t } = useI18n()
const value = useKeyboardShortcutVisibilityValue()
const isKeyboardShortcutHintVisible = useKeyboardShortcutVisibilityValue()
const preferences = usePreferences()

const computedValue = computed<boolean>({
  get: () => value.value,
  set: (newValue) => {
    value.value = newValue
  },
})

const label = computed<string>(() => {
  if (value.value) {
    return t('module.setting.keyboard_shortcuts.enabled.label')
  }

  return t('module.setting.keyboard_shortcuts.disabled.label')
})

const description = computed<string>(() => {
  if (value.value) {
    return t('module.setting.keyboard_shortcuts.enabled.description')
  }

  return t('module.setting.keyboard_shortcuts.disabled.description')
})

function onUpdateModelValue(newValue: boolean): void {
  preferences.update({
    showShortcuts: newValue,
  })
}
</script>

<template>
  <FormFieldset
    :title="t('module.setting.keyboard_shortcuts.title')"
    :description="t('module.setting.keyboard_shortcuts.description')"
  >
    <AppGroup
      gap="6xl"
      align="start"
    >
      <VcSwitch
        v-model="computedValue"
        :label="label"
        :hint="description"
        @update:model-value="onUpdateModelValue"
      />

      <VcButton
        variant="secondary"
        size="sm"
      >
        <AppGroup>
          <span>
            {{ t('module.setting.keyboard_shortcuts.example_button') }}
          </span>

          <VcKeyboardShortcut
            v-if="computedValue && isKeyboardShortcutHintVisible"
            :keyboard-keys="['meta', 'k']"
            keyboard-classes="border-0 bg-tertiary"
          />
        </AppGroup>
      </VcButton>
    </AppGroup>
  </FormFieldset>
</template>
