<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('hero').all())

const activeTab = ref(data.value?.at(0)?.title ?? '-')
const currentTab = computed(() => data.value?.find(tab => tab.title === activeTab.value))
</script>

<template>
  <!-- eslint-disable vue/no-v-text-v-html-on-component -->
  <div class="overflow-hidden bg-slate-900 dark:-mt-19 dark:-mb-32 dark:pt-19 dark:pb-32">
    <div class="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
        <div class="relative z-10 md:text-center lg:text-left">
          <NuxtImg
            class="absolute right-full bottom-full -mr-72 -mb-56 opacity-50"
            src="/images/blur-cyan.png"
            alt=""
            :width="530"
            :height="530"
            :quality="90"
          />
          <div class="relative">
            <p class="inline bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Nuxt Precognition
            </p>
            <p class="mt-3 text-2xl tracking-tight text-slate-400">
              A validation module for Nuxt that implements the
              <NuxtLink
                href="https://laravel.com/docs/10.x/precognition"
                class="italic underline hover:text-slate-500"
                external
                target="_blank"
                referrerpolicy="no-referrer"
              >
                Precognition protocol
              </NuxtLink>
              in a backend-agnostic way.
            </p>
            <div class="mt-8 flex gap-4 md:justify-center lg:justify-start">
              <UiButton href="/installation">
                Get started
              </UiButton>
              <UiButton :href="$config.public.githubLink" variant="secondary" target="_blank">
                View on GitHub
              </UiButton>
            </div>
          </div>
        </div>
        <div class="relative lg:static xl:pl-10">
          <div class="absolute inset-x-[-50vw] -top-32 -bottom-48 mask-[linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:mask-none dark:mask-[linear-gradient(transparent,white,transparent)] lg:dark:mask-[linear-gradient(white,white,transparent)]">
            <HeroBackground class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
          </div>
          <div class="relative">
            <NuxtImg
              class="absolute -top-64 -right-64"
              src="/images/blur-cyan.png"
              alt=""
              :width="530"
              :height="530"
              :quality="90"
            />
            <NuxtImg
              class="absolute -right-44 -bottom-40"
              src="/images/blur-indigo.png"
              alt=""
              :width="567"
              :height="567"
              :quality="90"
            />
            <div class="absolute inset-0 rounded-2xl bg-linear-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
            <div class="absolute inset-0 rounded-2xl bg-linear-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
            <div class="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-sm">
              <div class="absolute -top-px right-11 left-20 h-px bg-linear-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
              <div class="absolute right-20 -bottom-px left-11 h-px bg-linear-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
              <div class="pt-4 pl-4">
                <TrafficLightsIcon
                  class="h-2.5 w-auto stroke-slate-500/30"
                  :title="currentTab?.title"
                />
                <div class="mt-4 flex space-x-2 text-xs">
                  <button
                    v-for="tab in data"
                    :key="tab.title"
                    type="button"
                    class="flex h-6 rounded-full cursor-pointer"
                    :class="currentTab?.title === tab.title
                      ? 'bg-linear-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300'
                      : 'text-slate-500'
                    "
                    @click="activeTab = tab.title"
                  >
                    <div
                      class="flex items-center rounded-full px-2.5"
                      :class="currentTab?.title === tab.title && 'bg-slate-800'"
                    >
                      {{ tab.filename }}
                    </div>
                  </button>
                </div>
                <div v-if="currentTab" class="mt-6 flex items-start px-1 text-sm">
                  <div
                    aria-hidden="true"
                    class="border-r border-slate-300/5 pr-4 font-mono text-slate-600 select-none"
                  >
                    <template
                      v-for="_, index in new Array(currentTab.lines)" :key="index"
                    >
                      {{ (index + 1).toString().padStart(2, '0') }}
                      <br>
                    </template>
                  </div>

                  <ContentRenderer :value="currentTab" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
