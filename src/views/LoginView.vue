<!-- 登入後的畫面 -->
<template>
  <h3 class="welcome">
    {{ msg.userName }} 你好 <br />
    USERID：{{ msg.userID }} <br />
    部門：{{ msg.userOrganization }} <br />
    職位：{{ msg.userTitle }}
  </h3>
  <GotSSOInfo v-if="gotssoinfo == true"></GotSSOInfo>
  <button class="logout" @click="logout()">登出</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, provide, inject } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import GotSSOInfo from "../components/loginView/GotSSOInfo.vue";
export default defineComponent({
  name: "LoginView",
  components: {
    GotSSOInfo,
  },

  setup() {
    const userId = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");
    const router = useRouter();
    // console.log("userJWT:", userJWT);
    // console.log("userId:", userId);

    const msg = reactive({
      userName: "",
      userID: "",
      userOrganization: "",
      userTitle: "",
    });

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
              Authorization: "Bearer " + userJWT,
              // Bearer 跟 userJWT 中間要有一個空格
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

    //
    // 應用系統驗證 SSO 發給的 TOKEN
    let url = new URL(window.location.href);
    const token = url.searchParams.get("token");
    const systemAccount = url.searchParams.get("systemAccount");

    // GotSSOInfo 的 Components value 值，控制出現與否
    const gotssoinfo = ref();
    gotssoinfo.value = null;

    // Token驗證，開啟 GotSSOInfo 的 Components
    if (token !== null || systemAccount !== null) {
      gotssoinfo.value = true;
    }

    //
    // 登出鍵
    function logout() {
      localStorage.removeItem("userId");
      localStorage.removeItem("userJWT");
      router.push("./");
    }

    provide("gotssoinfo", gotssoinfo);

    return {
      msg,
      gotssoinfo,
      logout,
    };
  },
});
</script>

<style scoped>
.welcome {
  line-height: 3rem;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  color: black;
}

.logout {
  height: 50px;
  width: 300px;
  border: 1px solid gray;
  border-radius: 25px;
  margin: 50px 0px 0px 0px;
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
