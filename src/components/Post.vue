<script setup lang="ts">
import { IconArrowUpRight } from '@tabler/icons-vue'

defineProps<{ title: string, subTitle?: string, content?: string, url: string, tags?: string[] }>()
</script>

<template>
  <router-link
    class="group flex cursor-pointer flex-col gap-2 rounded-md border border-neutral p-4 transition-all duration-300 hover:-translate-y-2"
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
</template>