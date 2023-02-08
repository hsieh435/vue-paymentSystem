<!-- 連線失敗提醒 Components
  參考網址：https://codepen.io/keikaavousi/pen/eYOmOpN
-->
<template>
  <div class="wholeareaback">
    <div class="alert danger-alert">
      <h3>連線發生錯誤</h3>
      <button class="close" @click="closeIT()">&times;</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "DisConnected",
  components: {},

  setup() {
    const disconnected: any = inject("disconnected");

    function closeIT() {
      disconnected.value = true;
    }

    return {
      closeIT,
    };
  },
});
</script>

<style src="../public/alert.scss" lang="scss" scoped></style>
