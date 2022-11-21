<!-- 登入後的畫面 -->
<template>
    <NavbarFun />
    <h2 class="welcome">
        {{ msg.userName }} 你好 <br />
        USERNAME：{{ msg.userID }} <br />
        部門：{{ msg.userDepartment }} <br />
        職級：{{ msg.userClass }}
    </h2>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
export default defineComponent({
    name: "LoginView",

    setup() {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("userJWT");
        // console.log("b1:", token);
        // console.log("b2:", userId);

        onMounted(() => {
            axios
                .post(
                    "http://localhost:8085/paymentSystem/api/PSUser/findPSUserByNotesId",
                    { notesId: userId },
                    {
                        headers: {
                            Authorization: "Bearer " + token,
                            // Bearer 跟 token 中間有一個空格
                        },
                    }
                )
                // post 放三個參數，url、data、config(header)

                .then((response) => {
                    // console.log("c1:", response.data);
                    msg.userName = response.data.data.userInfo.userName;
                    msg.userID = response.data.data.userInfo.notesId;
                    msg.userDepartment =
                        response.data.data.userInfo.userOrganization;
                    msg.userClass = response.data.data.userInfo.userTitle;
                })

                .catch((error) => {
                    console.log("發生錯誤");
                });
        });

        const msg = reactive({
            userName: "",
            userID: "",
            userDepartment: "",
            userClass: "",
        });

        return {
            msg,
        };
    },
});
</script>

<style>
.welcome {
    text-align: left;
    margin-top: 100px;
    margin-left: 20px;
    color: black;
}

nav {
    padding-top: 0px;
}
</style>
