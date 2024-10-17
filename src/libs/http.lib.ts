import { createHttpZodClient } from '@appwise/zod-http-client'
import { useClipboard } from '@vueuse/core'
import { useToast } from '@wisemen/vue-core'
import { computed } from 'vue'

import { CURRENT_ENVIRONMENT } from '@/constants/environment.constant.ts'

import {
  authAxios,
  axios,
} from './axios.lib'

interface ZodError {
  error: unknown
  method: string
  url: string
}

function onZodError({ error, method, url }: ZodError): void {
  const toast = useToast()
  const clipboard = useClipboard({
    copiedDuring: 2000,
  })

  if (CURRENT_ENVIRONMENT !== 'production') {
    toast.error({
      action: {
        label: computed<string>(() => clipboard.copied.value ? 'Copied!' : 'Copy error'),
        onClick: () => {
          void clipboard.copy(`${method.toUpperCase()} ${url} returned a malformed response.\n\n${JSON.stringify(error, null, 2)}`)
        },
      },
      durationInMs: 20000,
      icon: 'alertCircle',
      message: `${method.toUpperCase()} ${url} returned a malformed response.`,
    })
  }

  console.error(`${method.toUpperCase()} ${url} returned a malformed response\n\n`, JSON.stringify(error, null, 2))
}

export const httpClient = createHttpZodClient({
  axios,
  onZodError,
})

export const authHttpClient = createHttpZodClient({
  axios: authAxios,
  onZodError,
})
