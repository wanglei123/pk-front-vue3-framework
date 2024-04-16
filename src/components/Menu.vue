<template>
  <div class="flex">
    <router-link class="item" to="/">首页</router-link>
    <a class="item" href="http://www.baidu.com" target="_blank">社区</a>
    <router-link class="item" to="/study">学习</router-link>
    <router-link class="item" to="/about">关于我们</router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.item {
  @apply relative text-white text-2xl px-8 py-2 font-300;
  &:hover {
    @apply font-500;
    &:after{
      //content: '';
      @apply content-none absolute bg-gray-100 w-8 h-1 bottom-0 left-[calc(50%-1rem)];
      //left: calc(50% - 1rem);
    }
  }
}

</style>