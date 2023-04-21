<!-- 超過登入時間提醒 Components
  參考網址：https://codepen.io/keikaavousi/pen/eYOmOpN
-->
<template>
  <div class="wholeareaback">
    <div class="alert simple-alert">
      <h3>已登出</h3>
      <h3>Log out Already</h3>
      <button class="button" @click="logOut()">確定</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const logoutalready: any = inject("logoutalready");

function logOut() {
  logoutalready.value = true;
  localStorage.clear();
  router.push({ path: "/" });
  // location.href = `http://localhost:8081/LogoutPage?systemId=paymentSystem&callBackPath=http://localhost:8080/LogOutPage`;
}


</script>
<style src="../public/alert.scss" lang="scss" scoped>
</style>
