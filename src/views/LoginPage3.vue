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
        class="formcon"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      /><br />
      <label class="labelword">請輸入帳號：</label><br />
      <input
        type="text"
        v-model="msg.account"
        class="formcon"
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
  line-height: 3rem;
  font-size: 20px;
  padding-right: 10px;
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

.formcon {
  display: block;
  width: 75%;
  padding: 0.375rem 0.75rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-clip: padding-box;
  border: 2px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.buttoncon {
  display: flex;
  text-align: center;
  margin-top: 10px;
  height: 40px;
}
</style>
