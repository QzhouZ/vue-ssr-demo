import Vue from 'vue'
import Vuex from 'vuex';

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'


Vue.use(Vuex);


// function fetchItem(id) {
//     return new Promise(function (resolve, reject) {
//         resolve('bar ajax 返回数据');
//     });
// }

export function createStore () {
    return new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    })
}