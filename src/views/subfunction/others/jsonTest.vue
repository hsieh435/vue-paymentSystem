<!-- JSON 測試 -->
<template>
  <h1 class="subfunctiontitle">JSON 測試</h1>

  <div class="sidebar">
    <ul>
      <li><a href="#">首頁</a></li>
      <li>
        <a href="#">產品</a>
        <ul>
          <li><a href="#">產品一</a></li>
          <li><a href="#">產品二</a></li>
          <li><a href="#">產品三</a></li>
        </ul>
      </li>
      <li>
        <a href="#">關於我們</a>
        <ul>
          <li><a href="#">團隊</a></li>
          <li><a href="#">歷史</a></li>
          <li><a href="#">使命與價值</a></li>
        </ul>
      </li>
      <li><a href="#">聯絡我們</a></li>
    </ul>
  </div>

  <BackToLoginView></BackToLoginView>
</template>
<script setup lang="ts">
import { defineComponent, ref, inject } from "vue";
import BackToLoginView from "../../../components/public/BackToLoginView.vue";
import { oraganization } from "./jsondata";

console.log("jsondata:", oraganization);

</script>
<style lang="scss" scoped>
.sidebar {
  background-color: #333;
  width: 200px;
  height: 100vh;
  color: #fff;
  padding: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
}

.sidebar ul ul {
  margin-top: 10px;
  display: none;
  /* 預設隱藏子清單 */
}

.sidebar ul li:hover>ul {
  display: block;
  /* 滑鼠觸碰時顯示子清單 */
}

.content {
  margin-left: 220px;
  padding: 20px;
}
</style>
