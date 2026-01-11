<script setup lang="ts">
const route = useRoute()

const { data } = useAsyncData(
  `page-links-${route.path}`,
  () => queryCollectionItemSurroundings('pages', route.path, {
    before: 1,
    after: 1,
    fields: ['title', 'path'],
  }),
)

const links = computed(() => ({
  prev: data.value?.at(0) || null,
  next: data.value?.at(1) || null,
}))
</script>

<template>
  <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
    <PageLink
      v-if="links.prev"
      dir="prev"
      :title="links.prev.title"
      :to="links.prev.path"
    />
    <PageLink
      v-if="links.next"
      dir="next"
      class="ml-auto text-right"
      :title="links.next.title"
      :to="links.next.path"
    />
  </dl>
</template>
