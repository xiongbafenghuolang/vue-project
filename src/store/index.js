/*
 * @Author       : wyatt
 * @Date         : 2021-03-20 10:45:55
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 11:43:25
 * @Description  :
 * @FilePath     : /vue-project/src/store/index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    // 如何获取
    add(state) {
      state.counter++;
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
