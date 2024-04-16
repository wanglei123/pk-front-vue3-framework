<template>
  <div>
    <p>header</p>
  <p>
    <router-link to="/">首页</router-link>
    <router-link to="/communication">社区</router-link>
    <router-link to="/study">学习</router-link>
    <router-link to="/about">关于我们</router-link>
  </p>
    default layout
    <router-view />
    <p>footer</p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>