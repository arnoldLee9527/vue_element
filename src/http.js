import axios from 'axios'
import config from './config'

axios.defaults.baseURL = '' // 设置axios的基础请求路径
axios.defaults.timeout = 2000 // 设置axios的请求时间
// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: config.api
})
instance.interceptors.request.use(function (request) {
  // console.log(config);
  return request
})
instance.interceptors.response.use(function (response) {
  return response
})

export default instance
