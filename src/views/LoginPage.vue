<!-- 
  登入畫面、axios 資料傳輸
  畫面：https://codepen.io/fghty/pen/PojKNEG
  -->
<template>
  <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
  <div class="form">
    <div class="lineup">
      <div class="signinword">付款系統</div>
    </div>
    <input
      type="text"
      v-model="username"
      placeholder="USERNAME"
      onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
    />
    <button @click="login()">登入付款系統</button>
    <!-- <button @click="loginSSO()">登入SSO系統</button> -->
    <ConnectToSSO></ConnectToSSO>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import ConnectToSSO from "../components/ConnectToSSO.vue";
export default defineComponent({
  name: "loginpPage",
  components: {
    ConnectToSSO,
  },

  setup() {
    const userId: any = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");
    const router = useRouter();
    const username = ref();

    const vol: any = inject("valueofLoading");
    // inject("要傳遞的資料名稱");

    const login = () => {
      if (userId !== null && userJWT !== null) {
        router.push({ path: "/LoginView" });
      } else if (username.value == null) {
        alert("欄位請勿留白");
      } else {
        vol.value = null;
        axios
          .post("http://localhost:8085/paymentSystem/public/getSystemJWT", {
            notesId: username.value,
          })
          // post 放三個參數，url、data、config(header)

          .then((response) => {
            if (response.data.returnCode == 0) {
              // console.log("response:", response.data.data);
              localStorage.setItem("userJWT", response.data.data);
              localStorage.setItem("userId", username.value);
              router.push({ path: "/LoginView" });
            } else {
              alert("請輸入正確的USERNAME");
            }
          })
          .catch((error) => {
            alert("連線發生錯誤");
          })
          .finally(() => {
            vol.value = true;
          });
      }
      // 1.用.then 和.catch 去處理 axios 傳輸資料後接收成功和接收失敗結果。
      // 2.".finally(() => {})" 為 TYPE SCRIPT 之語法，做出結尾之用，以免送出後仍持續執行 LoadingForever 畫面
    };

    function loginSSO() {
      alert("123");
    }

    return {
      username,
      login,
      loginSSO,
    };
  },
});
</script>

<style src="./subfunction/LoginPage.css" scoped></style>
