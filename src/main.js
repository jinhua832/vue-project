import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from 'store'
import './assets/styles/icon/iconfont.css'
import 'normalize.css'
import '@/assets/css/base.css'
import api from './api'
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
