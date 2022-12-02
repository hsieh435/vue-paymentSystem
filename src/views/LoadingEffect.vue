<template>
  <LoadingForever v-if="lod == null"></LoadingForever>
  <div>
    <p class="word">Hello World！</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoadingForever from "../components/LoadingForever.vue";
export default defineComponent({
  name: "LoadingEffect",
  components: {
    LoadingForever,
  },

  setup() {
    const lod = ref();
    console.log("K1:", lod.value);

    setTimeout(loadingview, 1000);
    function loadingview() {
      lod.value = false;
      console.log("K2:", lod.value);
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
