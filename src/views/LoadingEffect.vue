<template>
  <div>
    <LoadingIO v-if="isLoading"></LoadingIO>
  </div>

  <div>
    <p class="word">Hello World！</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import LoadingIO from "../components/LoadingIO.vue";
export default defineComponent({
  name: "LoadingEffect",
  components: {
    LoadingIO,
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      console.log("M:", this.isLoading);
    }, 1500);
  },
  data() {
    return {
      isLoading: true,
    };
  },

  // setup() {
  //   onMounted(() => {
  //     setTimeout(() => {
  //       this.isLoading = false;
  //       console.log("M:", this.isLoading);
  //     }, 1000);
  //   });
  //   return {
  //     isLoading: true,
  //   };
  // },
});
</script>

<style>
.word {
  margin-top: 100px;
}
</style>
