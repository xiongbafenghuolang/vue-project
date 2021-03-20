/*
 * @Author       : wyatt
 * @Date         : 2021-03-20 08:03:11
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 08:12:17
 * @Description  : 我的路由
 * @FilePath     : /project-vue/src/w-router/index.js
 */
import Vue from "vue";
import VueRouter from "./w-vue-router";
import Home from "../views/home.vue";

// 1. use一下，VueRouter是一个插件
// use会调用VueRouter.install(Vue)
Vue.use(VueRouter); // 做了什么

// 2. 声明一个路由表
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

// 3.创建一个路由实例
const router = new VueRouter({
  routes,
});

export default router;
