/*
 * @Author       : wyatt
 * @Date         : 2021-03-20 11:38:07
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 13:20:17
 * @Description  :
 * @FilePath     : /vue-project/src/w-store/w-vuex.js
 */

let _Vue;
// 1. 实现一个插件
class Store {
  constructor(options) {
    this._mutations = options.mutations;
    this._actions = options.actions;
    // this._getters = options.getters;
    // 创建响应式的state
    // this.$store.state.xx
    this._vm = new _Vue({
      data() {
        return {
          // 不希望被代理，就加上$
          $$state: options.state,
        };
      },
    });
    // 修改一下this的指向
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);

    // getters
    // this._getters = {};
    // this._getters.doubleCounter = options.getters.doubleCounter(this.state);

    //
    // Object.defineProperty(this._getters, "", {});
  }

  get state() {
    return this._vm._data.$$state;
  }

  set state(v) {
    console.error("please use replace to reset state");
  }

  // 修改state
  // this.$state.commit('add',1)
  commit(type, playload) {
    // 获取type对应的mutations
    const fn = this._mutations[type];
    if (!fn) {
      console.error("unknown mutation");
      return;
    }

    // 传入state作为参数
    fn(this.state, playload);
  }

  dispatch(type, payload) {
    // 获取type对应的actions
    const fn = this._actions[type];

    if (!fn) {
      console.error("unknown action");
      return;
    }

    // 传入当前Store实例做上下文
    fn(this, payload);
  }
}

function install(Vue) {
  _Vue = Vue;
  // 混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
        console.log(this.$options);
      }
    },
  });
}

//  导出的对象就是Vuex
export default {
  Store,
  install,
};
