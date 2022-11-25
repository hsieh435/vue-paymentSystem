<!-- 登入後的畫面 -->
<template>
  <NavbarFun />
  <h3 class="welcome">
    {{ msg.userName }} 你好 <br />
    USERNAME：{{ msg.userID }} <br />
    部門：{{ msg.userDepartment }} <br />
    職級：{{ msg.userClass }}
  </h3>
  <button class="logout" @click="logout()">登出</button>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "LoginView",

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");
    const router = useRouter();
    // console.log("A:", token);
    // console.log("B:", userId);

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/PSUser/findPSUserByNotesId",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間有一個空格
          },
        }
      )
      // post 放三個參數，url、data、config(header)

      .then((response) => {
        msg.userName = response.data.data.userInfo.userName;
        msg.userID = response.data.data.userInfo.notesId;
        msg.userDepartment = response.data.data.userInfo.userOrganization;
        msg.userClass = response.data.data.userInfo.userTitle;
      })

      .catch((error) => {
        console.log("發生錯誤");
      });

    const msg = reactive({
      userName: "",
      userID: "",
      userDepartment: "",
      userClass: "",
    });

    // console.log("C1:", msg.userName);
    // console.log("C2:", msg.userID);
    // console.log("C3:", msg.userDepartment);
    // console.log("C4:", msg.userClass);

    function logout() {
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

<style>
.welcome {
  line-height: 2em;
  text-align: left;
  margin-top: 100px;
  margin-left: 20px;
  color: black;
}

nav {
  padding-top: 0px;
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
