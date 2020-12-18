<template>
  <div class="index">
    <div class="container">
<!--  轮播  -->
      <div class="swiper-box">
<!--   菜单     -->
        <div class="nav-menu">
          <div class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id:''">
                      <img v-bind:src="sub?sub.img :'/imgs/item-box-1.png'" alt="">
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </div>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product'+item.id"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
<!--  广告位    -->
      <div class="ads-box">
        <a v-bind:href="'/#/product/'+item.id" v-for="(item, index) in adsList" v-bind:key="index">
          <img v-bind:src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>

    </div>
    <div class="product-box">
      <div content="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jps" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,i)  in phoneList" v-bind:key ="i">
              <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                <span>新品</span>
                <div class="item-img">
                  <img src="" alt="">
                </div>
                <div class="item-info">
                  <h3>小米9</h3>
                  <p>骁龙85，索尼4800万超广角微距</p>
                  <p class="price">2999元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name:'index',
  components:{
    swiper,
    swiperSlide,
    ServiceBar
  },
  data(){
    return {
      swiperOption:{
        autoplay:true,
        loop:true,
        effect:'cube',
        cubeEffect:{
          slideShadows: true,
          shadow:true,
          shadowOffset:100,
          shadowScale:0.6
        },
        pagination:{
          el: '.swiper-pagination',
          clickable:true
        },
        navigation:{
          nextEl: '.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-1.jpg'
        }
      ],
      /*定义二维数组*/
      menuList:[
          [
            {
              id:30,
              img:'/imgs/item-box-1.png',
              name:'小米CC9'
            },
            {
              id:30,
              img:'/imgs/item-box-2.png',
              name:'小米8 青春版'
            }
            ,
            {
              id:30,
              img:'/imgs/item-box-3.png',
              name:'Redmi K20 Pro'
            }
            ,
            {
              id:30,
              img:'/imgs/item-box-4.png',
              name:'移动4G+专区'
            }
          ],[], [],[], [],[]
      ],
      adsList:[
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        }
      ],
      phoneList:[[1,1,1,1],[1,1,1,1]]
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
/*覆盖空间样式*/
.index{
  .swiper-box{
    /*左侧菜单*/
    .nav-menu{
      position:absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding:26px 0;
      background-color:#55585a7a;
      box-sizing:border-box;
      .menu-wrap{
        .menu-item{
          height: 50px;
          line-height: 50px;
          a{
            /*相对定位*/
            position:relative;
            /*变成块级元素*/
            display: block;
            font-size:16px;
            color:#ffffff;
            padding-left: 30px;
            &:after{
              /*绝对定位*/
              position:absolute;
              right: 30px;
              top:17.5px;
              /*占位，不然伪类不生效*/
              content: '';
              @include bgImg(10px,15px,'/imgs/icon-arrow.png');
            }
          }
          &:hover{
            background-color:$colorA ;
          }
          .children{
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position:absolute;
            top: 0;
            left: 364px;
            border: 1px solid $colorH;
            ul{
              display: flex;
              /*两边对齐*/
              justify-content: space-between;
              height:75px;
              li{
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a{
                color: $colorB;
                font-size: 14px;
              }
              img{
                width: 42px;
                height: 35px;
                vertical-align:middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container{
      height: 451px;
      .swiper-button-prev{
        left: 274px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box{
      //display: flex;
      //justify-content: space-between;
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a{
      width: 296px;
      height: 167px;
    }
  }
  .banner{
    margin-bottom: 50px;
  }
  .product-box{
    background-color:$colorJ;
    padding:30px 0 50px;
    h2{
      font-size:$fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
    }
    .wrapper{
      display: flex;
      .banner-left{
        margin-right: 16px;
        img{
          width: 224px;
          height: 619px;
        }
      }
      .list-box{
        .list{
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child{
            margin-bottom: 0;
          }
          .item{
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span{

            }
            .item-img{
              img{
                height: 195px;
              }
            }
            .item-info{
              h3{
                font-size:$fontJ ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p{
                color: $colorD;
                line-height: 13px;
                margin:6px auto 13px;
              }
              .price{
                color: #F20A0A;
                font-size: $fontJ;
                font-weight: bold;
                curor:pointer;
                &:after{
                  @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                  content: ' ';
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
