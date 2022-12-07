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

// TODO：
// 1.連接後台資料庫，連線 function 資料庫?或是 permission 資料庫
// 2.將後台資料庫資料呈現在頁面上
// 3.思考修改權限的方式
// 4.
// 4.
</script>
