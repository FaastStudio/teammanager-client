import Vue from 'vue'
import Vuex from 'vuex'

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
    },
    teamList: []
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
    },
    setUserData(state, data) {
      state.user = data
    },
    setTeamList(state, list) {
      state.teamList = list
    }
  },
  actions: {}
})
