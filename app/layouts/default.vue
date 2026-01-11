<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
    class: 'h-full antialiased',
  },
  bodyAttrs: {
    class: 'flex min-h-full bg-white dark:bg-slate-900',
  },
})

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div class="flex flex-col w-screen min-h-screen">
    <LayoutHeader />

    <Hero v-if="isHomePage" />

    <div class="relative mx-auto flex w-full max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
      <div class="hidden lg:relative lg:block lg:flex-none">
        <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
        <div class="absolute top-16 right-0 bottom-0 hidden h-12 w-px bg-linear-to-t from-slate-800 dark:block" />
        <div class="absolute top-28 right-0 bottom-0 hidden w-px bg-slate-800 dark:block" />
        <div class="sticky top-19 -ml-0.5 h-full w-64 overflow-x-hidden overflow-y-auto py-16 pr-8 pl-0.5 xl:w-72 xl:pr-16">
          <SideNavigation />
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>
