/*
 * @Author       : wyatt
 * @Date         : 2021-03-19 13:05:59
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:21:43
 * @Description  :
 * @FilePath     : /project-vue/src/utils/create.js
 */
import Vue from "vue";

// Copmonent -组建的配置对象
// props - 传递给它的属性
function create(Component, props) {
  // 传入的是组件的配置对象
  const Ctor = Vue.extend(Component);
  // propsData选项传递属性
  const comp = new Ctor({ propsData: props });
  comp.$mount();
  document.body.appendChild(comp.$el);
  comp.remove = () => {
    // 移除dom
    document.body.removeChild(comp.$el);
    // 销毁组件
    comp.$destroy();
  };
  // render
  // 1. 构建Component的实例
  // const vm = new Vue({
  //   render(h) {
  //     // h 是createElement
  //     // 它可以返回一个vnode
  //     return h(Component, { props });
  //   },
  // }).$mount(); // 不设置挂载目标，依然可以转换为vnode为真实节点
  // // 2. 挂载到body上
  // document.body.appendChild(vm.$el);

  // // 3. 获取组建实例
  // const comp = vm.$children[0];
  // comp.remove = () => {
  //   document.body.removeChild(vm.$el);
  //   vm.$destroy();
  // };
  return comp;
}

export default create;
