<template>
  <h1 class="notfoundword">404 NOT FOUND</h1>
  <p>The resource requested could not be found on this server!</p>
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

<style scoped>
.notfoundword {
  line-height: 500px;
}
</style>
