<style lang="less" scoped>
  .investment-analysis-title {
    background: #fff;
    font-size: 21px;
    padding: 15px 15px 12.5px;
    font-family: Arial, Helvetica, sans-serif;
  }
  section {
    background: #f7f7f7;
    padding-bottom: 10px;
  }
</style>

<template>
  <div class="flex-wrapper"
       @touchend="touchEndTime()">
    <div class="investment-analysis-title"
         v-if="inWeixin">
      投资分析
    </div>
    <section>
      <!-- 头部固定联系栏 -->
      <v-linkman :userid="this.$route.params.userid"
                 type="3"
                 :isWXApplet="this.$route.params.isWXApplet"></v-linkman>
      <v-radarecharts shapeType='2'
                      :appOpenid="this.$route.params.appOpenid"
                      :userid="this.$route.params.userid"
                      :fieldid="this.$route.params.fieldid">
      </v-radarecharts>
      <v-pieecharts :appOpenid="this.$route.params.appOpenid">
      </v-pieecharts>
      <v-product :openid="this.$route.params.openid"
                 :userid="this.$route.params.userid"
                 :todaytime="this.$route.params.todaytime"
                 :historyid="this.$route.params.historyid"
                 :isShare="this.$route.params.isShare"
                 :isWXApplet="this.$route.params.isWXApplet">
      </v-product>
      <!-- 译会活动推荐 -->
      <v-activaty :openid="this.$route.params.openid"
                  :userid="this.$route.params.userid"
                  :todaytime="this.$route.params.todaytime"
                  :historyid="this.$route.params.historyid"
                  :isShare="this.$route.params.isShare"
                  :isWXApplet="this.$route.params.isWXApplet">
      </v-activaty>
      <v-bottomfame isSimple='1'></v-bottomfame>
    </section>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  import getProductActivity from '../../mixins/getProductActivity'
  import provideProductActivity from '../../mixins/provideProductActivity'
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  import getWeather from '../../mixins/getWeather'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  import wx from 'weixin-js-sdk'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  export default {
    name: "investmentAnalysis",
    mixins: [getWeather, initEndTime, initStartTime, insertShareHistory, getProductActivity, closeLoading,provideProductActivity],
    data() {
      return {
        todaytime: this.$route.params.todaytime,
        userid: this.$route.params.userid,
        fieldid: this.$route.params.fieldid,
        openid: this.$route.params.openid,
        isShare: this.$route.params.isShare,
        twosharetime: this.$route.params.twosharetime,
        //是否在微信端
        inWeixin: false,
        fromopenid: this.$route.params.fromopenid,
        investmentAnalysisLookId: '',
        appOpenid: this.$route.params.appOpenid,
      };
    },
    components: {
      'v-radarecharts': () => import(`../../components/common/echarts/radarEcharts`),
      'v-pieecharts': () => import(`../../components/common/echarts/pieEcharts.vue`),
      'v-product': () => import(`../../components/common/product`),
      'v-activaty': () => import(`../../components/common/activaty`),
      'v-bottomfame': () => import(`../../components/common/bottomFame`),
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['financeProductId', 'financeActivityId', 'moduleB', 'moduleL', 'productDataState', 'activityDataState', 'userInfoname', 'creditCity', 'weather','productType']),
    },
    methods: {
      wxRegCallback() {
        this.nowDate = Date.parse(new Date());
        var getDate = new Date();
        var nowMonth = getDate.getMonth() + 1;
        var nowDay = getDate.getDate();
        if (this.creditCity != '' && this.weather != '') {
          var shareTitle = nowMonth + '.' + nowDay + ' | 资产配置 | ' + this.creditCity + '市 ' + this.weather
        } else {
          var shareTitle = nowMonth + '.' + nowDay + ' | 资产配置'
        }
        if (this.isProductName && this.moduleB) {
          var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的理财产品，请点击查看';
        } else if (this.isActivityName && this.moduleL) {
          var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的行内优惠活动，请点击查看';
        } else {
          var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的资产配置，请点击查看'
        }
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/seeInvestmentAnalysis/' + this.todaytime + '/' + this.userid + '/' + this.fieldid + "/" + this.appOpenid + "/" + this.openid + '/' + this.nowDate + "/T7";
        var shareIconUrl = 'http://47.103.35.52:8181/images/appImages/1a2968848a5c5f29e45f3d3f49c1507.png';
        var parameObj = {
          title1: shareTitle, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: shareIconUrl, // 分享图标, 请自行替换，需要绝对路径
          title2: '资产配置', // 分享标题, 请自行替换
          desc2: shareDesc, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: shareIconUrl, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
    },
    created() {

      //获取是否微信
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        this.inWeixin = true;
      }
    },
    mounted() {
      wxapi.wxRegister(this.wxRegCallback);
      setTimeout(() => {
        this.setStartTime(21, this.fieldid, this.isShare);
      }, 250);
    }
  }
</script>
