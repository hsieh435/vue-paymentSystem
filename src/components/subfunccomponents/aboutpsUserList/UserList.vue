<!-- 使用者列表 -->
<template>
  <AdjustFunction
    v-if="closeChangeRole == null"
    :user-name="user.userName"
    :user-notes-id="user.notesId"
    :user-role-name="user.roleName"
    :user-role-id="user.roleId"
  ></AdjustFunction>
  <search-compomnent @eventIsAString="gotAArray"></search-compomnent>
  <div class="searchbox">
    <input type="search" placeholder="Search..." v-model.trim="searchWord" />
    <button @click="abc()">Search</button>
  </div>
  <pagination-component
    class="pagination-component"
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
    <!-- v-model="user" -->
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
    v-model="currentPage"
    :numberOfPages="numberOfPages"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive, provide } from "vue";
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
    // 以下為 Pagination 相關
    const currentPage = ref(1);
    const rowsPerPage = ref(20);

    const { users, UsersAreLoading, loadUsers, numberOfPages } = useTodosApi(
      currentPage,
      rowsPerPage
    );

    onMounted(async () => loadUsers());

    //
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

    const searchWord: any = ref();

    const keyword = reactive({
      keyword: "",
    });

    function abc() {
      // let keyword = searchWord.value.toLowerCase();
      if (searchWord.value.length > 0) {
        // console.log(
        //   "searchWord.value:",
        //   searchWord.value,
        //   typeof searchWord.value
        // );
        keyword.keyword = searchWord.value;
        console.log("keyword", keyword.keyword);
      } else {
        alert("請輸入欄位");
      }
    }

    provide("keyword", keyword.keyword);

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
      abc,
      searchWord,
      keyword,
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

/* 以下 search-box */

.searchbox {
  display: inline;
}

.searchbox input[type="search"] {
  border: solid 3px #fff;
  box-sizing: border-box;
  height: 40px;
  font-size: 30px;
  width: 40%;
  margin: 20px 20px 20px 0px;
  padding: 0px 0px 0px 20px;
  outline: solid #fc0 0;
  border-radius: 25px;
  transition: all 0.2s ease-in;
  width: 30vw;
  z-index: 1;
  border: 1px solid rgb(146, 146, 146);
}

.searchbox input[type="search"]:focus {
  border: solid 3px #09f;
}

.searchbox button {
  height: 40px;
  font-size: 26px;
  margin: 20px 20px 20px 0px;
  padding: 0px 20px 0px 20px;
  border-radius: 25px;
  color: rgb(0, 0, 0);
  border: 1px solid rgb(146, 146, 146);
  transition: all 0.2s ease-in;
}

.searchbox button:hover {
  outline: solid 3px #09f;
}
</style>
