import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// const IndexView = () => import('../views/index/index.vue')

const List = () => import('../views/list/index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [{
      name: 'Home',
      path: '/',
      component: () => import('../views/index/index.vue')
    }, {
      name: 'List',
      path: '/list',
      component: List
    }]
  })
}
