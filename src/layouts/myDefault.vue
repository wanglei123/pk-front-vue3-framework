<template>
  <div>
    <div class="fixed top-0 w-full z-50" :class="{ 'bg-black bg-opacity-30 shadow-lg' : y > 0}">
      <Container>
        <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt=""/>
        <div @click="() => toggle()" class="hidden i-ic-round-menu text-gray-300 text-2xl absolute right-3 cursor-pointer right-5 top-3 hover:(text-white) lt-sm:block"></div>
        <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"/>
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
const [show, toggle] = useToggle(false)
const flag = ref(false)
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if(width >= 640){
    flag.value = false
    toggle(true)
  } else {
    if(flag.value) return
    flag.value = true
    toggle(false)
  }
})

</script>

<style scoped>

</style>