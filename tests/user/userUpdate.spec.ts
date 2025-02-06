import { TEST_ID } from '@/constants/testId.constant'
import { UserDtoBuilder } from '@/models/user/detail/userDto.builder'
import { UserIndexDtoBuilder } from '@/models/user/index/userIndexDto.builder'
import type { UserUuid } from '@/models/user/userUuid.model'
import { UuidUtil } from '@/utils/uuid.util'
import { expect, test } from '@@/base.fixture'
import { InterceptorUtil } from '@@/utils/interceptor.util'

test.describe('User Update', () => {
  test('update an existing user', async ({ page }) => {
    const USER_UUID_1 = UuidUtil.getRandom<UserUuid>()

    const USER_INDEX_1 = new UserIndexDtoBuilder()
      .withUuid(USER_UUID_1)
      .withFirstName('John')
      .withLastName('Doe')
      .build()

    const USER_1 = new UserDtoBuilder()
      .withUuid(USER_UUID_1)
      .build()

    await InterceptorUtil.getPaginated(page, 'users?limit=20&offset=0', [
      USER_INDEX_1,
    ])

    await InterceptorUtil.get(page, `users/${USER_UUID_1}`, USER_1)

    const updateRequest = await InterceptorUtil.post(page, `users/${USER_UUID_1}`, USER_1)

    await page.goto(`/users/${USER_UUID_1}`)

    await expect(page.getByTestId(TEST_ID.APP_PAGE.TITLE)).toHaveText('John Doe')

    await page.getByTestId(TEST_ID.USERS.DETAIL.EDIT_BUTTON).click()

    await page.getByTestId(TEST_ID.USERS.FORM.FIRST_NAME_INPUT).fill('James')
    await page.getByTestId(TEST_ID.USERS.FORM.LAST_NAME_INPUT).fill('Dyson')
    await page.getByTestId(TEST_ID.USERS.FORM.SUBMIT_BUTTON).click()

    await expect(page.getByTestId(TEST_ID.USERS.UPDATE.SUCCESS_TOAST)).toBeVisible()
    expect(updateRequest.getCount()).toBe(1)
  })
})
