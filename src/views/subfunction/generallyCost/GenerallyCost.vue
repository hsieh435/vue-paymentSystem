<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">一般費用申請</h1>
  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import BackToLoginView from "../../../components/BackToLoginView.vue";
export default defineComponent({
  name: "GenerallyCost",
  components: {
    BackToLoginView,
  },
  setup() {
    return {};
  },
});
</script>
