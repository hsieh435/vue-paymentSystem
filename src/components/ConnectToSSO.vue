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
  margin-top: 30px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
</style>
