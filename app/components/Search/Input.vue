<script setup lang="ts">
defineOptions({
  name: 'SearchInput',
  inheritAttrs: false,
})

defineModel<string>()
const status = ref('idle')
</script>

<template>
  <div class="group relative flex h-12">
    <SearchIcon class="pointer-events-none absolute top-0 left-4 h-full w-5 fill-slate-400 dark:fill-slate-500" />
    <input
      v-model="modelValue"
      data-autofocus
      :class="mergeCss([
                         'flex-auto appearance-none bg-transparent pl-12 text-slate-900 outline-hidden placeholder:text-slate-400 focus:w-full focus:flex-none sm:text-sm dark:text-white [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden',
                         status === 'stalled' ? 'pr-11' : 'pr-4',
                       ],
                       $attrs,
      )"
      v-bind="noCss($attrs)"
    >
    <div v-if="status === 'stalled'" class="absolute inset-y-0 right-3 flex items-center">
      <SearchLoadingIcon
        class="h-6 w-6 animate-spin stroke-slate-200 text-slate-400 dark:stroke-slate-700 dark:text-slate-500"
      />
    </div>
  </div>
</template>
