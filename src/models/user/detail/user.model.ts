import { z } from 'zod'

import { calendarDateSchema } from '@/models/date/calendarDate.model.ts'
import { userUuidSchema } from '@/models/user/userUuid.model'

export const userSchema = z.object({
  uuid: userUuidSchema,
  birthDate: calendarDateSchema,
  firstName: z.string(),
  fullName: z.string(),
  lastName: z.string(),
})

export type User = z.infer<typeof userSchema>
