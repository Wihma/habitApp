import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { auth } from './auth'
import { habits } from './habits'

export default new Vuex.Store({
  modules: {
    auth,
    habits
  },
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})
