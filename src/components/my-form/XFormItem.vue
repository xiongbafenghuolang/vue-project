<!--
 * @Author       : wyatt
 * @Date         : 2021-03-19 10:51:29
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:28:31
 * @Description  : 
 * @FilePath     : /project-vue/src/components/my-form/XFormItem.vue
-->
<template>
  <div class="form-item-container">
    <label v-if="label">{{ label }}</label>
    <div>
      <slot />
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import Validator from "async-validator";
import emitter from "@/mixins/emitter";
export default {
  name: "x-form-item",
  componentName: "XFormItem",
  mixins: [emitter],
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
    // 派发事件通知XForm,新增一个XFormItem实例
    // if (this.prop) {
    //   this.dispatch("XForm", "wx.form.addField", [this]);
    // }
  },
  methods: {
    validate() {
      // 校验规则
      const rules = this.form.rules[this.prop];
      // 当前值
      const value = this.form.model[this.prop];
      const schema = new Validator({ [this.prop]: rules });
      // 校验,返回promise
      return schema.validate({ [this.prop]: value }, (err) => {
        if (err) {
          this.error = err[0].message;
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
