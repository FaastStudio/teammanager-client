import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import store from './store'
import { TokenService } from './services/storage.service'
import ApiService from './services/api.service'
Vue.use(VueRouter)

// configure router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, // short for routes: routes
  linkExactActiveClass: 'active',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  )
  // Check for stored token in local or state

  // check LogginStatus
  const loggedIn =
    !!TokenService.getToken() || store.getters['Auth/getAuthState']
  // pass localStorage to state
  if (!!TokenService.getToken() && !store.getters['Auth/getAuthState']) {
    store.commit('Auth/setAuthToken', TokenService.getToken())
    store.commit('Auth/setAsAuthenticated', true)
    ApiService.setHeader()
    store.dispatch('User/fetchUserData')
  }
  console.log('loggedIn: ' + loggedIn)
  if (!isPublic && !loggedIn) {
    localStorage.removeItem('userId')
    localStorage.removeItem('x-access-token')
    return next({
      path: '/login',
      redirect: '/login'
    })
  }
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }
  next()
})

export default router
