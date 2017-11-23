/**
 * Import your routes from different modules here. Eg:
 *
 * import authRoutes from auth
 */
import welcome from '../view/welcome.vue'
import vueView from '../view/vue.vue'
import vuetifyView from '../view/vuetify.vue'
import brunch from '../view/brunch.vue'
import settings from '../view/settings.vue'
import error from '../view/error.vue'

let routes = [
  { path: '/',         name: 'welcome', component: welcome},
  { path: '/vue',      name: 'vue',     component: vueView},
  { path: '/vuetify',  name: 'vuetify', component: vuetifyView},
  { path: '/brunch',   name: 'brunch',  component: brunch},
  { path: '/settings', name: 'settings',component: settings},
  { path: '*',         name: 'error',   component: error }
]

/**
 * Add your sub-routes here. One way to do so is:
 *
 * routes = [...routes, ...authRoutes]
 */

export default routes
