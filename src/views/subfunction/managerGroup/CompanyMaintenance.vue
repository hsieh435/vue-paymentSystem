<!-- 個別功能頁面 -->
<template>
  <h1 class="subfunctiontitle">公司別維護</h1>
  <Xyz
    @eventIsANumber="gotANumber"
    @eventIsAString="gotAText"
    @eventIsAArray="gotAArray"
  ></Xyz>
  <br />
  <br />
  <h4>EMIT 子傳父數字：{{ aNumber }}</h4>
  <h4>EMIT 子傳父文字：{{ aString }}</h4>
  <!-- <h4>EMIT 子傳父陣列：{{ aARRAY }}</h4> -->
  <br />
  <table class="table-fill">
    <thead>
      <tr>
        <th>ID</th>
        <th>UserId</th>
        <th>UserName</th>
        <th>RoleName</th>
      </tr>
    </thead>
    <tbody class="table-hover">
      <tr v-for="(user, index) in users.value" :key="index">
        <td>{{ index }}</td>
        <td>{{ user.userInfo.notesId }}</td>
        <td>{{ user.userInfo.userName }}</td>
        <td>{{ user.role.roleName }}</td>
      </tr>
    </tbody>
  </table>

  <BackToLoginView></BackToLoginView>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, inject } from "vue";
import "@/views/subfunction/subfunction.css";
import Xyz from "../../../components/subfunccomponents/aboutCompanyMaintenance/Xyz.vue";
import BackToLoginView from "../../../components/BackToLoginView.vue";
export default defineComponent({
  name: "CompanyMaintain",
  components: {
    Xyz,
    BackToLoginView,
  },
  setup() {
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
    const users = reactive({ value: null });
    function gotAArray(c: any) {
      // console.log(`接收訊息：${c}`);
      console.log(c, typeof c);
      users.value = c;
    }

    return {
      aNumber,
      gotANumber,
      aString,
      gotAText,
      users,
      gotAArray,
    };
  },
});
</script>

<style scoped lang="scss">
.table-fill {
  width: 80%;
  margin: 0px 10% 0px 10%;
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
  font-size: 26px;
  padding: 10px 10px 10px 10px;
  background-color: rgba(79, 192, 210, 0.7);
  color: rgb(255, 255, 255);
  outline: 1px solid black;
}

td {
  background-color: rgb(177, 177, 177);
  color: #000000;
  height: 50px;
  font-size: 22px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  outline: 1px solid black;
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

.button {
  width: 150px;
  height: 40px;
  border: 0;
  border-radius: 20px;
  background-color: rgba(79, 193, 210);
  line-height: 16px;
  margin: 10px 5px 10px 5px;
  transition: 0.2s;
}

.button:hover {
  background-color: rgb(255, 255, 255);
  border: 3px solid rgba(79, 192, 210, 0.7);
}
</style>
