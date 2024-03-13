<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'

defineProps<{ title: string, subTitle?: string, content?: string, url: string, tags?: string[] }>()
</script>

<template>
  <router-link v-if="!url.includes('http')"
    class="group flex cursor-pointer flex-col gap-2 rounded-md border border-base-content p-4 transition-all duration-300 hover:-translate-y-2"
    v-bind:to="url">
    <div class="flex w-full justify-between gap-2 flex-row items-center">
      <p class="text-base-content font-semibold">{{ title }}</p>
      <div class="flex flex-row items-center gap-4">
        <p class="text-neutral-content">{{ subTitle }}</p>
        <IconArrowUpRight color="#94a0a9" class="transition-all duration-300 group-hover:translate-x-1" size=22 />
      </div>
    </div>
    <p class="truncate text-neutral-content">{{ content }}</p>
  </router-link>
  <a v-if="url.includes('http')" :href="url" rel="noreferrer" target="_blank"
    class="group flex cursor-pointer flex-col gap-2 rounded-md border border-base-content p-4 transition-all duration-300 hover:-translate-y-2">
    <div class="flex w-full justify-between gap-2 flex-row items-center">
      <p class="text-base-content font-semibold">{{ title }}</p>
      <div class="flex flex-row items-center gap-4">
        <p class="text-neutral-content">{{ subTitle }}</p>
        <IconArrowUpRight color="#94a0a9" class="transition-all duration-300 group-hover:translate-x-1" size=22 />
      </div>
    </div>
    <div class="pt-1 flex flex-row flex-wrap gap-2">
      <div v-for="k in tags" className="badge badge-neutral">
        {{ k }}
      </div>
    </div>

  </a>
</template>