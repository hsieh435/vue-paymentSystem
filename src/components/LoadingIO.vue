<template>
  <div class="loading">
    <img
      class="img"
      src="../assets/images/Spinner-1s-200px.gif"
      alt="loading..."
      width="200"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "LoadingIO",
};
</script>

<style>
.loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 100%;
  width: 100%;
  text-align: center;
  /* outline: 1px solid black; */
}

.loading.img {
  position: relative;
  margin: auto;
  margin-top: 10%;
}
</style>
