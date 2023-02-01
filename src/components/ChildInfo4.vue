<!-- 動態插槽 -->
<template>
  <p v-for="area in areas" :key="area">
    <slot :name="area"></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ChildInfo4",

  setup() {
    const areas = ["家裡", "公司", "學校"];
    return {
      areas,
    };
  },
});
</script>
