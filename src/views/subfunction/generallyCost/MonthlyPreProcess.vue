<template>
  <NavbarFun />
  <div>
    <h1>彙總前段檢收作業</h1>
  </div>
  <backToLoginPage />
</template>

<script lang="ts">
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default {
  name: "MonthlyPreProcess",
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
