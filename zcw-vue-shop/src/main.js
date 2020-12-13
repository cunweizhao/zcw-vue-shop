import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
Vue.config.productionTip = false

new Vue({
  //初始化路由
  router,
  render: h => h(App),
}).$mount('#app')
