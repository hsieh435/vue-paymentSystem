<!-- 連線失敗提醒 Components，非斷線處理
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
<script setup lang="ts">
import { inject } from "vue";

const disconnected: any = inject("disconnected");
function closeIT() {
  disconnected.value = true;
}

</script>
<style src="../public/alert.scss" lang="scss" scoped>
</style>
