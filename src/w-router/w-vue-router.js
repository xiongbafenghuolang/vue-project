/*
 * @Author       : wyatt
 * @Date         : 2021-03-20 08:03:46
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-22 13:39:43
 * @Description  : 路由的实现
 * @FilePath     : /vue-project/src/w-router/w-vue-router.js
 */
// 实现一个插件
// 返回一个函数
// 或者返回一个对象，他有一个install方法
let _Vue;
class VueRouter {
  // 选项：routes- 路由表
  constructor(options) {
    this.$options = options;
    _Vue;

    // 需要定义一个响应式的current属性
    // util.defineReactive可以给一个对象定一个响应式的属性,官方提供的隐藏的api
    // const initial = window.location.hash.slice(1) || "/";
    // _Vue.util.defineReactive(this, "current", initial);

    this.current = window.location.hash.slice(1) || "/";
    _Vue.util.defineReactive(this, "matched", []);
    // match方法可以递归遍历路由表，获得匹配关系数组
    this.match();

    // 监控url的变化
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    window.addEventListener("load", this.onHashChange.bind(this));

    // 缓存一下path和route映射关系,提前处理路由表避免每次都循环
    // this.routeMap = {};
    // this.$options.routes.forEach((route) => {
    //   this.routeMap[route.path] = route;
    // });
  }

  onHashChange() {
    // 只要#号之后的内容
    this.current = window.location.hash.slice(1);
    this.matched = [];
    this.match();
  }

  match(routes) {
    routes = routes || this.$options.routes;

    // 递归遍历
    for (const route of routes) {
      if (route.path === "/" && this.current === "/") {
        this.matched.push(route);
        return;
      }

      if (route.path !== "/" && this.current.indexOf(route.path) != -1) {
        this.matched.push(route);
        if (route.children) {
          this.match(route.children);
        }
        return;
      }
    }
  }
}
VueRouter.install = function(Vue) {
  // 引用Vue构造函数，在上面VueRouter中使用
  _Vue = Vue;

  // 1. 挂载$router
  Vue.mixin({
    // 给未来所有组件全局添加一个下面执行任务
    beforeCreate() {
      // 此处的this指的是组件的实例
      if (this.$options.router) {
        /**
         * options是组件的配置对象
         * new Vue({
          router, // 为什么挂载，目的是什么? 目的是让我们可以在插件中国呢访问到route的实例
          render: (h) => h(App),
        })
         */
        Vue.prototype.$router = this.$options.router;
      }
    },
  });

  // 任务2：实现两个全局组件router-link和router-view
  Vue.component("router-link", {
    /**
     * template 与render区别
     * render优先级会更高些，如果写了render则template将会失效
     * render函数是必须的
     */
    // template:'<a>',
    props: {
      to: {
        type: String,
        require: true,
      },
    },
    render(h) {
      // <router-link to="/about"></router-link>
      // <a href="#/about">XXX</a>
      // this.$slots.default 默认插槽的内容，里面的文本
      // 1. jsx语法,必须要求当前环境支持jsx语法
      // return <a href={`${this.to}`}>{this.$slots.default}</a>;
      return h(
        "a",
        {
          attrs: {
            href: `#${this.to}`,
          },
        },
        this.$slots.default
      );
    },
  });
  Vue.component("router-view", {
    render(h) {
      // let component = null;
      // 找到当前url对应的组件
      // const route = this.$router.$options.routes.find(
      //   (route) => route.path == this.$router.current
      // );
      // if (route) {
      //   component = route.component;
      // }

      // 获取path对应的component
      const { routeMap, current } = this.$router;
      const component = routeMap[current] ? routeMap[current].component : null;

      // 渲染传入的组件
      return h(component);
    },
  });
};
export default VueRouter;
