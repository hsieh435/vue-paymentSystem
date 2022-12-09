<!-- 編輯角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <br>
      <h2>編輯角色</h2>
      <form class="thisfrom">
        <label class="thislabel">角色代碼：</label>
        <input class="thisinput" type="text" />
        <br />
        <label class="thislabel">角色名稱：</label>
        <input class="thisinput" type="text" />
      </form>
      <div>
        <button class="updateauthority">修改</button>
        <button class="updateauthority" @click="cancelEdit()">取消更改</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, inject } from "vue";
export default defineComponent({
  name: "EditRole",
  setup() {
    const adjustList: any = inject("adjustRole");
    function cancelEdit() {
      adjustList.value = true;
    }

    return {
      cancelEdit,
    };
  },
});
</script>

<style scoped>
.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000000;
}

.wholearea {
  width: 60%;
  height: 60vh;
  margin: 150px 20% 0px 20%;
  padding: 20px 2.5% 20px 2.5%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: auto;
  /* outline: 1px black solid; */
}

.thisfrom {
  margin: 5% auto auto auto;
  /* outline: 1px black solid; */
}

.thislabel {
  font-size: 24px;
  line-height: 30px;
  margin: 20px 5px 20px 0px;
}

.thisinput {
  height: 30px;
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 50px 10px 20px 10px;
  border: 1px black solid;
  font-size: 20px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.updateauthority:hover {
  background-color: rgb(167, 255, 255);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
}
</style>
