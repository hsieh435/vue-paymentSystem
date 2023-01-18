<!-- 匯入 bootstrap 的 navbar -->
<template>
    <NavbarFun />
    <div>123456789</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import NavbarFun from "../components/NavbarFun.vue";
  export default defineComponent({
    components: {
      NavbarFun,
    },
  });
  </script>
  