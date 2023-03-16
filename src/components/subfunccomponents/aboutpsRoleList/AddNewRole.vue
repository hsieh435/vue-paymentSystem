<!-- 新增角色功能 -->
<template>
  <div class="thisfrom">
    <div>
      <label class="thislabel">角色代碼：
        <input type="text" v-model="newRole.ID" />
      </label>
      <label class="thislabel">角色名稱：
        <input type="text" v-model="newRole.name" />
      </label>
    </div>
    <button class="thisbutton" @click="addNewRole()">加入</button>
    <button class="thisbutton" @click="cleanIt()">清空</button>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, reactive, inject } from "vue";
import axios from "axios";


const newRole = reactive({
  ID: "",
  name: "",
});

const userId = localStorage.getItem("userId");
const userJWT = localStorage.getItem("userJWT");

const reload: any = inject("reload");

function addNewRole() {
  // console.log("newRole.ID:",newRole.ID);
  // console.log("newRole.name:",newRole.name);
  if (newRole.ID === "" || newRole.name === "") {
    alert("欄位不可留白");
  } else {
    axios
      .post(
        "http://localhost:8085/paymentSystem/api/psRole/findAllPSRole",
        { notesId: userId },
        {
          headers: {
            Authorization: "Bearer " + userJWT,
          },
        }
      )

      .then((response) => {
        const rolenameList = response.data.data;
        const roleIdCompareArray = [];
        for (let i = 0; i < rolenameList.length; i++) {
          const roleidname = rolenameList[i].roleId;
          roleIdCompareArray.push(roleidname);
        }

        if (roleIdCompareArray.includes(newRole.ID) === true) {
          alert(`${newRole.ID}已存在，請更換角色代碼`);
          newRole.ID = "";
        } else {
          axios
            .post(
              "http://localhost:8085/paymentSystem/api/psRole/newPSRole",
              {
                roleId: newRole.ID,
                roleName: newRole.name,
              },
              {
                headers: {
                  Authorization: "Bearer " + userJWT,
                  // Bearer 跟 userJWT 中間要有一個空格
                },
              }
            )

            .then((response) => {
              alert(response.data.message);
              reload();
            })
            .catch((error) => {
              alert("建立新角色失敗");
            });
        }
      })
      .catch((error) => {
        alert("對比角色代碼失敗，請重新輸入");
      });
  }
}

function cleanIt() {
  newRole.ID = "";
  newRole.name = "";
}

</script>
<style lang="scss" scoped>
.thisfrom {
  width: 80%;
  margin: 30px 10% 0px 10%;
  text-align: left;
  z-index: 1000;

  /* border: 1px solid black; */
  .thislabel {
    margin: 5px 30px 5px 0px;
  }
}

.thisbutton {
  width: 15%;
  border: 2px rgb(0, 60, 157) solid;
  margin: 20px 20px 20px 0px;
  background-color: #003c9d;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #003c9d;
    background-color: #fff;
    border: 2px rgb(0, 60, 157) solid;
  }
}
</style>
