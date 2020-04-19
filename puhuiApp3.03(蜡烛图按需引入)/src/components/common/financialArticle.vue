<style scoped lang="less">
  .detail-header.fixed {
    width: 100%;
  }
  .detail-header h1 {
    padding: 32px 16px 10px;
    line-height: 30px;
    font-size: 22px;
    color: #4a4a4a;
    letter-spacing: 0.26px;
    background-color: #fff;
    box-sizing: border-box;
    max-width: 415px;
    word-break: break-all;
  }
  .label-list {
    display: inline-block;
    background: #fff;
    padding-right: 8px;
    .label-item {
      max-width: 85px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: 20px;
      background: rgba(16, 142, 233, 0.1);
      border-radius: 2px;
      color: #108ee9;
      display: inline-block;
      line-height: 23px;
      padding: 0 8px;
      margin: 10px 0 10px;
      font-size: 10px;
    }
    .label-item:first-child {
      margin-right: 10px;
    }
  }
  section.fixed {
    background: #f7f7f7;
  }
  section {
    box-sizing: border-box;
  }
  .article-subtitle{
    padding: 0 16px 0 16px;
    background: #fff;
  }
  .author-time {
    display: inline-block;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0.14px;
    background: #fff;
    line-height: 41px;
  }
  .key-point {
    padding: 15px 16px 0;
    font-size: 17px;
    color: #ab0b22;
    line-height: 22px;
    font-weight: 500;
    word-break: break-all;
    text-align: justify;
    letter-spacing: 1px;
    text-indent: 0em;
  }
  .discussLists {
    padding: 0 16px;
    background-color: #f7f7f7;
  }
  .discussLists.noMT {
    padding: 0 16px 8px;
  }
  .ansure-top {
    height: 5px;
    width: 60px;
    background-color: #ab0b22;
    border: none;
  }

  .discussLists h3 {
    padding-top: 8px;
    line-height: 25px;
    font-size: 19px;
    color: #4a4a4a;
  }
  .discussLists p {
    font-size: 15px;
    color: #000000;
    line-height: 25px;
  }
  .question {
    margin-bottom: 9px;
  }
  .answer {
    margin-bottom: 43px;
  }
  .copyright {
    padding: 31px 17px 56px;
    font-size: 16px;
    line-height: 22px;
    color: #4a4a4a;
    font-weight: 600px;
    background-color: #f7f7f7;
    border-top: 1px solid #e7e7e7;
  }
  #told {
    width: 100%;
    padding-bottom: 8px;
    background-color: transparent;
    min-height: 100px;
    background-repeat: repeat;
    background-size: 14px 3rem;
    font-size: 14px;
  }
  #told /deep/ p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: 1px;
    text-align: justify;
    text-indent: 0em;
  }
  .hr1px {
    background-color: #d8d8d8;
  }
  .BackBlock {
    background: #fff;
    position: fixed;
    bottom: 0px;
    width: 100%;
    .reBackBox {
      width: 60px;
      .callback {
        width: 16px;
        height: 28px;
        margin: 8px 16px 8px 16px;
      }
    }
  }
</style>
<template>
  <!-- 题目 -->
  <div class="flex-wrapper"
       ref="scrollmain">
    <v-linkman :userid="this.$route.params.userid"
               type="3"
               :originType='articletype'
               :isWXApplet="this.$route.params.isWXApplet"></v-linkman>
    <header class="detail-header fixed"
            id="detail-header">
      <h1>{{title}}</h1>
      <div class="article-subtitle clearfix">
        <div class="label-list left"
             v-if="lableList!=null">
          <div class="label-item"
               v-for="(item,index) in lableList"
               :key="index">{{item.tagName}}</div>
        </div>
        <div class="author-time left"
             v-if="article!=''">
          <span v-if="this.$route.params.showFromSource!=0">{{source|limitFive}} · </span>
          {{pubTime | fomatTime}}</div>
      </div>
    </header>
    <!-- 内容 -->
    <section class="fixed"
             id="sectionfixed"
             @touchend="touchEndTime()">
      <!-- <p class="author-time" v-if="article!=''">{{author}} · {{source}} · {{pubTime | fomatTime}}</p> -->

      <p class="key-point"
         v-if="abstractStr!=''&&abstractStr!=null">{{abstractStr}}</p>
      <div class="discussLists">
        <p id="told"
           class="ArticleP word-wrap"
           v-html="formatTrimContent">
        </p>
      </div>
      <!-- <hr class="hr1px"> -->
      <!-- 译会产品推荐 -->
      <v-product :openid="this.$route.params.openid"
                 :userid="this.$route.params.userid"
                 :todaytime="this.$route.params.todaytime"
                 :historyid="this.$route.params.historyid"
                 :isShare="this.$route.params.isShare"
                 :isWXApplet="this.$route.params.isWXApplet"
                 :haveBackBtn="this.$route.params.haveBackBtn">
      </v-product>
      <!-- 译会活动推荐 -->
      <v-activaty :openid="this.$route.params.openid"
                  :userid="this.$route.params.userid"
                  :todaytime="this.$route.params.todaytime"
                  :historyid="this.$route.params.historyid"
                  :isShare="this.$route.params.isShare"
                  :isWXApplet="this.$route.params.isWXApplet"
                  :haveBackBtn="this.$route.params.haveBackBtn">
      </v-activaty>
      <!-- 版权所有 -->
      <p class="copyright"
         v-if="article!=''">著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
    </section>
    <div class="BackBlock"
         v-if="haveBackBtn==1">
      <div @click="reBack"
           class="reBackBox">
        <img src="./image/callBack.png"
             class="callback">
      </div>
    </div>
  </div>
