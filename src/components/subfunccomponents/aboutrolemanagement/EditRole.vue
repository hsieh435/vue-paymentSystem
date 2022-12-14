<!-- 編輯角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <button class="closeit" @click="cancelEdit()">×</button>
      <div>
        <h2>編輯{{ roleName }}角色名稱</h2>
        <label class="thislabel">角色名稱改為：</label>
        <input class="thisinput" type="text" v-model="newRole.name" />
        <div>
          <!-- <button class="updateauthority" @click="abc()">確定修改</button> -->
          <button class="updateauthority" @click="sent()">確定修改</button>
          <button class="updateauthority" @click="cancelEdit()">
            取消編輯
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, toRef, toRefs, inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "EditRole",
  props: ["roleId", "roleName"],
  setup(props) {
    const adjustRole: any = inject("adjustRole");

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const { roleId, roleName } = toRefs(props);
    // const roleId = toRef(props, "roleId");
    // const roleName = toRef(props, "roleName");

    const newRole = reactive({
      name: "",
    });

    function abc() {
      console.log("V1:", newRole.name);
      console.log("V2:", props.roleId);
      console.log("V3:", props.roleName);
      console.log("V4:", newRole.name.length);
    }

    function sent() {
      console.log("V1:", newRole.name);
      console.log("V2:", props.roleId);
      console.log("V3:", props.roleName);
      console.log("V4:", newRole.name.length);
      // 會計主管
      if (newRole.name.length > 0) {
        axios
          .post(
            "http://localhost:8085/paymentSystem/api/psRole/editPSRole",
            {
              roleId: props.roleId,
              roleName: newRole.name,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
                // Bearer 跟 token 中間有一個空格
              },
            }
          )

          .then((response) => {
            if (response.data.returnCode == 0) {
              console.log(response.data.message);
            } else {
              // userAuthority.value = response.data.data;
              console.log("編輯失敗");
            }
            // 轉場回到頁面
          })
          .catch((error) => {
            alert("發生錯誤");
            console.log("編輯失敗");
            // 轉場回到頁面
          });
      } else {
        alert("本欄位請勿留白");
      }
    }

    function cancelEdit() {
      adjustRole.value = true;
    }

    return {
      sent,
      cancelEdit,
      newRole,
      abc,
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
  /* height: 40vh; */
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
  background-color: rgba(255, 255, 255, 0.95);
  position: absolute;
  right: 10px;
  top: 0px;
}

.thislabel {
  font-size: 24px;
  line-height: 30px;
  margin: 30px 5px 30px 0px;
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
