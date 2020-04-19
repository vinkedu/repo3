<style lang="less" scoped>
    .HomeNewsList {
        text-align: center;
        background: #fff;
        .add-news-icon-box{
            height: 1.173333rem;
            position: fixed;
            top: 0;
            width: 8%;
            right: 0;
            background: #fff;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                height: 16px;
                width: 16px;
            }
        }
        /deep/ .van-pull-refresh__head{
            top: 0;
        }
        .news-item {
            background: #fff;
            text-align: left;
            margin: 10px 14px;
            padding: 15px 10px 0;
            box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
            border-radius:4px;
            .news-item-left{
                width: 33%;
                display: inline-block;
                vertical-align: top;
                img{
                    background:#000;
                    border-radius:4px;
                    width: 100%;
                    height: 73px;
                    object-fit: cover;
                }
            }
            .news-item-right {
                margin-bottom: 12px;
                margin-left: 2%;
                width: 65%;
                display: inline-block;
                vertical-align: top;
                .news-item-title {
                    font-size: 16px;
                    font-weight: normal;
                    color: rgba(0, 0, 0, 1);
                    line-height: 1.5;
                    // text-align: justify;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2; // 2即为n
                    -webkit-box-orient: vertical;
                }
                .tag-box{
                    padding-top: 8px;
                    span{
                        margin-right: 7px;
                    }
                    .right{
                        color: #999;
                    }
                }
            }
            .fullWidth{
                width: 100%;
                margin-left: 0;
            }
            .bottom-customers{
                border-top: 1px solid #ddd;
                width: 100%;
                
                .image-box{
                    display: inline-block;
                    width: 75px;
                    height: 20px;
                    position: relative;
                    img{
                        width: 19px;
                        height: 19px;
                        object-fit: cover;
                        position: absolute;
                        top: 6px;
                        border-radius: 50%;
                    }
                    .headIcon:first-child{
                        left: 0;
                    }
                    .headIcon:nth-child(2){
                        left: 13px;
                    }
                    .headIcon:nth-child(3){
                        left: 26px;
                    }
                    .headIcon:nth-child(4){
                        left: 39px;
                    }
                    .headIcon:nth-child(5){
                        left: 52px;
                    }
                }
                .popular-number{
                    display: inline-block;
                    font-size:12px;
                    font-weight:400;
                    color:#000;
                    line-height:16px;
                }
                .less-popular{
                    display: inline-block;
                    font-size:12px;
                    font-weight:400;
                    color:#000;
                    line-height:35px;
                }
                .share-icon{
                    padding: 10px 0 10px 10px;
                    img{
                        height: 12px;
                        width: 12px;
                        object-fit: cover;
                    }
                }
            }
        }
        .loading {
            display: flex;
            .loading-icon {
                padding-top:44px;
                margin: 0 auto;
            }
        }
        .bottom-line {
            padding-top: 5px;
            color: #999;
            padding-bottom: 15px;
        }
    }
</style>
<style lang="less">
    
</style>
<template>
    <div class="HomeNewsList flex-wrapper">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">   
                <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
                >
                    <div class="news-item"
                             v-for="(item,index) in newsList"
                             :key="index"
                             @click="goNewsDetail(item.id,item.title)">
                            <div class="news-item-left" v-if="item.smallImage">
                                <img :src="item.smallImage">
                            </div>
                            <div class="news-item-right" :class="{'fullWidth':!item.smallImage}"
                                 v-if="newsList.length!=0">
                                <div class="news-item-title word-wrap">
                                    {{item.title}}
                                </div>
                                <div class="tag-box">
                                    <span v-if="item.tagList">
                                        <van-tag color="#E72E33" text-color="#E72E33" plain v-for="(tagItem,tagIndex) in item.tagList" :key="tagIndex">{{tagItem.tagName}}</van-tag>
                                    </span>
                                    <span class="right">{{item.pubTime|fomatTime}}</span>
                                </div>
                            </div>
                            <div class="bottom-customers clearfix" v-if="nowTypeIndex==0">
                                <div class="image-box" v-if="item.wechatUserList!=null">
                                    <img :src="imageItem.image" class="headIcon" v-for="(imageItem,imageIndex) in item.wechatUserList" :key="imageIndex">
                                </div>
                                <div class="popular-number" v-if="item.wechatUserList!=null">
                                    {{item.personCount}}位客户可能感兴趣
                                </div>
                                <div v-else  class="less-popular">
                                    {{item.interestedInfo}}
                                </div>
                                <div class="share-icon right" @click.stop="shareWX(item.id,item.title)">
                                    <img src="../../components/common/image/shareIcon.png" alt="">
                                </div>
                            </div>
                    </div>
                </van-list>
        </van-pull-refresh>
        <div v-show="false"> 
            <!-- 译会产品推荐 -->
            <v-product :openid="-1"
                        :userid="this.$route.params.userid"
                        :todaytime="this.$route.params.todaytime"
                        :historyid="-1"
                        :isShare="0"
                        :isWXApplet="-1"
                        :haveBackBtn="-1">
            </v-product>
            <!-- 译会活动推荐 -->
            <v-activaty :openid="-1"
                        :userid="this.$route.params.userid"
                        :todaytime="this.$route.params.todaytime"
                        :historyid="-1"
                        :isShare="0"
                        :isWXApplet="-1"
                        :haveBackBtn="-1">
            </v-activaty>
        </div>
    </div>
