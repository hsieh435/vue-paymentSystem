<template>
  <LoadingForever v-if="lod == null"></LoadingForever>
  <div>
    <p class="word">Hello World！</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoadingForever from "../components/public/LoadingForever.vue";
export default defineComponent({
  name: "LoadingEffect",
  components: {
    LoadingForever,
  },

  setup() {
    const lod = ref();

    setTimeout(loadingview, 1000);
    function loadingview() {
      lod.value = false;
    }

    return {
      lod,
    };
  },
});
</script>

<style scoped>
.word {
  margin-top: 100px;
}
</style>
