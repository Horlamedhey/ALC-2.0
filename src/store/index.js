import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example
  },
  state: {
  },
  mutations: {
  }
})

export default store