</template>

<script>
    import getProductActivity from '../../mixins/getProductActivity'
    import provideProductActivity from '../../mixins/provideProductActivity'
    import { Toast } from 'vant';
    import isWeixin from '../../mixins/isWeixin'
    import _ from 'lodash'
    const ERROR_CODE = "ERRORCODE0000";
    import sourceOS from '../../mixins/sourceOS'
    import closeLoading from '../../mixins/closeLoading'
    export default {
        name: 'HomeNewsList',
        mixins: [closeLoading, sourceOS, isWeixin,getProductActivity,provideProductActivity],
        components: {
            'v-product': () => import(`../../components/common/product`),
            'v-activaty': () => import(`../../components/common/activaty`),
        },
        props: {},
        data() {
            return {
                finished: false,
                refreshing: false,
                loading: false,

                pageIndex: 0,
                pageSize: 10,
                total: 10,
                tabsList: [],
                signState: 1,
                newsList: [],
                //时间
                todaytime: this.$route.params.todaytime,
                userid: this.$route.params.userid,
                nowTypeIndex: this.$route.params.nowTypeIndex,
                city: this.$route.params.city,
            }
        },
        watch: {

        },
        computed: {
            getPages: function () {
                return Math.ceil(this.total / 10);
            }
        },
        methods: {
            shareWX(id,title){
                var u = navigator.userAgent;
                if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
                    Android.shareNews(id,title);
                }
            },
            onRefresh() {
                this.pageIndex=0;
                this.onLoad();
                setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                }, 1000);
            },
            onLoad: _.throttle(function () {
                this.refreshing = false;
                var getData,methodName;
                if(this.nowTypeIndex == 0){
                    methodName="selectRecommendedNews"
                    getData={
                        "userId": this.userid
                    }
                    
                }else{
                    methodName="selectHomepage"
                    if(this.city==-1){
                        this.loading = false;
                        this.finished = true;
                        return;
                    }
                    else if(this.city==0){
                        getData={
                            "textType": this.nowTypeIndex
                        }
                    }else{
                        getData={
                            "textType": this.nowTypeIndex,
                            "city": this.city
                        }
                    }
            
                }
                
                if (this.pageIndex < this.getPages) {
                    this.pageIndex += 1;
                    let parame = {
                        "functionName": "appService",
                        "methodName": methodName,
                        "pageNo": this.pageIndex,
                        "pageSize": 10,
                        originSource: {
                            "OS": this.OS,
                            "version": "h5_v2.2"
                        },
                        "data":getData
                        
                    }
                    console.log('新闻列表查询接口参数', parame);
                    this.$post(JSON.stringify(parame)).then(result => {
                        console.log('新闻列表查询接口结果', result);
                        this.loading = false;
                        if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                            if(this.pageIndex==1){
                                this.newsList=[];
                            }
                            if(this.nowTypeIndex == 0){
                                this.newsList = this.newsList.concat(result.data.recommendNews);
                            }
                            else if(this.nowTypeIndex==16||this.nowTypeIndex==17){
                                this.newsList = this.newsList.concat(result.data.newCityArticleList);
                            }
                            else{
                                this.newsList = this.newsList.concat(result.data.newWorldWideList);
                            }
                            this.total = result.sumCount;
                        }
                    })
                } else {
                    this.loading = false;
                    this.finished = true;
                }
            }, 1000),
            goNewsDetail(id,title) {
                var u = navigator.userAgent;
                if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
                    Android.goNewDetail(id,title);
                }
            }
            
        },
        created() {
        },
        mounted() {
        }
    }
</script>