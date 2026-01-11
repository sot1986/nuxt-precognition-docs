<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'config',
  },
})

const fill = 'oklch(82.8% 0.111 230.318)'
</script>

<template>
  <svg aria-hidden="true" viewBox="0 0 42 10" fill="none">
    <circle cx="5" cy="5" r="4.5" :fill="title === 'config' ? fill : undefined" />
    <circle cx="21" cy="5" r="4.5" :fill="title === 'form' ? fill : undefined" />
    <circle cx="37" cy="5" r="4.5" :fill="title === 'plugin' ? fill : undefined" />
  </svg>
</template>
