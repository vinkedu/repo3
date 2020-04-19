<style scoped  lang="less">
    .financialNews{
        background-color: #fff;
        margin: 12.5px 14px 0;
        padding: 0 15px 7.5px;
        .financialNewsTitle{
            font-size: 18px;
            color: #b90901;
            background: #fff;
            padding: 10px 0;
        }
        .subTitle{
            font-size: 18px;
            color: #000;
            background: #fff;
            padding: 10px 0;
        }
        .bannerImg {
            box-sizing: border-box;
            width: 100%;
            height: 114px;
            overflow: hidden;
            border-radius: 8px 8px 0 0;
            position: relative;
            margin-bottom:2.5px;
        }
        .financicalNewsList{
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            font-size: 16px;
            color: #000;
            .financicalNewsSource{
                color:#666;
            }
        }
        .financicalNewsList:last-child{
            border-bottom: 0;
        }
    }

    .localPlaceImage{
        position: absolute;
        margin: auto;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }

    .shaoxing,
    .shanghai,
    .beijing,
    .eerduosi,
    .lanzhou,
    .nanjing,
    .defaultCity,
    .suzhou,
    .changsha,
    .foshan,
    .guangzhou,
    .haerbin,
    .hangzhou,
    .hefei,
    .nanchang,
    .shenzhen,
    .zhengzhou
    {
    background-size: cover;
    width: 100%;
    height: 100%;
    }
    .shaoxing{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/sx@2x.png");  
    }
    .shanghai {
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/上海图@2x.png");
    }
    .suzhou{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/su@2x.png");
    }
    .beijing {
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/北京@2x.png");
    }
    .changzhou{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/常州@2x.png");
    }
    .huaian{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/淮安@2x.png");
    }
    .lianyungang{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/连云港@2x.png");
    }
    .nantong{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/南通@2x.png");
    }
    .taizhou{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/泰州@2x.png");
    }
    .wuxi{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/无锡@2x.png");
    }
    .suqian{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/宿迁@2x.png");
    }
    .xuzhou{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/徐州@2x.png");
    }
    .yancheng{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/盐城@2x.png");
    }
    .yangzhou{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/扬州@2x.png");
    }
    .zhenjiang{
        background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/镇江@2x.png");
    }
    .changsha{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/changsha@2x.png");  
    }
    .foshan{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/foshan@2x.png");    
    }
    .guangzhou{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/guangzhou@2x.png");     
    }
    .haerbin{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/haerbin@2x.png");  
    }
    .hangzhou{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/hangzhou@2x.png");  
    }
    .hefei{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/hefei@2x.png");  
    }
    .nanchang{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/nanchang@2x.png");  
    }
    .shenzhen{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/shenzhen@2x.png");  
    }
    .zhengzhou{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/zhengzhou@2x.png");    
    }
    .eerduosi {
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/鄂尔多斯@2x.png");
    }
    .lanzhou {
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/兰州@2x.png");
    }
    .nanjing {
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/南京@2x.png");
    }
    .defaultCity{
    background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/default@2x.png");   
    }

    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        .shanghai {
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/上海图@3x.png");
        }
        .suzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/su@3x.png");
        }
        .shaoxing{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/sx@3x.png");  
        }
        .beijing {
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/北京@3x.png");
        }
        .changzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/常州@3x.png");
        }
        .huaian{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/淮安@3x.png");
        }
        .lianyungang{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/连云港@3x.png");
        }
        .nantong{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/南通@3x.png");
        }
        .taizhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/泰州@3x.png");
        }
        .wuxi{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/无锡@3x.png");
        }
        .suqian{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/宿迁@3x.png");
        }
        .xuzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/徐州@3x.png");
        }
        .yancheng{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/盐城@3x.png");
        }
        .yangzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/扬州@3x.png");
        }
        .zhenjiang{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/镇江@3x.png");
        }
        .changsha{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/changsha@3x.png");  
        }
        .foshan{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/foshan@3x.png");    
        }
        .guangzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/guangzhou@3x.png");     
        }
        .haerbin{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/haerbin@3x.png");  
        }
        .hangzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/hangzhou@3x.png");  
        }
        .hefei{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/hefei@3x.png");  
        }
        .nanchang{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/nanchang@3x.png");  
        }
        .shenzhen{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/shenzhen@3x.png");  
        }
        .zhengzhou{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/zhengzhou@3x.png");    
        }
        .eerduosi {
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/鄂尔多斯@3x.png");
        }
        .lanzhou {
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/兰州@3x.png");
        }
        .nanjing {
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/南京@3x.png");
        }
        .defaultCity{
            background-image: url("http://47.103.35.52:8181/images/appImages/cityImages/default@3x.png");   
        }
    }
