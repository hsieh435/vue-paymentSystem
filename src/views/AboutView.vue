<template>
  <div>
    <h1>This is an about page</h1>
  </div>

  <p>---------------------------- 分隔線 ----------------------------</p>

  <ul>
    <p v-for="(item, index) in foodsArray" :key="item.id">
      <span>{{ index }}: {{ item.name }} - {{ item.price }}元</span>
    </p>
  </ul>
  <br />

  <p>---------------------------- 分隔線 ----------------------------</p>

  <ul>
    <p v-for="(city, id) in cities" :key="id">{{ city.id }}.{{ city.name }}</p>
  </ul>
  <br />

  <p>---------------------------- 分隔線 ----------------------------</p>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "AboutView",
  components: {},

  setup() {
    // 分隔線

    const foodsArray = [
      {
        id: 1,
        name: "薯條",
        price: 20,
      },
      {
        id: 2,
        name: "甜不辣",
        price: 20,
      },
      {
        id: 3,
        name: "雞排",
        price: 55,
      },
    ];

    // console.log("F1:", foodsArray[0].id);
    // console.log("F2:", foodsArray[0].name);
    // console.log("F3:", foodsArray[0].price);
    // console.log("F4:", foodsArray[1].id);
    // console.log("F5:", foodsArray[1].name);
    // console.log("F6:", foodsArray[1].price);
    // console.log("F7:", foodsArray[2].id);
    // console.log("F8:", foodsArray[2].name);
    // console.log("F9:", foodsArray[2].price);

    // 分隔線

    const cities = ref([
      { id: 1, name: "Taipei" },
      { id: 2, name: "New Taipei City" },
      { id: 3, name: "Taoyuan" },
      { id: 4, name: "Taichong" },
      { id: 5, name: "Tainan" },
      { id: 6, name: "Kaohsiung" },
      // "Taipei",
      // "New Taipei City",
      // "Taoyuan",
      // "Taichong",
      // "Tainan",
      // "Kaohsiung",
    ]);

    return {
      foodsArray,
      cities,
    };
  },
});
</script>
