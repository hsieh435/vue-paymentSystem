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
      const ab =
        "天地玄黃宇宙洪荒日月盈昃辰宿列張寒來暑往秋收冬藏閏餘成歲律呂調陽雲騰致雨露結為霜金生麗水玉出昆岡劍號巨闕";
      const a: any = ab.split("");
      const num = Math.ceil(Math.random() * (a.length - 1));
      context.emit("eventIsAString", a[num], typeof a[num]);
      // console.log("A2:", num, typeof num);
    }

    function sentAArray() {
      const array = [
        {
          notesId: "amyliao",
          userName: "廖瑞珍",
          roleName: "系統管理者",
          roleId: "manager",
          userOrganization:
            "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
        },
        {
          notesId: "andylu",
          userName: "路台平",
          roleName: "副總經理",
          userOrganization: "力麗科技股份有限公司\\軟體服務事業部",
          roleId: "VP",
        },
        {
          notesId: "daniel",
          userName: "林道賢",
          roleName: "系統管理者",
          userOrganization:
            "力麗科技股份有限公司\\軟體服務事業部\\資訊服務事業處",
          roleId: "manager",
        },
        {
          notesId: "Dark",
          userName: "彭俊達",
          roleName: "系統管理者",
          userOrganization: "力麗科技股份有限公司\\軟體服務事業部\\台北事業處",
          roleId: "manager",
        },
        {
          notesId: "ernest",
          userName: "莊仁岳",
          roleName: "系統管理者",
          userOrganization:
            "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
          roleId: "manager",
        },
        {
          notesId: "hsieh435",
          userName: "謝宸睿",
          roleName: "系統管理者",
          userOrganization:
            "力麗科技股份有限公司\\軟體服務事業部\\企業e化事業處",
          roleId: "manager",
        },
        {
          notesId: "hungjc6953",
          userName: "洪金琪",
          roleName: "系統管理者",
          roleId: "manager",
          addedBy: "jbw327",
          addedByName: "張博瑋",
          addedDatetime: "2022-04-29 11:46:36",
          updatedDatetime: "2022-04-29 12:13:55",
        },
        {
          notesId: "jbw327",
          userName: "張博瑋",
          roleName: "系統管理者",
          userOrganization: null,
          roleId: "manager",
        },
        {
          notesId: "jstseng",
          userName: "曾瑞山",
          roleName: "系統管理者",
          userOrganization: "力麗集團\\工程部",
          roleId: "manager",
        },
        {
          notesId: "sujuyen",
          userName: "蘇如妍",
          roleName: "零用金負責人",
          userOrganization: "力麗集團\\總管理部\\行政",
          roleId: "petty_cash_mgr",
        },
      ];
      context.emit("eventIsAArray", array);
      // console.log("A3:", typeof array);
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

<style lang="scss" scoped>
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
  &:hover {
    background-color: rgb(255, 255, 255);
    outline: 3px solid rgba(79, 192, 210, 0.7);
  }
}
</style>
