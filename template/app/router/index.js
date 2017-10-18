/**
 * Import your routes from different modules here. Eg:
 *
 * import authRoutes from auth
**/
// import Vue from 'vue' // Comment import for not have vue.js in vendor.js
import Router from 'vue-router'
import error from '../components/error.vue'
import hello from '../components/Hello.vue'

let routes = [
  {
    path: '/',
    name: 'hello',
    component: hello
  },
  {
    path: '*',
    component: error,
    name: 'error'

  }
]

/**
 * Add your sub-routes here. One way to do so is:
 *
 * routes = [...routes, ...authRoutes]
 */
Vue.use(Router)

export default routes
export function createRouter () {
  const router = new Router({
    base: __dirname,
    mode: 'history',
    mode: 'history',
    saveScrollPosition: true,
    routes
})}
