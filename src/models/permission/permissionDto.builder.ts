import type { PermissionDto } from '@/models/permission/permissionDto.model'

export class PermissionDtoBuilder {
  value: PermissionDto = 'admin'

  constructor() {}

  build(): PermissionDto {
    return this.value
  }

  withName(name: string): PermissionDtoBuilder {
    this.value = name

    return this
  }
}
