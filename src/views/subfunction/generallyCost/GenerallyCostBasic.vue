<template>
  <NavbarFun />
  <div>
    <h1>帳務別資料維護</h1>
  </div>
  <backToLoginPage />
</template>

<script lang="ts">
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default {
  name: "GenerallyCostBasic",
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
