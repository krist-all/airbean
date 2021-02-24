import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Coffee from '../views/Coffee.vue'
import Profile from '../views/Profile.vue'
import Status from '../views/Status.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/coffee',
    name: 'Coffee',
    component: Coffee
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
