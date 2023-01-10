<template>
  <button class="back" @click="sendtosso()">前往SSO</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "SendToSSO",
  component: {},
  setup() {
    function sendtosso() {
      const userId = localStorage.getItem("userId");
      const network = window.location.href;
      // console.log(network, typeof network);
      // location.href="http://localhost:8081/"
      axios
        .post("http://localhost:8085/paymentSystem/public/getSystemJWT", {
          notesId: userId,
        })
        // post 放三個參數，url、data、config(header)

        .then((response) => {
          if (response.data.returnCode == 0) {
            console.log("response:", response.data.data);
            // alert("123");

            // location.href="http://localhost:8081/"
          } else {
            alert("請輸入正確的USERNAME");
          }
        })
        .catch((error) => {
          alert("連線發生錯誤");
        });
    }
    return {
      sendtosso,
    };
  },
});
</script>

<style>
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
