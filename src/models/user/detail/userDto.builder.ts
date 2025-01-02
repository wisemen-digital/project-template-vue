import type { UserDto } from '@/models/user/detail/userDto.model.ts'
import type { UserUuid } from '@/models/user/userUuid.model.ts'
import { UuidUtil } from '@/utils/uuid.util.ts'

export class UserDtoBuilder {
  value: UserDto = {
    uuid: UuidUtil.getRandom<UserUuid>(),
    email: 'john.doe@jhonny.com',
    firstName: 'John',
    lastName: 'Doe',
  }

  constructor() {}

  build(): UserDto {
    return this.value
  }

  withEmail(email: string): UserDtoBuilder {
    this.value.email = email

    return this
  }

  withFirstName(firstName: string): UserDtoBuilder {
    this.value.firstName = firstName

    return this
  }

  withLastName(lastName: string): UserDtoBuilder {
    this.value.lastName = lastName

    return this
  }

  withUuid(uuid: UserUuid): UserDtoBuilder {
    this.value.uuid = uuid

    return this
  }
}
