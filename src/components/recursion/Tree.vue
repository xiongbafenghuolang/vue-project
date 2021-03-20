<!--
 * @Author       : wyatt
 * @Date         : 2020-08-03 22:31:42
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:31:42
 * @Description  : 
 * @FilePath     : /project-vue/src/components/recursion/Tree.vue
-->
<template>
  <div class="wx-tree">
    <tree-node v-for="item in data" :key="item.title" :model="item"></tree-node>
  </div>
</template>

<script>
import TreeNode from "@/components/recursion/TreeNode.vue";
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    TreeNode,
  },
};
</script>

<style scoped>
.kkb-tree {
  text-align: left;
}
</style>
