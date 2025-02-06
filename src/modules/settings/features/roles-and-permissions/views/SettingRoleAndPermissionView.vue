<script setup lang="ts">
import {
  useDialog,
  useToast,
  VcButton,
} from '@wisemen/vue-core'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppVerticalFormElementSpacer from '@/components/app/AppVerticalFormElementSpacer.vue'
import AppTeleport from '@/components/app/teleport/AppTeleport.vue'
import { useApiErrorToast } from '@/composables/api-error-toast/apiErrorToast.composable'
import { useUnsavedChanges } from '@/composables/unsaved-changes/unsavedChanges.composable'
import { TEST_ID } from '@/constants/testId.constant'
import type { SettingPermission } from '@/models/permission/permission.model'
import type { SettingRole } from '@/models/setting-role/role.model'
import type { RoleUuid } from '@/models/setting-role/roleUuid.model'
import { useSettingRoleBulkUpdateMutation } from '@/modules/settings/api/mutations/settingRoleBulkUpdate.mutation'
import { useSettingRoleDeleteMutation } from '@/modules/settings/api/mutations/settingRoleDelete.mutation'
import SettingRoleAndPermissionTable from '@/modules/settings/features/roles-and-permissions/components/SettingRoleAndPermissionTable.vue'
import {
  type RoleAndPermissionTableMapId,
  type RoleAndPermissionTableMapValue,
  RoleAndPermissionTableUtil,
} from '@/modules/settings/utils/roleAndPermissionTable.util'

const props = defineProps<{
  permissions: SettingPermission[]
  roles: SettingRole[]
}>()

const i18n = useI18n()
const apiErrorToast = useApiErrorToast()
const toast = useToast()

const addRoleDialog = useDialog({
  component: () => import('@/modules/settings/features/roles-and-permissions/components/SettingRoleAndPermissionRoleCreateDialog.vue'),
})
const settingsRoleDeleteMutation = useSettingRoleDeleteMutation()

const rolesModelMap = ref<Map<RoleAndPermissionTableMapId, RoleAndPermissionTableMapValue>>(
  new Map(RoleAndPermissionTableUtil.createGrid(
    props.permissions,
    props.roles,
  )),
)

const settingsRolesBulkUpdateMutation = useSettingRoleBulkUpdateMutation()

const rolesModelMapSnapshot = ref<Map<RoleAndPermissionTableMapId, RoleAndPermissionTableMapValue>>(
  new Map(rolesModelMap.value),
)

const isRolesModelMapChanged = computed<boolean>(() => {
  return !RoleAndPermissionTableUtil.isTableStateEqual(rolesModelMap.value, rolesModelMapSnapshot.value)
})

function onAddNewRoleButtonClick(): void {
  addRoleDialog.open({
    id: 'addRole',
  })
}

async function onDeleteRow(roleUuid: RoleUuid): Promise<void> {
  try {
    await settingsRoleDeleteMutation.execute({
      body: roleUuid,
    })
  }
  catch (error) {
    apiErrorToast.show(error)
  }
}

async function onSaveChangesButtonClick(): Promise<void> {
  try {
    await settingsRolesBulkUpdateMutation.execute({
      body: {
        permissions: props.permissions,
        roleMap: rolesModelMap.value,
        roles: props.roles,
      },
    })

    toast.success({
      message: i18n.t('module.setting.roles_and_permissions.save_changes_success'),
    })

    resetRolesModelMapSnapshot()
  }
  catch (error) {
    apiErrorToast.show(error)
  }
}

function resetRolesModelMapSnapshot(): void {
  rolesModelMapSnapshot.value = new Map(rolesModelMap.value)
}

useUnsavedChanges(isRolesModelMapChanged)
</script>

<template>
  <AppVerticalFormElementSpacer>
    <AppTeleport to="headerActions">
      <VcButton
        :data-test-id="TEST_ID.SETTINGS.ROLES.OVERVIEW.CREATE_BUTTON"
        icon-left="plus"
        @click="onAddNewRoleButtonClick"
      >
        {{ i18n.t('module.setting.roles_and_permissions.add_new_role') }}
      </VcButton>
    </AppTeleport>
    <SettingRoleAndPermissionTable
      v-model="rolesModelMap"
      :permissions="props.permissions"
      :roles="props.roles"
      @delete-role="onDeleteRow"
    />
    <div class="flex justify-end">
      <VcButton
        :is-disabled="!isRolesModelMapChanged"
        @click="onSaveChangesButtonClick"
      >
        {{ i18n.t('module.setting.roles_and_permissions.save_changes') }}
      </VcButton>
    </div>
  </AppVerticalFormElementSpacer>
</template>
