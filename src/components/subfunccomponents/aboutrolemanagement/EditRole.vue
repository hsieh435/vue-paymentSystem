<!-- 編輯角色功能 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>編輯角色</h2>
      <form class="thisfrom">
        <label class="thislabel">角色代碼：</label>
        <input class="thisinput" type="text" v-model="newRole.ID" />
        <br />
        <label class="thislabel">角色名稱：</label>
        <input class="thisinput" type="text" v-model="newRole.name" />
      </form>
      <div>
        <button class="updateauthority" @click="sent()">確定修改</button>
        <button class="updateauthority" @click="cancelEdit()">取消編輯</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "EditRole",
  setup() {
    const adjustRole: any = inject("adjustRole");

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const newRole = reactive({
      ID: "",
      name: "",
    });

    function sent() {
      if (newRole.ID.length > 0 && newRole.name.length > 0) {
        axios
          .post(
            "http://localhost:8085/paymentSystem/api/psRole/editPSRole",
            {
              roleId: newRole.ID,
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
            // userAuthority.value = response.data.data;
            // console.log("Q1:", userAuthority.value);
            // console.log("傳遞成功");
          })
          .catch((error) => {
            alert("發生錯誤");
            // console.log("傳遞失敗");
          });
      } else {
        alert("欄位請勿留白");
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
<!-- 
  找到 API
  傳送參數
  確認資料
  匯入角色代碼與名稱
-->

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
