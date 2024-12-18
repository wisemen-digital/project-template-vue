import { http, HttpResponse } from 'msw'

import type { PaginatedDtoData } from '@/models/paginated-data/paginatedData.model.ts'
import { UserIndexDtoBuilder } from '@/models/user/index/userIndexDto.builder.ts'
import type { UserIndexDto } from '@/models/user/index/userIndexDto.model.ts'

function getPaginatedJson<T>(response: T[]): PaginatedDtoData {
  return {
    items: response,
    meta: {
      limit: response.length,
      offset: 0,
      total: response.length,
    },
  }
}

const users: UserIndexDto[] = [
  new UserIndexDtoBuilder()
    .withFirstName('John')
    .withLastName('Doe')
    .build(),
  new UserIndexDtoBuilder()
    .withFirstName('Jane')
    .withLastName('Johnson')
    .build(),
]

export const userHandlers = [
  http.get('*/api/v1/users*', () => {
    return HttpResponse.json(getPaginatedJson(users))
  }),
]
