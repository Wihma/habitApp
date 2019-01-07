import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/views/old/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '@/views/oAccess/start.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/oAccess/login.vue')
    },
    {
      path: '/habit',
      name: 'habit',
      component: () => import(/* webpackChunkName: "about" */ '@/views/habit/habit.vue')
    },
    {
      path: '/habitlist',
      name: 'habitlist',
      component: () => import(/* webpackChunkName: "about" */ '@/views/habit/HabitList.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/old/About.vue')
    }
  ]
})
