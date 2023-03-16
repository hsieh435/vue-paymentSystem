<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">使用者維護</h1>
  <UserList></UserList>
  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "../../../components/subfunccomponents/aboutpsUserList/UserList.vue";
import BackToLoginView from "../../../components/public/BackToLoginView.vue";
export default defineComponent({
  name: "UserMaintain",
  components: {
    UserList,
    BackToLoginView,
  },
  setup() {
    // console.time("Spent");
    // console.timeLog("Spent");
    // console.timeEnd("Spent");
    return {};
  },
});
</script>
<style src="../subfunction.scss" lang="scss" scoped></style>
