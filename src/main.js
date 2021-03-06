import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import './assets/css/reset.css'
import './assets/css/icon.css'


Vue.config.productionTip = false
//添加一个请求拦截器
axios.interceptors.request.use(function(config) {
  //在请求发送之前做一些事
  // console.log('请求数据之前');
  return config;
}, function(error) {
  //当出现请求错误是做一些事
  // return Promise.reject(error);
});

//添加一个返回拦截器
axios.interceptors.response.use(function(response) {
  //对返回的数据进行一些处理
  // console.log('请求数据之后');
  return response;
}, function(error) {
  //对返回的错误进行一些处理
  return Promise.reject(error);
});
// axios.defaults.baseURL = '/src/static/data.json'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})