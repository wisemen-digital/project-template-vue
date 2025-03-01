import {
  describe,
  expect,
  it,
} from 'vitest'

import { UserUtil } from '@/models/user/user.util'

describe('userUtil', () => {
  describe('getFullName', () => {
    it('should return the full name when first and last name are provided', () => {
      const fullName = UserUtil.getFullName({
        firstName: 'John',
        lastName: 'Doe',
      })

      expect(fullName).toBe('John Doe')
    })

    it('should return null when first and last name are not provided', () => {
      const fullName = UserUtil.getFullName({
        firstName: null,
        lastName: null,
      })

      expect(fullName).toBeNull()
    })
  })

  describe('getInitials', () => {
    it('should return the initials when full name is provided', () => {
      const initials = UserUtil.getInitials('John Doe')

      expect(initials).toBe('JD')
    })

    it('should return the initials when a full name with multiple names is provided', () => {
      const initials = UserUtil.getInitials('John Maria Doe')

      expect(initials).toBe('JD')
    })
  })
})
