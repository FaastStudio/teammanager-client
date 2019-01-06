import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import BlackDashboard from './plugins/blackDashboard'
// import i18n from './i18n'
import ApiService from './services/api.service'
import './registerServiceWorker'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

Vue.use(BlackDashboard)

Vue.config.productionTip = false

// Set BaseURL of the API
ApiService.init(process.env.API_URL || 'http://localhost:3000')

new Vue({
  router,
  store,
  axios,
  // i18n,
  render: h => h(App)
}).$mount('#app')
