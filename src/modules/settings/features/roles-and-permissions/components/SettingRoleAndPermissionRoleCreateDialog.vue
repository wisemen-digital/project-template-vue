<script  lang="ts" setup="">
import { VcDialog, VcTextField } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'

import AppDialogActionCancel from '@/components/app/dialog/AppDialogActionCancel.vue'
import AppDialogActions from '@/components/app/dialog/AppDialogActions.vue'
import AppDialogContent from '@/components/app/dialog/AppDialogContent.vue'
import AppDialogHeader from '@/components/app/dialog/AppDialogHeader.vue'
import AppForm from '@/components/form/AppForm.vue'
import FormSubmitButton from '@/components/form/FormSubmitButton.vue'
import { useApiErrorToast } from '@/composables/api-error-toast/apiErrorToast.composable.ts'
import { TEST_ID } from '@/constants/testId.constant'
import { toFormField } from '@/helpers/formango.helper'
import { useSettingRoleCreateMutation } from '@/modules/settings/api/mutations/settingRoleCreate.mutation.ts'

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()

const apiErrorToast = useApiErrorToast()
const settingsRoleCreateMutation = useSettingRoleCreateMutation()

const form = useForm({
  schema: z.object({
    name: z.string(),
  }),
  onSubmit: async (values) => {
    try {
      await settingsRoleCreateMutation.execute({
        body: values.name,
      })
      onClose()
    }
    catch (error) {
      apiErrorToast.show(error)
    }
  },
})

const name = form.register('name')

function onClose(): void {
  emit('close')
}
</script>

<template>
  <VcDialog
    @close="onClose"
  >
    <AppDialogContent
      :data-test-id="TEST_ID.SETTINGS.ROLES.CREATE_DIALOG"
      class="w-dialog-sm"
    >
      <AppDialogHeader
        :title="t('module.setting.roles_and_permissions.create_role_dialog.title')"
        :description="t('module.setting.roles_and_permissions.create_role_dialog.description')"
      />
      <div class="py-4">
        <AppForm :form="form">
          <VcTextField
            :test-id="TEST_ID.SETTINGS.ROLES.FORM.NAME_INPUT"
            :label="t('user.name')"
            v-bind="toFormField(name)"
          />
          <AppDialogActions>
            <AppDialogActionCancel :label="t('shared.cancel')" />
            <FormSubmitButton
              :data-test-id="TEST_ID.SETTINGS.ROLES.FORM.SUBMIT_BUTTON"
              :form="form"
              :label="t('shared.save')"
            />
          </AppDialogActions>
        </AppForm>
      </div>
    </AppDialogContent>
  </VcDialog>
</template>
