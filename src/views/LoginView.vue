<template>
  <NavbarFun />
  <h2 class="welcome">{{ msg.username }} 你好</h2>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
// import NavbarFun from "../components/NavbarFun.vue";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
export default defineComponent({
  name: "LoginView",
  components: {
    // NavbarFun,
  },

  setup() {
    const username = localStorage.getItem("username");
    const userToken = {
      token: localStorage.getItem("userJWT"),
    };

    const postheader = {
      header: {
        Authorization: "Bearer " + userToken.token,
        // Bearer 跟 token 中間有一個空格
      },
    };
    console.log("b:", "Bearer " + userToken.token);
    // console.log("f:", postheader);
    axios
      .post(
        "http://localhost:8085/paymentSystem/api/PSUser/findPSUserByNotesId",
        { data: "" },
        {
          headers: {
            Authorization: "Bearer " + userToken.token,
            // Bearer 跟 token 中間有一個空格
          },
        }
        // notesId: username,
      )

      .then((response) => {
        // if(userToken.jwt ==){
        // }
        // alert("c:");
      })

      .catch((error) => {
        console.log("發生錯誤");
      });

    // console.log("a:", localStorage.getItem("userToken"));

    const msg = reactive({
      username: localStorage.getItem("username"),
    });

    // response.data.userInfo.userName

    return {
      msg,
    };
  },
});
</script>

<style>
.welcome {
  text-align: left;
  margin-top: 200px;
  margin-left: 50px;
  color: black;
}

nav {
  padding-top: 0px;
}
</style>
