<script setup lang="ts">
import type { NuxtLinkProps } from '#app'
import { mergeCss, noCss } from '~/utils/twMerge'

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  href?: NuxtLinkProps['href']
}>(), {
  variant: 'primary',
})

const variantStyles = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}
</script>

<template>
  <button
    v-if="!href"
    v-bind="noCss($attrs)"
    :class="mergeCss(variantStyles[variant], $attrs)"
  >
    <slot />
  </button>
  <NuxtLink
    v-else
    :href
    v-bind="noCss($attrs)"
    :class="mergeCss(variantStyles[variant], $attrs)"
  >
    <slot />
  </NuxtLink>
</template>
