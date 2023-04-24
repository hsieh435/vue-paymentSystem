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

<script setup lang="ts">
import { defineComponent, ref, reactive } from "vue";

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

// 分隔線

const cities = ref([
  { id: 1, name: "Taipei" },
  { id: 2, name: "New Taipei City" },
  { id: 3, name: "Taoyuan" },
  { id: 4, name: "Taichong" },
  { id: 5, name: "Tainan" },
  { id: 6, name: "Kaohsiung" },
]);

</script>
<style scoped>
</style>
