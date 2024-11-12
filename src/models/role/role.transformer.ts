import { CalendarDateTimeTransformer } from '@/models/date/calendarDateTime.transformer.ts'
import { PermissionTransformer } from '@/models/permission/permission.transformer.ts'
import type { RoleName } from '@/models/role/role.enum.ts'
import type { Role } from '@/models/role/role.model.ts'
import type { RoleDto } from '@/models/role/roleDto.model.ts'

export class RoleTransformer {
  static fromDto(dto: RoleDto): Role {
    return {
      uuid: dto.uuid,
      createdAt: CalendarDateTimeTransformer.fromDto(dto.createdAt),
      updatedAt: CalendarDateTimeTransformer.fromDto(dto.updatedAt),
      name: dto.name as RoleName,
      permissions: PermissionTransformer.fromDto(dto.permissions),
    }
  }
}
