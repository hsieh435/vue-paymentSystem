<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <AddNewRole></AddNewRole>
  <RoleList></RoleList>
  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackToLoginView from "../../../components/public/BackToLoginView.vue";
import AddNewRole from "../../../components/subfunccomponents/aboutpsRoleList/AddNewRole.vue";
import RoleList from "../../../components/subfunccomponents/aboutpsRoleList/RoleList.vue";
export default defineComponent({
  name: "RoleManagement",
  components: {
    BackToLoginView,
    AddNewRole,
    RoleList,
  },
  setup() {
    return {};
  },
});
</script>
<style src="../subfunction.scss" lang="scss" scoped></style>
