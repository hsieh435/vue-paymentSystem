<!-- 具名插槽 -->
<template>
  <div class="myList">
    <ul>
      <slot name="name"></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs } from "vue";
export default defineComponent({
  name: "ChildInfo2",

  setup() {
    return {};
  },
});
</script>

<style></style>
