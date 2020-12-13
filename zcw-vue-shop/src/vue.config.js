module.exports ={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'www.baidu.com',//这个地方是配置代理形式，
                changeOrigin:true,
                pathRewrite:{
                    '/api':'api'//转发地址要写全比如：http://www.baidu.com/api'
                }
            }
        }
    }
}