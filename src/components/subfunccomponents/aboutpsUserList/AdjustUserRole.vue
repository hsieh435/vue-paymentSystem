<!-- 修改使用者角色 Components -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <h2>調整{{ userName }}角色</h2>
      <h2>將{{ userRoleName }}角色改為：</h2>
      <select class="selection" v-model="selectedAnswer">
        <option
          v-for="(role, index) in rolelist.value"
          :key="index"
          :value="role.roleId"
        >
          {{ role.roleName }}
        </option>
      </select>
      <button class="closeit" @click="cancelEdit()">×</button>
      <div>
        <div>
          <button class="updateAuthority" @click="sent()">確定修改</button>
          <button class="updateAuthority" @click="cancelEdit()">
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
export default defineComponent({
  name: "AdjustFunction",
  components: {},
  props: ["userName", "userNotesId", "userRoleName", "userRoleId"],

  setup(props) {
    const closeChangeRole: any = inject("closeChangeRole");
    const reload: any = inject("reload");

    const userId = localStorage.getItem("userId");
    const userJWT = localStorage.getItem("userJWT");

    const rolelist: any = reactive({ value: null });
    // console.log("rolelist:",rolelist);

    const selectedAnswer = ref(props.userRoleId);
    // console.log("props.userRoleId:", props.userRoleId);
    // console.log("selectedAnswer:", selectedAnswer.value);

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/psRole/findAllPSRole",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + userJWT,
            // Bearer 跟 userJWT 中間要有一個空格
          },
        }
      )

      .then((response) => {
        rolelist.value = response.data.data;
      })
      .catch((error) => {
        alert("發生錯誤");
      });

    function sent() {
      // console.log(selectedAnswer.value);
      if (selectedAnswer.value === props.userRoleId) {
        alert("選擇角色相同，無修改");
      } else {
        axios
          .post(
            "http://localhost:8085/paymentSystem/api/PSUser/editPSUser",
            {
              roleId: selectedAnswer.value,
              notesId: props.userNotesId,
            },
            {
              headers: {
                Authorization: "Bearer " + userJWT,
                // Bearer 跟 userJWT 中間要有一個空格
              },
            }
          )

          .then((response) => {
            alert(response.data.message);
            reload();
          })
          .catch((error) => {
            alert("資料傳輸發生錯誤");
          });
      }
    }

    function cancelEdit() {
      closeChangeRole.value = true;
    }

    return {
      props,
      rolelist,
      selectedAnswer,
      sent,
      cancelEdit,
    };
  },
});
</script>

<style lang="scss" scoped>
.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000;
  .wholearea {
    width: 60%;
    height: auto;
    border-radius: 20px;
    margin: 15vh 20% 10vh 20%;
    padding: 50px 2.5% 30px 2.5%;
    background-color: rgba(255, 255, 255, 0.9);
    position: relative;
    outline: 1px black solid;
  }
}

.selection {
  width: 300px;
  height: 40px;
  font-size: 24px;
  margin: 20px 20px 20px 20px;
  padding: 5px 0px 5px 5px;
  &:hover {
    cursor: pointer;
  }
}

.closeit {
  height: 40px;
  width: 40px;
  font-size: 36px;
  line-height: 36px;
  border: 0px;
  background-color: rgb(255, 255, 255, 0);
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

.updateAuthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 20px 10px;
  border: 1px black solid;
  font-size: 20px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
  &:hover {
    background-color: rgb(167, 255, 255);
    box-shadow: 10px 10px 10px 0px #000000;
    border: 1px solid rgb(46, 47, 51);
  }
}
</style>
