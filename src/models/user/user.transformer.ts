import type { RoleUuid } from '@/models/setting-role/roleUuid.model.ts'
import type { UserDetail } from '@/models/user/detail/userDetail.model'
import type { UserDetailDto } from '@/models/user/detail/userDetailDto.model'
import type { UserIndexFilters } from '@/models/user/index/userIndexFilters.model'
import type { UserIndexFiltersDto } from '@/models/user/index/userIndexFiltersDto.model'
import type { UserUuid } from '@/models/user/userUuid.model.ts'

import type { UserIndex } from './index/userIndex.model'
import type { UserIndexDto } from './index/userIndexDto.model'
import type { UserUpdateDto } from './update/userUpdateDto.model'
import type { UserUpdateForm } from './update/userUpdateForm.model'

export class UserIndexTransformer {
  static fromDto(dto: UserIndexDto): UserIndex {
    return {
      uuid: dto.uuid as UserUuid,
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
    }
  }
}

export class UserIndexFiltersTransformer {
  static toDto(filters?: UserIndexFilters): UserIndexFiltersDto {
    return {
      permissions: filters?.permissions,
    }
  }
}

export class UserTransformer {
  static fromDto(dto: UserDetailDto): UserDetail {
    return {
      uuid: dto.uuid as UserUuid,
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      permissions: dto.roles.flatMap((role) => role.permissions),
      roles: dto.roles.map((role) => ({
        uuid: role.uuid as RoleUuid,
        name: role.name,
      })),
    }
  }
}

export class UserUpdateTransformer {
  static toDto(form: UserUpdateForm): UserUpdateDto {
    return {
      firstName: form.firstName,
      lastName: form.lastName,
    }
  }

  static toForm(user: UserDetail): UserUpdateForm {
    return {
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
    }
  }
}
