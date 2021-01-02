import Vue from 'vue'
import router from "@/router"
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
//import env from './env'
import App from './App.vue'

//定义mock开关
const mock = true;
if(mock){
  require('./mock/api')
}
//根据前端的跨域方式做调整
//axios.defaults.baseURL='/api';//接口代理，跨域不能直接写/api，需要写全IP地址，https://www.baidu.com/api/
axios.defaults.timeout =8000;
//根据环境变量请求不同的请求地址
//axios.defaults.baseURL =env.baseURL
//接口返回错误拦截，
axios.interceptors.response.use(function(response){
  let res = response.data;
  //res中的status 是与后台协商的字段，也可以叫code,这是定义的
  // eslint-disable-next-line no-empty
  if(res.status==0){
    return res.data;
    // eslint-disable-next-line no-empty
  }else if(res.status== 10){
    if( path !='#/index'){
      window.location.href ='/#/login';//hash路由，
    }
  }else{
    alert(res.msg);
  }
});
Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad,{
  loading: ''
})

Vue.config.productionTip = false

new Vue({
  //初始化路由
  router,
  render: h => h(App),
}).$mount('#app')
