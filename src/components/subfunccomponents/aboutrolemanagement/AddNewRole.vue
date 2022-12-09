<!-- 新增角色功能 -->
<template>
  <div class="thisfrom">
    <form>
      <label class="thislabel"
        >角色代碼：
        <input type="text" />
      </label>
      <label class="thislabel"
        >角色名稱：
        <input type="text" />
      </label>
    </form>
    <button class="thisbutton">加入</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "AddNewRole",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.thisfrom {
  width: 80%;
  margin: 30px 10% 0px 10%;
  text-align: left;
  z-index: 1000;
  /* border: 1px solid black; */
}

.thislabel {
  margin-right: 20px;
}

.thisbutton {
  width: 15%;
  border: 2px rgb(0, 60, 157) solid;
  margin: 20px 20px 20px 0px;
  background-color: #003c9d;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.thisbutton:hover {
  color: #003c9d;
  background-color: #fff;
  border: 2px rgb(0, 60, 157) solid;
}
</style>
