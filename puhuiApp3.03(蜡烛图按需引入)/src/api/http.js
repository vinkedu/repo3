import axios from 'axios'
const { Indicator } = require('mint-ui');
import { Toast } from 'vant';
//公共路径
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 8000;

//设置全局的请求次数，请求的间隙
axios.defaults.retry = 2;
axios.defaults.retryDelay = 5000;

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
    //在请求发出之前进行一些操作
    return config;
},function(error){
    //Do something with request error
    return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if (!config || !config.retry) return Promise.reject(err);

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if (config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            Indicator.close();
            Indicator.open("后台默认排队中,请等待5秒");
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

export default {
    install: function(Vue) {

        Vue.prototype.$post = params => {
            //   Indicator.open("加载中...");
            return new Promise((resolve, reject) => {
                axios.post("/CallMethod", params,
                    //发送请求头中带版本号
                    // {
                    //     headers:{
                    //         Vesion:'V2.2'
                    //     }
                    // }
                )
                    .then(response => {
                        Indicator.close()
                        resolve(response.data);
                    })
                    .catch(err => {
                        Indicator.close();
                        Toast.fail('页面请求超时,请刷新重试');
                        reject(err);
                    })
            })
        }
    }
}