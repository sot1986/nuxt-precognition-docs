<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import DarkIcon from './DarkIcon.vue'
import LightIcon from './LightIcon.vue'
import SystemIcon from './SystemIcon.vue'

defineOptions({
  name: 'ThemeSelector',
})

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
  { name: 'System', value: 'system', icon: SystemIcon },
]
const theme = useColorMode()
const selected = computed(() => (value: string) => (theme.value === value))
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <div class="h-6 w-6" />
    </template>
    <template #default>
      <el-select name="theme" :value="$colorMode.preference" @change="$colorMode.preference = $event.target.value">
        <button
          type="button"
          class="flex h-6 w-6 items-center justify-center rounded-lg shadow-md ring-1 shadow-black/5 ring-black/5 dark:bg-slate-700 dark:ring-white/5 dark:ring-inset"
          aria-label="Theme"
        >
          <ThemeSelectorLightIcon
            :class="twMerge('h-4 w-4 dark:hidden', $colorMode.preference === 'system' ? 'fill-slate-400' : 'fill-sky-400')"
          />
          <ThemeSelectorDarkIcon
            :class="twMerge('hidden h-4 w-4 dark:block', $colorMode.preference === 'system' ? 'fill-slate-400' : 'fill-sky-400')"
          />
        </button>
        <el-options
          popover
          anchor="bottom start"
          class="mt-3 w-36 [--anchor-gap:4px] space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md ring-1 shadow-black/5 ring-black/5 dark:bg-slate-800 dark:ring-white/5"
        >
          <el-option
            v-for="t in themes"
            :key="t.value"
            :value="t.value"
            :label="t.name"

            :class="twMerge(
              'flex cursor-pointer items-center rounded-[0.625rem] p-1 select-none',
              'text-slate-700 dark:text-slate-400',
              'focus:bg-slate-100 dark:focus:bg-slate-900/40',
              selected(t.value) ? 'text-sky-500' : 'focus:text-slate-900 dark:focus:text-white',
            )"
          >
            <div class="rounded-md bg-white p-1 shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-white/5 dark:ring-inset">
              <component
                :is="t.icon"
                :class="twMerge('h-4 w-4', selected(t.value) ? 'fill-sky-400 dark:fill-sky-400' : 'fill-slate-400')"
              />
            </div>
            <div class="ml-3">
              {{ t.name }}
            </div>
          </el-option>
        </el-options>
      </el-select>
    </template>
  </ClientOnly>
</template>
