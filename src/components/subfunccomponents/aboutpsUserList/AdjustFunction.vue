<!-- 修改使用者角色 Components -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>調整{{ userName }}角色為</h2>
      <select class="selection">
        <!-- v-model="selected" -->
        <option
          v-for="(role, index) in rolelist.value"
          :key="index"
          :value="role.roleId"
          :selected="role.selected"
        >
          {{ role.roleName }}
        </option>
      </select>
      <!-- <AdjustUserRole
        :user-role-id="props.userRoleId"
        :user-role-name="props.userRoleName"
      ></AdjustUserRole> -->
      <button class="closeit" @click="cancelEdit()">×</button>
      <div>
        <div>
          <button class="updateauthority" @click="abc()">abc</button>
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
import { defineComponent, ref, reactive, inject } from "vue";
import axios from "axios";
import AdjustUserRole from "./AdjustUserRole.vue";

export default defineComponent({
  name: "AdjustFunction",
  components: {
    AdjustUserRole,
  },
  props: ["userName", "userNotesId", "userRoleId", "userRoleName"],

  setup(props) {
    const closeChangeRole: any = inject("closeChangeRole");

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const changeRole = reactive({ value: null });

    const rolelist: any = reactive({ value: null });

    const newselected = ref("newselect");

    function abc() {
      // console.log("newselected:", newselected);
      // console.log();
    }

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/psRole/findAllPSRole",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      )

      .then((response) => {
        rolelist.value = response.data.data;
        const originalRole = response.data.data;
        for (let i = 0; i < originalRole.length; i++) {
          const eachRoleId = originalRole[i].roleId;
          const roleCompare: boolean = eachRoleId.includes(props.userRoleId);
          originalRole[i]["selected"] = roleCompare;
          // 此為物件增加 key 值之操作方式，將 originalRole 新增名為 "selected" 的 key 值，並賦予 value 值為 roleCompare originalRole 物件將多出一個欄位，將開欄位用 v-model 綁定下拉式選單的 selected，即可完成
        }
      })
      .catch((error) => {
        alert("發生錯誤");
        // console.log("傳遞失敗");
      });

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
          // console.log("傳遞失敗");
        });
    }

    function cancelEdit() {
      closeChangeRole.value = true;
    }

    return {
      props,
      rolelist,
      changeRole,
      sent,
      cancelEdit,
      abc,
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
  height: auto;
  border-radius: 20px;
  margin: 15vh 20% 10vh 20%;
  padding: 50px 2.5% 30px 2.5%;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: auto;
  position: relative;
  outline: 1px black solid;
}

.selection {
  width: 300px;
  height: 30px;
  font-size: 24px;
  margin: 20px 20px 20px 20px;
}

.selected {
  display: none;
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
