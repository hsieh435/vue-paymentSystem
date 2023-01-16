<template>
  <button class="back" @click="back()">返回主頁面</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "BackToLoginView",
  components: {},

  setup() {
    const router = useRouter();
    function back() {
      router.push("./LoginView");
    }
    return {
      back,
    };
  },
});
</script>

<style scoped>
.back {
  height: 50px;
  width: 300px;
  border-radius: 25px;
  margin: 50px 0px 50px 0px;
  border: 0px;
  font-size: 24px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.back:hover {
  background-color: rgb(46, 189, 89);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
  color: rgb(255, 255, 255);
}
</style>
