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
  <Container class="w-full">
    <Swiper class="w-2/3" :items="items" :height="28 * store.rate + 'rem'" @change="handleChange"></Swiper>
    <div
      class="lt-sm:display-none sm:(w-1/3) bg-coolgray-700 self-stretch flex flex-col justify-center px-4"
    >
      <a v-if="selectItem" :href="selectItem.url" target="_blank">
        <div class="text-2xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
        <div class="text-sm">{{ selectItem.subTitle }}</div>
        <div class="flex items-center justify-between mb-4">查看更多</div>
        <div class="i-mdi:arrow-right-thin text-4xl"></div>
      </a>
    </div>
  </Container>
  <Container class="mt-10">
    <Swiper
      :items="partners"
      :slides-per-view="4"
      :space-between="30"
      :height="'200px'"
      :freeMode="true"
      :pagination="{clickable: true}"
      loop
      :pagination_hide="true"
      @change="handleChange">
        <template #default="{ item }">
          <div class="px-2 lt-sm:h-20 sm:h-36 w-full bg-gray-100">
            <div
              class="h-full w-full bg-no-repeat bg-contain bg-center"
              :style="{
                'background-image': `url('${item}')`
              }"
            ></div>
          </div>
        </template>
    </Swiper>
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
    subTitle: '子标题1',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '2',
    subTitle: '子标题2',
    url: 'https://www.baidu.com'
  },
  {
    image: bg,
    title: '3',
    subTitle: '子标题3',
    url: 'https://www.baidu.com'
  }
]

const partners = ref([
  'https://wayearn.static.toimc.com/partner/logo1.png',
  'https://wayearn.static.toimc.com/partner/logo2.png',
  'https://wayearn.static.toimc.com/partner/logo8.png',
  'https://wayearn.static.toimc.com/partner/logo5.png',
  'https://wayearn.static.toimc.com/partner/logo6.png',
  'https://wayearn.static.toimc.com/partner/logo7.png'
])

const selectItem = ref(items[0])

const handleChange = (e: Swiper) => {
  const index = e.activeIndex
  selectItem.value = items[index]
  console.log(222, e)
}
</script>

<style scoped>

</style>
<route lang="yaml">
meta:
  layout: myDefault
</route>
