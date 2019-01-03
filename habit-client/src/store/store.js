import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module'
import { authentication } from './authentication'
// import { users } from './users'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    alert,
    authentication
    // users
  },
  state: {

  },
  actions: {

  },
  mutations: {

  }
})
