import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'
import store from './store'
import { TokenService } from './services/storage.service'
Vue.use(VueRouter)

// configure router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, // short for routes: routes
  linkExactActiveClass: 'active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken()
  console.log('loggedIn: ' + !!TokenService.getToken())
  if (loggedIn === true) {
    store.commit('setAsLoggedIn')
  } else {
    store.commit('setAsLoggedOut')
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
