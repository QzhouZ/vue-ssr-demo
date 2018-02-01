<template>
  <div id="app">
    <ul class="menu">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/list">科室列表</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>
<style lang="less" scoped>
  .menu {
    display: flex;
    margin: 30px;
    li {
      margin-right: 20px;
      padding: 3px 6px;
      border-radius: 6px;
      border: 1px solid #eee;
      a {
        display: block;
      }
    }
  }
</style>
