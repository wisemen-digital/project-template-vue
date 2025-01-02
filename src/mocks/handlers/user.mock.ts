import { http, HttpResponse } from 'msw'

import type { PaginatedDtoData } from '@/models/paginated-data/paginatedData.model.ts'
import { PreferenceDtoBuilder } from '@/models/preference/preferenceDto.builder.ts'
import type { PreferenceDto } from '@/models/preference/preferenceDto.model.ts'
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

const PREFERENCE: PreferenceDto = new PreferenceDtoBuilder().build()

export const userHandlers = [
  http.get('*/api/v1/users/*/preferences', () => {
    return HttpResponse.json(PREFERENCE)
  }),

  http.get('*/api/v1/users*', ({ request }) => {
    const url = new URL(request.url)

    if (url.pathname === '/api/v1/users/me') {
      return undefined
    }

    return HttpResponse.json(getPaginatedJson(users))
  }),

]
