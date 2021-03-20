<!--
 * @Author       : wyatt
 * @Date         : 2021-03-19 10:17:54
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 14:54:49
 * @Description  : input
 * @FilePath     : /project-vue/src/components/my-form/XInput.vue
-->
<template>
  <div>
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs" />
    <!-- $attrs 继承所有的父组件属性 -->
  </div>
</template>

<script>
import emitter from "@/mixins/emitter";
export default {
  inheritAttrs: false, //关闭默认继承
  mixins: [emitter],
  name: "x-input",
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
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 触犯一下校验
      // this.$parent.$emit("validate");
      this.dispatch("XFormItem", "validate");
    },
  },
};
</script>

<style lang="scss" scoped></style>
