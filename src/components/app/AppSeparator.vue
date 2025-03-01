<script setup lang="ts">
const props = withDefaults(defineProps<{
  direction?: 'horizontal' | 'vertical'
}>(), {
  direction: 'horizontal',
})
</script>

<template>
  <div
    :class="{
      'h-full w-px': props.direction === 'vertical',
      'h-px w-full': props.direction === 'horizontal',
    }"
    role="presentation"
    class="bg-tertiary"
  />
</template>
