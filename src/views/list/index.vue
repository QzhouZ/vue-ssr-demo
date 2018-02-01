<template>
    <div class="gp-dept">
        <ul class="menu">
            <li><router-link to="/">首页</router-link></li>
        </ul>
        <ul class="dept-list">
            <li v-for="item of deptData" :key="item.stdDeptId">
                <i class="icon" :style="{'background-image': 'url(' + item.configImg + ')'}"></i>
                <h3>{{ item.stdDeptName }}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  computed: {
    deptData() {
      console.log(this.$store.getters.deptData);
      return this.$store.getters.deptData;
    }
  },
  asyncData({ store, route }) {
    return store.dispatch("fetchItem", 1);
  }
};
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

