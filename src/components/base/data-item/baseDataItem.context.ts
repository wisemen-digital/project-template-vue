import {
  inject,
  type InjectionKey,
  provide,
} from 'vue'

import { assert } from '@/utils/assert.util'

export interface BaseDataItemContext {
  id: string
}

const baseDataItemContextKey: InjectionKey<BaseDataItemContext> = Symbol('baseDataItemContext')

export function useInjectBaseDataItemContext(): BaseDataItemContext {
  const context = inject(baseDataItemContextKey) ?? null

  assert(context !== null, '`useBaseDataItemContext` must be used within a component that provides the context')

  return context
}

export function useProvideBaseDataItemContext(context: BaseDataItemContext): void {
  provide(baseDataItemContextKey, context)
}
