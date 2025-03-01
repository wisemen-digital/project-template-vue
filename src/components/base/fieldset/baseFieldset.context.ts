import {
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import { assert } from '@/utils/assert.util'

export interface BaseFieldsetContext {
  id: string
}

const baseFieldsetContextKey: InjectionKey<BaseFieldsetContext> = Symbol('baseFieldsetContext')

export function useInjectBaseFieldsetContext(): BaseFieldsetContext {
  const context = inject(baseFieldsetContextKey) ?? null

  assert(context !== null, '`useBaseFieldsetContext` must be used within a component that provides the context')

  return context
}

export function useProvideBaseFieldsetContext(context: BaseFieldsetContext): void {
  provide(baseFieldsetContextKey, context)
}
