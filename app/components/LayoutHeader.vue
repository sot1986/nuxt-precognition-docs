<script setup lang="ts">
const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = (window.scrollY > 0)
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none"
    :class="isScrolled ? 'dark:bg-slate-900/95 dark:backdrop-blur-sm dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75' : 'dark:bg-transparent'"
  >
    <div class="mr-6 flex lg:hidden">
      <MobileNavigation />
    </div>
    <div class="relative flex grow basis-0 items-center">
      <NuxtLink href="/" aria-label="Home page">
        <LogoMark class="h-9 w-9 lg:hidden" />
        <Logo class="hidden h-9 w-auto fill-slate-700 lg:block dark:fill-sky-100" />
      </NuxtLink>
    </div>
    <div class="-my-5 mr-6 sm:mr-8 md:mr-0">
      <Search />
    </div>
    <div class="relative flex basis-0 justify-end gap-6 sm:gap-8 md:grow">
      <ThemeSelector class="relative z-10" />
      <NuxtLink href="https://github.com" class="group" aria-label="GitHub">
        <GitHubIcon class="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
      </NuxtLink>
    </div>
  </header>
</template>
