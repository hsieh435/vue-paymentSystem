//
import service from "./requests";


//
import {
    getSystemJWT,
    findPSUserByNotesId
} from "../config/ApiConfig";




import {
    ILogin,
    CatchDatainMainpage,
} from "../config/common.types";


// 登入 API
export const apiPostUserLogin = (data: ILogin) => {
    return service.post(getSystemJWT, data);
};


// 抓取使用者基本資料 API
export const apiFindPSUserByNotesId = (data: CatchDatainMainpage)=>{
    return service.post(findPSUserByNotesId, data)
}
