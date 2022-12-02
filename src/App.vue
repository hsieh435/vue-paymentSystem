<template>
  <LoadingForever v-if="lod == null"></LoadingForever>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import LoadingForever from "./components/LoadingForever.vue";
export default defineComponent({
  name: "App",
  components: {
    LoadingForever,
  },
  setup() {
    const lod = ref();
    lod.value = true;

    provide("valueoflod", lod);
    // provide("要傳遞的資料名稱", "要傳遞的資料內容");

    return {
      lod,
    };
  },
});
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
