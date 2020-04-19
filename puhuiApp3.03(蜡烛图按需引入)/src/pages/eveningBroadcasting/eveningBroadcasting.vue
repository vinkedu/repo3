<style lang="less" scoped>
  .broadcasting {
    background: #fff;
    .broadcasting-first-title {
      background: #fff;
      font-size: 21px;
      padding: 15px 15px 12.5px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
</style>

<template>
  <div class="broadcasting flex-wrapper"
       @touchend="touchEndTime()">
    <!-- 头部固定联系栏 -->
    <v-linkman :userid="this.$route.params.userid"
               type="3"
               originType='eveningBoardCasting'
               :isWXApplet="this.$route.params.isWXApplet"></v-linkman>
    <div class="broadcasting-first-title"
         v-if="inWeixin">
      晚间播报
    </div>
    <v-player :userid="this.$route.params.userid"
              :todaytime="this.$route.params.todaytime"
              :fieldid="this.$route.params.fieldid">
    </v-player>
    <v-product :openid="this.$route.params.openid"
               :userid="this.$route.params.userid"
               :todaytime="this.$route.params.todaytime"
               :historyid="this.$route.params.historyid"
               :isShare="this.$route.params.isShare"
               :isWXApplet="this.$route.params.isWXApplet"
               versionStyle="2">
    </v-product>
    <!-- 译会活动推荐 -->
    <v-activaty :openid="this.$route.params.openid"
                :userid="this.$route.params.userid"
                :todaytime="this.$route.params.todaytime"
                :historyid="this.$route.params.historyid"
                :isShare="this.$route.params.isShare"
                :isWXApplet="this.$route.params.isWXApplet"
                versionStyle="2">
    </v-activaty>
    <div v-if="!inWeixin">
      <!-- 分享至微信朋友及朋友圈 -->
      <v-sharetoweixin :fieldid="this.$route.params.fieldid"
                       :userid="this.$route.params.userid">
      </v-sharetoweixin>
      <v-historycasting :todaytime="this.$route.params.todaytime"
                        :userid="this.$route.params.userid"
                        :fieldid="this.$route.params.fieldid"
                        :openid="this.$route.params.openid"
                        :isShare="this.$route.params.isShare"
                        :historyid="this.$route.params.historyid"
                        :isWXApplet="this.$route.params.isWXApplet">
      </v-historycasting>
    </div>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  import getProductActivity from '../../mixins/getProductActivity'
  import provideProductActivity from '../../mixins/provideProductActivity'
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  import wx from 'weixin-js-sdk'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "eveningBroadcasting",
    mixins: [initEndTime, initStartTime, insertShareHistory, getProductActivity, closeLoading,provideProductActivity],
    data() {
      return {
        //查看时间
        nowSameTime: '',
        todaytime: this.$route.params.todaytime,
        userid: this.$route.params.userid,
        //是否在微信端
        inWeixin: false,
        fieldid: this.$route.params.fieldid,
        broadTitle: '',
        openid: this.$route.params.openid,
        //有产品名
        isProductName: false,
        //有活动名
        isActivityName: false,
        fromopenid: this.$route.params.fromopenid,
        isShare: this.$route.params.isShare,
        twosharetime: this.$route.params.twosharetime,
        //晚报浏览ID
        eveningBroadcastingLookId: '',
        nowDate: '',
      };
    },
    components: {
      'v-player': () => import(`../../components/common/player/player`),
      'v-product': () => import(`../../components/common/product`),
      'v-activaty': () => import(`../../components/common/activaty`),
      'v-sharetoweixin': () => import(`../../components/common/shareToWeixin`),
      'v-historycasting': () => import(`../../components/common/historyCasting`),
      'v-linkman': () => import(`../../components/common/headLink/headLink`),
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['financeProductId', 'financeActivityId', 'moduleB', 'moduleL', 'productDataState', 'activityDataState', 'userInfoname','productType']),
    },
    methods: {
      wxRegCallback() {
        this.nowDate = Date.parse(new Date());
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/see/' + this.todaytime + '/' + this.userid + '/' + this.fieldid + "/" + this.openid + '/' + this.nowDate + "/T6";
        var shareIconUrl = 'http://47.103.35.52:8181/images/appImages/wanbaoyinpin.png';
        if (this.isProductName && this.moduleB) {
          var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的理财产品，请点击查看';
        } else if (this.isActivityName && this.moduleL) {
          var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的行内优惠活动，请点击查看';
        } else {
          var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的晚间播报，请点击查看'
        }
        var parameObj = {
          title1: this.broadTitle, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: shareIconUrl, // 分享图标, 请自行替换，需要绝对路径
          title2: this.broadTitle, // 分享标题, 请自行替换
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
        this.setStartTime(20, this.fieldid, this.isShare)
      }, 250);
    },
  }
</script>
