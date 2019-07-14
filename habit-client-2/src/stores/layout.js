// import Vue from 'vue'
// import Vuex from 'vuex'
// import { authService } from '@/services/Auth'
// import { router } from '@/routers/router'

export const layout = {
  state: {
    iconMenu: {
      active: false
    }
  },
  getters: {
    userIconMenuVisibility: (state) => {
      return state.iconMenu.active
    }
  },
  mutations: {
    userIconMenuVisibilityFalse: (state) => {
      state.iconMenu.active = false
    },
    userIiconMenuVisibilityTrue: (state) => {
      state.iconMenu.active = true
    }
  },
  actions: {
    UserIconMenuVisibilityFalse ({ dispatch, commit }) {
      commit('userIconMenuVisibilityFalse')
    },
    UserIconMenuVisibilityTrue ({ dispatch, commit }) {
      commit('userIconMenuVisibilityTrue')
    }
  }
}
// import Vuex from 'vuex'
// import { authService } from '@/services/Auth'
// import { router } from '@/routers/router'

// export const layout = {
//   state: {
//   },
//   getters: {
//
//   },
//   mutations: {
//   },
//   actions: {
//
//   }
// }
