<!-- 修改角色權限頁面 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <div class="authmang">
        <h2>更新權限</h2>
        <div
          class="funcgroupname"
          v-for="(item, index) in functionGroups.value"
          :key="index"
        >
          <h4>{{ item.functionGroupName }}</h4>
          <div
            class="funcgroup"
            v-for="(func, index) in item.functionModels"
            :key="index"
          >
            <div>
              <input type="checkbox" value="1" name="" />
              <label class="labeltitle">{{ func.functionName }}</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="updateauthority" @click="adjustThisRole()">
          確定修改
        </button>
        <button class="updateauthority" @click="cancelAdjust()">
          放棄修改
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject, reactive } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AuthorityManagement",
  setup() {
    const adjustList: any = inject("adjustAuthority");
    const roleID: any = inject("roleID");

    console.log("S1:", roleID);

    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    // 取得角色代碼與角色名稱

    // 取得角色代碼與角色名稱

    const functionGroups = reactive({ value: null });

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/functionGroup/findAllFunctionGroupWhereFunctionIdInPermission",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間有一個空格
          },
        }
      )

      .then((response) => {
        functionGroups.value = response.data.data;
        // console.log("傳遞成功");
      })
      .catch((error) => {
        alert("發生錯誤");
        // console.log("傳遞失敗");
      });

    // 透過傳送角色代碼查詢已開放之權限
    axios
      .post(
        "http://localhost:8085/paymentSystem/api/permission/findAllByRoleId",
        { roleId: "" },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間有一個空格
          },
        }
      )

      .then((response) => {
        // console.log("傳遞成功");
      })
      .catch((error) => {
        alert("發生錯誤");
      });

    // class function {
    //     public functionGroups="",
    //     public functionModels="",
    // }

    function adjustThisRole() {}

    function cancelAdjust() {
      adjustList.value = true;
    }

    return {
      adjustList,
      functionGroups,
      adjustThisRole,
      cancelAdjust,
    };
  },
});
</script>

<!-- 
  待辦事項
  1.取得權限
  2.連結 API 傳送角色代碼
  3.

-->

<style scoped>
.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000000;
}

.wholearea {
  width: 90%;
  height: 80vh;
  margin: 10vh 5% 10vh 5%;
  padding: 20px 2.5% 0px 2.5%;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: auto;
  resize: vertical;
  outline: 1px black solid;
}

.authmang {
  text-align: left;
  /* outline: 1px black solid; */
}

.authmang h2 {
  text-align: center;
}

.funcgroupname {
  margin: 20px 10px 20px 30px;
  border-radius: 10px;
  background-color: rgb(167, 255, 255);
  padding: 10px 10px 30px 20px;
  outline: 1px solid rgb(120, 120, 120);
}

/* .funcgroupname:nth-child(even) {
  background-color: rgb(167, 255, 255);
  color: rgb(0, 0, 0);
} */

.funcgroup {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* outline: 1px solid #000; */
}

.labeltitle {
  margin: 5px 30px 0px 5px;
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 20px 10px;
  border: 1px black solid;
  font-size: 20px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.updateauthority:hover {
  background-color: rgb(167, 255, 255);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
}

/* @media only screen and (max-width: 1200px) {
} */
</style>
