<template>
  <ul class="drop-down-menu">
    <li>
      <a href="#">數字一▼</a>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </li>
    <li>
      <a href="#">數字二▼</a>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </li>
    <li>
      <a href="#">數字三▼</a>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </li>
    <li>
      <a href="#">數字四▼</a>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "NavbarFun",
};
</script>

<style>
/* 取消ul預設的內縮及樣式 */
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.drop-down-menu li p {
  width: 200px;
  font-size: 20px;
  line-height: 40px;
  color: rgb(255, 255, 255);
  margin: auto;
}

/* 橫幅整體 */
ul.drop-down-menu {
  width: 100%;
  font-size: 20px;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  /* color: white; */
  /* border: rgb(0, 0, 0) 1px solid; */
  display: inline-block;
  font-family: "Open Sans", Arial, sans-serif;
}

/* navbar各別按鈕 */
ul.drop-down-menu li {
  position: relative;
  white-space: nowrap;
  transition: 0.3s;
  /* border-right: #ccc 1px solid; */
}

ul.drop-down-menu li:hover {
  border-top: rgb(135, 217, 255) 3px solid;
}

/* navbar 最右邊按鈕右邊邊緣 */
ul.drop-down-menu > li:last-child {
  border-right: none;
}

/* 第一層按鈕靠左對齊*/
ul.drop-down-menu > li {
  float: left;
}

/* 第二層按鈕*/
ul.drop-down-menu ul {
  border: #ccc 1px solid;
  position: absolute;
  z-index: 99;
  left: -1px;
  top: 100%;
  min-width: 200px;
  display: none;
  /*隱藏次選單*/
  /* transition: 0.5s; */
}

/* 第二層按鈕滑鼠滑入展開次選單*/
ul.drop-down-menu li:hover > ul {
  display: block;
}

/* 第二層各別按鈕*/
ul.drop-down-menu ul li {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  /* border-bottom: rgb(39, 31, 31) 1px solid; */
}

/* 第二層選單下方邊緣*/
ul.drop-down-menu ul li:last-child {
  border-bottom: none;
}

ul.drop-down-menu ul ul {
  /*第三層以後的選單出現位置與第二層不同*/
  z-index: 999;
  top: 10px;
  left: 90%;
}

/* 所有超連結文字 */
ul.drop-down-menu a {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  display: block;
  padding: 0 50px;
  text-decoration: none;
  line-height: 40px;
}

/* 滑鼠滑入第一層選單按鈕的變化*/
ul.drop-down-menu a:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

/* ul.drop-down-menu li a {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
} */

/* 滑鼠移入次層選單的變化*/
ul.drop-down-menu li:hover > a {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  /* outline: 1px solid rgb(0, 0, 0); */
}

.welcomeword {
  text-align: left;
  margin-top: 200px;
  margin-left: 50px;
}
</style>
