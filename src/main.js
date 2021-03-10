import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@styles/index.js"
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import _ from 'lodash'
Vue.prototype._ = _


Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
