<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    :modules="modules"
    :navigation="{prevEl: '.prev', nextEl: '.next'}"
    :pagination="{type: 'fraction', el: '.pagination'}"
  >
    <swiper-slide v-for="(item) in items" :key="item.image">
      <slot :item="item">
        <div class="bg-image" :style="{backgroundImage: `url(${item.image})`}">
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start lt-sm:px-4">
              <p class="text-xl sm:text-4xl font-bold text-white">{{item.title}}</p>
              <p class="text-sm sm:text-xl text-grey-100 pt-4">{{item.subTitle}}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-30 h-10 z-30 ">
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 1.2rem"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 1.2rem"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType} from 'swiper';
import type {SwiperTypeItem} from '@/components/types'
import type { PropType } from 'vue'
import Container from '@/components/Container.vue'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const props = defineProps({
  height: {
    type: String,
    default: 'h-80'
  },
  items: {
    type: Array as PropType<Array<SwiperTypeItem>>,
    default: () => []
  }
})

const getClassAndStyle = (str: string) => {
  return {
    style: /(em)|(rem)|px/.test(props.height) ? {height: str} : {},
    class: /h-/.test(props.height) ? str : ''
  }
}
const modules = [Navigation, Pagination]

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style lang="scss" scoped>
.swiper-button-disabled{
  color: rgba($color: #000, $alpha: 0.3)
}

</style>