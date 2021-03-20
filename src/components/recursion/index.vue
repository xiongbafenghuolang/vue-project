<!--
 * @Author       : wyatt
 * @Date         : 2020-08-03 22:31:42
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:32:32
 * @Description  : 
 * @FilePath     : /project-vue/src/components/recursion/index.vue
-->
<template>
  <tree :data="treeData"></tree>
</template>

<script>
import Tree from "@/components/recursion/Tree.vue";
export default {
  data() {
    return {
      treeData: [
        {
          title: "Web全栈架构师",
          children: [
            {
              title: "Java架构师",
            },
            {
              title: "JS高级",
              children: [
                {
                  title: "ES6",
                },
                {
                  title: "动效",
                },
              ],
            },
            {
              title: "Web全栈",
              children: [
                {
                  title: "Vue训练营",
                  expand: true,
                  children: [
                    {
                      title: "组件化",
                    },
                    {
                      title: "源码",
                    },
                    {
                      title: "docker部署",
                    },
                  ],
                },
                {
                  title: "React",
                  children: [
                    {
                      title: "JSX",
                    },
                    {
                      title: "虚拟DOM",
                    },
                  ],
                },
                {
                  title: "Node",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    Tree,
  },
};
</script>
