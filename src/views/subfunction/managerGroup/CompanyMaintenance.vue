<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">公司別維護</h1>
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
export default defineComponent({
  name: "CompanyMaintain",
  components: {
    BackToLoginPage,
  },
  setup() {
    const vol: any = inject("valueoflod");
    vol.value = null;
    console.log("N1:", vol.value);
    // inject("要傳遞的資料名稱");

    setTimeout(loadingview, 1000);
    function loadingview() {
      vol.value = false;
      console.log("N2:", vol.value);
    }
    return {};
  },
});
</script>
