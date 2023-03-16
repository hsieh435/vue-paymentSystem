<!-- 刪除角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <button class="closeit" @click="cancelDelete()">×</button>
      <p>注意！</p>
      <p>角色代碼：{{ roleId }}</p>
      <p>角色名稱：{{ roleName }}</p>
      <p>將被刪除！</p>
      <div>
        <button class="deleteAuthority" @click="deleteThisRole()">確定</button>
        <button class="deleteAuthority" @click="cancelDelete()">取消</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "DeleteTheRole",
  props: ["roleId", "roleName"],
  setup(props) {
    const deleteRole: any = inject("deleteRole");
    const reload: any = inject("reload");

    const userId = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");

    function deleteThisRole() {
      axios
        .post(
          "http://localhost:8085/paymentSystem/api/psRole/deletePSRole",
          { roleId: props.roleId },
          {
            headers: {
              Authorization: "Bearer " + userJWT,
              // Bearer 跟 userJWT 中間要有一個空格
            },
          }
        )

        .then((response) => {
          alert(response.data.message);
          deleteRole.value = true;
          reload();
        })
        .catch((error) => {
          alert("資料傳輸發生錯誤");
          deleteRole.value = true;
        });
    }

    function cancelDelete() {
      deleteRole.value = true;
    }

    return {
      deleteThisRole,
      cancelDelete,
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  font-size: 30px;
  line-height: 30px;
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
  .wholearea {
    width: 60%;
    margin: 30vh 20% 30vh 20%;
    padding: 50px 2.5% 50px 2.5%;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.95);
    overflow: auto;
    position: relative;
    /* outline: 1px black solid; */
  }
}

.closeit {
  height: 40px;
  width: 40px;
  font-size: 36px;
  line-height: 36px;
  border: 0px;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.3s;
  &:hover {
    height: 60px;
    width: 60px;
    font-size: 60px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
}

.deleteAuthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 0px 10px;
  border: 1px black solid;
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 0, 0);
  transition: 0.3s;
  &:hover {
    background-color: rgb(255, 0, 0);
    box-shadow: 10px 10px 10px 0px #000000;
    border: 1px solid rgb(46, 47, 51);
  }
}

</style>
