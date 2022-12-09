<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <AuthorityManagement v-if="adjustAuthority == null"></AuthorityManagement>
  <EditRole v-if="adjustRole == null"></EditRole>
  <AddNewRole></AddNewRole>
  <UserList></UserList>
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, provide, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
import AddNewRole from "../../../components/subfunccomponents/aboutrolemanagement/AddNewRole.vue";
import EditRole from "../../../components/subfunccomponents/aboutrolemanagement/EditRole.vue";
import UserList from "../../../components/subfunccomponents/aboutrolemanagement/UserList.vue";
import AuthorityManagement from "../../../components/subfunccomponents/aboutrolemanagement/AuthorityManagement.vue";
export default defineComponent({
  name: "RoleManagement",
  components: {
    BackToLoginPage,
    AddNewRole,
    EditRole,
    UserList,
    AuthorityManagement,
  },
  setup() {
    const adjustAuthority = ref();
    adjustAuthority.value = true;

    const adjustRole = ref();
    adjustRole.value = true;

    provide("adjustAuthority", adjustAuthority);
    provide("adjustRole", adjustRole);

    return {
      adjustAuthority,
      adjustRole,
    };
  },
});

// TODO：
// 1.連接後台資料庫，連線 function 資料庫?或是 permission 資料庫
// 2.將後台資料庫資料呈現在頁面上
// 3.思考修改權限的方式
// 4.
// 5.
</script>
