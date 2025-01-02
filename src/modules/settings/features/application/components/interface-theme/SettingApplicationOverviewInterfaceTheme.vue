<script setup lang="ts">
import {
  type RadioGroupItem,
  useDarkMode,
  VcRadioGroup,
  VcRadioGroupItem,
  VcThemeProvider,
} from '@wisemen/vue-core'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import FormFieldset from '@/components/form/FormFieldset.vue'
import { usePreferences } from '@/composables/preference/preferences.composable.ts'
import { useTheme } from '@/composables/theme/theme.composable'
import { PreferenceTheme } from '@/models/preference/preferenceTheme.enum.ts'
import SettingApplicationOverviewMiniDashboard from '@/modules/settings/features/application/components/interface-theme/SettingApplicationOverviewMiniDashboard.vue'

const { t } = useI18n()
const darkMode = useDarkMode()
const theme = useTheme()
const preferences = usePreferences()

const themes = computed<RadioGroupItem<PreferenceTheme>[]>(() => [
  {
    label: t('module.setting.interface_theme.light'),
    value: PreferenceTheme.LIGHT,
  },
  {
    label: t('module.setting.interface_theme.dark'),
    value: PreferenceTheme.DARK,
  },
  {
    label: t('module.setting.interface_theme.system_preference'),
    value: PreferenceTheme.SYSTEM,
  },
])

const value = computed<PreferenceTheme>({
  get: () => darkMode.value.value as PreferenceTheme,
  set: (value: PreferenceTheme) => {
    darkMode.value.value = value
  },
})

function getIsDarkModeEnabled(value: PreferenceTheme): boolean {
  if (value === 'dark') {
    return true
  }

  if (value === 'light') {
    return false
  }

  return darkMode.isSystemDarkMode.value
}

function onUpdateModelValue(newValue: PreferenceTheme | null): void {
  if (newValue === null) {
    return
  }

  preferences.update({
    theme: newValue,
  })
}
</script>

<template>
  <FormFieldset
    :title="t('module.setting.interface_theme.title')"
    :description="t('module.setting.interface_theme.description')"
  >
    <VcRadioGroup
      v-model="value"
      :items="themes"
      @update:model-value="onUpdateModelValue"
    >
      <template #items="{ items }">
        <div class="grid gap-lg lg:grid-cols-3">
          <VcRadioGroupItem
            v-for="item of items"
            :key="item.value"
            :item="item"
            class="group rounded-xl text-left !ring-0 !ring-offset-0"
          >
            <VcThemeProvider
              :is-dark-mode-enabled="getIsDarkModeEnabled(item.value)"
              :theme="theme"
            >
              <div class="relative h-40 overflow-hidden rounded-xl border-2 border-solid border-transparent bg-tertiary ring-brand-primary-500 ring-offset-1 duration-200 group-focus-visible:ring-2 group-data-[state=checked]:border-brand">
                <SettingApplicationOverviewMiniDashboard class="absolute left-4 top-4" />
              </div>
            </VcThemeProvider>

            <span class="mt-md block text-sm text-primary">
              {{ item.label }}
            </span>
          </VcRadioGroupItem>
        </div>
      </template>
    </VcRadioGroup>
  </FormFieldset>
</template>
