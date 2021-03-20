/*
 * @Author       : wyatt
 * @Date         : 2021-03-20 10:45:55
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 13:00:48
 * @Description  : 我的vuex
 * @FilePath     : /vue-project/src/w-store/index.js
 */
import Vue from "vue";
import Vuex from "./w-vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    // 如何获取
    add(state, num = 1) {
      state.counter += num;
    },
  },
  actions: {
    // 此处的上下文
    add({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
  modules: {},
});
