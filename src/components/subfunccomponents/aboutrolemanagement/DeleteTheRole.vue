<!-- 刪除角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>注意！</h2>
      <h2>角色代碼：{{}}</h2>
      <h2>角色名稱：{{}}</h2>
      <h2>將被刪除！</h2>
      <div>
        <button class="updateauthority" @click="deleteThisRole()">
          確定刪除
        </button>
        <button class="updateauthority" @click="cancelEdit()">取消刪除</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, inject } from "vue";
export default defineComponent({
  name: "DeleteTheRole",
  setup() {
    const deleteRole: any = inject("deleteRole");

    function deleteThisRole() {}
    function cancelEdit() {
      deleteRole.value = true;
    }

    return {
      deleteThisRole,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
h2 {
  color: rgb(255, 0, 0);
}
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
  margin: 30vh 20% 30vh 20%;
  padding: 50px 2.5% 50px 2.5%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: auto;
  /* outline: 1px black solid; */
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 20px 10px;
  border: 1px black solid;
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.updateauthority:hover {
  background-color: rgb(255, 0, 0);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
}
</style>
