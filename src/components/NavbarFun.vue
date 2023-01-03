<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li
        class="nav__menu-item"
        v-for="(item, index) in functionGroups.value"
        :key="index"
      >
        <a v-if="item.functionModels.length > 0"
          >{{ item.functionGroupName }} ▼</a
        >
        <ul class="nav__submenu">
          <li
            class="nav__submenu-item"
            v-for="(func, index) in item.functionModels"
            :key="index"
          >
            <a @click="routerTo(func.url)">{{ func.functionName }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>

  <!-- 
    備註：
    1. v-if 下達的條件式之意思，為符合條件式就顯現該 html 標籤
    v-if="item.functionModels.length > 0"
    2. 使用 v-for 需先創建一組 reactive，再由個別物件下去渲染，同時須下達 key 值
    3.
  -->
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "NavbarFun",
  components: {},

  setup() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("userJWT");
    const router = useRouter();

    axios
      .post(
        "http://localhost:8085/paymentSystem/api/functionGroup/findAllFunctionGroupWhereFunctionIdInPermission",
        { token: token },
        {
          headers: {
            Authorization: "Bearer " + token,
            // Bearer 跟 token 中間要有一個空格
          },
        }
      )
      // post 放三個參數，url、data、config(header)

      .then((response) => {
        functionGroups.value = response.data.data;

        // console.log("D1:", functionGroups);
      })

      .catch((error) => {
        console.log("發生錯誤");
      });

    const functionGroups = reactive({ value: null });
    // console.log("D2:", functionGroups);

    // class function {
    //     public functionGroups="",
    //     public functionModels="",
    //     public url="",
    // }

    function routerTo(url: string) {
      router.push(url);
    }

    return {
      functionGroups,
      routerTo,
    };
  },
});
</script>

<style scoped>
/* 整體 */
html {
  box-sizing: border-box;
  /* outline: 1px black solid; */
}

/* 頁面中的所有元素，勿隨意動用 */
*,
*:before,
*:after {
  box-sizing: border-box;
  /* outline: 1px black solid; */
}

/* body整體，包含背景 */
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  background: rgb(255, 255, 255);
  /* border: 1px black solid; */
}

/* 第一層與第二層按鈕 */
nav ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  /* outline: 1px black solid; */
}

/* 橫幅整體 */
.nav {
  width: 100%;
  /* height: 100%; */
  margin: 0 auto;
  background: rgb(46, 189, 89);
  color: rgb(240, 240, 240);
  /* outline: 1px black solid; */
}

/* 第一層按鍵(超連結部分) */
.nav a {
  display: block;
  padding: 0px 20px;
  line-height: inherit;
  cursor: pointer;
  /* outline: 1px black solid; */
}

.nav__menu {
  line-height: 45px;
  text-transform: uppercase; /* 字母皆以大寫呈現*/
  font-weight: 700;
  /* outline: 1px black solid; */
}

/* 第一層按鍵(按鍵部分) */
.nav__menu-item {
  display: inline-block;
  position: relative;
  transition: 0.2s;
  /* outline: 1px black solid; */
}

/* 第一層按鍵游標觸碰時 */
/* .nav__menu-item:hover { */
/* border-top: 3px solid rgb(128, 0, 182); */
/* background-color: #9b59b6; */
/* } */

/* 第二層選單整體 */
.nav__menu-item:hover .nav__submenu {
  display: block;
  /* outline: 1px black solid; */
}

/* 第二層選單整體 */
.nav__submenu {
  font-weight: 300;
  text-transform: none;
  display: none;
  position: absolute;
  width: 220px;
  background-color: rgb(128, 0, 182);
  z-index: 100;
  /* outline: 1px black solid; */
}

.nav__submenu-item {
  background-color: rgb(128, 0, 182);
  transition: 0.5s;
}

/* 第二層選單游標觸碰時 */
.nav__submenu-item:hover {
  background: radial-gradient(
    circle at center,
    rgb(155, 89, 182),
    rgb(128, 0, 182)
  );
}

.nav__submenu-item a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: 0.5s;
  /* border: 1px solid rgb(0, 0, 0); */
}

.nav__submenu-item a:hover {
  color: rgb(0, 0, 0);
  /* border: 1px solid rgb(0, 0, 0); */
}
</style>
