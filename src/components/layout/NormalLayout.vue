<template>
  <nav>
    <!-- <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/">LoginPage</router-link> |
    <router-link to="/loginpage2">LoginPage2</router-link> |
    <router-link to="/loginpage3">LoginPage3</router-link> |
    <router-link to="/LoadingEffect">LoadingEffect</router-link> -->
    <NavbarFun />
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import NavbarFun from "../public/NavbarFun.vue";

</script>

<style lang="scss" scoped>
</style>
