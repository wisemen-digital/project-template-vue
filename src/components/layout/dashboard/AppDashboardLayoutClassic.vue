<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex size-full flex-1 overflow-hidden">
    <slot name="sidebar" />

    <div class="flex flex-1 overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
