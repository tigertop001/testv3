<script setup lang="ts">
// import HomeView from '@/views/home/homeIndex.vue' // HomeView
// keep-alive 页面, 写组件名
import { ref, computed } from 'vue'
import { tabFixedId } from '@/router/pageId'
const names = ref<Array<string>>(['homeIndex'])
const fixedId = computed(() => tabFixedId.value)

console.log('tabFixedId--01--', fixedId.value)
</script>

<template>
  <RouterView v-slot="{ Component }">
    <keep-alive :include="names">
      <component :is="Component" />
    </keep-alive>
  </RouterView>
  <hr />
</template>

<style scoped></style>
