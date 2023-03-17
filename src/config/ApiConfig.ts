// API 路徑設定
const baseURL = "http://10.1.11.50:8085/";
//

// 登入 API 路徑
const getSystemJWT = "paymentSystem/public/getSystemJWT";

// 抓取使用者基本資料 API 路徑
const findPSUserByNotesId = "paymentSystem/api/PSUser/findPSUserByNotesId";


// 查詢個別帳號擁有權限 API 路徑
const findAllFunctionGroupWhereFunctionIdInPermission = "paymentSystem/api/functionGroup/findAllFunctionGroupWhereFunctionIdInPermission";


// 搜尋公司 API 路徑
const findAllCompany = "paymentSystem/api/Company/findAllCompany";

// 新增公司 API 路徑
const newCompany = "paymentSystem/api/Company/newCompany";




export {
    baseURL,
    getSystemJWT,
    findPSUserByNotesId,
    findAllFunctionGroupWhereFunctionIdInPermission,
    findAllCompany,
    newCompany,
};
