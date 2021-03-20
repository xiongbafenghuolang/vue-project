/*
 * @Author       : wyatt
 * @Date         : 2021-03-20 07:43:20
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:54:30
 * @Description  :
 * @FilePath     : /project-vue/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";

// 1. use一下，VueRouter是一个插件
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
