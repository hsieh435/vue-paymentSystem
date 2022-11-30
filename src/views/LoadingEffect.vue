<template>
  <LoadingIO></LoadingIO>
  <NormalLayout></NormalLayout>
  <div>
    <p class="word">Hello World！</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import LoadingIO from "../components/LoadingIO.vue";
import NormalLayout from "../layout/NormalLayout.vue";
export default defineComponent({
  name: "LoadingEffect",
  components: {
    NormalLayout,
    LoadingIO,
  },
});
</script>

<style>
.word {
  margin-top: 100px;
}
</style>
