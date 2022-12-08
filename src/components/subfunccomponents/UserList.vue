<!-- 權限列表 -->
<template>
  <table>
    <tr>
      <th>角色代碼</th>
      <th>角色名稱</th>
      <th>設定</th>
    </tr>
    <tr v-for="(item, index) in userAuthority.value" :key="index">
      <td>{{ item.roleId }}</td>
      <td>{{ item.roleName }}</td>
      <td>
        <button class="button">編輯角色</button>
        <button class="button">修改權限</button>
        <button class="button">刪除</button>
      </td>
    </tr>
  </table>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
export default defineComponent({
  name: "UserList",
  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/psRole/findAllPSRole",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間有一個空格
          },
        }
      )

      .then((response) => {
        userAuthority.value = response.data.data;

        // console.log("傳遞成功");
        // console.log("P1:", response.data.data);
      })
      .catch((error) => {
        // alert("發生錯誤");
        console.log("傳遞失敗");
      });

    const userAuthority = reactive({ value: null });

    return {
      userAuthority,
    };
  },
});
</script>

<style scoped>
table {
  width: 80%;
  margin: 0px 10% 0px 10%;
  border-radius: 20px 20px 20px 20px;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  /* border-collapse: separate; */
  transition: 0.3s;
  border: 1px rgb(0, 0, 0) solid;
}

table:hover {
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.781);
}

th {
  background-color: rgb(0, 153, 122);
  color: #ffffff;
  height: 50px;
  border: 1px rgb(0, 0, 0) solid;
}

td {
  background-color: #ffffff;
  height: 50px;
  text-align: center;
  border: 1px solid black;
}

tr {
  border-bottom: 1px solid #dddddd;
}

tr:nth-of-type(even) td {
  background-color: #f3f3f3;
}

.button {
  width: 100px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  background-color: rgba(255, 0, 0, 0.5);
  margin-right: 5px;
}

.button:nth-of-type(even) {
  background-color: rgba(0, 0, 255, 0.5);
}
</style>
