import { HttpResponse } from 'msw'

import { TEST_ID } from '@/constants/testId.constant.ts'
import { UserIndexDtoBuilder } from '@/models/user/index/userIndexDto.builder.ts'
import { expect, test } from '@@/base.fixture'
import { getPaginatedJson } from '@@/utils/interceptor.util.ts'

test('display users in the table', async ({ http, page, worker }) => {
  const USER_1 = new UserIndexDtoBuilder()
    .withFirstName('Charles')
    .withEmail('charles.doe@gmail.com')
    .withLastName('Doe')
    .withEmail('charles.doe@email.com')
    .build()

  const USER_2 = new UserIndexDtoBuilder()
    .withFirstName('Nancy')
    .withEmail('nancy.johnson@gmail.com')
    .withLastName('Johnson')
    .withEmail('nancy.johnson@email.com')
    .build()

  await worker.use(
    http.get('*/api/v1/users', () => {
      return HttpResponse.json(getPaginatedJson([
        USER_1,
        USER_2,
      ]))
    }),
  )

  await page.goto('/users')

  await expect(page.getByTestId(TEST_ID.USERS.OVERVIEW.TABLE.EMAIL).nth(0)).toContainText('charles.doe@email.com')
})
