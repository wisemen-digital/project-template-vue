import { z } from 'zod'

export const userSubjectSchema = z.string().brand('UserSubject')
export type UserSubject = z.infer<typeof userSubjectSchema>
