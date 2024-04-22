<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="h-80"
  >
    <swiper-slide v-for="(item,index) in items" :key="item.image">
      <slot :item="item">
        <div class="h-full w-full bg-cover bg-no-repeat bg-center" :style="{backgroundImage: `url(${item.image})`}">
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start">
              <p class="text-4xl font-bold text-white">{{item.title}}</p>
              <p class="text-2xl text-grey-100 pt-4">{{item.subTitle}}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType} from 'swiper';
import type {SwiperTypeItem} from '@/components/types'
import 'swiper/css';
import type { PropType } from 'vue'
import Container from '@/components/Container.vue'

defineProps({
  items: {
    type: Array as PropType<Array<SwiperTypeItem>>,
    default: () => []
  }
})

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style scoped>

</style>