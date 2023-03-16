<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>已登出付款系統</h2>
      <h2>Log out from payment system</h2>
      <button class="button" @click="toLoginPage">前往登入</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

function toLoginPage() {
  router.push({ path: "./" });
}

</script>
<style lang="scss" scoped>
h2 {
  color: rgb(0, 0, 0);
}

.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgb(165, 165, 165);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000000;

  .wholearea {
    width: 60%;
    height: auto;
    margin: 20vh 20% auto 20%;
    padding: 50px 2.5% 50px 2.5%;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.95);
    overflow: auto;
    // outline: 1px solid black;
  }
}

.button {
  height: 50px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 25px;
  margin: 50px 0px 0px 0px;
  font-size: 24px;
  color: rgb(0, 0, 0);
  transition: 0.3s;

  &:hover {
    background-color: rgb(46, 189, 89);
    box-shadow: 10px 10px 10px 0px #000000;
    border: 1px solid rgb(46, 47, 51);
    color: rgb(255, 255, 255);
  }
}
</style>
