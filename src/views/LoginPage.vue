<!-- axios 資料傳輸 -->
<template>
  <div class="background">
    <div class="gray">
      <div class="title">
        <div class="greenball"></div>
        <div class="signinword">後臺系統</div>
      </div>
      <div class="inputarea">
        <input
          class="inputdata"
          type="text"
          id="username"
          v-model="username"
          placeholder="USERNAME"
        />
        <input
          class="inputdata"
          type="password"
          id="password"
          placeholder="PASSWORD"
        />
        <button class="button" @click="login()">LOG IN !</button>
        <p class="forgot">hsieh435 FORGOT PASSWORD ?</p>
        <!-- <p class="forgot">hsieh435</p> -->
        <!-- {{ username }} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "loginpPage",

  setup() {
    const router = useRouter();
    const username = ref();

    const login = () => {
      const user = {
        notesId: username.value,
      };
      // console.log(user);

      axios
        .post("http://localhost:8085/paymentSystem/public/getSystemJWT", {
          notesId: user.notesId,
          // password: "",
        })

        .then((response) => {
          if (response.data.returnCode == 0) {
            // alert("登入成功");
            // console.log("a:",user.notesId);
            const lohs = user.notesId;
            localStorage.setItem("username", JSON.stringify(lohs));
            router.push({ path: "/LoginView" });
          } else {
            alert("請輸入正確的USERNAME");
          }
          // alert(JSON.stringify(response.user));
        })
        .catch((error) => {
          // console.log(error);
          // alert(error);
          alert("發生錯誤");
        });
      // 用.then 和.catch 去處理接收成功和接收失敗結果。
    };

    return {
      username,
      login,
    };
  },
});
</script>

<style>
* {
  position: relative;
  margin: 0;
}

.background {
  background-color: rgb(197, 197, 197);
  width: 100%;
  height: 100vh;
  /* outline: 1px solid black; */
  position: absolute;
  top: 0px;
}

.gray {
  width: 50%;
  height: 500px;
  border-radius: 10px;
  margin: 100px auto auto auto;
  background-color: rgba(46, 47, 51);
  /* outline: white 1px solid; */
  position: relative;
  transition: 0.3s;
}

.gray:hover {
  box-shadow: 10px 10px 50px 0px #000000;
}

.title {
  width: 60%;
  height: 30px;
  margin: 50px 20% 0px 20%;
  background-color: rgba(46, 47, 51);
  display: flex;
  justify-content: center;
  /* outline: 1px solid white; */
  position: absolute;
}

.signinword {
  font-size: 30px;
  line-height: 32px;
  color: white;
  background-color: rgba(46, 47, 51);
  /* outline: 1px solid white; */
}

.greenball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(46, 189, 89);
  margin-right: 20px;
}

.inputarea {
  width: 70%;
  height: 300px;
  margin-top: 30px;
  background-color: rgba(46, 47, 51);
  /* outline: 1px solid rgb(255, 255, 255); */
  position: absolute;
  top: 100px;
  left: 15%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.inputdata {
  width: 300px;
  height: 50px;
  margin: 20px 0px 0px 0px;
  padding-left: 25px;
  border-radius: 30px;
  font-size: 24px;
  border: 0px;
  background-color: white;
  transition: 0.3s;
}

.inputdata:hover {
  padding-left: 23px;
  font-size: 26px;
  outline: 1px solid rgb(255, 255, 255);
}

.button {
  height: 50px;
  width: 325px;
  border-radius: 25px;
  margin: 50px 0px 0px 0px;
  /* padding-left: 25px; */
  border: 0px;
  font-size: 24px;
  color: rgb(0, 0, 0);
  transition: 0.3s;
}

.button:hover {
  background-color: rgb(46, 189, 89);
  box-shadow: 10px 10px 10px 0px #000000;
  border: 1px solid rgb(46, 47, 51);
  color: #fff;
  cursor: pointer;
}

.forgot {
  font-size: 12px;
  color: white;
  margin-top: 25px;
}

@media only screen and (max-width: 756px) {
  .gray {
    width: 90%;
    margin: 100px auto auto auto;
  }

  .inputarea {
    width: 70%;
    padding-top: 0px;
    margin-top: 0px;
    /* outline: 1px solid rgb(255, 255, 255); */
  }
}

@media only screen and (max-width: 450px) {
  .signinword {
    font-size: 24px;
    line-height: 32px;
  }

  .greenball {
    margin-right: 10px;
  }

  .inputdata {
    width: 200px;
    height: 30px;
    font-size: 18px;
    padding-left: 15px;
    margin: 20px 0px 0px 0px;
  }

  .button {
    height: 30px;
    width: 200px;
    margin: 50px 0px 0px 0px;
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
