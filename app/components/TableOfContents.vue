<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  page: PagesCollectionItem
}>()

const isActive = computed(() => (title: string) => false)
</script>

<template>
  <div class="hidden xl:sticky xl:top-19 xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
    <nav aria-labelledby="on-this-page-title" class="w-56">
      <template v-if="page.body.toc?.links.length">
        <h2
          id="on-this-page-title"
          class="font-display text-sm font-medium text-slate-900 dark:text-white"
        >
          On this page
        </h2>
        <ol role="list" class="mt-4 space-y-3 text-sm">
          <li v-for="section in page.body.toc.links" :key="section.id">
            <h3>
              <NuxtLink
                :to="`#${section.id}`"
                :class="twMerge(
                  isActive(section.text)
                    ? 'text-sky-500'
                    : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300',
                )"
              >
                {{ section.text }}
              </NuxtLink>
            </h3>

            <ol
              v-if="section.children?.length"
              role="list"
              class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
            >
              <li v-for="subSection in section.children" :key="subSection.id">
                <NuxtLink
                  :to="`#${subSection.id}`"
                  :class=" isActive(subSection.text)
                    ? 'text-sky-500'
                    : 'hover:text-slate-600 dark:hover:text-slate-300'
                  "
                >
                  {{ subSection.text }}
                </NuxtLink>
              </li>
            </ol>
          </li>
        </ol>
      </template>
    </nav>
  </div>
</template>
