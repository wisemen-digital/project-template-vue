import { HttpResponse } from 'msw'

import { TEST_ID } from '@/constants/testId.constant'
import { PermissionDtoBuilder } from '@/models/permission/permissionDto.builder.ts'
import { RoleDtoBuilder } from '@/models/role/roleDto.builder.ts'
import { expect, test } from '@@/base.fixture'
import { InterceptorUtil } from '@@/utils/interceptor.util'

test.describe('Role Create', () => {
  test('create a new role', async ({ http, page, worker }) => {
    const ROLE_1 = new RoleDtoBuilder().build()
    const PERMISSION_1 = new PermissionDtoBuilder().withName('admin').build()

    await worker.use(
      http.get('*/api/v1/roles*', ({ request }) => {
        const url = new URL(request.url)

        if (url.pathname === '/api/v1/users/me') {
          return undefined
        }

        return HttpResponse.json({ items: [] })
      }),
      http.get('*/api/v1/permissions*', ({ request }) => {
        const url = new URL(request.url)

        if (url.pathname === '/api/v1/users/me') {
          return undefined
        }

        return HttpResponse.json([
          PERMISSION_1,
        ])
      }),
    )

    const createRequest = await InterceptorUtil.post(page, 'roles', ROLE_1)

    await page.goto('/settings/roles-and-permissions')

    await page.getByTestId(TEST_ID.SETTINGS.ROLES.OVERVIEW.CREATE_BUTTON).click()

    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.CREATE_DIALOG)).toBeVisible()

    await page.getByTestId(TEST_ID.SETTINGS.ROLES.FORM.NAME_INPUT).fill('Editor')
    await page.getByTestId(TEST_ID.SETTINGS.ROLES.FORM.SUBMIT_BUTTON).click()

    await expect(page.getByTestId(TEST_ID.SETTINGS.ROLES.CREATE_DIALOG)).toBeHidden()
    expect(createRequest.getCount()).toBe(1)
  })
})
