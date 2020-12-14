module.exports ={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',//这个地方是配置代理形式，
                changeOrigin:true,
                pathRewrite:{
                    '/api':''//转发地址要写全比如：http://www.baidu.com/api' 通过此步会干掉/api
                }
            }
        }
    }
}