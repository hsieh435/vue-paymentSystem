//


// 登入資料
export interface ILogin {
  notesId: string;
}


// 抓取使用者基本資料 API 資料
export interface CatchDatainMainpage {
  notesId: string | null;
}


// 主頁面獲取使用者資料，第一層
export interface UserInfomation {
  role: object;
  userInfo: object;
}

// 主頁面獲取使用者資料，第二層
export interface Role {
  roleId?: string;
  roleName?: string;
  addedBy?: string;
  addedByName?: string;
  addedDatetime?: string;
  updatedDatetime?: string;
}

// 主頁面獲取使用者資料，第二層
export interface UserInfo {
  notesId: string;
  userName: string;
  userOrganization: string;
  userTitle: string;
}




// Navbar 擁有權限，第一層
export interface FunctionGroupByNotesId {
  functionGroupId: string;
  functionGroupName: string;
  functionModels: Array<EachFunctionModels>;
}
// Navbar 擁有權限，第二層
interface EachFunctionModels {
  functionId: string;
  functionGroupId: string;
  functionName: string;
  url: string;
}


// 公司資料
export interface AllCompanyInformation {
  companyTaxNo: string;
  companyId: string;
  companyName: string;
  shortName: string;
  prjPaymentAccountName: string;
}

// 新增公司
export interface NewCompanyItem {
  companyId: string;
  companyName: string;
  shortName: string;
  companyTaxNo?: string;
  addedBy?: string;
  modifiedBy?: string;
  prjPaymentAccountId?: string;
  prjPaymentAccountName?: string;
  addedDatetime?: string;
  updatedDatetime?: string;
  hibernateLazyInitializer?: null;
}
