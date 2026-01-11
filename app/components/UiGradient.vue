<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'blue' | 'amber'
}>(), {
  color: 'blue',
})

const gradients = {
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: '.527' },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
}
</script>

<template>
  <radialGradient
    cx="0"
    cy="0"
    r="1"
    gradientUnits="userSpaceOnUse"
  >
    {{ gradients[color].map((stop, index) => h('stop', { key: index, ...stop })) }}
  </radialGradient>
</template>
