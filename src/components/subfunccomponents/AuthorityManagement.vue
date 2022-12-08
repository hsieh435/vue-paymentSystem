<!-- 角色與權限管理頁面 -->
<template>
  <div>
    <div class="authmang">
      <!-- 基本資料維護 -->
      <div class="eachfunc">
        <p>基本資料維護</p>
      </div>

      <!-- 帳號與權限管理 -->
      <div class="eachfunc">
        <p>帳號與權限管理</p>

        <input type="checkbox" value="1" name="" />公司別維護<br />
        <input type="checkbox" value="2" name="" />角色與權限管理<br />
        <input type="checkbox" value="3" name="" />使用者維護<br />
        <input type="checkbox" value="4" name="" />登入記錄查詢<br />
      </div>

      <!-- 一般帳款申請作業 -->
      <div class="eachfunc">
        <p>一般帳款申請作業</p>

        <input type="checkbox" value="1" name="" />帳務別資料維護<br />
        <input type="checkbox" value="2" name="" />一般費用申請<br />
        <input type="checkbox" value="3" name="" />一般費用申請管理作業<br />
        <input type="checkbox" value="4" name="" />彙總前段檢收作業<br />
        <input type="checkbox" value="5" name="" />月結帳款作業<br />
        <input type="checkbox" value="6" name="" />月結帳款管理作業<br />
        <input type="checkbox" value="7" name="" />月結發票管理作業<br />
      </div>

      <!-- 財會簽核拋轉作業 -->
      <div class="eachfunc">
        <p>財會簽核拋轉作業</p>
      </div>

      <!-- 資財成本結帳作業 -->
      <div class="eachfunc">
        <p>資財成本結帳作業</p>
      </div>

      <!-- 零用金申請作業 -->
      <div class="eachfunc">
        <p>零用金申請作業</p>

        <input type="checkbox" value="1" name="" />零用金支付廠區別維護<br />
        <input type="checkbox" value="2" name="" />零用金申請作業<br />
        <input type="checkbox" value="3" name="" />零用金申請單管理作業<br />
        <input type="checkbox" value="4" name="" />零用金撥補作業<br />
        <input type="checkbox" value="5" name="" />零用金撥補單管理作業<br />
      </div>

      <!-- 專案工程作業 -->
      <div class="eachfunc">
        <p>專案工程作業</p>

        <input type="checkbox" value="1" name="" />新增建廠工程權限<br />
        <input type="checkbox" value="2" name="" />專案分類維護<br />
        <input type="checkbox" value="3" name="" />專案工項單位維護<br />
        <input type="checkbox" value="4" name="" />專案立案作業<br />
        <input type="checkbox" value="5" name="" />專案議價資料維護<br />
        <input type="checkbox" value="6" name="" />專案驗收作業<br />
        <input type="checkbox" value="7" name="" />專案付款作業<br />
        <input type="checkbox" value="8" name="" />專案完工作業<br />
        <input type="checkbox" value="9" name="" />專案資料管理作業<br />
      </div>
    </div>
    <button class="updateauthority">更改</button>
    <button class="updateauthority">取消更改</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "AuthorityManagement",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.authmang {
  width: 80%;
  margin: 10px 10% 0px 10%;
  padding: 20px 5% 20px 5%;
  border-radius: 20px;
  text-align: left;
  outline: 1px black solid;
}

.eachfunc {
  width: 30%;
  /* height: 500px; */
  background-color: rgb(167, 255, 255);
  margin: 10px 20px 10px 0px;
  padding: 10px 10px 10px 10px;
  display: inline-block;
  text-align: left;
  vertical-align: text-top;
  /* outline: 1px solid #000; */
}

.eachfunc:nth-child(even) {
  background-color: rgb(150, 150, 150);
  color: #fff;
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 10px 10px 50px 10px;
  border: 0px;
  font-size: 20px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.updateauthority:hover {
  background-color: rgb(167, 255, 255);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
}

@media only screen and (max-width: 765px) {
  .eachfunc {
    width: 45%;
    /* margin: 100px auto auto auto; */
  }
}
</style>
