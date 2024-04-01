import { useToast } from '@wisemen/vue-core'
import { AxiosError } from 'axios'
import { useI18n } from 'vue-i18n'

interface UserErrorToastReturnType {
  show: (error: unknown) => void
}

export function useErrorToast(): UserErrorToastReturnType {
  const { t } = useI18n()
  const toast = useToast()

  function show(error: unknown): void {
    if (error instanceof AxiosError) {
      const { response } = error

      toast.showErrorToast({
        description: response?.data?.message ?? t('error.default_error.description'),
        title: t('error.default_error.title'),
      })

      return
    }

    throw error
  }

  return {
    show,
  }
}