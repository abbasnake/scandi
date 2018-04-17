import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/store'
import Home from '@/views/Home'
import Statistics from '@/views/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    }
  ]
})
