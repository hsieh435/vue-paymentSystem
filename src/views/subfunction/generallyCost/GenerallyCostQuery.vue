<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">一般帳款查詢</h1>
  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import BackToLoginView from "../../../components/BackToLoginView.vue";
export default defineComponent({
  name: "GenerallyCostQuery",
  components: {
    BackToLoginView,
  },
  setup() {
    return {};
  },
});
</script>
<style src="../subfunction.scss" lang="scss" scoped></style>
