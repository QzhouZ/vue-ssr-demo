<template>
    <div>
      <page-header :title="'科室列表'"></page-header>
      <section class="g-wrap">
        <div class="gp-dept">
          <ul class="dept-list">
              <li v-for="item of deptData" :key="item.stdDeptId">
                  <i class="icon" :style="{'background-image': 'url(' + item.configImg + ')'}"></i>
                  <h3>{{ item.stdDeptName }}</h3>
              </li>
          </ul>
        </div>
      </section>
    </div>
</template>
<script>
import pageHeader from 'components/header.vue'
export default {
  asyncData ({ store, route }) {
    return store.dispatch('fetchItem', 1)
  },
  computed: {
    deptData () {
      return this.$store.getters.deptData
    }
  },
  tdk () {
    return {
      title: '科室列表'
    }
  },
  components: {
    pageHeader
  }
}
</script>
<style lang="less" scoped>
.gp-dept {
  margin: 20px;
}
.dept-list {
  overflow: hidden;
  background: #fff;
  width: 360px;
  border-left: 1px solid #ebecf1;
  border-top: 1px solid #ebecf1;
  li {
    float: left;
    box-sizing: border-box;
    width: 90px;
    border-right: 1px solid #ebecf1;
    border-bottom: 1px solid #ebecf1;
    .icon {
      display: block;
      margin: 10px auto;
      width: 34px;
      height: 34px;
      background-size: 100% 100%;
    }

    h3 {
      padding: 0 10px 10px 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      line-height: 2;
      font-size: 0.59733333rem;
      color: #83889a;
    }
  }
}
</style>