//
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";
import router from "../router";
import { baseURL } from "../config/ApiConfig";


// 先用 axios.create 創造一個實體，裡面放進 Request 的相關設定屬性
const service = axios.create({
  // 配置對象
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json;charset:utf-8",
  },
});

// 請求攔截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config 為配置對象，重要屬性為 header with Token
    const token = localStorage.getItem("userJWT");

    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
        // Bearer 跟 userJWT 中間要有一個空格
      };
    }
    // console.log("Axios Request:", config);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);




// 響應攔截器
// service.interceptors.response.use()




export default service;

// https://ithelp.ithome.com.tw/articles/10230336
// https://mini-ghost.dev/blog/axios-source-code-1/
