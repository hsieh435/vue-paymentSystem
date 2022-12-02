<!-- 
slot 用法
參考網站：https://ithelp.ithome.com.tw/articles/10273298?sc=iThomeR
-->
<template>
  <h1 class="line">Named slot 具名插槽</h1>
  <!-- Named slot （具名插槽） -->

  <ChildInfo1 v-for="section in sections" :key="section.title">
    <template #title>
      {{ section.title }}
    </template>
    <template #slogan>
      {{ section.slogan }}
    </template>
  </ChildInfo1>

  <p>---------------------------- 分隔線 ----------------------------</p>

  <h1 class="line">Scoped slot 作用域插槽</h1>
  <!-- Scoped slot（作用域插槽） -->

  <ChildInfo2 v-for="item in items" :key="item.title">
    <template #title>
      {{ item.title }}
    </template>
    <template #price>
      {{ item.price }}
    </template>
    <template #size>
      {{ item.sizes.join(", ") }}
    </template>
    <!-- 解構寫法。即等於 #result="slotProps"，然後下面寫 slotProps.quantity -->
    <template #result="slotProps">
      已選購：{{ item.title }} x{{ slotProps.quantity }}
    </template>
  </ChildInfo2>

  <p>---------------------------- 分隔線 ----------------------------</p>

  <h1 class="line">Dynamic slot 動態插槽</h1>
  <!-- Dynamic slot（動態插槽） -->

  <div v-for="area in areas" :key="area">
    <input type="radio" :id="area" :value="area" v-model="chosenArea" />
    <label :for="area"> {{ area }} </label>
  </div>
  <ChildInfo3>
    <template v-slot:[chosenArea]>
      <p class="">我現在在： {{ chosenArea }}</p>
    </template>
  </ChildInfo3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue";
import ChildInfo1 from "../components/ChildInfo1.vue";
import ChildInfo2 from "../components/ChildInfo2.vue";
import ChildInfo3 from "../components/ChildInfo3.vue";
// @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    // HelloWorld,
    ChildInfo1,
    ChildInfo2,
    ChildInfo3,
  },
  setup() {
    const sections = [
      {
        title: "限時優惠",
        slogan: "搶購限時最便宜貨品！",
      },
      {
        title: "最新商品",
        slogan: "為你帶來最新貨品！",
      },
      {
        title: "一般商品",
        slogan: "多種商品任你選擇！",
      },
    ];

    const items = [
      {
        title: "夏日短裙",
        price: 200,
        sizes: ["XS", "S", "M", "L"],
      },
      {
        title: "純白 T-shirt",
        price: 100,
        sizes: ["XS", "S"],
      },
      {
        title: "針織背心",
        price: 300,
        sizes: ["XS", "S", "M"],
      },
    ];

    const chosenArea = "nav";
    const areas = ["nav", "main", "footer"];

    return {
      sections,
      items,
      chosenArea,
      areas,
    };
  },
});

// @Options({
//   components: {
//     HelloWorld,
//     ChildInfo,
//   },
// })
// export default class HomeView extends Vue {}

// 1. slot（插槽）的作用是把父層內容，塞到子元件裏。有插口才能插，所以，子元件要先建立 slot，父層才可以把資料塞進去。
// 2. 常用情景是，利用 slot 打造自己的 UI 模版，把靜態資料在父層塞進去這模版中。非常適合用於大量複製同樣樣式元件，以及傳入靜態資料的情況。
// 3. 使用 named slot（具名插槽）可以把資料分配到指定位置。
// 4. 使用 scoped slot（作用域插槽）可以把子元件裏的資料，傳出去給父層使用和處理，之後透過插槽塞回到子元件裏。
// 5. 使用 dynamic slot（動態插槽）可以在父層動態指定插槽。
</script>

<style>
.line {
  margin-top: 50px;
}
</style>
