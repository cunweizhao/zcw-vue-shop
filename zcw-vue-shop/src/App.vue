<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
//import axios from 'axios'
//import storage from './storage/index'
export default {
  name: 'App',
  data(){
    return{
    res:{}
    }
  },
  mounted(){
   if(this.$cookie.get('userId')){
     this.getUser();
     this.getCartCount();
   }
  },
  methods: {
    getUser(){
      this.axios.get('/user').then(() =>{
          // to-do 保存到vuex里面
      })
    },
    getCartCount(){
        this.axios.get('/carts/products/sum').then(() =>{})
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
