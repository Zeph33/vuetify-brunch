// import Vue from 'vue' // Comment import for not have vue.js in vendor.js
// import vuetify from 'vuetify' // Comment import for not have vuetify.js in vendor.js

import App from './App.vue'

import { createStore } from 'store/index'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
// Vue.use(vuetify) // Comment vuetify.js not in vendor.js

const router = createRouter()
const store = createStore()

export function createApp (ssrContext) {
    // create store and router instances
    const store = createStore()
    const router = createRouter()
  
    // sync the router with the vuex store.
    // this registers `store.state.route`
    sync(store, router)
  
    // create the app instance.
    // here we inject the router, store and ssr context to all child components,
    // making them available everywhere as `this.$router` and `this.$store`.
    const app = new Vue({
      router,
      store,
      ssrContext,
      render: h => h(App)
    })
  
    // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.
    return { app, router, store }
  }