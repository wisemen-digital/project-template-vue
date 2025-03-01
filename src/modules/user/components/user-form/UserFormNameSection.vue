<script setup lang="ts">
import { VcTextField } from '@wisemen/vue-core'
import type { Field } from 'formango'
import { useI18n } from 'vue-i18n'

import FormGrid from '@/components/app/grid/FormGrid.vue'
import FormFieldset from '@/components/form/FormFieldset.vue'
import { TEST_ID } from '@/constants/testId.constant.ts'
import { toFormField } from '@/utils/formango.util'

const props = defineProps<{
  firstName: Field<string>
  lastName: Field<string>
}>()

const i18n = useI18n()
</script>

<template>
  <FormFieldset
    :description="i18n.t('module.user.form.section.name.description')"
    :title="i18n.t('user.name')"
  >
    <FormGrid :cols="2">
      <VcTextField
        :test-id="TEST_ID.USERS.FORM.FIRST_NAME_INPUT"
        v-bind="toFormField(props.firstName)"
        :label="i18n.t('user.first_name')"
      />

      <VcTextField
        v-bind="toFormField(props.lastName)"
        :test-id="TEST_ID.USERS.FORM.LAST_NAME_INPUT"
        :label="i18n.t('user.last_name')"
      />
    </FormGrid>
  </FormFieldset>
</template>
