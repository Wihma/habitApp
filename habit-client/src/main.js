import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import { router } from '@/routers/router'
import { store } from './store/store'

import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueCookie,
  render: h => h(App)
}).$mount('#app')
