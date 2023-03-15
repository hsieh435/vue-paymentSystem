//
import service from "./requests";


//
import {
    getSystemJWT,
    findPSUserByNotesId,
    findAllFunctionGroupWhereFunctionIdInPermission
} from "../config/ApiConfig";


// 匯入 API 所需參數
import {
    ILogin,
    CatchDatainMainpage,
} from "../config/common.types";


// 以下為各個 API，部分 API 因不需傳送參數，故無 data
// 8603


// 登入 API
export const apiPostUserLogin = (data: ILogin) => {
    return service.post(getSystemJWT, data);
};
// post 放三個參數，url、data、config(header)


// 抓取使用者基本資料 API
export const apiFindPSUserByNotesId = (data: CatchDatainMainpage) => {
    return service.post(findPSUserByNotesId, data);
};


// 抓取使用者擁有權限 API
export const apiFindAllFunctionGroupWhereFunctionIdInPermission = () => {
    return service.post(findAllFunctionGroupWhereFunctionIdInPermission);
};
