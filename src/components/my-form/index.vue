<!--
 * @Author       : wyatt
 * @Date         : 2021-03-19 10:17:09
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 14:02:43
 * @Description  :  表单
 * @FilePath     : /project-vue/src/components/my-form/index.vue
-->
<template>
  <div>
    <x-form :model="model" :rules="rules" ref="loginForm">
      <x-form-item label="用户名：" prop="username">
        <x-input
          type="text"
          v-model="model.username"
          placeholder="请输入用户名"
        ></x-input>
      </x-form-item>
      <x-form-item label="密码：" prop="password">
        <x-input
          type="password"
          v-model="model.password"
          placeholder="请输入密码"
        ></x-input>
      </x-form-item>
      <x-form-item>
        <button @click="login">登录</button>
      </x-form-item>
    </x-form>
  </div>
</template>

<script>
import XInput from "./XInput";
import XFormItem from "./XFormItem";
import XForm from "./XForm";
import create from "@/utils/create";
import Notice from "@/components/Notice";
export default {
  name: "my-form",
  components: {
    XInput,
    XFormItem,
    XForm,
  },
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((isValid) => {
        const notice = create(Notice, {
          title: "登录提示语",
          message: isValid ? "提交登录!" : "校验失败!",
          duration: 1000,
        });
        notice.show();
        // if (isValid) {
        //   console.log("提交登录");
        // } else {
        //   console.log("登录失败");
        // }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
