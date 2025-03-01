<script  lang="ts" setup="">
import {
  VcDialog,
  VcTextField,
} from '@wisemen/vue-core'
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
import { useSettingRoleCreateMutation } from '@/modules/settings/api/mutations/settingRoleCreate.mutation.ts'
import { toFormField } from '@/utils/formango.util'

const emit = defineEmits<{
  close: []
}>()

const i18n = useI18n()

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
    <AppDialogContent class="w-dialog-sm">
      <AppDialogHeader
        :title="i18n.t('module.setting.roles_and_permissions.create_role_dialog.title')"
        :description="i18n.t('module.setting.roles_and_permissions.create_role_dialog.description')"
      />

      <AppForm
        :form="form"
        :can-exit-when-dirty="true"
        class="mt-xl"
      >
        <VcTextField
          :label="i18n.t('user.name')"
          v-bind="toFormField(name)"
        />

        <AppDialogActions>
          <AppDialogActionCancel :label="i18n.t('shared.cancel')" />

          <FormSubmitButton
            :form="form"
            :label="i18n.t('shared.save')"
          />
        </AppDialogActions>
      </AppForm>
    </AppDialogContent>
  </VcDialog>
</template>
