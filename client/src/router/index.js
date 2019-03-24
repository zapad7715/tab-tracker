import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    }
  ]
})
