import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Services from '../views/Services.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
