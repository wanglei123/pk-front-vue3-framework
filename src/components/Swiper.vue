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
          <div>
            <p>123123</p>
          </div>
        </div>
      </slot>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType} from 'swiper';
import 'swiper/css';
import type { PropType } from 'vue'

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