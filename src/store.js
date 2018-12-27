import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false
    }
  },
  mutations: {
    setAsLoggedIn (state) {
      state.auth.loggedIn = true
    },
    setAsLoggedOut (state) {
      state.auth.loggedIn = false
    }
  },
  actions: {

  }
})
