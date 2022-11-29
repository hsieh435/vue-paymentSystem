<template>
  <div class="loading" v-if="lod == null">
    <img
      class="img"
      src="../assets/images/Spinner-2s-200px.gif"
      alt="loading..."
      width="200"
    />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "LoadingIO",

  setup() {
    const lod = ref();

    setTimeout(loadingview, 1000);
    function loadingview() {
      lod.value = true;
      // console.log("K1:", lod.value);
    }

    return {
      lod,
    };
  },
};
</script>

<style>
.loading {
  position: absolute;
  z-index: 100000;
  background-color: rgba(255, 255, 255);
  height: 90vh;
  width: 100%;
  text-align: center;
  /* outline: 1px solid black; */
}

.img {
  position: relative;
  top: 0px;
  margin-top: 30%;
  /* margin: auto; */
}
</style>
