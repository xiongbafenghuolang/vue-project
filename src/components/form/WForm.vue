<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 17:35:07
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 09:57:34
 * @Description  : 
 * @FilePath     : /project-vue/src/components/form/Wform.vue
-->
<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "w-form",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      require: true,
    },
    rules: Object,
  },
  methods: {
    validate(cb) {
      // 检查所有的表单项目
      // 所有表单都要通过
      // 获得一个promise数组
      const tasks = this.$children
        .filter((item) => item.prop) // 必须拥有prop属性的FormItem留下
        .map((item) => item.validate());

      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
