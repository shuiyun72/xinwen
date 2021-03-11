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
  },
  {
    path: '/dangjiangongzuo',
    name: 'dangjiangongzuo',
    component: () => import('../views/dangjiangongzuo/dangjiangongzuo.vue')
  },
  {
    path: '/wenjiantongzhi',
    name: 'wenjiantongzhi',
    component: () => import('../views/wenjiantongzhi/wenjiantongzhi.vue')
  },
  {
    path: '/jiaoyupeixun',
    name: 'jiaoyupeixun',
    component: () => import('../views/jiaoyupeixun/jiaoyupeixun.vue')
  },
  {
    path: '/hangyexinxi',
    name: 'hangyexinxi',
    component: () => import('../views/hangyexinxi/hangyexinxi.vue')
  },
  {
    path: '/huangye',
    name: 'huangye',
    component: () => import('../views/huangye/huangye.vue')
  },
  {
    path: '/qiuzhi',
    name: 'qiuzhi',
    component: () => import('../views/qiuzhi/qiuzhi.vue')
  },
  {
    path: '/yingyong',
    name: 'yingyong',
    component: () => import('../views/yingyong/yingyong.vue')
  },
  {
    path: '/huiyuan',
    name: 'huiyuan',
    component: () => import('../views/huiyuan/huiyuan.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
