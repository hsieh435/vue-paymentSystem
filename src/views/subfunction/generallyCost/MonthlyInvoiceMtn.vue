<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">月結發票管理作業</h1>
  <backToLoginPage></backToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default defineComponent({
  name: "MonthlyInvoiceMtn",
  components: {
    backToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
