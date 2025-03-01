import type { UserDetail } from '@/models/user/detail/userDetail.model'

export class UserUtil {
  static getFullName(user: Pick<UserDetail, 'firstName' | 'lastName'>): string | null {
    const { firstName, lastName } = user

    if (firstName === null || lastName === null) {
      return null
    }

    return `${firstName} ${lastName}`
  }

  static getInitials(fullName: string): string {
    const firstName = fullName.split(' ')[0]
    const lastName = fullName.split(' ').slice(-1)[0]

    return `${firstName[0]}${lastName[0]}`
  }
}
