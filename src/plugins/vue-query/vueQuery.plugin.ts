import {
  QueryCache,
  QueryClient,
  VueQueryPlugin,
  type VueQueryPluginOptions,
} from '@tanstack/vue-query'
import { useClipboard } from '@vueuse/core'
import { useToast } from '@wisemen/vue-core'
import { type App, computed } from 'vue'

import { TEST_ID } from '@/constants/testId.constant.ts'
import { ApiErrorUtil } from '@/utils/apiError.util.ts'
import { LoggerUtil } from '@/utils/logger.util.ts'

export const queryClient = new QueryClient()

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
    queryCache: new QueryCache({
      onError: (error): void => {
        const toast = useToast()

        const clipboard = useClipboard({
          copiedDuring: 2000,
        })

        LoggerUtil.logError(error)

        if (error.name === 'ZodError') {
          toast.error({
            testId: TEST_ID.SHARED.MALFORMED_RESPONSE_TOAST,
            action: {
              label: computed<string>(() => clipboard.copied.value ? 'Copied!' : 'Copy error'),
              onClick: () => {
                void clipboard.copy(`API returned a malformed response.\n\n${JSON.stringify(error, null, 2)}`)
              },
            },
            durationInMs: 4000,
            icon: 'alertCircle',
            message: `API returned a malformed response.`,
          })

          return
        }

        if (ApiErrorUtil.isError(error)) {
          toast.error({
            durationInMs: 4000,
            icon: 'alertCircle',
            message: error.errors?.[0]?.detail,
          })

          return
        }

        toast.error({
          icon: 'alertCircle',
          message: error.message,
        })
      },
    }),
  },
}

export const vueQueryPlugin: {
  install: (app: App) => void
} = {
  install: (app: App): void => {
    app.use(VueQueryPlugin, vueQueryPluginOptions)
  },
}