</style>

<template>
    <div>
        <div class="financialNews" v-if="moduleH">
            <div class="financialNewsTitle" v-if="creditCity=='上海'">{{creditCity | blankplace}}<span class="subTitle">要闻</span></div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='绍兴'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='长沙'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='佛山'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='广州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='哈尔滨'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='杭州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='合肥'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='南昌'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='深圳'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='郑州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='苏州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='北京'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='常州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='淮安'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='连云港'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='南通'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='泰州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='无锡'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='宿迁'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='徐州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='盐城'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='扬州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
                class="financialNewsTitle"
                v-else-if="creditCity=='镇江'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='鄂尔多斯'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='兰州'"
            >{{creditCity | blankplace}}要闻</div>
            <div
            class="financialNewsTitle"
            v-else-if="creditCity=='南京'"
            >{{creditCity | blankplace}}要闻</div>
            <div class="subTitle" v-else>地域要闻</div>
            <div>
            <div class="bannerImg">
                <i
                    v-if="creditCity=='上海'"
                    class="shanghai localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='苏州'"
                    class="suzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='绍兴'"
                    class="shaoxing localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='长沙'"
                    class="changsha localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='佛山'"
                    class="foshan localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='广州'"
                    class="guangzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='哈尔滨'"
                    class="haerbin localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='杭州'"
                    class="hangzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='合肥'"
                    class="hefei localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='南昌'"
                    class="nanchang localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='深圳'"
                    class="shenzhen localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='郑州'"
                    class="zhengzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='北京'"
                    class="beijing localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='常州'"
                    class="changzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='淮安'"
                    class="huaian localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='连云港'"
                    class="lianyungang localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='南通'"
                    class="nantong localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='泰州'"
                    class="taizhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='无锡'"
                    class="wuxi localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='宿迁'"
                    class="suqian localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='徐州'"
                    class="xuzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='盐城'"
                    class="yancheng localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='扬州'"
                    class="yangzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='镇江'"
                    class="zhenjiang localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='鄂尔多斯'"
                    class="eerduosi localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='兰州'"
                    class="lanzhou localPlaceImage"
                ></i>
                <i
                    v-else-if="creditCity=='南京'"
                    class="nanjing localPlaceImage"
                ></i>
                <i
                    v-else
                    class="defaultCity localPlaceImage"
                ></i>
            </div>
            <div
                class="financicalNewsList"
                v-for="(item,index) in localplacenewlist" :key="index"
                @click="checkLocalArticle(item.id,item.title,localplacenewlist[index])"
            >
                <div>
                    <!--<span class="financicalNewsSource">[{{item.source}}]</span>-->
                    {{item.title}}
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
// 微信引入
import wx from 'weixin-js-sdk'
//Vuex公共状态辅助函数
import { mapState } from 'vuex'
//Vuex公共状态动作
import {mapActions} from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
export default {
    name: 'localNews',
    props:{
        //理财经理ID
        userid:{
            type:String,
        },
        //参数传入城市
        place:{
            type:String,
        },
    },
    data() {
        return {
            //微信端显示
            isWeixin:false,
            //地域数据列表
            localplacenewlist: [],
        }
    },
    computed:{
        //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
        ...mapState(['creditCity','shareArticleId','moduleH']),
    },
    created(){
        //判断微信环境
        var ua = navigator.userAgent.toLowerCase(); 
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            this.isWeixin=true;
            //地域新闻
            if (this.place == -1) {
                this.initlocalplace();
            }
        } else {
            //地域新闻
            if (this.place != -1) {
                this.SET_CITY(this.place.substring(0, this.place.length - 1));
                this.initlocalplace();
            } else {
                this.initlocalplace();
            }
        }
    },
    methods:{
        //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
        ...mapActions(['SET_CITY']),
        //初始化所在地
        initlocalplace(lat,lng) {
            let _this = this;
            var ua = navigator.userAgent.toLowerCase(); 
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                var parames1 = {
                    "functionName": "appService", 
                    "methodName": "selectCityArticleLikeCity",
                    data: {
                        "lat":lat,
                        "lng":lng,
                        "type":'new'
                    }
                };
            }else{
                var parames1 = {
                    "functionName": "appService", 
                    "methodName": "selectCityArticleLikeCity",
                    data: {
                        city: _this.creditCity,
                    }
                };
            }
            _this
            .$post(JSON.stringify(parames1))
            .then(result => {
                if (
                    result.errorCode == ERROR_CODE && result.data.codeType!='400'
                ) {
                console.log(
                    "1111======>",
                    result
                );
                _this.localplacenewlist =
                    result.data.newCityArticleList;
                } else {
                    console.log('地域新闻加载失败参数'+JSON.stringify(parames1) );
                    console.log('地域新闻加载失败结果'+JSON.stringify(result) );
                }
            });
            let paramesManager = {
                "functionName": "appService",
                "methodName": "insertUserLook",
                data: {
                    "userId":_this.userid,	
                    "lookType":"1",		// 1:早报;2:文章
                    "fileId":_this.shareArticleId,			// 早报ID或文章ID
                    "lookAdd":_this.creditCity
                }
            };
            _this
            .$post(JSON.stringify(paramesManager))
            .then(result => {
                if (
                result.errorCode == ERROR_CODE && result.data.codeType!='400'
                ) {
                console.log("======>理财经理查看信息", result);
                } 
            });
        },
        //查看地域新闻
        checkLocalArticle(index, title, obj) {
            let top =
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                window.pageYOffset;
            sessionStorage.setItem("id", JSON.stringify(top));
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                //在微信中打开
                //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
                wx.miniProgram.getEnv((res)=>{
                    if (res.miniprogram) {
                        console.log("在小程序里");
                        this.$router.push({
                            path:
                                "/componentThree/" +
                                "-1" +
                                "/" +
                                this.userid +
                                "/" +
                                index +
                                "/" +
                                this.openid +
                                "/" +
                                "0"+
                                "/1"
                        });
                    }else {
                        console.log("不在小程序里");
                        this.$router.push({
                            path:
                                "/componentThree/" +
                                "-1" +
                                "/" +
                                this.userid +
                                "/" +
                                index +
                                "/" +
                                this.openid +
                                "/" +
                                "0"
                        });
                        
                    }
                })  
                window.scollTop = 0;
            }
            var u = navigator.userAgent;
            if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
                //android终端
                Android.startActivity(
                "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/"+process.env.VUE_APP_FRONT+"/#/componentThree/-1/" +
                    this.userid +
                    "/" +
                    index +
                    "/-1/0",
                title,
                obj.id
                );
            } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                var parameObj={
                    dict:"https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/"+process.env.VUE_APP_FRONT+"/#/componentThree/-1/" + this.userid + "/" + index + "/-1/0",
                    article:obj
                }
                window.webkit.messageHandlers.toDictArticle.postMessage(JSON.stringify(parameObj));
                app.toDictArticle(
                "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/"+process.env.VUE_APP_FRONT+"/#/componentThree/-1/" +
                    this.userid +
                    "/" +
                    index +
                    "/-1/0",
                obj
                );
            }
        },
    }
}
</script>


