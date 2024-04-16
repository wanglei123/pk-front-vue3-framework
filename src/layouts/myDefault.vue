<template>
  <div>
    <div class="flex bg-black bg-opacity-30 items-center justify-start">
      <img src="/512x512.png" class="w-22 h-full" alt=""/>
      <Menu />
    </div>
    <router-view />
    <p>footer</p>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'

</script>

<style scoped>

</style>