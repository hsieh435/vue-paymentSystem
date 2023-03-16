<!-- USERNAME 空白提醒 Components
    參考網址：https://codepen.io/keikaavousi/pen/eYOmOpN
-->
<template>
  <div class="wholeareaback">
    <div class="alert warning-alert">
      <h3>USERNAME 請勿留白</h3>
      <button class="close" @click="closeIT()">&times;</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";

const emptyColumn: any = inject("emptyColumn");
function closeIT() {
  emptyColumn.value = true;
}

</script>
<style src="../public/alert.scss" lang="scss" scoped>
</style>
