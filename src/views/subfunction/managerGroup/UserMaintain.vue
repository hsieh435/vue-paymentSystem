<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">使用者維護</h1>
  <UserList></UserList>
  <BackToLoginView></BackToLoginView>
  <LoginTest></LoginTest>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "../subfunction.css";
import UserList from "../../../components/subfunccomponents/aboutpsUserList/UserList.vue";
import BackToLoginView from "../../../components/BackToLoginView.vue";
import LoginTest from "../../../components/LoginTest.vue";
export default defineComponent({
  name: "UserMaintain",
  components: {
    UserList,
    BackToLoginView,
    LoginTest,
  },
  setup() {
    return {};
  },
});
</script>
