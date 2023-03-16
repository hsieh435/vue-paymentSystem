<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">專案驗收作業</h1>
  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import BackToLoginView from "../../../components/public/BackToLoginView.vue";
export default defineComponent({
  name: "ProjectAcceptance",
  components: {
    BackToLoginView,
  },
  setup() {
    return {};
  },
});
</script>
<style src="../subfunction.scss" lang="scss" scoped></style>
