import type { CalendarDateTime } from '@/models/date/calendarDateTime.model.ts'
import type { Permission } from '@/models/permission/permission.model.ts'
import type { RoleName } from '@/models/role/role.enum.ts'
import type { RoleUuid } from '@/models/role/roleUuid.model.ts'

export interface Role {
  uuid: RoleUuid
  createdAt: CalendarDateTime
  updatedAt: CalendarDateTime
  name: RoleName
  permissions: Permission[]
}
