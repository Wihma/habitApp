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
    products: [
      {name:"Banana skin", price:20},
      {name:"Shiny Star", price:40},
      {name:"Green Shells", price:60},
      {name:"Red Shells", price:80}
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**', //Sales sign
          price: product.price * 0.5
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -=  payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function(){
        context.commit('reducePrice', payload);
      }, 2000);
    }
  }
})
