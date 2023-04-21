<!-- USERNAME 錯誤提醒 Components
  參考網址：https://codepen.io/keikaavousi/pen/eYOmOpN
-->
<template>
  <div class="wholeareaback">
    <div class="alert danger-alert">
      <h3>USERNAME 輸入錯誤</h3>
      <button class="close" @click="closeIT()">&times;</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";

const passwordWrong: any = inject("passwordWrong");
function closeIT() {
  passwordWrong.value = true;
}

</script>
<style src="../public/alert.scss" lang="scss" scoped>
</style>
