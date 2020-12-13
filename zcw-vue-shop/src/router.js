//存放路由地址
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router);

//路由语法
export default new Router({
    //路由配置
    routes:[
        {
          path:'/',
          name:'home',
          component: Home,
            redirect: '/index',//重定向
            children:[
                {
                    path: '/index',
                    name: 'index',
                    component: Index,

                },{
              //路由传参数
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },{
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },{
            path: '/cart',
            name: 'cart',
            component: Cart,
        },{
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                   path: 'list',
                   name : 'order-list',
                   component: OrderList,
                },
                {
                    path: 'confirm',
                    name:'order-confirm',
                    component: OrderConfirm
                },{
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },{
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        }
    ]
});