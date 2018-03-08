export default {
  // 列表数据
  SET_LIST_DATA (state, res) {
    state.pages.list.deptData = res.data
  }
}
