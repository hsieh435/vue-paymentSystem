<!-- 權限列表 -->
<template>
  <AuthorityManagement
    v-if="adjustAuthority == null"
    :role-id="role.roleId"
    :role-name="role.roleName"
  ></AuthorityManagement>
  <EditRole
    v-if="adjustRole == null"
    :role-id="role.roleId"
    :role-name="role.roleName"
  ></EditRole>
  <DeleteTheRole
    v-if="deleteRole == null"
    :role-id="role.roleId"
    :role-name="role.roleName"
  ></DeleteTheRole>
  <pagination-component
    class="pagination-component"
    v-if="numberOfPages > 1"
    v-model="currentPage"
    :numberOfPages="numberOfPages"
  />
  <table class="table">
    <tr>
      <th>編號</th>
      <th>角色代碼</th>
      <th>角色名稱</th>
      <th>設定</th>
    </tr>
    <tr v-for="(role, id) in roles" :key="id">
      <td>{{ role.id }}</td>
      <td>{{ role.roleId }}</td>
      <td>{{ role.roleName }}</td>
      <td>
        <button
          class="button"
          @click="adjustThisAuth(role.roleId, role.roleName)"
        >
          修改權限
        </button>
        <button class="button" @click="editRole(role.roleId, role.roleName)">
          修改角色
        </button>
        <button
          class="button"
          @click="deleteThisRole(role.roleId, role.roleName)"
        >
          刪除
        </button>
      </td>
    </tr>
  </table>
  <pagination-component
    class="pagination-component"
    v-if="numberOfPages > 1"
    v-model="currentPage"
    :numberOfPages="numberOfPages"
  />
</template>
<script lang="ts">
import { defineComponent, ref, reactive, provide, onMounted } from "vue";
import AuthorityManagement from "./AuthorityManagement.vue";
import EditRole from "./EditRole.vue";
import DeleteTheRole from "./DeleteTheRole.vue";
import PaginationComponent from "./pagination/PaginationComponent.vue";
import { roleApi } from "./pagination/roleApi";
export default defineComponent({
  name: "RoleList",
  components: {
    AuthorityManagement,
    EditRole,
    DeleteTheRole,
    PaginationComponent,
  },

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    // 以下為 Pagination 相關
    const currentPage = ref(1);
    const rowsPerPage = ref(20);

    const { roles, rolesAreLoading, loadRoles, numberOfPages } = roleApi(
      currentPage,
      rowsPerPage
    );

    onMounted(async () => loadRoles());

    const role = reactive({
      roleId: "",
      roleName: "",
    });

    // 修改權限功能的 value 值，控制出現與否
    const adjustAuthority = ref();
    adjustAuthority.value = true;

    function adjustThisAuth(roleId: string, roleName: string) {
      adjustAuthority.value = null;
      role.roleId = roleId;
      role.roleName = roleName;
    }

    // 編輯角色功能的 value 值，控制出現與否
    const adjustRole = ref();
    adjustRole.value = true;

    function editRole(roleId: string, roleName: string) {
      adjustRole.value = null;
      role.roleId = roleId;
      role.roleName = roleName;
    }

    // 刪除角色功能的 value 值，控制出現與否
    const deleteRole = ref();
    deleteRole.value = true;

    function deleteThisRole(roleId: string, roleName: string) {
      deleteRole.value = null;
      role.roleId = roleId;
      role.roleName = roleName;
    }

    provide("adjustAuthority", adjustAuthority);
    provide("adjustRole", adjustRole);
    provide("deleteRole", deleteRole);

    return {
      roles,
      role,
      rolesAreLoading,
      loadRoles,
      numberOfPages,
      currentPage,
      adjustAuthority,
      adjustThisAuth,
      adjustRole,
      editRole,
      deleteRole,
      deleteThisRole,
    };
  },
});
</script>

<style scoped>
.table {
  width: 80%;
  margin: 0px 10% 0px 10%;
  border-radius: 20px 20px 20px 20px;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  transition: 0.3s;
  border: 1px rgb(0, 0, 0) solid;
}

.table:hover {
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

tr:nth-of-type(even) td {
  background-color: #f3f3f3;
}

.button {
  width: 100px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  background-color: rgba(255, 0, 0, 0.5);
  line-height: 16px;
  margin: 0px 5px 0px 5px;
}

.button:nth-of-type(even) {
  background-color: rgba(0, 0, 255, 0.5);
}
</style>
