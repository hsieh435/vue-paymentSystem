<!-- 登入後的畫面 -->
<template>
  <h3 class="welcome">
    {{ msg.userName }} 您好，歡迎使用付款系統<br />
    USERID：{{ msg.userID }} <br />
    部門：{{ msg.userOrganization }} <br />
    職位：{{ msg.userTitle }}
  </h3>
  <hr>
  <p>改寫後</p>
  <hr>
  <h3 class="welcome">
    {{ userInfomation.userName }} 您好，歡迎使用付款系統<br />
    USERID：{{ userInfomation.notesId }} <br />
    部門：{{ userInfomation.userOrganization }} <br />
    職位：{{ userInfomation.userTitle }}
  </h3>
  <button class="logout" @click="logout()">登出</button>
  <DisConnected v-if="disconnected == false"></DisConnected>
  <LogoutAlready v-if="logoutalready == false"></LogoutAlready>
</template>

<script setup lang="ts">
import { ref, reactive, provide, inject } from "vue";
import { AxiosResponse } from "axios";
import axios from "axios";
import { apiFindPSUserByNotesId } from "../api/api";
import { UserInfo } from "../config/common.types";
import DisConnected from "../components/public/DisConnected.vue";
import LogoutAlready from "../components/loginView/LogoutAlready.vue";

const userId = localStorage.getItem("userId");
const userJWT = localStorage.getItem("userJWT");
// console.log("userId:", userId, typeof userId);
// console.log("userJWT:", userJWT, typeof userJWT);

const msg = reactive({
  userName: "",
  userID: "",
  userOrganization: "",
  userTitle: "",
});

const vol: any = inject("valueofLoading");

const disconnected = ref();
disconnected.value = true;
provide("disconnected", disconnected);

const logoutalready = ref();
logoutalready.value = true;
provide("logoutalready", logoutalready);

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
        },
      }
    )
    .then((response) => {
      msg.userName = response.data.data.userInfo.userName;
      msg.userID = response.data.data.userInfo.notesId;
      msg.userOrganization = response.data.data.userInfo.userOrganization;
      msg.userTitle = response.data.data.userInfo.userTitle;
    })
    .catch((error) => {
      disconnected.value = false;
    })
    .finally(() => {
      vol.value = true;
    });
}

// 改寫後

interface UserInfo {
  notesId: string;
  userName: string;
  userOrganization: string;
  userTitle: string;
}

let userInfomation = ref<UserInfo>({
  notesId: "",
  userName: "",
  userOrganization: "",
  userTitle: ""
});

// catchData();
gotData();
async function gotData() {

  try {
    const res: AxiosResponse = await apiFindPSUserByNotesId({
      notesId: userId
    });

    // console.log("///gotData: ", JSON.stringify(res.data));

    userInfomation.value = res.data.data.userInfo;
    console.log("///gotData: ", JSON.stringify(userInfomation.value));

    // console.log(userInfomation, typeof userInfomation);

  } catch (error) {
    disconnected.value = false;
  }
};

//
// 登出鍵
function logout() {
  logoutalready.value = false;
}

</script>

<style lang="scss" scoped>
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

  &:hover {
    background-color: rgb(46, 189, 89);
    box-shadow: 10px 10px 10px 0px #000000;
    border: 1px solid rgb(46, 47, 51);
    color: rgb(255, 255, 255);
  }
}
</style>
