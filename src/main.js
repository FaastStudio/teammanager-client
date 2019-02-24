import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BlackDashboard from './plugins/blackDashboard'
import i18n from './i18n'
import './registerServiceWorker'

const fb = require('./db/firebaseConfig.js')

Vue.use(BlackDashboard)

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      i18n,
      render: h => h(App)
    }).$mount('#app')
  }
})
