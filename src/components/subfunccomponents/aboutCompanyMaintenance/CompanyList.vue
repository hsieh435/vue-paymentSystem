<template>
  <button class="button" @click="sentANumber">EMIT 子傳父數字</button>
  <button class="button" @click="sentAString">EMIT 子傳父文字</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CompanyList",
  setup(props, context) {
    function sentANumber() {
      const now = new Date();
      const num: number = (now.getMilliseconds() > 499 ? Math.ceil(Math.random() * 10000000000) : Math.ceil(Math.random() * -10000000000));
      context.emit("eventIsANumber", num);
      // console.log("A1:", num, typeof num);
    }

    function sentAString() {
      const ab =
        "天地玄黃宇宙洪荒日月盈昃辰宿列張寒來暑往秋收冬藏閏餘成歲律呂調陽雲騰致雨露結為霜金生麗水玉出昆岡劍號巨闕珠稱夜光";
      // const a: any = ab.split("");
      const num = Math.floor(Math.random() * ab.length);
      context.emit("eventIsAString", ab[num], typeof ab[num]);
      // console.log("A2:", num, typeof num);
    }
    // context.emit("傳送的資料名稱", "傳送的資料內容");

    return {
      sentANumber,
      sentAString,
    };
  },
});
</script>

<style lang="scss" scoped>
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

  &:hover {
    background-color: rgb(255, 255, 255);
    outline: 3px solid rgba(79, 192, 210, 0.7);
  }
}
</style>
