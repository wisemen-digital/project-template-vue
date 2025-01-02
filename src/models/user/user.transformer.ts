import type { UserIndexFilters } from '@/models/user/index/userIndexFilters.model'
import type { UserIndexFiltersDto } from '@/models/user/index/userIndexFiltersDto.model'

import type { UserCreateDto } from './create/userCreateDto.model'
import type { UserCreateForm } from './create/userCreateForm.model'
import type { User } from './detail/user.model'
import type { UserDto } from './detail/userDto.model'
import type { UserIndex } from './index/userIndex.model'
import type { UserIndexDto } from './index/userIndexDto.model'
import type { UserUpdateDto } from './update/userUpdateDto.model'
import type { UserUpdateForm } from './update/userUpdateForm.model'

export class UserIndexTransformer {
  static fromDto(dto: UserIndexDto): UserIndex {
    return {
      uuid: dto.uuid,
      firstName: dto.firstName,
      fullName: `${dto.firstName} ${dto.lastName}`,
      lastName: dto.lastName,
    }
  }
}

export class UserIndexFiltersTransformer {
  static fromDto(dto?: UserIndexFiltersDto): UserIndexFilters | undefined {
    if (dto === undefined) {
      return undefined
    }

    return {
      name: dto.name,
    }
  }
}

export class UserTransformer {
  static fromDto(dto: UserDto): User {
    return {
      uuid: dto.uuid,
      email: dto.email,
      firstName: dto.firstName,
      fullName: `${dto.firstName} ${dto.lastName}`,
      lastName: dto.lastName,
    }
  }
}

export class UserCreateTransformer {
  static toDto(form: UserCreateForm): UserCreateDto {
    return {
      firstName: form.firstName,
      lastName: form.lastName,
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

  static toForm(user: User): UserUpdateForm {
    return {
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
    }
  }
}
