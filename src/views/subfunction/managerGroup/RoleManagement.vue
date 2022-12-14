<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <AddNewRole></AddNewRole>
  <RoleList></RoleList>
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, provide, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import AddNewRole from "../../../components/subfunccomponents/aboutrolemanagement/AddNewRole.vue";
import RoleList from "../../../components/subfunccomponents/aboutrolemanagement/RoleList.vue";
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
