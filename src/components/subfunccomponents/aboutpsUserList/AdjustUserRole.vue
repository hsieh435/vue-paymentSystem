<!-- 修改使用者 Components -->
<template>
  <div>
    <select class="selection">
      <option
        v-for="(role, index) in rolelist.value"
        :key="index"
        :value="role.roleId"
        :selected="role.selected"
      >
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

    const rolelist: any = reactive({ value: null });

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
        // console.log("originalRole:", originalRole);

        for (let i = 0; i < originalRole.length; i++) {
          const eachRoleId = originalRole[i].roleId;
          // console.log("eachRoleId:", eachRoleId);

          const roleCompare: boolean = eachRoleId.includes(props.userRoleId);
          // console.log("roleCompare:", roleCompare);

          originalRole[i]["selected"] = roleCompare;
          // console.log("originalRole:", originalRole);
          // 此為物件增加 key 值之操作方式，將 originalRole 新增名為 "selected" 的 key 值，並賦予 value 值為 roleCompare originalRole 物件將多出一個欄位，將開欄位用 v-model 綁定下拉式選單的 selected，即可完成
        }
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

.selected {
  display: none;
}
</style>
