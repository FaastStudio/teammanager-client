import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import BlackDashboard from './plugins/blackDashboard'
// import i18n from './i18n'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import './registerServiceWorker'

Vue.use(BlackDashboard)

Vue.config.productionTip = false

// Set BaseURL of the API
// ApiService.init(String(process.env.API_URL))
ApiService.init('https://teammanager-server.herokuapp.com/')
console.log('api_url: ' + process.env.API_URL)
console.log('ENV test: ' + process.env.test)
console.log('env: ' + process.env)

// if token exists set header
// if token exists set LoggedIn status in store
if (TokenService.getToken()) {
  ApiService.setHeader()
  store.commit('setAsLoggedIn')
} else {
  store.commit('setAsLoggedOut')
}

new Vue({
  router,
  store,
  axios,
  // i18n,
  render: h => h(App)
}).$mount('#app')
