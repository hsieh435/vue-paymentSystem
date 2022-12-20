<!-- 角色列表 -->
<template>
  <table class="table">
    <tr>
      <th>編號</th>
      <th>姓名</th>
      <th>notesId</th>
      <th>角色名稱</th>
      <th>修改角色</th>
    </tr>
    <tr v-for="(user, index) in userlist.value" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ user.userInfo.userName }}</td>
      <td>{{ user.notesId }}</td>
      <td><AdjustUserRole></AdjustUserRole></td>
      <td><button class="button">修改角色</button></td>
    </tr>
  </table>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, provide, inject } from "vue";
import axios from "axios";
import AdjustUserRole from "./AdjustUserRole.vue";
export default defineComponent({
  name: "UserList",
  components: {
    AdjustUserRole,
  },

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const userlist = reactive({ value: null });

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/PSUser/findAllPSUser",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      )

      .then((response) => {
        userlist.value = response.data.data;
        // console.log("傳遞成功");
        // console.log(response.data.data);
      })
      .catch((error) => {
        alert("發生錯誤");
        // console.log("傳遞失敗");
      });

    return {
      userlist,
    };
  },
});
</script>

<style scoped>
.table {
  width: 90%;
  margin: 0px 5% 0px 5%;
  border-radius: 20px 20px 20px 20px;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  transition: 0.3s;
  /* border: 1px rgb(0, 0, 0) solid; */
}

.table:hover {
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.781);
}

body {
  background: #1f1f1f;
}

table {
  font-family: "Oswald", sans-serif;
  border-collapse: collapse;
}

th {
  width: 25vw;
  height: 75px;
  font-size: 26px;
  background-color: rgba(79, 192, 210, 0.7);
  color: #ffffff;
  outline: 1px solid black;
}

td {
  background-color: rgb(177, 177, 177);
  color: #000000;
  width: 25vw;
  height: 50px;
  font-size: 22px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  outline: 1px solid black;
}

tr:hover td {
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
}

tr td:first-child {
  color: rgb(0, 0, 0);
  transition: all 0.3s ease-in-out;
}

tr:hover td:first-child {
  color: rgba(79, 192, 210, 1);
  transition: all 0.3s ease-in-out;
}

tr {
  border-bottom: 1px solid #2a2a2a;
}

tr:last-of-type {
  border-bottom: none;
}

.button {
  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 20px;
  background-color: rgba(79, 193, 210);
  line-height: 16px;
  margin: 0px 5px 0px 5px;
  transition: 0.2s;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
