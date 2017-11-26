const initState = {
  titleApp: 'Hello from Vuetify Material Component Framework ...',
  miniNav: false
}

const mutations = {
  SET_TITLE(state, title) {
    state.titleApp = title
  },
  SET_MINI(state, mini) {
    state.miniNav = mini
  }
}

const getters = {
  miniNav(state) { return state.miniNav },
  titleApp(state) { return state.titleApp }
}

const actions = {
  setMini(store, mini) {
    store.commit('SET_MINI', mini === true)
  },
  setTitle(store, title) {
    store.commit('SET_TITLE', title)
  }
}

export const state = {
  state: initState,
  mutations: mutations,
  getters: getters,
  actions: actions
}

import { mapActions, mapGetters } from 'vuex'

export const mixins = {
  computed: {
    ...mapGetters(['titleApp']),
    miniNav: {
        get: function() { return this.$store.state.settings.miniNav },
        set: function(val) { this.$store.dispatch('setMini', val) }
      },
        
  },
  methods: mapActions(['setMini', 'setTitle'])
}
