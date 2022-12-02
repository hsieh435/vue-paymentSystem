<!-- 作用域插槽 -->
<template>
  <p v-for="area in areas" :key="area" :class="area">
    <slot :name="area"></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default {
  name: "ChildInfo3",

  setup() {
    const areas = ["nav", "main", "footer"];
    return {
      areas,
    };
  },
};
</script>

<style>
.nav {
  color: red;
}

.main {
  color: black;
}

.footer {
  color: blue;
}
</style>
