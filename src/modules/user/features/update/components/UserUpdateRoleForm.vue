<script setup lang="ts">
import type { SelectItem } from '@wisemen/vue-core'
import {
  useToast,
  VcSelect,
} from '@wisemen/vue-core'
import { useForm } from 'formango'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'

import FormGrid from '@/components/app/grid/FormGrid.vue'
import AppTeleport from '@/components/app/teleport/AppTeleport.vue'
import AppForm from '@/components/form/AppForm.vue'
import FormFieldset from '@/components/form/FormFieldset.vue'
import FormLayout from '@/components/form/FormLayout.vue'
import FormSubmitButton from '@/components/form/FormSubmitButton.vue'
import { useApiErrorToast } from '@/composables/api-error-toast/apiErrorToast.composable.ts'
import { TEST_ID } from '@/constants/testId.constant.ts'
import { type RoleUuid, roleUuidSchema } from '@/models/setting-role/roleUuid.model.ts'
import type { UserDetail } from '@/models/user/detail/userDetail.model.ts'
import { useSettingRolesQuery } from '@/modules/settings/api/queries/settingRole.query.ts'
import { useUserUpdateRoleMutation } from '@/modules/user/api/mutations/userUpdate.mutation.ts'
import { toFormField } from '@/utils/formango.util'

const props = defineProps<{
  user: UserDetail
}>()

const i18n = useI18n()

const toast = useToast()
const errorToast = useApiErrorToast()
const userUpdateRoleMutation = useUserUpdateRoleMutation()

const roleQuery = useSettingRolesQuery()

interface RoleItem {
  uuid: RoleUuid
  name: string
}

const roleItems = computed<SelectItem<RoleItem>[]>(() => {
  return roleQuery.data.value?.map((role): SelectItem<RoleItem> => ({
    type: 'option',
    value: {
      uuid: role.uuid,
      name: role.name,
    },
  })) ?? []
})

const form = useForm({
  initialState: () => ({
    roles: props.user.roles.map((role) => ({
      uuid: role.uuid,
      name: role.name,
    })),
  }),
  schema: z.object({
    roles: z.object({
      uuid: roleUuidSchema,
      name: z.string(),
    }).array(),
  }),
  onSubmit: async (values) => {
    try {
      await userUpdateRoleMutation.execute({
        body: values.roles.map((role) => role.uuid),
        params: {
          userUuid: props.user.uuid,
        },
      })

      toast.success({
        testId: TEST_ID.USERS.UPDATE.SUCCESS_TOAST,
        message: i18n.t('module.user.update.success_toast.message'),
      })
    }
    catch (error) {
      errorToast.show(error)
    }
  },
  onSubmitError: () => {
    toast.error({
      message: i18n.t('error.invalid_form_input.description'),
    })
  },
})

const roles = form.register('roles')
</script>

<template>
  <AppForm :form="form">
    <template #default="{ formId }">
      <AppTeleport to="headerActions">
        <FormSubmitButton
          :form-id="formId"
          :form="form"
          :data-test-id="TEST_ID.USERS.FORM.SUBMIT_BUTTON"
          :label="i18n.t('form.save_changes')"
        />
      </AppTeleport>

      <FormLayout>
        <FormFieldset
          :description="i18n.t('module.user.form.section.name.description')"
          :title="i18n.t('user.name')"
        >
          <FormGrid :cols="2">
            <VcSelect
              :test-id="TEST_ID.USERS.FORM.FIRST_NAME_INPUT"
              v-bind="toFormField(roles)"
              :display-fn="(item) => item.name"
              :items="roleItems"
              :label="i18n.t('module.user.role')"
            />
          </FormGrid>
        </FormFieldset>
      </FormLayout>
    </template>
  </AppForm>
</template>
