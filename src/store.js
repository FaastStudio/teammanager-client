import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import Players from './store/Players'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      loggedIn: false
    },
    user: {
      userId: null
    },
    app: {
      isLightMode: false
    }
  },
  mutations: {
    setAsLoggedIn(state) {
      state.auth.loggedIn = true
    },
    setAsLoggedOut(state) {
      state.auth.loggedIn = false
    },
    setUserId(state, userId) {
      state.user.userId = userId
      localStorage.setItem('userId', userId)
    },
    setUserData(state, data) {
      state.user = data
    },
    setTeamList(state, list) {
      state.teamList = list
    }
  },
  actions: {},
  modules: {
    Players
  }
})
