<template>
  <div class="py-4">
    <ul class="flex justify-evenly items-center w-full pb-4">
      <li v-for="(title, index) in titles"
          :key="index"
          @click="() => {
            swiperRef?.slideTo(index, 500)
            activeIndex = index
          }"
          :class="['flex flex-col items-center cursor-pointer transition-all text-gray-400 hover:text-orange group item', {active: activeIndex === index}]">
        <div class="text-2xl border-b-2 pb-2 px-2 group-hover:border-b-color-orange line">{{index + 1}}</div>
        <div class="border-b-1 "></div>
        <div class="pt-4 text">{{title}}</div>
      </li>
    </ul>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :class="getClassAndStyle(props.height).class"
      :style="{height: (width / 1200) * height + 'px'}"
      :modules="modules"
      loop
      :navigation="{prevEl: '.prev', nextEl: '.next'}"
      :pagination="{
      clickable: true,
      bulletClass: 'inline-block w-3 h-3 rounded-1/2 bg-gray-300 z-20 mr-4 cursor-pointe',
      bulletActiveClass: 'w-8! bg-orange rounded-3'}"
      v-bind="$attrs"
    >
      <swiper-slide v-for="(item) in items" :key="item.image">
        <slot :item="item">
          <div class="w-full h-full bg-no-repeat bg-center-top bg-contain" :style="{backgroundImage: `url(${item.image})`}">
          </div>
        </slot>
      </swiper-slide>
      <div v-if="!$attrs.pagination_hide" class="">
        <div class="rounded-1/2 bg-white shadow-lg w-15 h15 absolute left-2 top-1/2
        transform-translate-y--1/2 z-30 border flex items-center justify-center cursor-pointer">
          <div class="prev i-ep:arrow-left" style="font-size: 1.2rem"></div>
        </div>
        <div  class="rounded-1/2 bg-white shadow-lg w-15 h15 absolute right-2 top-1/2
        transform-translate-y--1/2 z-30 border flex items-center justify-center cursor-pointer">
          <div class="next i-ep:arrow-right" style="font-size: 1.2rem"></div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperType} from 'swiper';
import type {SwiperTypeItem} from '@/components/types'
import type { PropType } from 'vue'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const props = defineProps({
  height: {
    type: Number,
    default: 1200
  },
  items: {
    type: Array as PropType<Array<SwiperTypeItem>>,
    default: () => []
  },
  titles: {
    type: Array as PropType<Array<string>>,
    default: () => []
  }
})

const getClassAndStyle = (str: string) => {
  return {
    style: /(em)|(rem)|px/.test(props.height) ? {height: str} : {},
    class: /h-/.test(props.height) ? str : ''
  }
}

const activeIndex = ref<number>(0)
const swiperRef = ref<SwiperType>()
const modules = [Navigation, Pagination]
const {width} = useWindowSize()

const emits = defineEmits(['change'])

const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
  console.log(swiper);
};
const onSlideChange = (e) => {
  console.log('slide change',e);
  emits('change', e)
  activeIndex.value = e.realIndex

};
</script>

<style lang="scss" scoped>
.swiper-button-disabled{
  color: rgba($color: #000, $alpha: 0.3)
}
.item{
  &.active,
  &:hover {
    .line{
      color: orange;
      border-color: orange;
    }
    .text{
      color: orange
    }
  }
}

</style>