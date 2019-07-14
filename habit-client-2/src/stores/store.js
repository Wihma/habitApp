import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import { auth } from './auth'
import { habits } from './habits'
import { layout } from './layout'
// import { layout } from './layout'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  modules: {
    auth,
    habits,
    // ,layout
    layout
  },
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [vuexLocalStorage.plugin]
})
