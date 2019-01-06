import ApiService from '../services/api.service'
export default {
  namespaced: true,
  state: {
    userData: null
  },
  actions: {
    fetchUserData(context) {
      ApiService.get('api/auth/me').then(res => {
        context.commit('setUserData', res.data)
      })
    }
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data
    }
  },
  getters: {
    getFullName(state) {
      if (state.userData !== null) {
        return state.userData.name
      }
      return 'Dein Name'
    }
  }
}
