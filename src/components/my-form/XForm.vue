<!--
 * @Author       : wyatt
 * @Date         : 2021-03-19 10:58:42
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:28:40
 * @Description  : 
 * @FilePath     : /project-vue/src/components/my-form/XForm.vue
-->
<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "x-form",
  componentName: "XForm",
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
  created() {
    // this.fields = [];
    // this.$on("wx.form.addField"),
    //   (item) => {
    //     this.fields.push(item);
    //   };
  },
  methods: {
    validate(cb) {
      // 检查所有的表单项目
      // 所有表单都要通过
      // 获得一个promise数组
      // const tasks = this.$children
      //   .filter((item) => item.prop) // 必须拥有prop属性的FormItem留下
      //   .map((item) => item.validate());
      const tasks = this.fields.map((item) => item.validate());
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    },
  },
};
</script>

<style lang="scss" scoped></style>
