import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work/work.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/message/message.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
