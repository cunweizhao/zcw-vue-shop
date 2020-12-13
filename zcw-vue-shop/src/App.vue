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
    //storage.setItem('a',1);
    this.axios.get('/mock/user/login.json').then((res)=>{
       this.res = res;
    })
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
