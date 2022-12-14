<!-- 編輯角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>編輯角色：{{ roleName }}</h2>
      <h2>角色代碼：{{ roleId }}</h2>
      <form class="thisfrom">
        <button class="closeit" @click="cancelEdit()">×</button>
        <!-- <label class="thislabel">角色代碼：</label> -->
        <!-- <input class="thisinput" type="text" v-model="newRole.ID" /> -->
        <br />
        <label class="thislabel">角色名稱：</label>
        <input class="thisinput" type="text" v-model="newRole" />
      </form>
      <div>
        <!-- <button class="updateauthority" @click="abc()">確定修改</button> -->
        <button class="updateauthority" @click="sent()">確定修改</button>
        <button class="updateauthority" @click="cancelEdit()">取消編輯</button>
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

    const newRole = ref();

    // function abc() {
    //   console.log("V1:", newRole.value);
    //   console.log("V2:", props.roleName);
    //   console.log("V3:", props.roleId);
    // }

    function sent() {
      if (newRole.value.length > 0) {
        axios
          .post(
            "http://localhost:8085/paymentSystem/api/psRole/editPSRole",
            {
              roleId: props.roleId,
              roleName: newRole,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
                // Bearer 跟 token 中間有一個空格
              },
            }
          )

          .then((response) => {
            // userAuthority.value = response.data.data;
            // console.log("編輯成功");
          })
          .catch((error) => {
            alert("發生錯誤");
            // console.log("編輯失敗");
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
      // abc,
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
  height: 50vh;
  margin: 200px 20% 0px 20%;
  padding: 40px 2.5% 0px 2.5%;
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
