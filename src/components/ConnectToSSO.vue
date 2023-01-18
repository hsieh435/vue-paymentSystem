<template>
  <button class="back" @click="connectToSSO()">登入 SSO 系統</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "ConnectToSSO",
  component: {},
  setup() {
    function connectToSSO() {
      location.href = `http://localhost:8081?systemId=paymentSystem&callBackPath=http://localhost:8080/LoginView`;
    }
    return {
      connectToSSO,
    };
  },
});
</script>

<style scoped>
.back {
  height: 50px;
  width: 300px;
  border-radius: 25px;
  margin: 20px 0px 0px 0px;
  border: 0px;
  font-size: 24px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.back:hover {
  background-color: rgb(46, 189, 89);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
  color: rgb(255, 255, 255);
}
</style>
