<script setup lang="ts">
import DocsHeader from '~/components/DocsHeader.vue'
import DocsProse from '~/components/DocsProse.vue'

const route = useRoute()

const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection('pages')
    .path(route.path)
    .first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
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

        <DocsProse as="main">
          <ContentRenderer :value="page" />
        </DocsProse>
      </template>
      <NotFound v-else />
    </article>
    <PrevNextLinks />
  </div>
  <TableOfContents v-if="page" :page />
</template>
