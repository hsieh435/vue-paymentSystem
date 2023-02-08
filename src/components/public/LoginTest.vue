<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "LoginTest",
  components: {},

  setup() {
    const userId = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");
    const expiredmoment = Number(localStorage.getItem("expiredmoment"));
    const router = useRouter();

    test();
    function test() {
      if (userId == null && userJWT == null) {
        router.push("./");
      } else if (Number(Math.floor(Date.now() / 1000)) > expiredmoment) {
        localStorage.clear();
        router.push("./");
      }
    }
    return {};
  },
});
</script>
