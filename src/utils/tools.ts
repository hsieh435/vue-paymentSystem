import { ref, provide } from "vue";

const userId = localStorage.getItem("userId");
const userJWT = localStorage.getItem("userJWT");

// 公司別維護
const addCompanyInfo = ref();
addCompanyInfo.value = null;

// 新增公司 Component 之開關
export function AddCompany() {
  // console.log("addCompanyInfo", addCompanyInfo.value);
  addCompanyInfo.value = null;
  // console.log("addCompanyInfo", addCompanyInfo.value);
}

export function CloseAddNewCompany() {
  addCompanyInfo.value = true;
}



export {
  userId,
  userJWT,
  addCompanyInfo,
};
