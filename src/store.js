import Vue from 'vue'
import Vuex from 'vuex'

// import modules
import Players from './store/Players'
import Auth from './store/Auth'
import User from './store/User'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      isLightMode: false
    }
  },
  actions: {},
  modules: {
    Auth,
    User,
    Players
  }
})
