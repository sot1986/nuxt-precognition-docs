<script setup lang="ts">
import Fuse from 'fuse.js'

defineOptions({
  name: 'UiSearch',
})

const query = ref('')
const { data } = await useAsyncData('search-data', () => queryCollectionSearchSections('pages'))

const fuse = new Fuse(data.value ?? [], {
  keys: ['title', 'description', 'excerpt'],
})

const results = computed(() => fuse.search(toValue(query)).slice(0, 10))

function closePalette() {
  const el = document.getElementById('search-palette-wrapper')
  if (!el)
    return
  (el as unknown as { hide: () => void }).hide()
}
</script>

<template>
  <button command="show-modal" commandfor="dialog" class="rounded-md bg-white/80 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-white/90 dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800/90">
    <SearchIcon class="cursor-pointer w-6 fill-slate-400 dark:fill-slate-500 hover:fill-slate-400 dark:hover:fill-slate-600" />
  </button>

  <ClientOnly>
    <template #fallback>
      <div id="search-palette-wrapper" />
    </template>
    <el-dialog id="search-palette-wrapper">
      <dialog id="dialog" class="backdrop:bg-transparent">
        <el-dialog-backdrop class="fixed inset-0 bg-gray-500/25 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50" />

        <div tabindex="0" class="fixed inset-0 w-screen overflow-y-auto p-4 focus:outline-none sm:p-6 md:p-20">
          <el-dialog-panel class="mx-auto block max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl outline-1 outline-black/5 transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900 dark:-outline-offset-1 dark:outline-white/10">
            <el-command-palette>
              <div class="grid grid-cols-1 border-b border-gray-100 dark:border-white/10">
                <input
                  v-model="query"
                  type="text"
                  autofocus
                  placeholder="Search..."
                  class="col-start-1 row-start-1 h-12 w-full pr-4 pl-11 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                >
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400 dark:text-gray-500">
                  <path d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
              </div>

              <el-command-list hidden class="block max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800 dark:text-gray-200">
                <NuxtLink
                  v-for="result in results"
                  :key="result.item.id"
                  :to="result.item.id"
                  hidden
                  class="block cursor-default px-4 py-2 select-none focus:outline-hidden aria-selected:bg-indigo-600 aria-selected:text-white dark:aria-selected:bg-indigo-500"
                  @click="closePalette"
                >
                  {{ result.item.title }}
                </NuxtLink>
              </el-command-list>

              <el-no-results hidden class="block p-4 text-sm text-gray-500 dark:text-gray-400">
                No matching result.
              </el-no-results>
            </el-command-palette>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </ClientOnly>
</template>
