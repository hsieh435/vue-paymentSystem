<!-- 修改使用者 Components -->
<template>
  <div>
    <select>
      <option v-for="(role, index) in rolelist.value" :key="index">
        {{ role.roleName }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AdjustUserRole",
  components: {},

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const rolelist = reactive({ value: null });

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
        // console.log("傳遞成功");
      })
      .catch((error) => {
        alert("發生錯誤");
        // console.log("傳遞失敗");
      });

    return {
      rolelist,
    };
  },
});
</script>
<style scoped></style>
