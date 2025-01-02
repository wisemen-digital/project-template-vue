import { z } from 'zod'

import { userUuidSchema } from '@/models/user/userUuid.model'

export const userSchema = z.object({
  uuid: userUuidSchema,
  email: z.string().email().nullable(),
  firstName: z.string().nullable(),
  fullName: z.string(),
  lastName: z.string().nullable(),
})

export type User = z.infer<typeof userSchema>
