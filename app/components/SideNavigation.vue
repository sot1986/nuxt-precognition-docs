<script setup lang="ts">
import { mergeCss, noCss } from '@/utils/twMerge'

defineOptions({
  name: 'SideNavigation',
  inheritAttrs: false,
})

const { data } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('pages', ['title', 'path', 'section', 'stem', 'navigation'])
})

const items = computed(
  () => Array.from(new Set(data.value?.map(
    item => item.section,
  ))).map(
    s => ({
      section: s,
      links: data.value!.filter(i => i.section === s).sort((a, b) => (a.stem ?? '') < (b.stem ?? '') ? -1 : 0),
    }),
  ),
)
</script>

<template>
  <nav
    :class="mergeCss('text-base lg:text-sm', $attrs)"
    v-bind="noCss($attrs)"
  >
    <ul role="list" class="space-y-9">
      <li v-for="item in items" :key="item.section">
        <h2 class="font-display font-medium text-slate-900 dark:text-white">
          {{ item.section }}
        </h2>
        <ul
          role="list"
          class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
        >
          <li v-for="link in item.links" :key="link.path" class="relative">
            <NuxtLink
              :to="link.path"
              class="block w-full pl-3.5 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300 aria-[current=page]:font-semibold aria-[current=page]:text-sky-500 aria-[current=page]:before:bg-sky-500"
              aria-current-value="page"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
