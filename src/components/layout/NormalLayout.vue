<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">LoginPage</router-link> |
    <router-link to="/loginpage2">LoginPage2</router-link> |
    <router-link to="/loginpage3">LoginPage3</router-link> |
    <router-link to="/LoadingEffect">LoadingEffect</router-link>
    <NavbarFun />
  </nav>
  <router-view />
</template>

<script lang="ts">
import NavbarFun from "../../components/NavbarFun.vue";
export default {
  name: "NormalLayout",
  components: {
    NavbarFun,
  },
};
</script>

<style lang="scss" scoped>
//  nav {
//   z-index: 10;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: rgb(46, 189, 89);
//     }
//   }
// }
</style>
