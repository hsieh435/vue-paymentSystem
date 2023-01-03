<!-- reactive 寫法 -->
<template>
  <div>
    <div>使用者姓名：{{ msg.username }}</div>
    <div>使用者帳號：{{ msg.account }}</div>
  </div>
  <div id="login" class="loginInput">
    <div class="group">
      <label class="labelword">請輸入姓名：</label><br />
      <input
        type="text"
        v-model="msg.username"
        class="inputdata"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <br />
      <label class="labelword">請輸入帳號：</label><br />
      <input
        type="text"
        v-model="msg.account"
        class="inputdata"
        placeholder="Useraccount"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  </div>
  <div class="d-grid gap-2 col-4 mx-auto">
    <button
      class="btn btn-primary buttoncon"
      id="show"
      @click="show()"
      type="button"
    >
      login
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "loginpPage3",

  setup() {
    // const msg = ref("msg");
    // ref 寫法
    const msg = reactive({
      username: "",
      account: "",
    });
    const show = () => {
      alert("123");
    };
    return {
      msg,
      show,
    };
  },
});
</script>

<style scoped>
.group {
  position: relative;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: stretch;
  width: 100%;
  margin-bottom: 1rem;
}

.labelword {
  line-height: 30px;
  font-size: 30px;
  margin:10px 0px 10px 0px;
}

.loginInput {
  margin: 200px 25% 0px 25%;
  width: 50%;
}

@media only screen and (max-width: 1080px) {
  .group {
    flex-wrap: wrap;
  }

  .loginInput {
    margin: 200px 30% 0px 30%;
    width: 60%;
  }
}

.inputdata {
  width: 300px;
  border: 1px solid black;
  background-color: white;
  margin: 10px 0px 10px 0px;
  border-radius: 5px;
  transition: 0.3s;
}

.buttoncon {
  height: 50px;
  width: 300px;
  font-size: 30px;
  line-height: 30px;
  border-radius: 25px;
  margin: 50px 0px 0px 0px;
}
</style>
