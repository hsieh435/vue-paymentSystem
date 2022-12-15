<!-- 修改角色權限頁面 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <button class="closeit" @click="cancelAdjust()">×</button>

      <div class="authmang">
        <h2>更新{{ roleName }}權限</h2>
        <h2>角色代碼：{{ roleId }}</h2>
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
              <!-- v-if="func.functionName == permission" -->
              <label>
                <input class="checkBoxSquare" type="checkbox" />
                {{ func.functionName }}</label
              >
              <label class="permission">{{ gotPromission.true }}</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="updateauthority" @click="adjustThisRole()">
          確定修改
        </button>
        <button class="updateauthority" @click="cancelAdjust()">
          取消修改
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, toRefs, inject, reactive } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AuthorityManagement",
  props: ["roleId", "roleName"],
  // 限制 props 傳入資料的型別
  // props: {
  //   roleId: String,
  //   roleName: String,
  // },
  setup(props) {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");

    const adjustList: any = inject("adjustAuthority");
    // const reload: any = inject("reload");

    // 解構 props 傳進來的值
    // const { roleId, roleName } = toRefs(props);
    // const roleId = toRef(props, "roleId");
    // const roleName = toRef(props, "roleName");

    const functionGroups = reactive({ value: null });
    const permissionList = reactive({ value: null });

    const gotPromission = reactive({
      true: "",
      false: "",
    });

    // 查詢所有權限選項
    axios
      .post(
        "http://localhost:8085/paymentSystem/api/functionGroup/findAllFunctionGroupWhereFunctionIdInPermission",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      )

      .then((response) => {
        abc();
        functionGroups.value = response.data.data;

        console.log("所有權限:", functionGroups.value);
        // console.log("獲取權限:", abc.response.data.permissionList.value);

      })
      .catch((error) => {
        alert("發生錯誤");
      });

    function abc() {
      // 透過傳送角色代碼查詢已開放之權限
      axios
        .post(
          "http://localhost:8085/paymentSystem/api/permission/findAllByRoleId",
          { roleId: props.roleId },
          {
            headers: {
              Authorization: "Bearer " + token,
              // Bearer 跟 token 中間要有一個空格
            },
          }
        )

        .then((response) => {
          permissionList.value = response.data.data.permissionList;

          console.log("獲取權限:", permissionList.value);
        })
        .catch((error) => {
          alert("發生錯誤");
        });
    }

    // class function {
    //     public functionGroups="",
    //     public functionModels="",
    // }

    function adjustThisRole() {
      axios
        .post(
          "http://localhost:8085/paymentSystem/api/permission/saveAllPermission",
          {
            roleId: props.roleId,
            permissionList: [],
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              // Bearer 跟 token 中間要有一個空格
            },
          }
        )

        .then((response) => {
          // alert("修改成功");
        })
        .catch((error) => {
          alert("發生錯誤");
        });
    }

    function cancelAdjust() {
      adjustList.value = true;
    }

    return {
      props,
      adjustList,
      functionGroups,
      permissionList,
      gotPromission,
      adjustThisRole,
      cancelAdjust,
    };
  },
});
</script>

<style scoped>
.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000;
}

.wholearea {
  width: 90%;
  height: 80vh;
  margin: 10vh 5% 10vh 5%;
  padding: 20px 2.5% 0px 2.5%;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: auto;
  resize: vertical;
  position: relative;
  outline: 1px black solid;
}

.closeit {
  height: 40px;
  width: 40px;
  font-size: 36px;
  line-height: 26px;
  border: 0px;
  background-color: rgb(255, 255, 255, 0);
  position: absolute;
  right: 0px;
  top: 0px;
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

.checkBoxSquare {
  margin: 5px 5px 0px 5px;
}

.permission {
  display: none;
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
