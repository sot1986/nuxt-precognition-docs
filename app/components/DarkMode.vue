<script setup lang="ts">
import { mergeCss, noCss } from '~/utils/twMerge'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <g :class="mergeCss('hidden dark:inline', $attrs)" v-bind="noCss($attrs)" />
</template>
