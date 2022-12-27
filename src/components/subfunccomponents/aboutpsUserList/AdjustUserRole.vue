<!-- 修改使用者 Components -->
<template>
  <div>
    <select class="selection">
      <option v-for="(role, index) in rolelist.value" :key="index">
        {{ role.roleName }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRef, reactive } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AdjustUserRole",
  components: {},
  props: ["userRoleId", "userRoleName"],

  setup(props) {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const rolelist = reactive({ value: null });

    const userRoleId = toRef(props, "userRoleId");
    // console.log("userRoleId:", userRoleId);
    // console.log("props.userRoleId:", props.userRoleId);

    const userRoleName = toRef(props, "userRoleName");
    // console.log("userRoleName:", userRoleName);
    // console.log("props.userRoleName:", props.userRoleName);

    // 解構 props 傳入之 userRoleId

    const newRolelist = [];

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
        // console.log(response.data.data);

        const originalRole = response.data.data;
        console.log("originalRole:", originalRole);

        for (let i = 0; i < originalRole.length; i++) {
          const eachRoleId = originalRole[i].roleId;
          const eachRoleName = originalRole[i].roleName;
          // console.log("eachRoleId:", eachRoleId);
          // console.log("eachRoleName:", eachRoleName);
        }

        // ------------------------ 有待完成 ------------------------

        // const roleIDCompare: boolean = originalRole.includes(props.userRoleId);
        // console.log("roleIDCompare:", roleIDCompare);
        // 比較 functionId 名稱是否有出現在角色權限列表中，若結果符合會呈現 true，反之則是 false，將其結果取名為 funcCompare
      })
      .catch((error) => {
        alert("發生錯誤");
        // console.log("傳遞失敗");
      });

    return {
      props,
      rolelist,
    };
  },
});
</script>
<style scoped>
.selection {
  width: 300px;
  height: 30px;
  font-size: 24px;
  margin: 20px 20px 20px 20px;
}
</style>
