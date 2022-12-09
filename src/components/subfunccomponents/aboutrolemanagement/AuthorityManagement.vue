<!-- 角色與權限管理頁面 -->
<template>
  <div class="wholeareaback">
    <div class="wholearea">
      <div class="authmang">
        <!-- 開始，下為基本資料維護 -->
        <div class="funcgroupname">
          <h4>基本資料維護</h4>
        </div>

        <!-- 分隔線，下為帳號與權限管理 -->

        <div class="funcgroupname">
          <h4>帳號與權限管理</h4>

          <div class="funcgroup">
            <div>
              <input type="checkbox" value="1" name="" />
              <label class="labeltitle">公司別維護</label>
            </div>

            <div>
              <input type="checkbox" value="2" name="" />
              <label class="labeltitle">角色與權限管理</label>
            </div>

            <div>
              <input type="checkbox" value="3" name="" />
              <label class="labeltitle">使用者維護</label>
            </div>

            <div>
              <input type="checkbox" value="4" name="" />
              <label class="labeltitle">登入記錄查詢</label>
            </div>
          </div>
        </div>

        <!-- 分隔線，下為一般帳款申請作業 -->
        <div class="funcgroupname">
          <h4>一般帳款申請作業</h4>

          <div class="funcgroup">
            <div>
              <input type="checkbox" value="1" name="" />
              <label class="labeltitle">帳務別資料維護</label>
            </div>

            <div>
              <input type="checkbox" value="2" name="" />
              <label class="labeltitle">一般費用申請</label>
            </div>

            <div>
              <input type="checkbox" value="3" name="" />
              <label class="labeltitle">一般費用申請管理作業</label>
            </div>

            <div>
              <input type="checkbox" value="4" name="" />
              <label class="labeltitle">彙總前段檢收作業</label>
            </div>

            <div>
              <input type="checkbox" value="5" name="" />
              <label class="labeltitle">月結帳款作業</label>
            </div>

            <div>
              <input type="checkbox" value="6" name="" />
              <label class="labeltitle">月結帳款管理作業</label>
            </div>

            <div>
              <input type="checkbox" value="7" name="" />
              <label class="labeltitle">月結發票管理作業</label>
            </div>
          </div>
        </div>

        <!-- 財會簽核拋轉作業 -->
        <div class="funcgroupname">
          <h4>財會簽核拋轉作業</h4>
        </div>

        <!-- 資財成本結帳作業 -->
        <div class="funcgroupname">
          <h4>資財成本結帳作業</h4>
        </div>

        <!-- 零用金申請作業 -->
        <div class="funcgroupname">
          <h4>零用金申請作業</h4>

          <div class="funcgroup">
            <div>
              <input type="checkbox" value="1" name="" />
              <label class="labeltitle">零用金支付廠區別維護</label>
            </div>

            <div>
              <input type="checkbox" value="2" name="" />
              <label class="labeltitle">零用金申請作業</label>
            </div>

            <div>
              <input type="checkbox" value="3" name="" />
              <label class="labeltitle">零用金申請單管理作業</label>
            </div>

            <div>
              <input type="checkbox" value="4" name="" />
              <label class="labeltitle">零用金撥補作業</label>
            </div>

            <div>
              <input type="checkbox" value="5" name="" />
              <label class="labeltitle">零用金撥補單管理作業</label>
            </div>
          </div>
        </div>

        <!-- 專案工程作業 -->
        <div class="funcgroupname">
          <h4>專案工程作業</h4>

          <div class="funcgroup">
            <div>
              <input type="checkbox" value="1" name="" />
              <label class="labeltitle">新增建廠工程權限</label>
            </div>

            <div>
              <input type="checkbox" value="2" name="" />
              <label class="labeltitle">專案分類維護</label>
            </div>

            <div>
              <input type="checkbox" value="3" name="" />
              <label class="labeltitle">專案工項單位維護</label>
            </div>

            <div>
              <input type="checkbox" value="4" name="" />
              <label class="labeltitle">專案立案作業</label>
            </div>

            <div>
              <input type="checkbox" value="5" name="" />
              <label class="labeltitle">專案議價資料維護</label>
            </div>

            <div>
              <input type="checkbox" value="6" name="" />
              <label class="labeltitle">專案驗收作業</label>
            </div>

            <div>
              <input type="checkbox" value="7" name="" />
              <label class="labeltitle">專案付款作業</label>
            </div>

            <div>
              <input type="checkbox" value="8" name="" />
              <label class="labeltitle">專案完工作業</label>
            </div>

            <div>
              <input type="checkbox" value="9" name="" />
              <label class="labeltitle">專案資料管理作業</label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button class="updateauthority">修改</button>
        <button class="updateauthority" @click="cancelAdjust()">
          取消更改
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject, reactive } from "vue";
export default defineComponent({
  name: "AuthorityManagement",
  setup() {
    const adjustList: any = inject("adjustAuthority");

    function cancelAdjust() {
      adjustList.value = true;
    }
    return {
      cancelAdjust,
      adjustList,
    };
  },
});
</script>

<!-- 
  待辦事項
  1.取得權限
  2.連結 API 傳送角色代碼
  3.

-->

<style scoped>
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
  width: 90%;
  height: 80vh;
  margin: 10vh 5% 10vh 5%;
  padding: 20px 2.5% 0px 2.5%;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: auto;
  resize: vertical;
  outline: 1px black solid;
}

.authmang {
  text-align: left;
  /* outline: 1px black solid; */
}

.funcgroupname {
  margin: 20px 10px 20px 30px;
  border-radius: 10px;
  background-color: rgb(167, 255, 255);
  padding: 10px 10px 30px 20px;
  outline: 1px solid rgb(120, 120, 120);
}

/* .funcgroupname:nth-child(even) {
  background-color: rgb(167, 255, 255);
  color: rgb(0, 0, 0);
} */

.funcgroup {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  /* outline: 1px solid #000; */
}

.labeltitle {
  margin: 5px 30px 0px 5px;
}

.updateauthority {
  height: 40px;
  width: 150px;
  border-radius: 25px;
  margin: 30px 10px 20px 10px;
  border: 1px black solid;
  font-size: 20px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.updateauthority:hover {
  background-color: rgb(167, 255, 255);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
}

/* @media only screen and (max-width: 1200px) {
} */
</style>
