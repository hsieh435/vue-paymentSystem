<!-- 登入後的畫面 -->
<template>
  <h3 class="welcome">
    {{ msg.userName }} 你好 <br />
    USERNAME：{{ msg.userID }} <br />
    部門：{{ msg.userOrganization }} <br />
    職位：{{ msg.userTitle }}
  </h3>
  <button class="logout" @click="logout()">登出</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "LoginView",
  components: {},

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");
    const router = useRouter();

    // console.log("B1:", token);
    // console.log("B2:", userId);

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
        msg.userName = response.data.data.userInfo.userName;
        msg.userID = response.data.data.userInfo.notesId;
        msg.userOrganization = response.data.data.userInfo.userOrganization;
        msg.userTitle = response.data.data.userInfo.userTitle;

        // localStorage.setItem("userName", msg.userName);
      })

      .catch((error) => {
        console.log("發生錯誤");
      });

    const msg = reactive({
      userName: "",
      userID: "",
      userOrganization: "",
      userTitle: "",
    });
    // console.log("C1:", msg.userName);
    // console.log("C2:", msg.userID);
    // console.log("C3:", msg.userOrganization);
    // console.log("C4:", msg.userTitle);

    function logout() {
      // localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      localStorage.removeItem("userJWT");
      router.push("./");
    }

    return {
      msg,
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
