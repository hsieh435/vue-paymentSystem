<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">使用者維護</h1>
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
export default defineComponent({
  name: "UserMaintain",
  components: {
    BackToLoginPage,
  },
  setup() {
    return {};
  },
});
</script>
