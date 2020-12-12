module.exports ={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'www.baidu.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':'api'//转发地址要写全比如：http://www.baidu.com/api'
                }
            }
        }
    }
}