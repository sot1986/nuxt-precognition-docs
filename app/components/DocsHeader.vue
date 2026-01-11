<script setup lang="ts">
defineOptions({
  name: 'DocsHeader',
})

defineProps<{
  section: string
  title: string
}>()
</script>

<template>
  <header class="mb-9 space-y-1">
    <p class="font-display text-sm font-medium text-sky-500">
      {{ section }}
    </p>

    <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
      {{ title }}
    </h1>
  </header>
</template>
