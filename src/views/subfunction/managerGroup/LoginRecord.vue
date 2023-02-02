<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">登入記錄查詢</h1>
  <BackToLoginView></BackToLoginView>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BackToLoginView from "../../../components/BackToLoginView.vue";
export default defineComponent({
  name: "LoginRecord",
  components: {
    BackToLoginView,
  },
  setup() {
    return {};
  },
});
</script>
<style src="../subfunction.scss" lang="scss" scoped></style>
