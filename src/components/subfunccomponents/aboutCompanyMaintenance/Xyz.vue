<template>
  <button class="button" @click="sentANumber">EMIT 子傳父數字</button>
  <button class="button" @click="sentAString">EMIT 子傳父文字</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Xyz",
  setup(props, context) {
    function sentANumber() {
      const num: number = Math.ceil(Math.random() * 10000000000);
      context.emit("eventIsANumber", num);
      // console.log("A1:", typeof num);
    }

    function sentAString() {
      const num: number = Math.ceil(Math.random() * 10000000000);
      context.emit("eventIsAString", num.toString(36));
      // console.log("A2:", typeof num.toString(36));
    }

    // context.emit("傳送的資料名稱", "傳送的資料內容");

    return {
      sentANumber,
      sentAString,
    };
  },
});
</script>

<style scoped>
.button {
  width: auto;
  height: 40px;
  border: 0;
  border-radius: 20px;
  background-color: rgba(79, 193, 210);
  line-height: 16px;
  margin: 10px 5px 10px 5px;
  padding: 0px 30px 0px 30px;
  transition: 0.2s;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
