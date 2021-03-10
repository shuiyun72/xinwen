import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@styles/index.js"
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'

import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


import _ from 'lodash'
Vue.prototype._ = _

Vue.use(vueSwiper)
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
