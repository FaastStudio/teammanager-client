import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import firebase from 'firebase/app'
import 'firebase/auth'
import store from './store'

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
  // check LogginStatus
  const loggedIn = firebase.auth().currentUser
  if (!!loggedIn && (!store.state.currentUser || !store.state.userProfile)) {
    store.commit('setCurrentUser', loggedIn)
    store.dispatch('fetchUserProfile')
  }
  if (!isPublic && !loggedIn) {
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
