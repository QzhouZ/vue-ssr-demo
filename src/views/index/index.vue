<template>
  <div>
    <page-header :title="'首页'"></page-header>
    <section class="g-wrap">
      <ul class="menu">
      <li><router-link to="/list">科室列表</router-link></li>
    </ul>
    </section>
  </div>
</template>
<script>
import pageHeader from 'components/header.vue'
export default {
  tdk () {
    return {
      title: '首页'
    }
  },
  components: {
    pageHeader
  }
}
</script>

<style lang="less" scoped>
.menu {
  margin: 30px;
}
</style>

