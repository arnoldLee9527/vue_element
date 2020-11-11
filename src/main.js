// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:10010/api' // 设置axios的基础请求路径
axios.defaults.timeout = 2000 // 设置axios的请求时间

Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.prototype.$http = axios// 将axios添加到 Vue的原型，这样一切vue实例都可以使用该对象
// Vue.prototype.
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
