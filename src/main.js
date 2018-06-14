import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import './style/common.css'
import router from './router'
import axios from './axios/index'
import skyLoading from '@/directive/sky-loading'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.directive('skyLoading', skyLoading)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})