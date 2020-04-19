import wx from 'weixin-js-sdk'
//Vuex公共状态动作
import { mapActions } from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
//微信分享
import wxapi from '@/commonJS/wxapi'
import sourceOS from '../mixins/sourceOS'
export default {
    mixins: [sourceOS],
    methods: {
        //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
        ...mapActions(['SET_CITY', 'SET_WEATHER', 'SET_HIGH', 'SET_LOW']),
        wxRegister() {
            let _this = this;
            // 这边的接口请换成你们自己的
            _this.$post({
                functionName: "newWeiXinShareService",
                methodName: "weiXinShare",
                originSource: {
                    OS: this.OS,
                    version: "H5_V1.0"
                },
                data: {
                    url: window.location.href
                }
            }).then((res) => {
                console.log('weixinshare', res);
                let data = res.data.data // PS: 这里根据你接口的返回值来使用
                wx.config({
                    debug: false, // 开启调试模式
                    appId: "wx130b58be46a7d4f0", // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature, // 必填，签名，见附录1
                    jsApiList: [
                        'openLocation'
                    ]
                })
            }).catch((error) => {
                console.log(error)
                // alert(error)
            })
            wx.ready((res) => {
                wx.getLocation({
                    success: function (res) {
                        var pointY = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var pointX = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var wxaccuracy = res.accuracy;
                        let parames = {
                            functionName: "appService",
                            methodName: "selectWeatherByCity",
                            originSource: {
                                OS: this.OS,
                                version: "H5_V1.0"
                            },
                            data: {
                                "lat": pointY,
                                "lng": pointX,
                                "type": 'new'
                            }
                        };
                        _this.$post(JSON.stringify(parames))
                            .then(result => {
                                if (
                                    result.errorCode == ERROR_CODE && result.data.codeType != '400'
                                ) {
                                    console.log("======>", result);
                                    var addComp = result.data.weather.city;
                                    _this.SET_CITY(
                                        addComp.substring(0, addComp.length - 1)
                                    )
                                    //天气
                                    let CityWeather = result.data.weather;
                                    _this.SET_WEATHER(CityWeather.type);
                                    _this.SET_LOW(CityWeather.low);
                                    _this.SET_HIGH(CityWeather.high);
                                    setTimeout(() => {
                                        wxapi.wxRegister(_this.wxRegCallback);
                                    }, 50);
                                } else {
                                    console.log("暂无当地天气信息参数",parames);
                                    console.log("暂无当地天气信息结果",result);
                                }
                            });
                        _this.$nextTick(() => {
                            _this.$refs.localnews.initlocalplace(pointY, pointX);
                            _this.$refs.housenews.initHouse(pointY, pointX);


                        })
                    },
                    cancel: function (res) {
                        console.log('用户拒绝授权获取地理位置');
                    }
                });
            })
        },
    },
    created() {
        var ua = navigator.userAgent.toLowerCase();
        if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
            //获取当地天气
            this.wxRegister();
        }
    }
}