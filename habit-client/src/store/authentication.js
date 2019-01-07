import { userService } from '@/services/Users'
// import { authService } from '@/services/Auth'
import { router } from '@/routers/router'

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null }

export const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    register ({ commit, dispatch }, { username, email, password }) {
      // console.log('store authenticate register')

      userService.registerUser(
          {
            'username': username,
            'email': email,
            'password': password
          })
        .then(function(response) {
            console.log({'response': response})
        }
          // dispatch('uthentication/login', { username, email, password })
      )
      // make a request to backens through the user service and create a new user
      // if successful commit and login user
    },
    login ({ dispatch, commit }, { email, password }) {

      commit('loginRequest', { email })
      userService.login(email, password)
        .then(
          user => {
            commit('loginSuccess', user)

            console.log(user);

            localStorage.setItem('userjwt', user.token);
            router.push('/habitlist')
          },
          error => {
            commit('loginFailure', error)
            // console.log(error)
            dispatch('alert/error', error, { root: true })
          }
        )
    },
    logout ({ commit }) {
      userService.logout()
      commit('logout')
    }
  },
  getters: {
    isLoggedIn: state => {
      // not 'this.state' because state is passed in as a parameter
      return 'what is this?'//state
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    loginRequest (state, user) {
      state.status = { loggingIn: true }
      state.user = user
    },
    loginSuccess (state, user) {
      console.log({'mutation': 'loginSuccess', user: user })
      state.status = { loggedIn: true }
      state.user = user
    },
    loginFailure (state) {
      state.status = {}
      state.user = null
    },
    logout (state) {
      state.status = {}
      state.user = null
    }
  }
}
