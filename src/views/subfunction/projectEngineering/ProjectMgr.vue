<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">專案資料管理作業</h1>
  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import BackToLoginView from "../../../components/public/BackToLoginView.vue";
export default defineComponent({
  name: "ProjectMgr",
  components: {
    BackToLoginView,
  },
  setup() {
    return {};
  },
});
</script>
<style src="../subfunction.scss" lang="scss" scoped></style>
