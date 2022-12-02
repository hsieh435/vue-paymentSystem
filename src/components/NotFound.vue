<template>
  <h1 class="notfoundword">404 NOT FOUND</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFound",
  setup() {
    return {};
  },
});
</script>

<style>
.notfoundword {
  line-height: 500px;
}
</style>
