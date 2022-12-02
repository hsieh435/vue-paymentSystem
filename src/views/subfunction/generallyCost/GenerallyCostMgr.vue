<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">一般費用申請管理作業</h1>
  <backToLoginPage></backToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default defineComponent({
  name: "GenerallyCostMgr",
  components: {
    backToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
