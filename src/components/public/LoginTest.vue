<script setup lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

const userId = localStorage.getItem("userId");
const userJWT = localStorage.getItem("userJWT");
const now = Number(Math.floor(Date.now() / 1000));
const expiredmoment = Number(localStorage.getItem("expiredmoment"));
const keeplogin = Number(localStorage.getItem("keeplogin"));
const router = useRouter();

// console.log("userId:", userId);
// console.log("userJWT:", userJWT);

test();
function test() {
  if (userId === null && userJWT === null) {
    router.push("./");
  } else if (now > expiredmoment) {
    localStorage.clear();
    router.push("./");
  }
}

</script>
