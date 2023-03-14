// API 路徑設定
const baseURL = "http://10.1.11.50:8085/";
//

// 登入 API
const getSystemJWT = "paymentSystem/public/getSystemJWT";

// 抓取使用者基本資料 API
const findPSUserByNotesId = "paymentSystem/api/PSUser/findPSUserByNotesId";




export {
    baseURL,
    getSystemJWT,
    findPSUserByNotesId,
};
