<template>
  <LoadingForever v-if="loading == null"></LoadingForever>
  <router-view v-if="isRouterAlive"></router-view>
</template>

<script setup lang="ts">
import { defineComponent, ref, provide, nextTick } from "vue";
import LoadingForever from "./components/public/LoadingForever.vue";

// 以下為 loading 畫面呈現，並透過 provide 與 inject 等方式傳遞功能至各個 Component
const loading = ref();
loading.value = true;

// 以下為重新刷新頁面相關功能
const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};

provide("valueofLoading", loading);
provide("reload", reload);
// provide("要傳遞的資料名稱", "要傳遞的資料內容，型別為字串");

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  z-index: 10;
  // outline:1px solid black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgb(46, 189, 89);
    }
  }
}
</style>
