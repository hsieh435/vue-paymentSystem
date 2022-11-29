<template>
  <h1 class="notfound">404 NOT FOUND</h1>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import router from "../router/index";
export default {
  name: "NotFound",

  setup() {

    return {
    };
  },
};
</script>

<style>
.notfound{
  line-height: 500px;
}
</style>
