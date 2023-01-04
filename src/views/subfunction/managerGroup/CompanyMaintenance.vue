<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">公司別維護</h1>
  <Xyz
    @eventIsANumber="gotANumber"
    @eventIsAString="gotAText"
    @eventIsAArray="gotAArray"
  ></Xyz>
  <br />
  <BackToLoginPage></BackToLoginPage>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import Xyz from "../../../components/subfunccomponents/aboutCompanyMaintenance/Xyz.vue";
import BackToLoginPage from "../../../components/BackToLoginPage.vue";
export default defineComponent({
  name: "CompanyMaintain",
  components: {
    Xyz,
    BackToLoginPage,
  },
  setup() {
    const loading: any = inject("valueofLoading");
    loading.value = null;
    // console.log("N1:", loading.value);
    // inject("要傳遞的資料名稱");

    setTimeout(loadingview, 1000);
    function loadingview() {
      loading.value = false;
      // console.log("N2:", loading.value);
    }

    // 以下為 EMIT 之操作
    function gotANumber(e: any) {
      console.log(`接收訊息：${e}`);
    }
    function gotAText(e: any) {
      console.log(`接收訊息：${e}`);
    }
    function gotAArray(e: any) {
      console.log(`接收訊息：${e}`);
    }

    return {
      gotANumber,
      gotAText,
      gotAArray,
    };
  },
});
</script>
