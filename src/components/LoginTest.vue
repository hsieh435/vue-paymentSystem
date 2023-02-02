<template></template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "LoginTest",
  components: {},

  setup() {
    const userId = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");
    const router = useRouter();

    // console.log("userId:", userId, typeof userId);

    test();
    function test() {
      if (userId == null || userJWT == null) {
        router.push("./");
      }

      return {
        test,
      };
    }
  },
});
</script>
