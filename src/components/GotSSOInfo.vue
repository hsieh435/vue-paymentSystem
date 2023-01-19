<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>SSO 系統登入成功</h2>
      <h3>
        姓名：{{ ssoinfo.userName }}<br />
        systemAccount：{{ ssoinfo.systemAccount }}<br />
        部門：{{ ssoinfo.userOrganization }}<br />
        職位：{{ ssoinfo.userTitle }}<br />
      </h3>
      <button class="updateauthority" @click="closeIt()">確定</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "GotSSOInfo",
  components: {},

  setup() {
    let url = new URL(window.location.href);
    const token = url.searchParams.get("token");

    const gotssoinfo: any = inject("gotssoinfo");

    const ssoinfo = reactive({
      userName: "",
      systemAccount: "",
      userOrganization: "",
      userTitle: "",
    });

    axios
      .post("http://localhost:9000/sso/public/checkToken", {
        token: token,
        systemId: "paymentSystem",
      })
      .then((response) => {
        ssoinfo.userName = response.data.data.userName;
        ssoinfo.systemAccount = response.data.data.systemAccount;
        ssoinfo.userOrganization = response.data.data.userOrganization;
        ssoinfo.userTitle = response.data.data.userTitle;
      })
      .catch((error) => {
        console.log("連線發生錯誤");
      });

    function closeIt() {
      gotssoinfo.value = null;
    }

    return {
      ssoinfo,
      closeIt,
    };
  },
});
</script>

<style scoped>
h2 {
  color: rgb(0, 0, 0);
}

h3 {
  text-align: left;
  line-height: 2em;
  color: rgb(0, 0, 0);
}

.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000000;
}

.wholearea {
  width: 60%;
  height: auto;
  margin: 20vh 20% auto 20%;
  padding: 50px 2.5% 10px 2.5%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: auto;
  /* outline: 1px black solid; */
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 20px 10px;
  border: 1px black solid;
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.updateauthority:hover {
  background-color: rgb(46, 189, 89);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
}
</style>
