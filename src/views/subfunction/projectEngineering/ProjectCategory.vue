<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">專案分類維護</h1>
  <backToLoginPage></backToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default defineComponent({
  name: "ProjectCategory",
  components: {
    backToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
