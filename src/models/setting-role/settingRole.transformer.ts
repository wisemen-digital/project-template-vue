import type { Permission } from '@/client'
import type { SettingPermissionAction } from '@/models/permission/permissionAction.model.ts'
import type { SettingRole } from '@/models/setting-role/role.model.ts'
import type { SettingRoleBulkUpdateDto } from '@/models/setting-role/settingRoleBulkUpdateDto.model.ts'
import type { SettingRoleBulkUpdateForm } from '@/models/setting-role/settingRoleBulkUpdateForm.model.ts'

export class SettingRoleBulkUpdateTransformer {
  static toDto(form: SettingRoleBulkUpdateForm): SettingRoleBulkUpdateDto {
    const roleArray: SettingRole[] = []

    form.permissions.forEach((permission) => {
      form.roles.forEach((roleIndex) => {
        const role = roleArray.find((role) => role.uuid === roleIndex.uuid)
        const value = form.roleMap.get(`${permission.id}-${roleIndex.uuid}`) as SettingPermissionAction[]

        if (!value) {
          return
        }

        if (!role) {
          roleArray.push({
            ...roleIndex,
            permissions: [
              { id: permission.id, actions: (value) ?? [] },
            ],
          })
        }

        if (role) {
          role.permissions.push({ id: permission.id, actions: (value) ?? [] })
        }
      })
    })

    return {
      roles: roleArray.map((role) => ({
        permissions: role.permissions.flatMap((permission): Permission[] => {
          return permission.actions?.map((action) => {
            return `${permission.id}.${action}` as Permission
          }) ?? []
        }),
        roleUuid: role.uuid,
      })),
    }
  }
}
