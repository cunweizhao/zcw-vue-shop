import Vue from 'vue'
import router from "@/router"
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

//根据前端的跨域方式做调整
axios.defaults.baseURL='/api';//接口代理
axios.defaults.timeout =8000;
//接口返回错误拦截，
axios.interceptors.response.use(function(response){
  let res = response.data;
  //res中的status 是与后台协商的字段，也可以叫code,这是定义的
  // eslint-disable-next-line no-empty
  if(res.status==0){
    return res.data;
    // eslint-disable-next-line no-empty
  }else if(res.status== 10){
    window.location.href ='/#/login';//hash路由，
  }else{
    alert(res.msg);
  }
});
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  //初始化路由
  router,
  render: h => h(App),
}).$mount('#app')
