import ApiService from '../services/api.service'
import { TokenService } from '../services/storage.service'
import router from '../router'

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    token: null
  },
  actions: {
    async login(context, cred) {
      // Login User with Email and Password
      // If server res.auth == true ->
      // check if user wants to keep signed in
      //    True: Store access_token and userId then set AUTHState
      //    False: only set AUTHState
      // AUTHState:
      //    set Auth.isAuthenticated && Auth.token
      //    Set User.userData
      //    push to Dashboard
      // if res.auth == false -> notificationAction
      // @returns access_token to Auth Module & User Data to User Module
      console.log(cred)
      // Config Request
      const request = {
        method: 'post',
        url: '/api/auth/login',
        data: {
          email: cred.email,
          password: cred.password
        }
      }

      await ApiService.customRequest(request).then(res => {
        console.log(res)
        // If res AUTH == True
        if (res.data.auth) {
          // If RememberMe -> store token && userId to localStorage
          if (cred.rememberMe) {
            TokenService.saveToken(res.data.token)
            localStorage.setItem('userId', res.data.userId)
          }
          context.dispatch('storeData', res)
        } else {
          // TODO NOTIFICATION ACTION
          alert('Falsche Email/Passwort')
        }
      })
    },
    async register(context, cred) {
      const request = {
        method: 'post',
        url: '/api/auth/register',
        data: {
          name: cred.name,
          email: cred.email,
          password: cred.password
        }
      }
      await ApiService.customRequest(request).then(res => {
        console.log(res)
        // If res AUTH == True
        if (res.data.auth) {
          context.dispatch('storeData', res)
        } else {
          // TODO NOTIFICATION ACTION
          alert('Falsche Email/Passwort')
        }
      })
    },
    // Store data to state and push to dashboard
    storeData(context, res) {
      // Store data to state
      context.commit('setAuthToken', res.data.token)
      context.commit('setAsAuthenticated', res.data.auth)
      context.commit('User/setUserData', res.data, { root: true })
      // Set Header for future API Calls
      ApiService.setHeader()
      // Push to dashboard
      router.push('/dashboard')
    },
    logout(context) {
      context.commit('logout')
      alert('Erfolgreich abgemeldet!')
      router.push('/login')
    }
  },
  mutations: {
    setAuthToken(state, token) {
      state.token = token
    },
    setAsAuthenticated(state, status) {
      state.isAuthenticated = status
    },
    logout(state) {
      state.isAuthenticated = false
      state.token = null
      localStorage.clear()
    }
  },
  getters: {
    getAuthState(state) {
      return state.isAuthenticated
    },
    getAuthToken(state) {
      return state.token
    }
  }
}
