import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import Players from './store/Players'

const fb = require('./db/firebaseConfig.js')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      isLightMode: false
    },
    // User
    currentUser: null,
    userProfile: {},
    // Settings
    locale: 'en'
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      fb.usersCollection
        .doc(state.currentUser.uid)
        .get()
        .then(res => {
          console.log('fetchUserProfile', res.data())
          commit('setUserProfile', res.data())
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
    Players
  }
})
