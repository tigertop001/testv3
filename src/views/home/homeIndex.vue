<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { usePageId } from '@/router/pageId'
const { template, templates } = usePageId({
  home1: defineAsyncComponent(() => import('@/views/home/home1/home.vue')), // 首页模板1
  home2: defineAsyncComponent(() => import('@/views/home/home2/home.vue'))  // 首页模板2
})
</script>

<template>
  <div>template ---- {{ template }}</div>
  <div>templates----{{ templates }}</div>
  <component :is="templates[template]"></component>
</template>

