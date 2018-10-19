import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signin from './views/Signin.vue'
import Waitingwroom from './views/Waitiroom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/waitingroom',
      name: 'waitingroom',
      component: Waitingwroom
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('./views/Game.vue')
    },
    {
      path: '/loader',
      name: 'loader',
      component: () => import('./views/Loader.vue')
    }
  ]
})
