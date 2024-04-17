<template>
  <div>
    <div class="fixed top-0 w-full " :class="{ 'bg-black bg-opacity-30 shadow-lg' : y > 0}">
      <Container>
        <img src="/512x512.png" class="w-14 h-full" alt=""/>
        <Menu />
      </Container>
    </div>
    <router-view />
    <div class="h-[4000px]"></div>
    <p>footer</p>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Container from '@/components/Container.vue'
const { y } = useWindowScroll()

</script>

<style scoped>

</style>