<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <AddNewRole></AddNewRole>
  <UserList></UserList>
  <AuthorityManagement></AuthorityManagement>
  <BackToLoginPage></BackToLoginPage>

</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
import AddNewRole from "../../../components/subfunccomponents/AddNewRole.vue";
import UserList from "../../../components/subfunccomponents/UserList.vue";
import AuthorityManagement from "../../../components/subfunccomponents/AuthorityManagement.vue";
export default defineComponent({
  name: "RoleManagement",
  components: {
    BackToLoginPage,
    AddNewRole,
    UserList,
    AuthorityManagement,
  },
  setup() {
    return {};
  },
});

// TODO：
// 1.連接後台資料庫，連線 function 資料庫?或是 permission 資料庫
// 2.將後台資料庫資料呈現在頁面上
// 3.思考修改權限的方式
// 4.
// 5.
</script>
