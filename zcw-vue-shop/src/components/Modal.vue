<template>
  <div class="modal" v-show="showModal">
    <div class="mask">

    </div>
    <div class="modal-dialog">
      <div class="moadl-header">
        <span>{{title}}</span>
        <a href="javascript:;" class="icon-close" v-on:click="$emit('cancel')"></a>
      </div>
      <div class="modal-body"></div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{ sureText }}</a>
        <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{ cancelText }}</a>
        <div class="btn-group" v-if="btnType==3">
          <a href="javascript:;" class="btn" v-on:click="$emit('submit')">确定</a>
          <a href="javascript:;" class="btn" v-on:click="$emit('cancel')">取消</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'modal',
    // 弹框类型： 小 small,中middle,大large, 表单form
    props:{
      modalType:{
        type:String,
        default:'form'
      },
      //弹框标题
      title:String,
      //按钮类型： 1：确定按钮，2：取消按钮 3，确定取消
      btnType:String,
      sureText:{
        type:String,
        default:'确定'
      },
      cancelText:{
        type:String,
        default:'取消'
      }
    }
  }
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>