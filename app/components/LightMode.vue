<script setup lang="ts">
import { mergeCss, noCss } from '~/utils/twMerge'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <g :class="mergeCss('dark:hidden', $attrs)" v-bind="noCss($attrs)" />
</template>
