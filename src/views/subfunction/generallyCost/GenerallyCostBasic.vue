<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">帳務別資料維護</h1>
  <backToLoginPage></backToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default defineComponent({
  name: "GenerallyCostBasic",
  components: {
    backToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
