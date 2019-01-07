import ApiService from '../services/api.service'

export default {
  namespaced: true,
  state: {
    team: [null]
  },
  actions: {
    fetchAllPlayers(context, userId) {
      const data = {
        url: '/players/',
        method: 'GET',
        params: {
          userId: userId
        }
      }
      ApiService.customRequest(data).then(res => {
        context.commit('setTeamList', res.data)
      })
    },
    createPlayer(context, inputModel) {
      ApiService.post('/players/', inputModel).then(
        context.commit('setTeamList')
      )
    },
    deletePlayer(context, playerId) {
      ApiService.delete('/players/' + playerId).then(
        context.commit('setTeamList')
      )
    }
  },
  mutations: {
    setTeamList(state, list) {
      state.team = list
    }
  },
  getters: {
    teamArray(state) {
      return state.team
    }
  }
}
