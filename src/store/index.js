import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

// import { fetchItem } from './api'

function fetchItem(id) {
    return new Promise(function (resolve, reject) {
        resolve('bar ajax 返回数据');
    });
}

export function createStore () {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            fetchItem ({ commit }, id) {
                return fetchItem(id).then(item => {
                    commit('setItem', { id, item })
                })
            }
        },
        mutations: {
            setItem (state, {id, item}) {
                Vue.set(state.items, id, item)
            }
        }
    })
}