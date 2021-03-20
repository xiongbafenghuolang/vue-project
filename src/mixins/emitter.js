/*
 * @Author       : wyatt
 * @Date         : 2021-03-19 14:14:15
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 16:51:21
 * @Description  :
 * @FilePath     : /project-vue/src/mixins/emitter.js
 */
// 广播：自上而下配发事件
function broadcast(componentName, eventName, params) {
  // 遍历所有子元素，如果自元素的componentName和传入的相同，则配发事件
  this.$children.forEach((child) => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    // 冒泡查找componentName相同的组件的并配发事件
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;
      // 向上查找直到找到相同的名称的组件
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      // 如果找到就配发事件
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
