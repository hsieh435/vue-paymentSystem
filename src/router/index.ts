import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NormalLayout from "../components/layout/NormalLayout.vue";
import LoginLayout from "../components/layout/LoginLayout.vue";
import NotFound from "../components/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: NormalLayout,
    children: [
      {
        path: "",
        component: HomeView,
      },
    ],
  },
  {
    path: "/about",
    name: "AboutView",
    component: NormalLayout,
    children: [
      {
        path: "",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
  // {
  //   path: "/LoginView",
  //   name: "LoginView",
  //   component: NormalLayout,
  //   children: [
  //     {
  //       path: "",
  //       name: "",
  //       component: () => import("../views/LoginView.vue"),
  //     },
  //   ],
  // },

  {
    path: "/",
    name: "loginpage",
    component: LoginLayout,
    meta: { title: "Payment System" },
    children: [
      {
        path: "",
        component: () => import("../views/LoginPage.vue"),
      },

      // 登入主頁面

      {
        path: "/LoginView",
        name: "LoginView",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () => import("../views/LoginView.vue"),
          },
        ],
      },

      // 分隔線，以下為帳號與權限管理

      {
        // 公司別維護
        path: "/companyMaintenance",
        name: "CompanyMaintain",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/managerGroup/CompanyMaintenance.vue"
              ),
          },
        ],
      },
      {
        // 角色與權限管理
        path: "/psRoleList",
        name: "RoleManagement",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction//managerGroup/RoleManagement.vue"),
          },
        ],
      },
      {
        // 使用者維護
        path: "/psUserList",
        name: "UserMaintain",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/managerGroup/UserMaintain.vue"),
          },
        ],
      },
      {
        // 登入記錄查詢
        path: "/userLoginQuery",
        name: "LoginRecord",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/managerGroup/LoginRecord.vue"),
          },
        ],
      },
      {
        // 付款對象查詢與新增
        path: "/payeeMaintenance",
        name: "PayeeMaintenance",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/managerGroup/PayeeMaintenance.vue"),
          },
        ],
      },

      // 分隔線，以下為一般帳款作業申請

      {
        // 帳務別資料維護
        path: "/generallyCostBasic",
        name: "GenerallyCostBasic",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/generallyCost/GenerallyCostBasic.vue"
              ),
          },
        ],
      },
      {
        // 一般費用申請
        path: "/generallyCost",
        name: "GenerallyCost",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/generallyCost/GenerallyCost.vue"),
          },
        ],
      },
      {
        // 一般費用申請管理作業
        path: "/generallyCostMgr",
        name: "GenerallyCostMgr",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/generallyCost/GenerallyCostMgr.vue"),
          },
        ],
      },
      {
        // 彙總前段檢收作業
        path: "/monthlyPreProcess",
        name: "MonthlyPreProcess",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/generallyCost/MonthlyPreProcess.vue"
              ),
          },
        ],
      },
      {
        // 月結帳款作業
        path: "/monthCost",
        name: "MonthCost",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/generallyCost/MonthCost.vue"),
          },
        ],
      },
      {
        // 月結帳款管理作業
        path: "/monthCostMgr",
        name: "MonthCostMgr",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/generallyCost/MonthCostMgr.vue"),
          },
        ],
      },
      {
        // 月結發票管理作業
        path: "/monthlyInvoiceMtn",
        name: "MonthlyInvoiceMtn",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/generallyCost/MonthlyInvoiceMtn.vue"
              ),
          },
        ],
      },
      {
        // 一般帳款查詢
        path: "/generallyCostQuery",
        name: "GenerallyCostQuery",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/generallyCost/GenerallyCostQuery.vue"
              ),
          },
        ],
      },

      // 分隔線，以下為財會簽核拋轉作業

      {
        // 一般帳款轉總帳系統
        path: "/genericTransferToTotalAcc",
        name: "genericTransferToTotalAcc",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/accountant/genericTransferToTotalAcc.vue"),
          },
        ],
      },
      {
        // 月結帳款轉總帳系統
        path: "/monthTransferToTotalAcc",
        name: "monthTransferToTotalAcc",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/accountant/monthTransferToTotalAcc.vue"),
          },
        ],
      },
      {
        // 轉票管系統
        path: "/transferToTicket",
        name: "transferToTicket",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/accountant/transferToTicket.vue"),
          },
        ],
      },

      // 分隔線，以下為資財成本結帳作業

      {
        // 資財成本結帳作業
        path: "/capitalCost",
        name: "capitalCost",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/capitalCost/capitalCost.vue"),
          },
        ],
      },

      // 分隔線，以下為零用金申請作業

      {
        // 零用金支付廠區別維護
        path: "/pettyPlantMtn",
        name: "pettyPlantMtn",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyPlantMtn.vue"),
          },
        ],
      },
      {
        // 零用金申請作業
        path: "/pettyApplication",
        name: "PettyApplication",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyApplication.vue"),
          },
        ],
      },
      {
        // 零用金申請單管理作業
        path: "/pettyApplicationMgr",
        name: "PettyApplicationMgr",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyApplicationMgr.vue"),
          },
        ],
      },
      {
        // 零用金撥補作業
        path: "/pettyMakeUp",
        name: "PettyMakeUp",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyMakeUp.vue"),
          },
        ],
      },
      {
        // 零用金撥補單管理作業
        path: "/pettyMakeUpMgr",
        name: "PettyMakeUpMgr",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyMakeUpMgr.vue"),
          },
        ],
      },
      {
        // 零用金申請單查詢
        path: "/pettyApplicationQry",
        name: "PettyApplicationQry",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyApplicationQry.vue"),
          },
        ],
      },
      {
        // 零用金撥補記錄查詢
        path: "/pettyMakeUpQry",
        name: "PettyMakeUpQry",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/pettyCash/PettyMakeUpQry.vue"),
          },
        ],
      },

      // 分隔線，以下為專案工程作業

      {
        // 新增建廠工程權限，null
        path: "*/",
        name: "AddFEPermission",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/AddFEPermission.vue"
              ),
          },
        ],
      },
      {
        // 專案分類維護
        path: "/projectCategory",
        name: "ProjectCategory",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/ProjectCategory.vue"
              ),
          },
        ],
      },
      {
        // 專案工項單位維護
        path: "/projectWorkItem",
        name: "projectWorkItem",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/ProjectWorkItem.vue"
              ),
          },
        ],
      },
      {
        // 專案立案作業
        path: "/project",
        name: "Project",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/projectEngineering/Pro-Ject.vue"),
          },
        ],
      },
      {
        // 專案議價資料維護
        path: "/projectQNMaintenance",
        name: "ProjectQNMaintenance",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/ProjectQNMaintenance.vue"
              ),
          },
        ],
      },
      {
        // 專案驗收作業
        path: "/projectAcceptance",
        name: "ProjectAcceptance",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/ProjectAcceptance.vue"
              ),
          },
        ],
      },
      {
        // 專案付款作業
        path: "/projectPayment",
        name: "ProjectPayment",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/ProjectPayment.vue"
              ),
          },
        ],
      },
      {
        // 專案完工作業
        path: "/projectCompleted",
        name: "ProjectCompleted",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import(
                "../views/subfunction/projectEngineering/ProjectCompleted.vue"
              ),
          },
        ],
      },
      {
        // 專案資料管理作業
        path: "/projectMgr",
        name: "ProjectMgr",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/projectEngineering/ProjectMgr.vue"),
          },
        ],
      },

      // 分隔線，以下為其他

      {
        // numComponents
        path: "/numComponents",
        name: "numComponents",
        component: NormalLayout,
        children: [
          {
            path: "",
            component: () =>
              import("../views/subfunction/others/numComponents.vue"),
          },
        ],
      },

      // 分隔線，結束
    ],
  },
  {
    path: "/GotSSOInfo",
    name: "GotSSOInfo",
    component: LoginLayout,
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/GotSSOInfo.vue"),
      },
    ],
  },
  {
    path: "/LogOutPage",
    name: "LogOutPage",
    component: LoginLayout,
    children: [
      {
        path: "",
        name: "",
        component: () => import("../views/LogOutPage.vue"),
      },
    ],
  },
  {
    path: "/loginpage2",
    name: "loginpage2",
    component: NormalLayout,
    children: [
      {
        path: "",
        component: () => import("../views/LoginPage2.vue"),
      },
    ],
  },
  {
    path: "/loginpage3",
    name: "loginpage3",
    component: NormalLayout,
    children: [
      {
        path: "",
        component: () => import("../views/LoginPage3.vue"),
      },
    ],
  },
  {
    path: "/LoadingEffect",
    name: "LoadingEffect",
    component: NormalLayout,
    children: [
      {
        path: "",
        component: () => import("../views/LoadingEffect.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
