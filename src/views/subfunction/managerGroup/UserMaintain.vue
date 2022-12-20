<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">使用者維護</h1>
  <UserList></UserList>
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import UserList from "../../../components/subfunccomponents/aboutpsUserList/UserList.vue"
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
export default defineComponent({
  name: "UserMaintain",
  components: {
    UserList,
    BackToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
