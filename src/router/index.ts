import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'loginpage',
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: '/loginpage2',
    name: 'loginpage2',
    component: () => import("../views/LoginPage2.vue")
  },
  {
    path: '/loginpage3',
    name: 'loginpage3',
    component: () => import("../views/LoginPage3.vue")
  },
  {
    path: '/LoadingEffect',
    name: 'LoadingEffect',
    component: () => import("../views/LoadingEffect.vue")
  },
  // {
  //   path: '/login/LoginView',
  //   name: 'LoginView',
  //   component: () => import("../views/LoginView.vue"),
  // },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: () => import("../views/LoginView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
