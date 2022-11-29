<!-- 登入後的畫面 -->
<template>
  <div>
    <h1>公司別維護</h1>
  </div>
  <backToLoginPage />
</template>

<script lang="ts">
import NavbarFun from "../../../components/NavbarFun.vue";
import LoadingIO from "../../../components/LoadingIO.vue";
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default {
  name: "CompanyMaintain",
  components: {
    backToLoginPage,
  },
};
</script>

<style>
nav {
  padding-top: 0px;
}
</style>
