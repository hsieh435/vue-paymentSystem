<!-- 使用者列表 -->
<template>
  <div class="container">
    <pagination-component
      class="pagination-component"
      v-model="currentPage"
      :numberOfPages="numberOfPages"
    />
    <table class="table-fill">
      <thead>
        <tr>
          <th>Index</th>
          <th>userId</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr v-for="(user, index) in Users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.userId }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.roleName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- 

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import PaginationComponent from "./components/pagination/PaginationComponent.vue";
import { useTodosApi } from "./composables/useTodosApi";

const currentPage = ref(1);
const rowsPerPage = ref(30);

const { todos, todosAreLoading, loadTodos, numberOfPages } = useTodosApi(
  currentPage,
  rowsPerPage
);

onMounted(async () => loadTodos());
</script>

-->

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import PaginationComponent from "./pagination/PaginationComponent.vue";
import AdjustUserRole from "./AdjustUserRole.vue";
import { useTodosApi } from "./pagination/useTodosApi";

export default defineComponent({
  name: "UserList",
  components: {
    PaginationComponent,
    AdjustUserRole,
  },

  setup() {
    const currentPage = ref(1);
    const rowsPerPage = ref(20);
    // console.log("currentPage:", currentPage);
    // 1

    // console.log("rowsPerPage:", rowsPerPage);
    // 20

    const { Users, UsersAreLoading, loadUsers, numberOfPages } = useTodosApi(
      currentPage,
      rowsPerPage
    );
    // console.log("Users:", Users);
    // 各個頁面資料

    // console.log("UsersAreLoading:", UsersAreLoading);
    // value:false

    // console.log("loadUsers:", loadUsers);
    // console 出 function

    // console.log("numberOfPages:", numberOfPages);
    // 分頁總數

    onMounted(async () => loadUsers());
    // console.log("loadUsers:", loadUsers);
    // console 出 function

    return {
      currentPage,
      rowsPerPage,
      useTodosApi,
      loadUsers,
      Users,
    };
  },
});
// http://localhost:8085/paymentSystem/api/PSUser/editPSUser
// JBW
// "roleId": "",
// "notesId": ""
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
  margin: 10px 5px 10px 5px;
  transition: 0.2s;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
