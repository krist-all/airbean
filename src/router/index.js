import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Coffee from '../views/Coffee.vue'
import Profile from '../views/Profile.vue'
import Status from '../views/Status.vue'
import Modal2 from '../views/Modal2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path:':modal'
    }]
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
  },
  {
<<<<<<< Updated upstream
    path: '/modal2',
    name: 'modal2',
    component: modal2
  }
=======
    path: '/modal',
    name: 'Modal',
    component: Modal2
  },
>>>>>>> Stashed changes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
