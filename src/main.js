/*
 * @Author       : wyatt
 * @Date         : 2021-03-18 14:28:21
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 08:24:26
 * @Description  :
 * @FilePath     : /project-vue/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import router from "./w-router";

Vue.config.productionTip = false;

new Vue({
  // vue的根实例
  router, // 为什么挂载，目的是什么? 目的是让我们可以在插件中国呢访问到route的实例
  render: (h) => h(App),
}).$mount("#app");
