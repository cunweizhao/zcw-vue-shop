let baseURL;


//根据不同环境输出不同的URL地址,跨域方式下可以使用，如果使用的是代理的形式，下面的配置就不需要了
switch (process.env.NODE_ENV) {
    // eslint-disable-next-line no-undef
    case 'development':
        baseURL = '后台接口地址/api';
        break;
    case 'test':
        baseURL ='测试环境地址/api';
        break;
    case 'production':
        baseURL ='生成环境地址/api';
        break;
}


export default {
    baseURL
}