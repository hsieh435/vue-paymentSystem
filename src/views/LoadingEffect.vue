<template>
  <div>
    <LoadingIO v-if="isLoading"></LoadingIO>
  </div>

  <div>
    <p class="word">Hello World！</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoadingIO from "../components/LoadingIO.vue";
export default defineComponent({
  name: "LoadingEffect",

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    LoadingIO,
  },
});
</script>

<style>
.word {
  margin-top: 100px;
}
</style>
