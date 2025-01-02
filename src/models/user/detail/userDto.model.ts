import { z } from 'zod'

import { userUuidSchema } from '@/models/user/userUuid.model'

export const userDtoSchema = z.object({
  uuid: userUuidSchema,
  email: z.string().email().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
})

export type UserDto = z.infer<typeof userDtoSchema>
