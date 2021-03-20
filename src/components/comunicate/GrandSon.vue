<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 15:14:01
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-18 15:37:20
 * @Description  : 
 * @FilePath     : /project-vue/src/components/GrandSon.vue
-->
<template>
  <div>
    <h1 @click="someEvent">grandson</h1>
    <p>{{ msg }}</p>
    <p>{{ name }}</p>
    <h3>{{ customs }}</h3>
  </div>
</template>

<script>
export default {
  name: "grand-son",
  props: {
    msg: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  // inject: ["users"],
  inject: {
    customs: {
      from: "users",
      default: "1111",
    },
  },
  methods: {
    someEvent() {
      this.$emit("some-event", "msg from grandson!!!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
