<template>
  <header class="g-header">
    <span class="header-left" @click="pageBackEvent">
      <i class="back" v-if="showBackBtn"></i>
    </span>
    <span class="header-title">{{ title }}</span>
    <span class="header-right"></span>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '微医'
    }
  },
  data () {
    return {
      showBackBtn: true
    }
  },
  methods: {
    pageBackEvent () {
      history.go(-1)
    }
  },
  mounted () {
    // if (document.referrer !== '') {
    //   this.showBackBtn = true
    // }
  }
}
</script>

<style lang="less" scoped>
.g-header {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  max-width: 640px;
  background: #fff;
  border-bottom: 1px solid #ebecf1;
  height: 44px;
  line-height: 44px;
  .header-left,
  .header-right {
    width: 45px;
  }
  .header-left {
    .back {
      display: block;
      width: 20px;
      height: 20px;
      background: url(/assets/img/back.png);
      background-size: cover;
      margin: 12px;
    }
  }
  .header-title {
    display: block;
    overflow: hidden;
    flex: 1;
    width: 1%;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 20px;
    color: #28354c;
  }
}
</style>
