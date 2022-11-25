<template>
  <NavbarFun />
  <div>
    <h1>專案付款作業</h1>
  </div>
  <backToLoginPage />
</template>

<script lang="ts">
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default {
  name: "ProjectPayment",
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