</template>

<script>
  import sourceOS from '../../mixins/sourceOS'
  import getProductActivity from '../../mixins/getProductActivity'
  import provideProductActivity from '../../mixins/provideProductActivity'
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  //Vuex公共状态动作
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  const ERROR_CODE = "ERRORCODE0000"; //执行成功
  export default {
    name: 'financialArticle',
    mixins: [initEndTime, initStartTime, getProductActivity, sourceOS, insertShareHistory, provideProductActivity],
    props: {
      //是否为历史数据
      historyid: {
        type: String
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //时间戳
      todaytimeone: {
        type: String
      },
      //文章ID
      fieldid: {
        type: String,
      },
      //微信用户ID
      openid: {
        type: String
      },
      //是否为分享文章
      isShare: {
        type: String,
      },
      //上一个微信用户
      fromopenid: {
        type: String
      },
      //文章类型
      articletype: {
        type: String
      },
      //二次分享时间
      twosharetime: {
        type: String
      },
      //是否是微信小程序
      isWXApplet: {
        type: String
      },
    },
    components: {
      'v-product': () => import(`../../components/common/product`),
      'v-activaty': () => import(`../../components/common/activaty`),
      'v-linkman': () => import(`../../components/common/headLink/headLink`),
    },
    data() {
      return {
        lableList: [],
        nowDate: '',
        //查看时间
        nowSameTime: '',
        //文章浏览ID
        articleLookId: '',
        //时间
        todaytime: this.$route.params.todaytime,
        //题目
        title: "",
        //作者
        author: "",
        //来源
        source: "",
        //时间
        pubTime: "",
        //简介
        abstractStr: "",
        //文章具体内容
        article: "",
        //小程序环境
        haveBackBtn: this.$route.params.haveBackBtn,
      };
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['financeProductId', 'financeActivityId', 'moduleB', 'moduleL', 'productDataState', 'activityDataState', 'headPortrait', 'productType']),
      formatTrimContent: function () {
        return this.article.replace(/(\s{2})|<p[^>]+><\/p>|<strong[^>]+><\/strong>|style=\"[^>]+\"/g, "").replace(/data-src/g,"src");
      },
      //文章id
      fileId: function () {
        if (this.fieldid != -1) {
          return this.fieldid;
        } else {
          return "";
        }
      },
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_HEADPORTRAIT']),
      wxRegCallback() {
        var shareTransType = '';
        if (this.articletype == 2) {
          shareTransType = 2;
        }
        else if (this.articletype == 3) {
          shareTransType = 8;
        }
        //二次分享
        this.nowDate = Date.parse(new Date());
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/see/' + this.todaytime + '/' + this.userid + '/' + this.fieldid + "/" + this.openid + '/' + this.nowDate + "/T" + shareTransType;
        var parameObj = {
          title1: this.title, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: this.headPortrait, // 分享图标, 请自行替换，需要绝对路径
          title2: this.title, // 分享标题, 请自行替换
          desc2: this.abstractStr, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: this.headPortrait, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
      //返回
      reBack() {
        history.go(-1)
      },
    },
    created() {
      if (sessionStorage.getItem("financialReport") != null) {
        //获取今日财经的分享时间
        this.todaytime = sessionStorage.getItem("financialReport");
      } else {
        this.todaytime = this.todaytimeone;
      }
      if (this.articletype == 3) {
        //获取文章数据
        let parames = {
          functionName: "appService",
          methodName: "selectNewCityArticleById",
          originSource: {
            OS: this.OS,
            version: "H5_V2.2"
          },
          data: {
            id: this.fieldid
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE) {
            console.log("======>", result);
            let newCityArticle = result.data.newCityArticle;
            this.title = newCityArticle.title;
            this.author = newCityArticle.author;
            this.source = newCityArticle.source;
            this.pubTime = newCityArticle.pubTime;
            this.abstractStr = newCityArticle.abstractStr;
            this.article = newCityArticle.article;
            this.lableList = newCityArticle.tagList;
            wxapi.wxRegister(this.wxRegCallback);
          }
        });
      }
      if (this.articletype == 2) {
        //获取文章数据
        let parames = {
          functionName: "appService",
          methodName: "selectNewWorldWideById",
          originSource: {
            OS: this.OS,
            version: "H5_V2.2"
          },
          data: {
            id: this.fieldid,
            userId: this.userid
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE) {
            console.log("文章详情======>", result);
            if (result.data.headPortrait != null) {
              this.SET_HEADPORTRAIT(result.data.headPortrait);
            } else {
              this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
            }
            let newWorldWide = result.data.newWorldWide;
            this.title = newWorldWide.title;
            this.author = newWorldWide.author;
            this.source = newWorldWide.source;
            this.pubTime = newWorldWide.pubTime;
            this.abstractStr = newWorldWide.abstractStr;
            this.article = newWorldWide.article;
            this.lableList = newWorldWide.tagList;
            wxapi.wxRegister(this.wxRegCallback);
          }
        });
      }
      var ua = navigator.userAgent.toLowerCase();
      if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
        setTimeout(() => {
          //微信模块显示
          this.WeixinShowPart();
        }, 250);
      } else {
        if (this.userid != -1) {
          this.SET_MODULEB(true);
          this.SET_MODULEL(true);
        }
      }

    },
    mounted() {
      setTimeout(() => {
        if (this.articletype == 2) {
          this.setStartTime(8, this.fileId, this.isShare);
        }
        if (this.articletype == 3) {
          this.setStartTime(21, this.fileId, this.isShare);
        }
      }, 250);

    }

  };
</script>
