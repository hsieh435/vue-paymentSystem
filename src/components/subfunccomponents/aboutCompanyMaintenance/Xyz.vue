<template>
  <button class="button" @click="sentANumber">EMIT 子傳父數字</button>
  <button class="button" @click="sentAString">EMIT 子傳父文字</button>
  <button class="button" @click="sentAArray">EMIT 子傳父陣列</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Xyz",
  setup(props, context) {
    function sentANumber() {
      const num: number = Math.ceil(Math.random() * 10000000000);
      context.emit("eventIsANumber", num);
      // console.log("A1:", typeof num);
    }

    function sentAString() {
      const num: number = Math.ceil(Math.random() * 10000000000);
      context.emit("eventIsAString", num.toString(36));
      // console.log("A2:", typeof num.toString(36));
    }

    function sentAArray() {
      const array = [
        {
          notesId: "amyliao",
          roleId: "manager",
          addedBy: "jbw327",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
          },
          userInfo: {
            notesId: "amyliao",
            account: "0042",
            userName: "廖瑞珍",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
          },
        },
        {
          notesId: "amyliao",
          roleId: "manager",
          addedBy: "jbw327",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
          },
          userInfo: {
            notesId: "amyliao",
            account: "0042",
            userName: "廖瑞珍",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
          },
        },
        {
          notesId: "amyliao",
          roleId: "manager",
          addedBy: "jbw327",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
          },
          userInfo: {
            notesId: "amyliao",
            account: "0042",
            userName: "廖瑞珍",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
          },
        },
        {
          notesId: "amyliao",
          roleId: "manager",
          addedBy: "jbw327",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
          },
          userInfo: {
            notesId: "amyliao",
            account: "0042",
            userName: "廖瑞珍",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
          },
        },
        {
          notesId: "amyliao",
          roleId: "manager",
          addedBy: "jbw327",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
          },
          userInfo: {
            notesId: "amyliao",
            account: "0042",
            userName: "廖瑞珍",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
          },
        },
      ];
      context.emit("eventIsAArray", array);
      console.log("A3:", typeof array);
    }
    // context.emit("傳送的資料名稱", "傳送的資料內容");

    return {
      sentANumber,
      sentAString,
      sentAArray,
    };
  },
});
</script>

<style scoped>
.button {
  width: auto;
  height: 40px;
  border: 0;
  border-radius: 20px;
  background-color: rgba(79, 193, 210);
  line-height: 16px;
  margin: 10px 5px 10px 5px;
  padding: 0px 30px 0px 30px;
  transition: 0.2s;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
