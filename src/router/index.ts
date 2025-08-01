import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UserLoginPage from "@/pages/user/UserLoginPage.vue";
import UserManagePage from "@/pages/admin/UserManagePage.vue";
import UserProfilePage from "@/pages/user/UserProfilePage.vue";
import AppManagePage from "@/pages/admin/AppManagePage.vue";
import AppChatPage from "@/pages/app/AppChatPage.vue";
import AppEditPage from "@/pages/app/AppEditPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
    },
    {
      path: '/user/center',
      name: '个人中心',
      component: UserProfilePage,
    },
    {
      path: '/admin/user',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path: '/admin/appManage',
      name: '应用管理',
      component: AppManagePage,
    },
    {
      path: '/app/chat/:id',
      name: '应用对话',
      component: AppChatPage,
    },
    {
      path: '/app/edit/:id',
      name: '编辑应用',
      component: AppEditPage,
    },
  ],
})

export default router
