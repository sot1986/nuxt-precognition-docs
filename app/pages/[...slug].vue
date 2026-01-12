<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import DocsHeader from '~/components/DocsHeader.vue'

const route = useRoute()

const { data: page } = await useAsyncData(`page`, () => {
  return queryCollection('pages')
    .path(route.path)
    .first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: () => page.value?.title ?? 'Not Found',
  ogTitle: () => page.value?.title ?? 'Not Found',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt Docs` : 'Nuxt Docs'
  },
  description: () => page.value?.description ?? 'Not Found',
  ogDescription: () => page.value?.description ?? 'Not Found',
})
</script>

<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
    <article>
      <template v-if="page?.navigation">
        <DocsHeader
          :title="page.title"
          :section="page.section"
        />

        <main
          :class="twMerge(
            'prose max-w-none prose-slate dark:text-slate-400 dark:prose-invert',
            'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-34',
            'prose-lead:text-slate-500 dark:prose-lead:text-slate-400',
            'prose-a:font-semibold dark:prose-a:text-sky-400',
            'dark:[--tw-prose-background:var(--color-slate-900)] prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,var(--color-sky-300))] prose-a:hover:[--tw-prose-underline-size:6px] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,var(--color-sky-800))] dark:prose-a:hover:[--tw-prose-underline-size:6px]',
            'prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
            'dark:prose-hr:border-slate-800',
          )"
        >
          <ContentRenderer :value="page" />
        </main>
      </template>
      <NotFound v-else />
    </article>
    <PrevNextLinks />
  </div>
  <TableOfContents v-if="page" :page />
</template>
