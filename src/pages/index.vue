<template>
  <Swiper :items="items"></Swiper>
</template>
<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'
import type {SwiperTypeItem} from '@/components/types'
import bg from '@/assets/images/bg.png'

const items: SwiperTypeItem[] = [
  {
    image: bg
  }
]

const msg = ref('123')
const target = ref(null)
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: myDefault
</route>
