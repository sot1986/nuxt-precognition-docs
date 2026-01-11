<script setup lang="ts">
defineOptions({
  name: 'MobileNavigation',
})

const wrapper = ref<{ hide: () => void }>()
</script>

<template>
  <button
    type="button"
    class="group"
    aria-label="Open navigation"
    command="show-modal"
    commandfor="mobile-navigation"
  >
    <MenuIcon class="h-6 w-6 stroke-slate-500 hover:bg-slate-50 hover:cursor-pointer group-active:stroke-indigo-600" />
  </button>

  <ClientOnly>
    <el-dialog ref="wrapper">
      <dialog
        id="mobile-navigation"
        class="backdrop:bg-transparent"
      >
        <el-dialog-backdrop
          class="fixed inset-0 bg-black/50 transition duration-200 data-closed:opacity-0 backdrop-blur-sm"
        />
        <el-dialog-panel class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 lg:hidden">
          <div class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 sm:px-6 dark:bg-slate-900">
            <div class="flex items-center">
              <button
                type="button"
                command="close"
                commandfor="mobile-navigation"
                aria-label="Close navigation"
              >
                <CloseIcon class="h-6 w-6 stroke-slate-500" />
              </button>
              <NuxtLink href="/" class="ml-6" aria-label="Home page">
                <LogoMark class="h-9 w-9" />
              </NuxtLink>

              <SideNavigation class="mt-5 px-1" @click="wrapper?.hide()" />
            </div>
          </div>
        </el-dialog-panel>
      </dialog>
    </el-dialog>
  </ClientOnly>
</template>
