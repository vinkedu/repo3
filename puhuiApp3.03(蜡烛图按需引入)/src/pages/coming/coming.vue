<style scoped>
  .btnDiv {
    margin: 20% 0;
    width: 100%;
    text-align: center;
  }
  .centerBtn {
    line-height: 1;
    height: 36px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #0292f5;
    border-radius: 2px;
    color: #0292f5;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 8px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  .centerBtn:active {
    background: #0292f5;
    color: #fff;
    font-weight: bold;
  }
  .comingContent {
    font-size: 20px;
    line-height: 50px;
  }
  .centerImg {
    height: 90px;
    width: 90px;
  }
  .centerImg1 {
    height: 190px;
    width: 460px;
  }
</style>

<template>
  <div class="btnDiv">
    <div v-if="transState">
      <img class="centerImg1"
           src="./toSee.jpeg"
           alt="">
      <div class="comingContent">您的内容正在赶来的路上</div>
      <button class="centerBtn"
              @click="checkArticle">查看文章</button>
    </div>
    <div v-else>
      <img class="centerImg"
           src="./loading.gif"
           alt="">
      <div class="comingContent">页面关闭中，请稍等</div>
    </div>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: "coming",
    mixins: [closeLoading],
    data() {
      return {
        nowDate: this.$route.params.nowDate,
        userid: this.$route.params.userid,
        shareArticleId: this.$route.params.shareArticleId,
        openid: this.$route.params.openid,
        type: this.$route.params.type,
        twosharetime: this.$route.params.twosharetime,
        appOpenid: this.$route.params.appOpenid,
        productType: this.$route.params.productType,
        transState: true
      };
    },
    methods: {
      checkArticle() {
        window.location.replace('https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/financialReport/' + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.openid + "/" + 1);
      }
    },
    created() {
      if (sessionStorage.getItem('wxClose') == null) {
        this.transState = true;
        sessionStorage.setItem('wxClose', '1');
        // 公共产品跳转
        if (this.productType != undefined) {
            if (this.twosharetime != undefined) {
              var shareUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx130b58be46a7d4f0&redirect_uri=https%3A%2F%2F' + process.env.VUE_APP_LINK + '.yihuisoft.com%2F'
                + process.env.VUE_APP_TARGET + '%2FcallBack?urlStr='
                + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.appOpenid + '/' + this.openid + '/' + this.twosharetime + '/' + this.productType+ "/" + this.type
                + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            } else {
              var shareUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx130b58be46a7d4f0&redirect_uri=https%3A%2F%2F' + process.env.VUE_APP_LINK + '.yihuisoft.com%2F'
                + process.env.VUE_APP_TARGET + '%2FcallBack?urlStr='
                + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.appOpenid + '/' + this.openid + '/' + this.productType+ "/" + this.type
                + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            }
        } else {
          //环境变量
          if (this.appOpenid != undefined) {
            if (this.twosharetime != undefined) {
              var shareUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx130b58be46a7d4f0&redirect_uri=https%3A%2F%2F' + process.env.VUE_APP_LINK + '.yihuisoft.com%2F'
                + process.env.VUE_APP_TARGET + '%2FcallBack?urlStr='
                + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.appOpenid + '/' + this.openid + '/' + this.twosharetime + "/" + this.type
                + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            } else {
              var shareUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx130b58be46a7d4f0&redirect_uri=https%3A%2F%2F' + process.env.VUE_APP_LINK + '.yihuisoft.com%2F'
                + process.env.VUE_APP_TARGET + '%2FcallBack?urlStr='
                + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.appOpenid + '/' + this.openid + "/" + this.type
                + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            }
          } else {
            if (this.twosharetime != undefined) {
              var shareUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx130b58be46a7d4f0&redirect_uri=https%3A%2F%2F' + process.env.VUE_APP_LINK + '.yihuisoft.com%2F'
                + process.env.VUE_APP_TARGET + '%2FcallBack?urlStr='
                + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.openid + '/' + this.twosharetime + "/" + this.type
                + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            } else {
              var shareUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx130b58be46a7d4f0&redirect_uri=https%3A%2F%2F' + process.env.VUE_APP_LINK + '.yihuisoft.com%2F'
                + process.env.VUE_APP_TARGET + '%2FcallBack?urlStr='
                + this.nowDate + '/' + this.userid + '/' + this.shareArticleId + '/' + this.openid + "/" + this.type
                + "&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect";
            }
          }
        }
        window.location.href = shareUrl;
      } else if (sessionStorage.getItem('wxClose') == 1) {
        this.transState = false;
        //这个可以关闭安卓系统的手机
        document.addEventListener('WeixinJSBridgeReady', function () { WeixinJSBridge.call('closeWindow'); }, false);
        //这个可以关闭ios系统的手机
        WeixinJSBridge.call('closeWindow');
      }
    },
    mounted() {

    }

  }
</script>
