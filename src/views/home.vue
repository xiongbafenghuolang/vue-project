<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 14:50:26
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 07:45:55
 * @Description  :  测试页面
 * @FilePath     : /project-vue/src/views/home.vue
-->
<template>
  <div>
    <recursion />
    <child-one msg="This is msg!!!" name="wyatt" @some-event="onSomeEvent">
      123456789
    </child-one>
    <child-two> </child-two>
    <my-slot>
      <template v-slot:default>
        <div>这里是默认插槽数据，哈哈哈哈</div>
      </template>
      <template v-slot:content>
        <div>内容插槽</div>
      </template>
      <!-- 把v-slot的值指定为作⽤域上下⽂对象 -->
      <template v-slot:message="slotProps">
        来⾃⼦组件数据：{{ slotProps.message }}
      </template>
    </my-slot>
    <my-form></my-form>
  </div>
</template>

<script>
export default {
  name: "test",
  provide() {
    let obj = {
      users: "Wyatt How are you?",
    };
    return obj;
  },
  components: {
    ChildOne: (resolve) =>
      require(["@/components/comunicate/ChildOne"], resolve),
    ChildTwo: (resolve) =>
      require(["@/components/comunicate/ChildTwo"], resolve),
    MySlot: (resolve) => require(["@/components/slot/MySlot"], resolve),
    MyForm: (resolve) => require(["@/components/my-form"], resolve),
    Recursion: (resolve) => require(["@/components/recursion"], resolve),
  },
  methods: {
    onSomeEvent(msg) {
      console.log(`communication ${msg}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
