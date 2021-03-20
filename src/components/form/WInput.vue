<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 16:27:37
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 11:14:13
 * @Description  : 
 * @FilePath     : /project-vue/src/components/form/WInput.vue
-->
<template>
  <div>
    <!-- 自定义数据双向绑定 :value,@input -->
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 关闭默认继承
  name: "w-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 触犯一下校验
      this.$parent.$emit("validate");
    },
  },
};
</script>

<style lang="scss" scoped></style>
