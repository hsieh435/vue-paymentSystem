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
      const num: number = Math.ceil(Math.random() * 12000000000);
      context.emit("eventIsANumber", num);
      // console.log("A1:", num, typeof num);
    }

    function sentAString() {
      const a = [
        "人",
        "之",
        "初",
        "性",
        "本",
        "善",
        "性",
        "相",
        "近",
        "習",
        "相",
        "遠",
      ];
      const num = Math.ceil(Math.random() * 12000000000) % a.length;
      context.emit("eventIsAString", a[num], typeof a[num]);
      // console.log("A2:", num, typeof num);
    }

    function sentAArray() {
      const array = [
        {
          notesId: "amyliao",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-06-07 14:30:10",
          updatedDatetime: "2022-12-29 15:05:58",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "amyliao",
            account: "0042",
            userName: "廖瑞珍",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "andylu",
          roleId: "VP",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-06-13 15:32:29",
          updatedDatetime: "2022-09-01 16:38:06",
          role: {
            roleId: "VP",
            roleName: "副總經理",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-05-27 11:33:54",
            updatedDatetime: "2022-05-27 21:02:33",
          },
          userInfo: {
            notesId: "andylu",
            account: "2628",
            userName: "路台平",
            userOrganization: "力麗科技股份有限公司\\軟體服務事業部",
            userTitle: "副總經理",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "daniel",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-06-28 16:44:30",
          updatedDatetime: "2022-06-28 16:44:30",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "daniel",
            account: "2183",
            userName: "林道賢",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\資訊服務事業處",
            userTitle: "專案經理",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "Dark",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-11-10 11:27:17",
          updatedDatetime: "2022-12-28 15:41:54",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "Dark",
            account: "1493",
            userName: "彭俊達",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\台北事業處",
            userTitle: "資深技術經理",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "ernest",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-06-06 10:45:18",
          updatedDatetime: "2022-11-23 01:39:11",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "ernest",
            account: "4320",
            userName: "莊仁岳",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資深資訊工程師",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "hsieh435",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-11-10 11:27:41",
          updatedDatetime: "2022-12-28 16:44:30",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "hsieh435",
            account: "4605",
            userName: "謝宸睿",
            userOrganization:
              "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
            userTitle: "資訊工程師",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "hungjc6953",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-04-29 11:46:36",
          updatedDatetime: "2022-04-29 12:13:55",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "hungjc6953",
            account: "123",
            userName: "洪金琪",
            userOrganization: null,
            userTitle: null,
            lastLoginTime: null,
            isActive: false,
          },
        },
        {
          notesId: "jbw327",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-04-01 15:38:00",
          updatedDatetime: "2022-08-24 14:35:22",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "jbw327",
            account: "123",
            userName: "張博瑋",
            userOrganization: null,
            userTitle: null,
            lastLoginTime: "2022-05-27 17:10:37",
            isActive: null,
          },
        },
        {
          notesId: "jstseng",
          roleId: "manager",
          addedBy: "ernest",
          addedByName: "莊仁岳",
          addedDatetime: "2022-08-24 15:59:36",
          updatedDatetime: "2022-08-24 15:59:36",
          role: {
            roleId: "manager",
            roleName: "系統管理者",
            addedBy: "jbw327",
            addedByName: null,
            addedDatetime: "2022-03-08 13:59:21",
            updatedDatetime: "2022-12-29 13:51:57",
          },
          userInfo: {
            notesId: "jstseng",
            account: "00295",
            userName: "曾瑞山",
            userOrganization: "力麗集團\\工程部",
            userTitle: "協理",
            lastLoginTime: null,
            isActive: true,
          },
        },
        {
          notesId: "sujuyen",
          roleId: "petty_cash_mgr",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-08-24 12:56:31",
          updatedDatetime: "2022-12-30 11:18:34",
          role: {
            roleId: "petty_cash_mgr",
            roleName: "零用金負責人",
            addedBy: "ernest",
            addedByName: null,
            addedDatetime: "2022-07-05 10:53:53",
            updatedDatetime: "2022-11-23 01:38:56",
          },
          userInfo: {
            notesId: "sujuyen",
            account: "0020",
            userName: "蘇如妍",
            userOrganization: "力麗集團\\總管理部\\行政",
            userTitle: "經理",
            lastLoginTime: null,
            isActive: true,
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
  outline: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
