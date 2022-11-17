<template>
  <NavbarFun />
  <h2 class="welcome">{{ msg.username }} 泥好</h2>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import NavbarFun from "../components/NavbarFun.vue";
import "bootstrap/dist/css/bootstrap.css";
// import { assertWhileStatement } from "@babel/types";
export default defineComponent({
  name: "LoginView",
  components: {
    NavbarFun,
  },

  setup() {
    // console.log("a:", localStorage.getItem("username"));
    const msg = reactive({
      username: localStorage.getItem("username")
    });
    // console.log("b:", msg.username)
    return {
      msg,
    };
  },
});
</script>

<style>
.welcome {
  text-align: left;
  margin-top: 200px;
  margin-left: 50px;
  color: black;
}
</style>
