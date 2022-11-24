import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NormalLayout from "../layout/NormalLayout.vue"
import LoginLayout from "../layout/LoginLayout.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: NormalLayout,
    children:[
      {
        path:"",
        component:HomeView,
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'loginpage',
    component: LoginLayout,
    children:[
      {
        path:"",
        component: () => import('../views/LoginPage.vue')
      }
    ]
  },
  {
    path: '/loginpage2',
    name: 'loginpage2',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/LoginPage2.vue')
      }
    ]
  },
  {
    path: '/loginpage3',
    name: 'loginpage3',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/LoginPage3.vue')
      }
    ]
  },
  {
    path: '/LoadingEffect',
    name: 'LoadingEffect',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/LoginPage3.vue')
      }
    ]
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/LoginView.vue')
      }
    ]
  },
  {
    path: '/LoginView/companyMaintenance',
    name: 'CompanyMaintain',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/subfunction/managerGroup/CompanyMaintenance.vue')
      }
    ]
  },
  {
    path: '/LoginView/psRoleList',
    name: 'RoleManagement',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/subfunction//managerGroup/RoleManagement.vue')
      }
    ]
  },
  {
    path: '/LoginView/psUserList',
    name: 'UserMaintain',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/subfunction/managerGroup/UserMaintain.vue')
      }
    ]
  },
  {
    path: '/LoginView/userLoginQuery',
    name: 'LoginRecord',
    component: NormalLayout,
    children:[
      {
        path:"",
        component: () => import('../views/subfunction/managerGroup/LoginRecord.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
