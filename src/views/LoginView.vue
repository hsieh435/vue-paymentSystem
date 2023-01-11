<!-- 登入後的畫面 -->
<template>
  <h3 class="welcome">
    {{ msg.userName }} 你好 <br />
    USERID：{{ msg.userID }} <br />
    部門：{{ msg.userOrganization }} <br />
    職位：{{ msg.userTitle }}
  </h3>
  <SendToSSO></SendToSSO>
  <br />
  <button class="logout" @click="logout()">登出</button>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import SendToSSO from "../components/SendToSSO.vue";
export default defineComponent({
  name: "LoginView",
  components: {
    SendToSSO,
  },

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");
    const router = useRouter();
    // console.log("token:", token);
    // console.log("userId:", userId);

    const msg = reactive({
      userName: "",
      userID: "",
      userOrganization: "",
      userTitle: "",
    });
    // console.log("msg.userName:", msg.userName);
    // console.log("msg.userID:", msg.userID);
    // console.log("msg.userOrganization:", msg.userOrganization);
    // console.log("msg.userTitle:", msg.userTitle);

    const vol: any = inject("valueofLoading");
    catchData();

    function catchData() {
      vol.value = null;
      axios
        .post(
          "http://localhost:8085/paymentSystem/api/PSUser/findPSUserByNotesId",
          { notesId: userId },
          {
            headers: {
              Authorization: "Bearer " + token,
              // Bearer 跟 token 中間要有一個空格
            },
          }
        )
        // post 放三個參數，url、data、config(header)

        .then((response) => {
          // console.log("response:",response)
          msg.userName = response.data.data.userInfo.userName;
          msg.userID = response.data.data.userInfo.notesId;
          msg.userOrganization = response.data.data.userInfo.userOrganization;
          msg.userTitle = response.data.data.userInfo.userTitle;
        })

        .catch((error) => {
          console.log("連線發生錯誤");
        })
        .finally(() => {
          vol.value = true;
        });
    }

    function logout() {
      localStorage.removeItem("userId");
      localStorage.removeItem("userJWT");
      router.push("./");
    }

    return {
      msg,
      catchData,
      logout,
    };
  },
});
</script>

<style scoped>
.welcome {
  line-height: 2rem;
  text-align: left;
  margin-top: 100px;
  margin-left: 20px;
  color: black;
}

.logout {
  height: 50px;
  width: 300px;
  border-radius: 25px;
  margin: 50px 0px 0px 0px;
  border: 0px;
  font-size: 24px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.logout:hover {
  background-color: rgb(46, 189, 89);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
  color: rgb(255, 255, 255);
}
</style>
