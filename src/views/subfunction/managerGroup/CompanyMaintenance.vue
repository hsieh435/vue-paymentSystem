<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">公司別維護</h1>
  <button class="addNewCompany" @click="openIt()">+ 公司別新增</button>
  <table class="table-fill">
    <thead>
      <tr>
        <th>NO.</th>
        <th>公司統編</th>
        <th>公司代碼</th>
        <th>公司名稱</th>
        <th>簡稱</th>
        <th>專案帳務別</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody class="table-hover">
      <tr v-for="(comapny, index) in comapnyInfo" :key="index">
        <td>{{ comapny.index }}</td>
        <td>{{ comapny.companyTaxNo }}</td>
        <td>{{ comapny.companyId }}</td>
        <td class="startLeft">{{ comapny.companyName }}</td>
        <td class="startLeft">{{ comapny.shortName }}</td>
        <td class="startLeft">{{ comapny.prjPaymentAccountId }}-{{ comapny.prjPaymentAccountName }}</td>
        <td>編輯、刪除</td>
      </tr>
    </tbody>
  </table>
  <br />
  <!-- <CompanyList @eventIsANumber="gotANumber" @eventIsAString="gotAText"></CompanyList>
  <br />
  <h4>EMIT 子傳父數字：{{ aNumber }}</h4>
    <h4>EMIT 子傳父文字：{{ aString }}</h4> -->
  <AddNewCompany v-if="addCompanyInfo == null"></AddNewCompany>
  <BackToLoginView></BackToLoginView>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
import { AxiosResponse } from "axios";
import { apiFindAllCompany } from "../../../api/api";
import { AllCompanyInformation } from "../../../config/common.types";
import { addCompanyInfo, AddCompany } from "../../../utils/tools";
import "../subfunction.scss";
import CompanyList from "../../../components/subfunccomponents/aboutCompanyMaintenance/CompanyList.vue";
import AddNewCompany from "../../../components/subfunccomponents/aboutCompanyMaintenance/AddNewCompany.vue";
import BackToLoginView from "../../../components/public/BackToLoginView.vue";

const loading: any = inject("valueofLoading");
loading.value = true;
// console.log("N1:", loading.value);
// inject("要傳遞的資料名稱");

// setTimeout(loadingview, 1000);
// function loadingview() {
//   loading.value = false;
//   // console.log("N2:", loading.value);
// }

// 以下為 EMIT 之操作

const aNumber = ref();
function gotANumber(a: any) {
  // console.log(`接收訊息：${a}`, typeof a);
  aNumber.value = a;
}

const aString = ref();
function gotAText(b: any) {
  // console.log(`接收訊息：${b}`, typeof b);
  aString.value = b;
}


// 公司資料列表

sendCompanyArray();
let comapnyInfo = ref<AllCompanyInformation[]>([]);

async function sendCompanyArray() {
  try {
    const res: AxiosResponse = await apiFindAllCompany();

    if (res.data.returnCode === "0") {
      console.log("res.data.data:", res.data.data);
      comapnyInfo.value = res.data.data;
      for (let i = 0; i < res.data.data.length; i++) {
        const eachCompany = res.data.data[i];
        eachCompany["index"] = i + 1;
      }

      // console.log("comapnyInfo", comapnyInfo, typeof comapnyInfo);
      // console.log("comapnyInfo.value", comapnyInfo.value, typeof comapnyInfo.value);
    }
  } catch (error) {
    console.log("res:", error);
  }
}

addCompanyInfo.value = true;
function openIt() {
  AddCompany();
  // 鎖住底層禁止滾動穿透
  let m = function (e: { preventDefault: () => void; }) { e.preventDefault(); };
  document.body.style.overflow = 'hidden';
  document.addEventListener("touchmove", m, { passive: false });
}

</script>
<style lang="scss" scoped>
.table-fill {
  width: 90%;
  margin: 50px 5% 50px 5%;
  table-layout: auto;
  overflow: hidden;
  font-family: "Oswald", sans-serif;
  transition: 0.3s;
  border: 1px rgb(0, 0, 0) solid;
}

body {
  background: #1f1f1f;
}

table {
  font-family: "Oswald", sans-serif;
  border-collapse: collapse;
}

th {
  height: 75px;
  font-size: 20px;
  padding: 0px 10px 0px 10px;
  background-color: rgba(79, 192, 210, 0.7);
  color: rgb(255, 255, 255);
  outline: 1px solid black;
}

td {
  background-color: rgb(177, 177, 177);
  color: #000000;
  height: 50px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  outline: 1px solid black;
}

.startLeft {
  text-align: left;
  padding: 0px 0px 0px 15px;
}

tr:hover td {
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
}

tr td:first-child {
  color: rgb(0, 0, 0);
  transition: all 0.3s ease-in-out;
}

tr:hover td:first-child {
  color: rgba(79, 192, 210, 1);
  transition: all 0.3s ease-in-out;
}

tr {
  border-bottom: 1px solid #2a2a2a;
}

tr:last-of-type {
  border-bottom: none;
}

.addNewCompany {
  color: rgb(255, 255, 255);
  background-color: rgb(64, 158, 255);
  border: 0px;
  border-radius: 5px;
  margin: 20px 0px 20px 5%;
  padding: 5px 10px 5px 10px;
  float: left;
}

.lock {
  overscroll-behavior: none;
}
</style>
