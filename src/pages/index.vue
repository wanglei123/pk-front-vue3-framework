<template>
  <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
<!--  <Card :image="bg" image-type="avatar" title="123" sub-title="456" border/>-->
  <Container>
    <!-- 标题 -->
    <div class="py-4">
      <div class="text-2xl">“</div>
      <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400 w-2/3">
          多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
        </div>
        <div class="flex pl-20 w-1/3 justify-end items-center">
          <div class="w-1/2 h-[1px] bg-gray-500"></div>
          <div class="text-2xl relative ml-2 top-1">”</div>
        </div>
      </div>
    </div>
  </Container>
</template>
<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'
// import Card from '@/components/Card.vue'
import type {SwiperTypeItem} from '@/components/types'
import Container from '@/components/Container.vue'
import bg from '@/assets/images/bg.png'
import {useThemeStore} from '@/store/useThemeStore'

const store = useThemeStore()

const items: SwiperTypeItem[] = [
  {
    image: bg,
    title: '1',
    subTitle: '子标题1'
  },
  {
    image: bg,
    title: '2',
    subTitle: '子标题2'
  },
  {
    image: bg,
    title: '3',
    subTitle: '子标题3'
  }
]
</script>

<style scoped>

</style>
<route lang="yaml">
meta:
  layout: myDefault
</route>
