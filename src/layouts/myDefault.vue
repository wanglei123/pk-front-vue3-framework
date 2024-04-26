<template>
  <div>
    <div
      class="fixed top-0 w-full z-50 transition-all duration-300 h-0"
      :class="[{'lt-sm:(bg-black h-full)': show}]">
      <div :class="[{ 'bg-black bg-opacity-30 shadow-lg' : y > 0}]">
        <Container>
          <img src="/512x512.png" class="w-14 h-full lt-sm:mx-auto" alt=""/>
          <div
            @click="() => toggle()"
            :class="['hidden text-gray-300 text-2xl absolute right-3 cursor-pointer right-5 top-3 hover:(text-white) lt-sm:block']">
            <Transition name="rotate-icon" mode="out-in">
              <div class="i-grommet-icons:form-close" v-if="show"></div>
              <div class="i-ic-round-menu" v-else></div>
            </Transition>
          </div>
          <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"/>
        </Container>
      </div>

    </div>
    <router-view />
    <div class="h-[1000px]"></div>
    <div class="mobile-hide">
      <DefaultFooter icp="鄂ICP备19018123号-1"></DefaultFooter>
    </div>
    <div class="hidden mobile">
      <MobileNavbar></MobileNavbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/Menu.vue'
import Container from '@/components/Container.vue'
import DefaultFooter from '@/components/DefaultFooter.vue'

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

<style scoped lang="scss">
.rotate-icon-enter-active{
  animation: scaleYin 0.3s;

}
.rotate-icon-leave-active{
  animation: scaleYin 0.3s reverse;
}

@keyframes scaleYin {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }

}

</style>