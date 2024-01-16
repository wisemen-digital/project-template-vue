import type { ComputedRef } from 'vue'
import { computed, ref } from 'vue'

interface UsePageLoaderReturnType {
	isLoading: ComputedRef<boolean>
	setIsLoading: (value: boolean) => void
}

const isLoading = ref<boolean>(false)

export function usePageLoader(): UsePageLoaderReturnType {
	function setIsLoading(value: boolean): void {
		isLoading.value = value
	}

	return {
		isLoading: computed<boolean>(() => isLoading.value),
		setIsLoading,
	}
}
