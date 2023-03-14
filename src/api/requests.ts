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
// axios.interceptors.request.use()




// 響應攔截器
// service.interceptors.response.use()




export default service;

// https://ithelp.ithome.com.tw/articles/10230336
