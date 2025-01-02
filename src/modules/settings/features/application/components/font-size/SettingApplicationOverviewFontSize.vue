<script setup lang="ts">
import { VcSelect } from '@wisemen/vue-core'
import { useI18n } from 'vue-i18n'

import FormFieldset from '@/components/form/FormFieldset.vue'
import { useFontSizeSelect } from '@/composables/font-size/fontSize.composable'
import { usePreferences } from '@/composables/preference/preferences.composable.ts'
import type { FontSize } from '@/models/preference/fontSize.model.ts'

const { t } = useI18n()

const fontSizeSelect = useFontSizeSelect()
const preferences = usePreferences()

function onUpdateModelValue(value: FontSize | null): void {
  if (value === null) {
    return
  }

  preferences.update({
    fontSize: value,
  })
}
</script>

<template>
  <FormFieldset
    :title="t('module.setting.font_size.title')"
    :description="t('module.setting.font_size.description')"
  >
    <VcSelect
      v-model="fontSizeSelect.value.value"
      :items="fontSizeSelect.items.value"
      :display-fn="fontSizeSelect.displayFn"
      :label="t('module.setting.font_size.title')"
      class="w-72"
      @update:model-value="onUpdateModelValue"
    />
  </FormFieldset>
</template>
