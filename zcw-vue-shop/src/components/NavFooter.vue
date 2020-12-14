<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://blog.csdn.net/qq_32370913?spm=1010.2135.3001.5113" target="_blank">zcw</a>
      <a href="">Vue全栈</a><span>|</span>
      <a href="">React全家桶</a><span>|</span>
      <a href="">微信支付</a><span>|</span>
    </div>
    <div class="copyright">xxxxxxxxxxxxxxxxxxxxxx</div>
  </div>
</template>
<script>
  export default {
     name: 'nav-footer'
  }
</script>
<style lang="scss" scoped>
  .footer{
    height: 234px;
    border-top:4px solid #FF6600;
    background-color:#333333;
    color:#999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      a{
        color: #999999;
        display: inline-block;
      }
      span{
        margin: 0 10px;
      }
      margin-bottom:13px;
    }
    .copyright{
    }
  }
</style>