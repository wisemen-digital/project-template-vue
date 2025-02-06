import { HttpResponse } from 'msw'

import { TEST_ID } from '@/constants/testId.constant.ts'
import { PermissionDtoBuilder } from '@/models/permission/permissionDto.builder.ts'
import { RoleDtoBuilder } from '@/models/role/roleDto.builder.ts'
import { expect, test } from '@@/base.fixture'

test.describe('Role Overview', () => {
  const ROLE_1 = new RoleDtoBuilder()
    .withName('Role')
    .withPermissions([
      'role.read',
      'role.create',
      'role.update',
      'role.delete',
    ])
    .build()
  const PERMISSION_1 = new PermissionDtoBuilder().withName('role.read').build()
  const PERMISSION_2 = new PermissionDtoBuilder().withName('role.create').build()
  const PERMISSION_3 = new PermissionDtoBuilder().withName('role.update').build()
  const PERMISSION_4 = new PermissionDtoBuilder().withName('role.delete').build()
  const PERMISSION_5 = new PermissionDtoBuilder().withName('admin').build()

  test('display roles in the table', async ({ http, page, worker }) => {
    await worker.use(
      http.get('*/api/v1/roles*', ({ request }) => {
        const url = new URL(request.url)

        if (url.pathname === '/api/v1/users/me') {
          return undefined
        }

        return HttpResponse.json({ items: [
          ROLE_1,
        ] })
      }),
      http.get('*/api/v1/permissions*', ({ request }) => {
        const url = new URL(request.url)

        if (url.pathname === '/api/v1/users/me') {
          return undefined
        }

        return HttpResponse.json([
          PERMISSION_1,
          PERMISSION_2,
          PERMISSION_3,
          PERMISSION_4,
          PERMISSION_5,
        ])
      }),
    )

    await page.goto('/settings/roles-and-permissions')
    await expect(page.getByTestId(TEST_ID.APP_PAGE.TITLE)).toHaveText('Settings')
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.ROLE_NAME).nth(0)).toContainText('Role')
  })

  test('display permissions in the table', async ({ http, page, worker }) => {
    await worker.use(
      http.get('*/api/v1/roles*', ({ request }) => {
        const url = new URL(request.url)

        if (url.pathname === '/api/v1/users/me') {
          return undefined
        }

        return HttpResponse.json({ items: [
          ROLE_1,
        ] })
      }),
      http.get('*/api/v1/permissions*', ({ request }) => {
        const url = new URL(request.url)

        if (url.pathname === '/api/v1/users/me') {
          return undefined
        }

        return HttpResponse.json([
          PERMISSION_1,
          PERMISSION_2,
          PERMISSION_3,
          PERMISSION_4,
          PERMISSION_5,
        ])
      }),
    )

    await page.goto('/settings/roles-and-permissions')
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ID).nth(0)).toContainText('role')
    await page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.TAB_TOGGLE).click()
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ACTION).nth(0)).toContainText('read')
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ACTION).nth(1)).toContainText('create')
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ACTION).nth(2)).toContainText('update')
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ACTION).nth(3)).toContainText('delete')
    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.TABLE.PERMISSION_ID).nth(1)).toContainText('admin')
  })
})
