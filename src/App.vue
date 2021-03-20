<!--
 * @Author       : wyatt
 * @Date         : 2021-03-18 14:28:21
 * @LastEditors  : wyatt
 * @LastEditTime : 2021-03-20 10:59:53
 * @Description  : 
 * @FilePath     : /vue-project/src/App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <p @click="$store.commit('add')">counter:{{ $store.state.counter }}</p>
    <p @click="$store.dispatch('add')">
      async counter: {{ $store.state.counter }}
    </p>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
