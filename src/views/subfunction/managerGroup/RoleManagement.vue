<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <AddNewRole></AddNewRole>
  <RoleList></RoleList>
  <!-- <AuthorityManagement v-if="adjustAuthority == null"></AuthorityManagement> -->
  <!-- <EditRole v-if="adjustRole == null"></EditRole> -->
  <!-- <DeleteTheRole v-if="deleteRole == null"></DeleteTheRole> -->
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, provide, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import AddNewRole from "../../../components/subfunccomponents/aboutrolemanagement/AddNewRole.vue";
import RoleList from "../../../components/subfunccomponents/aboutrolemanagement/RoleList.vue";
// import AuthorityManagement from "../../../components/subfunccomponents/aboutrolemanagement/AuthorityManagement.vue";
// import EditRole from "../../../components/subfunccomponents/aboutrolemanagement/EditRole.vue";
// import DeleteTheRole from "../../../components/subfunccomponents/aboutrolemanagement/DeleteTheRole.vue";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
export default defineComponent({
  name: "RoleManagement",
  components: {
    BackToLoginPage,
    AddNewRole,
    RoleList,
    // AuthorityManagement,
    // EditRole,
    // DeleteTheRole,
  },
  setup() {
    // 修改權限功能的 value 值，控制出現與否
    // const adjustAuthority = ref();
    // adjustAuthority.value = true;

    // 編輯角色功能的 value 值，控制出現與否
    // const adjustRole = ref();
    // adjustRole.value = true;

    // 刪除角色功能的 value 值，控制出現與否
    // const deleteRole = ref();
    // deleteRole.value = true;

    // provide("adjustAuthority", adjustAuthority);
    // provide("adjustRole", adjustRole);
    // provide("deleteRole", deleteRole);

    return {
      // adjustAuthority,
      // adjustRole,
      // deleteRole,
    };
  },
});
</script>
