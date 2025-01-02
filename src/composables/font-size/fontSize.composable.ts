import { useLocalStorage } from '@vueuse/core'
import type { SelectItem } from '@wisemen/vue-core'
import {
  computed,
  type ComputedRef,
  type Ref,
  watch,
} from 'vue'

import type { FontSize } from '@/models/preference/fontSize.model.ts'
import { i18nPlugin } from '@/plugins/i18n/i18n.plugin'
import { createI18nKeyMap } from '@/types/enum.type'

interface UseFontSizeReturnType {
  displayFn: (value: FontSize) => string
  items: ComputedRef<SelectItem<FontSize>[]>
  value: Ref<FontSize>
}

const LOCAL_STORAGE_KEY = 'fontSize'

export function useFontSizeSelect(): UseFontSizeReturnType {
  const fontSizes: FontSize[] = [
    'smaller',
    'small',
    'default',
    'large',
    'larger',
  ]

  const i18nKeys = createI18nKeyMap<FontSize>({
    default: 'module.setting.font_size.default',
    large: 'module.setting.font_size.large',
    larger: 'module.setting.font_size.larger',
    small: 'module.setting.font_size.small',
    smaller: 'module.setting.font_size.smaller',
  })

  const fontSize = useLocalStorage<FontSize>(LOCAL_STORAGE_KEY, 'default')

  const value = computed<FontSize>({
    get: () => fontSize.value,
    set: (value) => {
      fontSize.value = value
    },
  })

  function displayFn(value: FontSize): string {
    return i18nPlugin.global.t(i18nKeys.get(value)!)
  }

  const items = computed<SelectItem<FontSize>[]>(() => fontSizes.map((item) => ({
    type: 'option',
    value: item,
  })))

  return {
    displayFn,
    items,
    value,
  }
}

export function useFontSize(): void {
  const fontSize = useLocalStorage<FontSize>(LOCAL_STORAGE_KEY, 'default')

  const fontSizeToPxMap = new Map<FontSize, number>([
    [
      'smaller',
      12,
    ],
    [
      'small',
      14,
    ],
    [
      'default',
      16,
    ],
    [
      'large',
      18,
    ],
    [
      'larger',
      20,
    ],
  ])

  watch(fontSize, () => {
    document.documentElement.style.fontSize = `${fontSizeToPxMap.get(fontSize.value)}px`
  }, {
    immediate: true,
  })
}
