import { fetchDeptList } from '@/api'

export default {
  fetchItem({ commit }, pageIndex = 1) {
    return fetchDeptList({
      pageIndex: pageIndex
    }).then(res => {
      commit('SET_LIST_DATA', res)
    })
  }
}