<!-- 修改使用者角色 Components -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>將{{ userName }}調整角色為</h2>
      <AdjustUserRole
        :user-role-id="props.userRoleId"
        :user-role-name="props.userRoleName"
      ></AdjustUserRole>
      <button class="closeit" @click="cancelEdit()">×</button>
      <div>
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
import { defineComponent, reactive, inject } from "vue";
import axios from "axios";
import AdjustUserRole from "./AdjustUserRole.vue";

export default defineComponent({
  name: "AdjustFunction",
  components: {
    AdjustUserRole,
  },
  props: ["userName", "userNotesId", "userRoleId", "userRoleName"],

  setup(props) {
    const changerole: any = inject("changerole");

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    // console.log("props.userNotesId", props.userNotesId);
    // console.log("props.userName", props.userName);
    // console.log("props.userRoleId", props.userRoleId);
    // console.log("props.userRoleName", props.userRoleName);

    const changeRole = reactive({ value: null });

    function sent() {
      axios
        .post(
          "http://localhost:8085/paymentSystem/api/PSUser/editPSUser",
          {
            roleId: "",
            notesId: props.userNotesId,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              // Bearer 跟 token 中間要有一個空格
            },
          }
        )

        .then((response) => {
          changeRole.value = response.data.data;
          // console.log(response.data.data);
          // console.log("傳遞成功");
        })
        .catch((error) => {
          alert("發生錯誤");
          console.log("傳遞失敗");
        });
    }

    function cancelEdit() {
      changerole.value = true;
    }

    return {
      props,
      changeRole,
      sent,
      cancelEdit,
    };
  },
});
</script>

<style scoped>
.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000;
}

.wholearea {
  width: 60%;
  /* height: 80vh; */
  border-radius: 20px;
  margin: 20vh 20% 10vh 20%;
  padding: 20px 2.5% 0px 2.5%;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: auto;
  position: relative;
  outline: 1px black solid;
}

.closeit {
  height: 40px;
  width: 40px;
  font-size: 36px;
  line-height: 26px;
  border: 0px;
  background-color: rgb(255, 255, 255, 0);
  position: absolute;
  right: 0px;
  top: 0px;
}

.authmang {
  text-align: left;
  /* outline: 1px black solid; */
}

.authmang h2 {
  text-align: center;
}

.funcgroupname {
  margin: 20px 10px 20px 30px;
  border-radius: 10px;
  background-color: rgb(167, 255, 255);
  padding: 10px 10px 30px 20px;
  outline: 1px solid rgb(120, 120, 120);
}

.funcgroup {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* outline: 1px solid #000; */
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 20px 10px;
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
