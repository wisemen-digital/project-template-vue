import { z } from 'zod'

import type { CalendarDateTime } from '@/models/date/calendarDateTime.model'
import { CalendarDateTimeTransformer } from '@/models/date/calendarDateTime.transformer'
import { calendarDateTimeDtoSchema } from '@/models/date/calendarDateTimeDto.model.ts'
import {
  type PermissionDto,
  permissionDtoSchema,
} from '@/models/permission/permissionDto.model.ts'
import { type RoleUuid, roleUuidSchema } from '@/models/setting-role/roleUuid.model'
import { UuidUtil } from '@/utils/uuid.util'

export const roleDtoSchema = z.object({
  uuid: roleUuidSchema,
  createdAt: calendarDateTimeDtoSchema,
  updatedAt: calendarDateTimeDtoSchema,
  name: z.string(),
  permissions: permissionDtoSchema.array(),
})

export type RoleDto = z.infer<typeof roleDtoSchema>
export class RoleDtoBuilder {
  value: RoleDto = {
    uuid: UuidUtil.getRandom<RoleUuid>(),
    createdAt: CalendarDateTimeTransformer.toDto(new Date() as CalendarDateTime),
    updatedAt: CalendarDateTimeTransformer.toDto(new Date() as CalendarDateTime),
    name: 'admin',
    permissions: [],
  }

  constructor() {}

  build(): RoleDto {
    return this.value
  }

  withName(name: string): RoleDtoBuilder {
    this.value.name = name

    return this
  }

  withPermissions(permissions: PermissionDto[]): RoleDtoBuilder {
    this.value.permissions = permissions

    return this
  }

  withUuid(uuid: RoleUuid): RoleDtoBuilder {
    this.value.uuid = uuid

    return this
  }
}
