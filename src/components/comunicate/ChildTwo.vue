<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 14:55:22
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-18 16:16:34
 * @Description  : 
 * @FilePath     : /project-vue/src/components/ChildTwo.vue
-->
<template>
  <div>
    <h1>Two</h1>
  </div>
</template>

<script>
export default {
  name: "child-two",
  data() {
    return {
      message: "这里是子组建插槽信息",
    };
  },
};
</script>

<style lang="scss" scoped></style>
