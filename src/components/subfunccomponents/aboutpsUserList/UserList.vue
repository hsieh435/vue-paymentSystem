<!-- 使用者列表 -->
<template>
  <AdjustFunction
    v-if="closeChangeRole == null"
    :user-name="user.userName"
    :user-notes-id="user.notesId"
    :user-role-name="user.roleName"
    :user-role-id="user.roleId"
  ></AdjustFunction>
  <search-compomnent @gotAKeyword="gotAKeyword"></search-compomnent>
  <pagination-component
    class="pagination-component"
    v-if="numberOfPages > 1"
    v-model="currentPage"
    :numberOfPages="numberOfPages"
  />
  <table class="table-fill">
    <thead>
      <tr>
        <th>ID</th>
        <th>UserId</th>
        <th>UserName</th>
        <th>RoleName</th>
        <th>Adjust</th>
      </tr>
    </thead>
    <tbody class="table-hover">
      <tr v-for="(user, id) in users" :key="id">
        <td>{{ user.id }}</td>
        <td>{{ user.userInfo.notesId }}</td>
        <td>{{ user.userInfo.userName }}</td>
        <td>{{ user.role.roleName }}</td>
        <td>
          <button
            class="button"
            @click="
              adjustThisAuth(
                user.userInfo.userName,
                user.userInfo.notesId,
                user.role.roleName,
                user.role.roleId
              )
            "
          >
            修改角色
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <pagination-component
    class="pagination-component"
    v-if="numberOfPages > 1"
    v-model="currentPage"
    :numberOfPages="numberOfPages"
  />
  <br />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  provide,
  inject,
} from "vue";
import axios from "axios";
import AdjustFunction from "./AdjustFunction.vue";
import PaginationComponent from "./pagination/PaginationComponent.vue";
import searchCompomnent from "./search/searchCompomnent.vue";
import AdjustUserRole from "./AdjustUserRole.vue";
import { useTodosApi } from "./pagination/useTodosApi";
export default defineComponent({
  name: "UserList",
  components: {
    AdjustFunction,
    PaginationComponent,
    AdjustUserRole,
    searchCompomnent,
  },

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    // const reload: any = inject("reload");

    // 處理 keyword 與搜尋功能
    const keyword = ref({ value: null });
    const gotAKeyword = (e: any) => {
      // console.log("e:", e);
      keyword.value = e;
      console.log("keyword:", keyword.value);
      // console.log("users:", users);

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
          const usersArray = response.data.data;

          for (let i = 0; i < usersArray.length; i++) {
            const eachuser = usersArray[i];
            const checkNoteId: boolean = eachuser.userInfo.notesId
              .toLowerCase()
              .includes(e);
            const checkUserName: boolean = eachuser.userInfo.userName
              .toLowerCase()
              .includes(e);
            const checkRoleName: boolean = eachuser.role.roleName
              .toLowerCase()
              .includes(e);

            eachuser["checkNoteId"] = checkNoteId;
            eachuser["checkUserName"] = checkUserName;
            eachuser["checkRoleName"] = checkRoleName;
          }

          const compareResult = usersArray.filter(function (value: any) {
            return (
              value.checkNoteId == true ||
              value.checkUserName == true ||
              value.checkRoleName == true
            );
          });
          console.log("compareResult:", compareResult);

          // users.value = compareResult;
        })
        .catch((error) => {
          alert("資料搜尋發生錯誤");
        });
    };

    // 以下為 Pagination 相關
    const currentPage = ref(1);
    const rowsPerPage = ref(20);

    const { users, UsersAreLoading, loadUsers, numberOfPages } = useTodosApi(
      currentPage,
      rowsPerPage
    );

    // console.log("users:", users);

    onMounted(async () => loadUsers());

    // props 傳遞資料至 AdjustFunction Component
    const user = reactive({
      userName: "",
      notesId: "",
      roleName: "",
      roleId: "",
    });

    // 以下為開啟調整角色 Component 相關
    const closeChangeRole = ref();
    closeChangeRole.value = true;

    function adjustThisAuth(
      userName: string,
      userNotesId: string,
      userRoleName: string,
      userRoleId: string
    ) {
      closeChangeRole.value = null;
      user.userName = userName;
      user.notesId = userNotesId;
      user.roleName = userRoleName;
      user.roleId = userRoleId;
    }

    provide("closeChangeRole", closeChangeRole);

    // const keyword = reactive({
    //   searchword: "",
    // });
    // provide("keyword", keyword.searchword);

    return {
      users,
      UsersAreLoading,
      loadUsers,
      numberOfPages,
      currentPage,
      rowsPerPage,
      useTodosApi,
      adjustThisAuth,
      user,
      closeChangeRole,
      gotAKeyword,
    };
  },
});
</script>

<style scoped lang="scss">
.table-fill {
  width: 80%;
  margin: 0px 10% 0px 10%;
  table-layout: auto;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  transition: 0.3s;
  border: 1px rgb(0, 0, 0) solid;
}

body {
  background: #1f1f1f;
}

table {
  font-family: "Oswald", sans-serif;
  border-collapse: collapse;
}

th {
  height: 75px;
  font-size: 26px;
  padding: 10px 10px 10px 10px;
  background-color: rgba(79, 192, 210, 0.7);
  color: rgb(255, 255, 255);
  outline: 1px solid black;
}

td {
  background-color: rgb(177, 177, 177);
  color: #000000;
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
  margin: 10px 5px 10px 5px;
  transition: 0.2s;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
