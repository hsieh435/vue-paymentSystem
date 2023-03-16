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
// AxiosInstance 配置參考 https://axios-http.com/docs/instance
const service: AxiosInstance = axios.create({
  // 配置對象
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json;charset:utf-8",
  },
});

// 請求攔截器
// 參照 https://lightrains.com/blogs/axios-intercepetors-react/
service.interceptors.request.use(
  config => {
    // config 為配置對象，重要屬性為 header with Token
    const token = localStorage.getItem("userJWT");

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
      // Bearer 跟 userJWT 中間要有一個空格
    }
    // console.log("Axios Request:", config);

    return config;
  },
  (error: AxiosError) => {
    // console.log("Axios error:", error);
    return Promise.reject(error);
    // 回傳 error
  }
);

// 用 axios.interceptors.request.use() 就可以設置 request 的攔截器，放入兩個函式做為參數。
// 第一個函式會在 request 送出前攔截到此次的 config，讓你可以做最後的處理。
// 第二個函式可以讓你在 request 發生錯誤時做一些額外的處理。



// 響應攔截器
// service.interceptors.response.use()




export default service;

// https://ithelp.ithome.com.tw/articles/10230336
// https://mini-ghost.dev/blog/axios-source-code-1/
