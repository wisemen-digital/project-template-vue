import type { Permission } from '@/models/permission/permission.model.ts'
import type { PermissionAction } from '@/models/permission/permissionAction.model.ts'
import type { PermissionDto } from '@/models/permission/permissionDto.model.ts'
import type { PermissionId } from '@/models/permission/permissionId.model.ts'

export class PermissionTransformer {
  static fromDto(dto: PermissionDto[]): Permission[] {
    const permissions: Permission[] = []

    for (let i = 0; i < dto.length; i++) {
      const id = dto[i].split('.')[0] as PermissionId

      const action = dto[i].split('.')[1] as PermissionAction

      if (permissions.some((permission) => permission.id === id)) {
        const index = permissions.findIndex((permission) => permission.id === id)

        if (action) {
          permissions[index].actions?.push(action)
        }
      }
      else {
        if (action) {
          permissions.push({ id, actions: [
            action,
          ] })
        }
        else {
          permissions.push({ id, actions: null })
        }
      }
    }

    return permissions
  }
}
