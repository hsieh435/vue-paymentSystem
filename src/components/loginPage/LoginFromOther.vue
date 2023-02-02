<template></template>

<script lang="ts">
import { defineComponent, reactive, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default defineComponent({
  name: "LoginFromOther",
  components: {},

  setup() {
    const userId: any = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");
    const router = useRouter();

    // 解析網址
    let url = new URL(window.location.href);
    const systemId: any = url.searchParams.get("systemId");
    const notesId: any = url.searchParams.get("notesId");

    if (userId != null && userJWT != null && systemId != null) {
      if (notesId == userId) {
        router.push({ path: "/LoginView" });
      } else{
        
      }
    }
    return {};
  },
});
</script>
