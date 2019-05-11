import Vue from 'vue'
import Router from 'vue-router'

import store from '@/stores/store' // your vuex store
//import Home from '@/views/old/Home.vue'

const ifnotauthenticated = (to, from, next) => {
  if (!store.getters.isloggedin) {
    if(localStorage.getItem('jwt')) {
      store.commit('jwtActive');
      store.commit('setCurrentuserId');
    };
    store.commit('setCurrentuserId');
    next()
    return
  }
  next('/login')
}

const ifAuthenticated = (to, from, next) => {
  console.log('ifAuthenticated');
  if (localStorage.getItem('jwt')) {
    console.log('found jwt');
    store.commit('jwtActive');
    store.commit('setCurrentuserId');
    next('/HabitList')
    return
  }
  next('/login')
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "about" */ '@/views/oAccess/start.vue'),
      beforeEnter: ifAuthenticated,
      meta: {
        middleware: []
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/oAccess/login.vue'),
      //beforeEnter: ifAuthenticated,
      meta: {
        middleware: []
      }
    },
    {
      path: '/habit/:id',
      name: 'Habit',
      component: () => import(/* webpackChunkName: "about" */ '@/views/habit/habit.vue'),
      beforeEnter: ifnotauthenticated,
      meta: {
        middleware: []
      }
    },
    {
      path: '/habitlist',
      name: 'HabitList',
      component: () => import(/* webpackChunkName: "about" */ '@/views/habit/HabitList.vue'),
      beforeEnter: ifnotauthenticated,
      meta: {
        middleware: []
      }
    },
    {
      path: '/todayshabits',
      name: 'TodaysHabits',
      component: () => import(/* webpackChunkName: "about" */ '@/views/habit/TodaysHabits.vue'),
      beforeEnter: ifnotauthenticated,
      meta: {
        middleware: []
      }
    },
    {
      path: '/archivedhabits',
      name: 'ArchivedHabitList',
      component: () => import(/* webpackChunkName: "about" */ '@/views/habit/ArchivedHabitList.vue'),
      beforeEnter: ifnotauthenticated,
      meta: {
        middleware: []
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/old/About.vue')
    },
    {
      path: '/user/home',
      name: 'Start',
      component: () => import(/* webpackChunkName: "about" */ '@/views/user/home.vue'),
      meta: {
        middleware: []
      }
    },
    {
      path: '/user/settings',
      name: 'UserSettings',
      component: () => import(/* webpackChunkName: "about" */ '@/views/user/settings.vue'),
      meta: {
        middleware: []
      }
    },
  ]
});

router.beforeEach((to, from, next) => {

  // console.log(to)
  // if (!localStorage.getItem('jwt') && to.name !== 'name' ) {
  //   return router.push({ name: 'login' });
  // }

  return next();
  //  if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if (USER DOES NOT EXIST IN LOCAL STORAGE) {
  //     next({
  //       path: '/login',
  //       query: {
  //         redirect: to.fullPath,
  //       },
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
})

 export default router;
