<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <AddNewRole></AddNewRole>
  <RoleList></RoleList>
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/views/subfunction/subfunction.css";
import AddNewRole from "../../../components/subfunccomponents/aboutpsRoleList/AddNewRole.vue";
import RoleList from "../../../components/subfunccomponents/aboutpsRoleList/RoleList.vue";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
export default defineComponent({
  name: "RoleManagement",
  components: {
    BackToLoginPage,
    AddNewRole,
    RoleList,
  },
  setup() {
    return {};
  },
});
</script>
