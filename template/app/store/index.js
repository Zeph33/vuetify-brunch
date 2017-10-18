//import Vue from 'vue' 
import Vuex from 'vuex' // Comment import for not have vue.js in vendor.js

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {},

    actions: {},

    mutations: {},

    getters: {}
  })
}