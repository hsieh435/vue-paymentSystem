<template>
  <NavbarFun />
  <div>
    <h1>專案資料管理作業</h1>
  </div>
  <backToLoginPage />
</template>

<script lang="ts">
import backToLoginPage from "../../../components/backToLoginPage.vue";
export default {
  name: "ProjectMgr",
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