<!-- 新增公司 Component -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <button class="closeit" @click="closeIt()">×</button>
      <p>新增公司別資料</p>
      <div class="editRoleArea">
        <label>公司代碼：</label><br>
        <input type="text" v-model="companyId" /><br>
        <label>公司名稱：</label><br>
        <input type="text" v-model="companyName" /><br>
        <label>公司簡稱：</label><br>
        <input type="text" v-model="shortName" /><br>
        <label>專案帳務別：</label><br>
        <input type="text" v-model="prjPaymentAccountName" /><br>
        <label>公司統編：</label><br>
        <input type="text" v-model="companyTaxNo" />
      </div>
      <div>
        <button class="editAuthority" @click="addCompany()">確定新增</button>
        <button class="editAuthority" @click="closeIt()">取消新增</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { AxiosResponse } from "axios";
import { apiNewCompany } from "../../../api/api";
import { addCompanyInfo, CloseAddNewCompany } from "../../../utils/tools";
import { NewCompanyItem } from "../../../config/common.types";

const companyId = ref<string>("");
const companyName = ref<string>("");
const shortName = ref<string>("");
const prjPaymentAccountName = ref<string>("");
const companyTaxNo = ref<string>("");

async function addCompany() {
  // console.log("companyId:", companyId.value);
  // console.log("companyName:", companyName.value);
  // console.log("shortName:", shortName.value);
  // console.log("prjPaymentAccountName:", prjPaymentAccountName.value);
  // console.log("companyTaxNo:", companyTaxNo.value.toUpperCase());
  if (companyId.value === "" || companyName.value === "" || shortName.value === "" || prjPaymentAccountName.value === "") {
    alert("請確實填寫公司資料");
  } else {
    try {
      const res: AxiosResponse = await apiNewCompany(
        {
          companyId: companyId.value,
          companyName: companyName.value,
          shortName: shortName.value,
          companyTaxNo: prjPaymentAccountName.value,
          prjPaymentAccountId: companyTaxNo.value.toUpperCase()
        }
      );

      if (res.data.returnCode === "0") {
        console.log("res:", res);
      }
    } catch (error) {
      console.log("res:", error);
    }
  }
}

addCompanyInfo.value = null;
function closeIt() {
  CloseAddNewCompany();
  // 取消禁止滾動穿透
  let m = function (e: { preventDefault: () => void; }) { e.preventDefault(); };
  document.body.style.overflow = '';
  document.removeEventListener("touchmove", m);
}

</script>
<style lang="scss" scoped>
.wholeareaback {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0px;
  top: 0px;
  padding-bottom: 100px;
  z-index: 10000000;
}

.wholearea {
  width: 60%;
  height: 90vh;
  margin: 5vh 20% 5vh 20%;
  padding: 50px 2.5% 50px 2.5%;
  border-radius: 10px;
  background: linear-gradient(to bottom, rgb(51, 126, 204) 70px, rgb(255, 255, 255) 70px);
  position: relative;
  overscroll-behavior: contain;
  /* outline: 1px black solid; */

  p {
    font-size: 26px;
    font-weight: 700;
    color: white;
    margin-top: -20px;
  }
}

.closeit {
  height: 40px;
  width: 40px;
  font-size: 36px;
  line-height: 36px;
  border: 0px;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.3s;

  &:hover {
    height: 60px;
    width: 60px;
    font-size: 60px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
}

.editRoleArea {
  height: auto;
  width: 100%;
  margin: 30px 0px 20px 0px;
  text-align: left;

  label {
    font-size: 20px;
    line-height: 40px;
    margin: 5px 5% 0px 5%;
  }

  input {
    height: 30px;
    width: 90%;
    margin: 0px 5% 10px 5%;
    padding: 0px 0px 0px 10px;
    line-height: 36px;
  }

  // outline: 1px solid black;
}

.editAuthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 0px 10px;
  border: 1px black solid;
  font-size: 20px;
  color: rgb(0, 0, 0);
  transition: 0.3s;

  &:hover {
    background-color: rgb(167, 255, 255);
    box-shadow: 10px 10px 10px 0px #000000;
    border: 1px solid rgb(46, 47, 51);
  }
}
</style>
