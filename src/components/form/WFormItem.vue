<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 17:02:47
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 10:54:19
 * @Description  : 
 * @FilePath     : /project-vue/src/components/form/WFormItem.vue
-->
<template>
  <div class="form-item-container">
    <!-- label -->
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
      <!-- 错误信息 -->
      <p class="error" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import Validator from "async-validator";
export default {
  name: "w-form-item",
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: String,
  },
  data() {
    return {
      error: "",
    };
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 校验规则
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];

      // 创建一个校验器实例
      const schema = new Validator({ [this.prop]: rules });
      // 校验,返回promise
      return schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.form-item-container {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.form-item-container > label {
  min-width: 100px;
}
</style>
