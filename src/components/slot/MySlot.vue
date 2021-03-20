<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 16:12:47
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-18 16:16:53
 * @Description  :  插槽组建
 * @FilePath     : /project-vue/src/components/slot/MySlot.vue
-->
<template>
  <div>
    <slot name="default"></slot>
    <slot name="content"></slot>
    <slot name="message" :message="message"></slot>
  </div>
</template>

<script>
export default {
  name: "my-slot",
  data() {
    return {
      message: "这里是子组建插槽信息",
    };
  },
};
</script>

<style lang="scss" scoped></style>
