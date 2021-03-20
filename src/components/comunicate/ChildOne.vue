<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 14:54:43
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-18 16:18:45
 * @Description  : 
 * @FilePath     : /project-vue/src/components/comunicate/ChildOne.vue
-->
<template>
  <div>
    <h1>one</h1>
    <p>{{ $attrs.msg }}</p>
    <grand-son v-bind="$attrs" v-on="$listeners" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "child-one",
  components: {
    GrandSon: (resolve) =>
      require(["@/components/comunicate/GrandSon"], resolve),
  },
};
</script>

<style lang="scss" scoped></style>
