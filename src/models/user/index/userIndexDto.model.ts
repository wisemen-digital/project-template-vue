import { z } from 'zod'

import { userUuidSchema } from '@/models/user/userUuid.model'

export const userIndexDtoSchema = z.object({
  uuid: userUuidSchema,
  firstName: z.string(),
  lastName: z.string(),
})

export type UserIndexDto = z.infer<typeof userIndexDtoSchema>
