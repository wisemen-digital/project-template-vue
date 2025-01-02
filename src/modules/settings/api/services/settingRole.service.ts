import { z } from 'zod'

import { httpClient } from '@/libs/http.lib.ts'
import type { Role } from '@/models/role/role.model.ts'
import { RoleTransformer } from '@/models/role/role.transformer.ts'
import { roleDtoSchema } from '@/models/role/roleDto.model.ts'
import type { RoleUuid } from '@/models/role/roleUuid.model.ts'

export class SettingRoleService {
  static async create(roleName: string): Promise<void> {
    await httpClient.post({
      body: {
        name: roleName,
      },
      responseSchema: z.unknown(),
      url: '/roles',
    })
  }

  static async delete(roleUuid: RoleUuid): Promise<void> {
    await httpClient.delete({
      responseSchema: z.unknown(),
      url: `/roles/${roleUuid}`,
    })
  }

  static async getAll(): Promise<Role[]> {
    const dto = await httpClient.get({
      responseSchema: z.object({ items: roleDtoSchema.array() }),
      url: '/roles',
    })

    return dto.items.map(RoleTransformer.fromDto)
  }

  static async updateRolesInBulk(roles: Role[]): Promise<void> {
    await httpClient.post({
      body: {
        roles: roles.map((role) => ({
          uuid: role.uuid,
          name: role.name,
          permissions: role.permissions,
        })),
      },
      responseSchema: z.unknown(),
      url: '/roles/bulk',
    })
  }
}
