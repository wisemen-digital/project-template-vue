<script setup lang="ts">
import { VcCheckbox, VcIcon } from '@wisemen/vue-core'
import { ref } from 'vue'

import AppHeightTransition from '@/components/app/AppHeightTransition.vue'
import AppUnstyledButton from '@/components/app/button/AppUnstyledButton.vue'
import { TEST_ID } from '@/constants/testId.constant'
import type { SettingPermission } from '@/models/permission/permission.model.ts'
import type { SettingPermissionAction } from '@/models/permission/permissionAction.model.ts'
import type { SettingPermissionId } from '@/models/permission/permissionId.model.ts'
import type { SettingRole } from '@/models/setting-role/role.model.ts'
import type { RoleUuid } from '@/models/setting-role/roleUuid.model.ts'

const props = defineProps<{
  isTableScrolledToBottom: boolean
  permissions: SettingPermission[]
  roles: SettingRole[]
  rolesModelMap: Map<string, string[] | null>
}>()

const emit = defineEmits<{
  togglePermissionTab: [string]
  updateActionCheckbox: [
      value: boolean,
    permissionId: SettingPermissionId,
    roleUuid: RoleUuid,
    action: SettingPermissionAction]
  updatePermissionCheckbox: [value: boolean, permissionId: SettingPermissionId, roleUuid: RoleUuid]
}>()

const permissionsToggleStateMap = ref<Map<string, boolean>>(new Map(
  props.permissions.map((permission) => [
    permission.id,
    false,
  ]),
))

function onTogglePermissionActionsClick(permissionId: SettingPermissionId): void {
  permissionsToggleStateMap.value.set(permissionId, !permissionsToggleStateMap.value.get(permissionId)!)
}

function isPermissionTabOpen(permissionId: SettingPermissionId): boolean {
  return permissionsToggleStateMap.value.get(permissionId)!
}

function isPermissionCheckboxChecked(permissionId: SettingPermissionId, roleUuid: RoleUuid): boolean {
  const key = `${permissionId}-${roleUuid}`
  const value = props.rolesModelMap.get(key) ?? null

  const permissionActions = props.permissions.find((permission) => permission.id === permissionId)?.actions ?? null

  if (value === null) {
    return false
  }

  if (permissionActions === null) {
    return true
  }

  return value.length > 0
}

function isActionCheckboxChecked(
  permissionId: SettingPermissionId,
  roleUuid: RoleUuid,
  action: SettingPermissionAction,
): boolean {
  const key = `${permissionId}-${roleUuid}`
  const value = props.rolesModelMap.get(key) ?? null

  if (value === null) {
    return false
  }

  return value.includes(action)
}

function isPermissionCheckboxIndeterminate(permissionId: SettingPermissionId, roleUuid: RoleUuid): boolean {
  const key = `${permissionId}-${roleUuid}`
  const value = props.rolesModelMap.get(key)

  if (!value) {
    return false
  }

  const permissionActions = props.permissions.find((permission) => permission.id === permissionId)?.actions ?? null

  if (permissionActions === null) {
    return false
  }

  return value.length !== permissionActions.length && value.length !== 0
}

function onUpdatePermissionCheckbox(value: boolean, permissionId: SettingPermissionId, roleUuid: RoleUuid): void {
  emit('updatePermissionCheckbox', value, permissionId, roleUuid)
}

function onUpdateActionCheckbox(
  value: boolean,
  permissionId: SettingPermissionId,
  roleUuid: RoleUuid,
  action: SettingPermissionAction,
): void {
  emit('updateActionCheckbox', value, permissionId, roleUuid, action)
}
</script>

<template>
  <div
    v-for="permission of props.permissions"
    :key="permission.id"
    :class="{
      'last:border-b-transparent': props.isTableScrolledToBottom,
    }"
    class="col-span-full grid grid-cols-subgrid border-b border-solid border-secondary"
  >
    <div
      class="z-2 col-span-full grid grid-cols-subgrid"
    >
      <Component
        :is="permission.actions ? AppUnstyledButton : 'div'"
        :data-test-id="TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ID"
        class="sticky left-0 flex items-center justify-between border-r border-solid border-secondary bg-primary p-3 px-6 text-left !ring-offset-0"
        @click="onTogglePermissionActionsClick(permission.id)"
      >
        {{ permission.id }}

        <VcIcon
          v-if="permission.actions"
          :data-test-id="TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.TAB_TOGGLE"
          :icon="isPermissionTabOpen(permission.id) ? 'chevronUp' : 'chevronDown'"
          class="size-4"
        />
      </Component>

      <div
        v-for="(role) of props.roles"
        :key="role.uuid"
        class="flex items-center justify-center border-r border-solid border-secondary p-3 last:border-none"
      >
        <VcCheckbox
          :model-value="isPermissionCheckboxChecked(permission.id, role.uuid)"
          :is-indeterminate="isPermissionCheckboxIndeterminate(permission.id, role.uuid)"
          @update:model-value="(event) => onUpdatePermissionCheckbox(event, permission.id, role.uuid)"
        />
      </div>
    </div>

    <AppHeightTransition
      :duration="0.3"
    >
      <div
        v-if="isPermissionTabOpen(permission.id)"
        class="col-span-full grid grid-cols-subgrid items-start"
      >
        <div
          v-for="(action, index) in permission.actions"
          :key="action"
          class="col-span-full grid grid-cols-subgrid border-b border-secondary first:border-t last:border-b-0"
        >
          <div class="sticky left-0 flex gap-2 border-r border-secondary bg-secondary p-3 pl-10 text-secondary">
            <VcIcon
              :class="{
                'opacity-100': index === 0,
              }"
              icon="bottomLeftCorner"
              class="mt-0.5 size-3 text-quaternary opacity-0"
            />
            <span :data-test-id="TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ACTION">
              {{ action }}
            </span>
          </div>

          <div
            v-for="role of props.roles"
            :key="role.uuid"
            class="flex justify-center border-r border-solid border-secondary p-3 last:border-none"
          >
            <VcCheckbox
              :model-value="isActionCheckboxChecked(permission.id, role.uuid, action)"
              @update:model-value="
                (event) => onUpdateActionCheckbox(event, permission.id, role.uuid, action)
              "
            />
          </div>
        </div>
      </div>
    </AppHeightTransition>
  </div>
</template>
