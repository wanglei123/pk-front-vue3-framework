<template>
  <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
  <Card :image="bg" image-type="avatar" title="123" sub-title="456" border/>
</template>
<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'
import Card from '@/components/Card.vue'
import type {SwiperTypeItem} from '@/components/types'
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

<style scoped></style>
<route lang="yaml">
meta:
  layout: myDefault
</route>
