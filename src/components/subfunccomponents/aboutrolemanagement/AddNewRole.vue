<!-- 新增角色功能 -->
<template>
  <div class="thisfrom">
    <form name="form">
      <label class="thislabel"
        >角色代碼：
        <input type="text" name="code" v-model="newRole.ID" />
      </label>
      <label class="thislabel"
        >角色名稱：
        <input type="text" name="titlename" v-model="newRole.name" />
      </label>
    </form>
    <button class="thisbutton" @click="addNewRole()">加入</button>
    <button class="thisbutton" @click="cleanIt()">清空</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive,inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AddNewRole",
  setup() {
    const newRole = reactive({
      ID: "",
      name: "",
    });

    const token = localStorage.getItem("userJWT");

    const reload: any = inject("reload");

    function addNewRole() {
      if (newRole.ID.length > 0 && newRole.name.length > 0) {
        axios
          .post(
            "http://localhost:8085/paymentSystem/api/psRole/newPSRole",
            {
              roleId: newRole.ID,
              roleName: newRole.name,
            },
            {
              headers: {
                Authorization: "Bearer " + token,
                // Bearer 跟 token 中間要有一個空格
              },
            }
          )

          .then((response) => {
            alert("建立新角色成功");
            reload();
          })
          .catch((error) => {
            alert("傳遞失敗");
          });
      } else {
        alert("欄位不可留白");
      }
    }

    function cleanIt() {
      newRole.ID = "";
      newRole.name = "";
    }

    return {
      newRole,
      addNewRole,
      cleanIt,
    };
  },
});
</script>
<style scoped>
.thisfrom {
  width: 80%;
  margin: 30px 10% 0px 10%;
  text-align: left;
  z-index: 1000;
  /* border: 1px solid black; */
}

.thislabel {
  margin: 5px 30px 5px 0px;
}

.thisbutton {
  width: 15%;
  border: 2px rgb(0, 60, 157) solid;
  margin: 20px 20px 20px 0px;
  background-color: #003c9d;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.thisbutton:hover {
  color: #003c9d;
  background-color: #fff;
  border: 2px rgb(0, 60, 157) solid;
}
</style>
