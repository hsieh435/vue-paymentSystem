<!-- 編輯角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <button class="closeit" @click="cancelEdit()">×</button>
      <div>
        <h2>修改{{ roleName }}角色名稱</h2>
        <label class="thislabel">角色名稱改為：</label>
        <input class="thisinput" type="text" v-model="newRole" />
        <div>
          <button class="updateauthority" @click="sent()">確定修改</button>
          <button class="updateauthority" @click="cancelEdit()">
            取消修改
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, toRefs, inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "EditRole",
  props: ["roleId", "roleName"],
  setup(props) {
    const adjustRole: any = inject("adjustRole");
    const reload: any = inject("reload");

    const userId = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");

    // const { roleId, roleName } = toRefs(props);
    // const roleId = toRef(props, "roleId");
    // const roleName = toRef(props, "roleName");

    const newRole = ref();

    function sent() {
      // console.log("newRole.value:", newRole.value);
      // console.log("props.roleId:", props.roleId);
      // console.log("props.roleName:", props.roleName);
      if (newRole.value == null) {
        alert("欄位不可留白");
      } else if (newRole.value === props.roleName) {
        alert("角色名稱相同，無修改");
        newRole.value = "";
      } else {
        axios
          .post(
            "http://localhost:8085/paymentSystem/api/psRole/editPSRole",
            {
              roleId: props.roleId,
              roleName: newRole.value,
            },
            {
              headers: {
                Authorization: "Bearer " + userJWT,
                // Bearer 跟 userJWT 中間要有一個空格
              },
            }
          )

          .then((response) => {
            if (response.data.returnCode == 0) {
              alert(response.data.message);
              adjustRole.value = true;
              reload();
            } else {
              alert(`returnCode:${response.data.returnCode}\n編輯失敗`);
              adjustRole.value = true;
            }
          })
          .catch((error) => {
            alert("資料傳輸發生錯誤");
            adjustRole.value = true;
          });
      }
    }

    function cancelEdit() {
      adjustRole.value = true;
    }

    return {
      sent,
      cancelEdit,
      newRole,
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
  height: auto;
  margin: 200px 20% 0px 20%;
  padding: 50px 2.5% 50px 2.5%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: auto;
  position: relative;
  /* outline: 1px black solid; */
}

.closeit {
  height: 40px;
  width: 40px;
  font-size: 36px;
  border: 0px;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  right: 10px;
  top: 0px;
  transition: 0.3s;
}

.closeit:hover {
  height: 60px;
  width: 60px;
  font-size: 60px;
  position: absolute;
  right: 0px;
  top: -10px;
}

.thislabel {
  font-size: 24px;
  line-height: 30px;
  margin: 30px 5px 30px 0px;
}

.thisinput {
  height: 30px;
  padding: 0px 0px 0px 10px;
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
