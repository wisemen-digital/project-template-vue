import type { Permission } from '@/client'
import type { RoleUuid } from '@/models/setting-role/roleUuid.model'
import type { UserUuid } from '@/models/user/userUuid.model'

export interface UserDetail {
  uuid: UserUuid
  email: string
  firstName: string | null
  lastName: string | null
  permissions: Permission[]
  roles: {
    uuid: RoleUuid
    name: string
  }[]
}
