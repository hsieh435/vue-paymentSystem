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
          <div>
            <input
              class="checkBoxSquare"
              type="checkbox"
              v-if="item.functionModels.length > 0"
            /><label v-if="item.functionModels.length > 0">全選</label>
          </div>
          <div
            class="funcgroup"
            v-for="(func, index) in item.functionModels"
            :key="index"
          >
            <div>
              <input
                class="checkBoxSquare"
                type="checkbox"
                v-model="func.checked"
              />
              <label>{{ func.functionName }}</label>
              <label class="checked">{{ func.checked }}</label>
              <!-- 將 input 與 label 欄位用 v-model 綁定連動，並運用 CSS 將其隱藏 -->
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
    const reload: any = inject("reload");

    // 解構 props 傳進來的值
    // const { roleId, roleName } = toRefs(props);
    // const roleId = toRef(props, "roleId");
    // const roleName = toRef(props, "roleName");

    const functionGroups: any = reactive({ value: null });

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/functionGroup/findAll",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      )

      .then((response) => {
        functionGroups.value = response.data.data;
        secondAxios();
      })
      .catch((error) => {
        alert("查詢權限發生錯誤");
      });

    function secondAxios() {
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
          const functArray: any = functionGroups.value;
          // console.log("W1:", functArray);
          // 搜尋所有權限，取名 functArray

          const originalPerm: any = response.data.data.permissionList;
          // console.log("W2:", originalPerm);
          // 搜尋角色擁有權限，取名 originalPerm

          for (let i = 0; i < functArray.length; i++) {
            // console.log("W3:", functArray[i]);
            // 用迴圈分別跑出權限七大分類

            for (let j = 0; j < functArray[i].functionModels.length; j++) {
              const funcModels = functArray[i].functionModels[j];
              // console.log("W4:", funcModels);
              // 用迴圈分別跑出權限七大分類下的各個子權限，取名 funcModels

              const funcId: any = functArray[i].functionModels[j].functionId;
              // console.log("W5:", funcId);
              // 搜尋出各個子權限的 functionId 名稱，取名 funcId

              const funcCompare: boolean = originalPerm.includes(funcId);
              // console.log("W6:", originalPerm.includes(funcId));
              // 比較 functionId 名稱是否有出現在角色權限列表中，若結果符合會呈現 true，反之則是 false，將其結果取名為 funcCompare

              funcModels["checked"] = funcCompare;
              // console.log("W7:", funcModels);
              // 此為物件增加 key 值之操作方式，將 funcModels 新增名為 "checked" 的 key 值，並賦予 value 值為 funcCompare 的結果，funcModels 物件將多出一個欄位，將開欄位用 v-model 綁定 checkbox，即可完成
            }
          }
        })
        .catch((error) => {
          alert("搜尋角色權限發生錯誤");
        });
    }

    // 權限調整的 function
    function adjustThisRole() {
      // console.log("X1:", functionGroups.value);

      const emptyArray: any = [];
      // console.log("X2:", emptyArray);
      // 建立一空陣列，稍後將接收角色新的權限設定

      for (let i = 0; i < functionGroups.value.length; i++) {
        // console.log("X3:",functionGroups.value[i]);
        // 用迴圈跑出權限七大分類

        for (
          let j = 0;
          j < functionGroups.value[i].functionModels.length;
          j++
        ) {
          const newFuncModels = functionGroups.value[i].functionModels[j];
          // console.log("X4:", newFuncModels);
          // 用迴圈跑出權限七大分類下的各個子權限，取名 newFuncModels

          emptyArray.push(newFuncModels);
          // 將各個子權限 push 進入先前設立的空陣列
        }
      }

      const newPermissionList: any = emptyArray.filter(function (value: any) {
        return value.checked == true;
      });
      // console.log("X5:", newPermissionList);
      // 過濾篩選出 checked 欄位值為 true 之權限選項，並將創立之新陣列取名 newPermissionList

      const newPermissionArray = newPermissionList.map(
        (el: any) => el.functionId
      );
      // console.log("X6:", newPermissionArray);
      // 將 newPermissionList 中 functionId 欄位資料取出並放入新陣列，取名 newPermissionArray，並將之作為 API 傳遞資料的參數傳出

      axios
        .post(
          "http://localhost:8085/paymentSystem/api/permission/saveAllPermission",
          {
            roleId: props.roleId,
            permissionList: newPermissionArray,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              // Bearer 跟 token 中間要有一個空格
            },
          }
        )

        .then((response) => {
          if (response.data.returnCode == 0) {
            alert("權限修改成功");
            adjustList.value = true;
            reload();
          } else {
            alert(`returnCode:${response.data.returnCode}\n發生錯誤，修改失敗`);
            adjustList.value = true;
          }
        })
        .catch((error) => {
          alert("資料傳輸發生錯誤");
          adjustList.value = true;
        });
    }

    function cancelAdjust() {
      adjustList.value = true;
    }

    // class function {
    //     public functionGroups="",
    //     public functionModels="",
    // }

    return {
      props,
      adjustList,
      functionGroups,
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
  right: 10px;
  top: 10px;
  transition: 0.3s;
}

.closeit:hover {
  height: 60px;
  width: 60px;
  font-size: 60px;
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
  padding: 10px 10px 10px 20px;
  outline: 1px solid rgb(120, 120, 120);
}

.funcgroup {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* outline: 1px solid #000; */
}

.checkBoxSquare {
  margin: 5px 5px 0px 5px;
}

.checked {
  display: none;
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 20px;
  margin: 20px 10px 40px 10px;
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
</style>
