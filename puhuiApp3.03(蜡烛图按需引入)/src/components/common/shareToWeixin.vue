<style lang="less" scoped>
  .share-to-weixin {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 445px;
    background: #f7f7f7;
    padding: 10px 0 0;
    .share-to-weixin-box {
      background: #fff;
      padding: 11px 14px 11px 15.5px;
      .share-title {
        font-size: 16px;
      }
      .share-icon {
        width: 196px;
        margin: 0 auto;
        .share-to-app-message-icon,
        .share-to-timing-line-icon {
          text-align: center;
          color: #666;
          font-size: 11px;
          .icon {
            height: 37px;
            width: 37px;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="share-to-weixin">
    <div class="share-to-weixin-box">
      <div class="share-icon clearfix">
        <div class="share-to-app-message-icon left"
             @click="shareToWeixin(1)">
          <img src="./image/微信.png"
               class="icon">
          <div>分享给朋友</div>
        </div>
        <div class="share-to-timing-line-icon right"
             @click="shareToWeixin(2)">
          <img src="./image/朋友圈.png"
               class="icon">
          <div>分享至朋友圈</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  export default {
    name: "shareToWeixin",
    mixins: [sourceOS],
    props: {
      //播报id
      fieldid: {
        type: String
      },
      //理财经理ID
      userid: {
        type: String,
      },
    },
    data() {
      return {
        //有产品名
        isProductName: false,
        //有活动名
        isActivityName: false,
      };
    },
    components: {

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['newBroadCast', 'moduleB', 'moduleL', 'userInfoname']),
    },
    methods: {
      shareToWeixin(index) {
        if (this.isProductName && this.moduleB) {
          var subTitle = '向您推荐新的理财产品，请点击查看';
        } else if (this.isActivityName && this.moduleL) {
          var subTitle = '向您推荐新的行内优惠活动，请点击查看';
        } else {
          var subTitle = '向您推荐新的晚间播报，请点击查看'
        }
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          var parameObject = {
            index: index,
            fieldid: this.fieldid,
            audiourl: this.newBroadCast.audioUrl,
            broadTitle: this.newBroadCast.broadTitle,
            subTitle: subTitle
          }
          window.webkit.messageHandlers.toBroadDict.postMessage(parameObject);
          // app.toBroadDict(parameObject);
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.goShareReport(index, this.fieldid, this.newBroadCast.audioUrl, this.newBroadCast.broadTitle, subTitle);
        }
      },


    },
    created() {
      //产品基本信息获取
      let parame2 = {
        functionName: "productService",
        methodName: "selectProductBasicInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame2)).then(result => {
        console.log('产品详情', result);
        if (result.errorCode == ERROR_CODE) {
          if (result.data.product != null) {
            this.isProductName = true;
          }
        }
      });
      //活动基本信息获取
      let parame3 = {
        functionName: "activityService",
        methodName: "selectActivityBasicInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame3)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          this.codetype = result.data.codeType;
          console.log('活动信息', result)
          if (result.data.activity != null) {
            this.isActivityName = true;
          }
        }
      });
    },
    mounted() {

    },
  }
</script>
