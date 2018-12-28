import SideBar from '@/components/SidebarPlugin'
import Notify from '@/components/NotificationPlugin'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
// import 'es6-promise/auto'

// css assets
import '@/assets/sass/black-dashboard.scss'
import '@/assets/css/nucleo-icons.css'

export default {
  install(Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
    Vue.use(Notify)
  }
}
