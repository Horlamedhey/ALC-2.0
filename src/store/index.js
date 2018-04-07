import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example
  },
  state: {
    alert: false
  },
  mutations: {
    alert (state) {
      state.alert = true
    },
    negateAlert (state) {
      state.alert = false
    }
  }
})

export default store
