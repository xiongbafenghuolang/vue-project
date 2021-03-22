/*
 * @Author       : wyatt
 * @Date         : 2021-03-21 11:04:46
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-21 12:06:11
 * @Description  :
 * @FilePath     : /vue-project/src/w-router/w-router-view.js
 */

export default {
  render(h) {
    // 标记当前router-view的深度
    this.$vnode.data.routerView = true;

    let depth = 0;
    let parent = this.$parent;

    while (parent) {
      const vnodeData = parent.$vnode && parent.$vnode.data;
      if (vnodeData) {
        if (vnodeData.routerView) {
          // 说明当前parent是一个router-view
          depth++;
        }
      }

      parent = parent.$parent;
    }

    // 获取path对应的component
    // const { routeMap, current } = this.$router;
    // console.log(routeMap, current);

    // const component = routeMap[current].component || null;
    let component = null;
    const route = this.$router.matched[depth];
    if (route) {
      component = route.component;
    }

    return h(component);
  },
};
