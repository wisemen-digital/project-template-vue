import sign from 'jwt-encode'
import { http, HttpResponse } from 'msw'

import { UserDetailDtoBuilder } from '@/models/user/detail/userDetailDto.builder'

interface Token {
  exp: number
}

function encodeJwt(token: Token): string {
  return sign(token, 'secret')
}

const USER = new UserDetailDtoBuilder().build()

export const authHandlers = [
  http.post('*/oauth/v2/token', () => {
    return HttpResponse.json({
      access_token: encodeJwt({ exp: new Date(new Date().getFullYear() + 1, 0, 1).getTime() }),
      expires_in: 43199,
      id_token: encodeJwt({ exp: new Date(new Date().getFullYear() + 1, 0, 1).getTime() }),
      refresh_token: 'refresh_token',
      token_type: 'Bearer',
    })
  }),

  http.get('*/api/v1/users/me', () => {
    return HttpResponse.json(USER)
  }),
]
