<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

defineProps<{
  title: string
  to: string
  dir: 'prev' | 'next'
}>()
</script>

<template>
  <div>
    <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
      {{ dir === 'next' ? 'Next' : 'Previous' }}
    </dt>
    <dd class="mt-1">
      <NuxtLink
        :to
        :class="twMerge(
          'flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300',
          dir === 'prev' && 'flex-row-reverse',
        )"
      >
        {{ title }}
        <ArrowIcon
          :class="twMerge(
            'h-4 w-4 flex-none fill-current',
            dir === 'prev' && '-scale-x-100',
          )"
        />
      </NuxtLink>
    </dd>
  </div>
</template>
