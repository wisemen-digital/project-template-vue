import type {
  PaginatedData,
  PaginationOptions,
} from '@wisemen/vue-core'

import { httpClient } from '@/libs/http.lib'
import { paginatedDataSchema } from '@/models/paginated-data/paginatedData.model'
import type { UserCreateForm } from '@/models/user/create/userCreateForm.model'
import type { User } from '@/models/user/detail/user.model'
import { userDtoSchema } from '@/models/user/detail/userDto.model'
import type { UserIndex } from '@/models/user/index/userIndex.model'
import { userIndexDtoSchema } from '@/models/user/index/userIndexDto.model'
import type { UserIndexFilters } from '@/models/user/index/userIndexFilters.model'
import type { UserUpdateForm } from '@/models/user/update/userUpdateForm.model'
import {
  UserCreateTransformer,
  UserIndexFiltersTransformer,
  UserIndexTransformer,
  UserTransformer,
  UserUpdateTransformer,
} from '@/models/user/user.transformer'
import type { UserUuid } from '@/models/user/userUuid.model'
import { PaginationDtoBuilder } from '@/utils/paginationDtoBuilder.util'

export class UserService {
  static async create(form: UserCreateForm): Promise<User> {
    const data = await httpClient.post({
      body: UserCreateTransformer.toDto(form),
      responseSchema: userDtoSchema,
      url: '/users',
    })

    return UserTransformer.fromDto(data)
  }

  static async getAll(paginationOptions: PaginationOptions<UserIndexFilters>): Promise<PaginatedData<UserIndex>> {
    const data = await httpClient.get({
      config: {
        params: new PaginationDtoBuilder<UserIndexFilters>(
          paginationOptions,
        ).build(UserIndexFiltersTransformer.fromDto),
      },
      responseSchema: paginatedDataSchema(userIndexDtoSchema),
      url: '/users',
    })

    return {
      data: data.items.map(UserIndexTransformer.fromDto),
      meta: {
        limit: data.meta.limit,
        offset: data.meta.offset,
        total: data.meta.total,
      },
    }
  }

  static async getByUuid(userUuid: UserUuid): Promise<User> {
    const data = await httpClient.get({
      responseSchema: userDtoSchema,
      url: `/users/${userUuid}`,
    })

    return UserTransformer.fromDto(data)
  }

  static async getMe(): Promise<User> {
    const data = await httpClient.get({
      responseSchema: userDtoSchema,
      url: `/users/me`,
    })

    return UserTransformer.fromDto(data)
  }

  static async update(userUuid: UserUuid, form: UserUpdateForm): Promise<User> {
    const data = await httpClient.post({
      body: UserUpdateTransformer.toDto(form),
      responseSchema: userDtoSchema,
      url: `/users/${userUuid}`,
    })

    return UserTransformer.fromDto(data)
  }
}
