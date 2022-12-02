<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">角色與權限管理</h1>
  <backToLoginPage></backToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default defineComponent({
  name: "RoleManagement",
  components: {
    backToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
