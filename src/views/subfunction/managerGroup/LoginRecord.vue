<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">登入記錄查詢</h1>
  <backToLoginPage></backToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default defineComponent({
  name: "LoginRecord",
  components: {
    backToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
