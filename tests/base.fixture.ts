// Using  page.waitForTimeout to ensure animations have completed

import AxeBuilder from '@axe-core/playwright'
import { expect, test as base } from '@playwright/test'
import { http } from 'msw'
import type { MockServiceWorker } from 'playwright-msw'
import { createWorkerFixture } from 'playwright-msw'

import { TEST_ID } from '@/constants/testId.constant.ts'
import { handlers } from '@/mocks/handlers'

const test = base.extend<{
  http: typeof http
  worker: MockServiceWorker
}>({
  http,
  page: async ({ page }, use) => {
    const errors: string[] = []

    page.on('console', (event) => {
      if (event.type() === 'error') {
        errors.push(event.text())
      }
    })

    await use(page)

    await page.waitForTimeout(500)

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
      ])
      .analyze()

    expect(errors).toStrictEqual([])

    await expect(page.getByTestId(TEST_ID.SHARED.MALFORMED_RESPONSE_TOAST)).toBeHidden()

    expect(accessibilityScanResults.violations).toEqual([])
    //
    // await testInfo.attach('accessibility-scan-results', {
    //   body: JSON.stringify(accessibilityScanResults, null, 2),
    //   contentType: 'application/json',
    // })
  },
  worker: createWorkerFixture(handlers, {
    waitForPageLoad: true,
  }),
})

export { expect, test }
