<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 16:24:56
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-19 11:54:35
 * @Description  : 
 * @FilePath     : /project-vue/src/components/form/index.vue
-->
<template>
  <div>
    <!-- <element-test /> -->
    <w-form :model="model" :rules="rules" ref="loginForm">
      <w-form-item label="账号" prop="username">
        <w-input v-model="model.username" placeholder="请输入用户账号" />
      </w-form-item>
      <w-form-item label="密码" prop="password">
        <w-input
          v-model="model.password"
          placeholder="请输入用户密码"
          type="password"
        />
      </w-form-item>
      <w-form-item>
        <button @click="login">登录</button>
      </w-form-item>
    </w-form>
  </div>
</template>

<script>
export default {
  name: "form-index",
  components: {
    // ElementTest: (resolve) => require(["./ElementText"], resolve),
    WInput: (resolve) => require(["./WInput"], resolve),
    WFormItem: (resolve) => require(["./WFormItem"], resolve),
    WForm: (resolve) => require(["./WForm"], resolve),
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
        if (isValid) {
          console.log("提交登录");
        } else {
          console.log("登录失败");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
