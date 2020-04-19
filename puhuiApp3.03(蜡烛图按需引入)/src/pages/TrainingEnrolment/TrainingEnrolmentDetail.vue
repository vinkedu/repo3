<style lang="less" scoped>
  .TrainingEnrolmentDetail-outer {
    background: #fff;
    .top-banner {
      position: fixed;
      top: 0;
      background: #fff;
      width: 100%;
      .leftIcon {
        padding: 15px 15px;
        img {
          height: 22px;
          width: 12px;
        }
      }
      .rightTitle {
        padding: 15px 15px;
        font-size: 16px;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
      }
    }
    .TrainingEnrolmentDetail {
      padding: 10px 14px;
      .train-introduce {
        padding-bottom: 70px;
        .train-introduce-title {
          font-size: 16px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
          padding: 15px 10px 10px;
          font-weight: bold;
        }
      }
      .train-introduce-content {
        background: #fff;
        padding: 30px;
        text-align: center;
        color: #999;
        font-size: 14px;
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px;
        img {
          max-width: 236px;
        }
      }
    }
    .top-position {
      margin-top: 50px;
    }
    .button-box {
      background: #fff;
      text-align: center;
      padding: 11px 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>
<template>
  <div class="TrainingEnrolmentDetail-outer flex-wrapper">
    <div class="top-banner clearfix"
         v-if="!showshare">
      <div class="left leftIcon"
           @click="backLast">
        <img src="../../components/common/image/topBackIcon.png"
             alt="">
      </div>
      <div class="right rightTitle"
           @click="shareToWX"
           v-if="orginType==1||orginType==3">
        分享
      </div>
    </div>
    <div class="TrainingEnrolmentDetail"
         :class="{'top-position':!showshare}">
      <v-trainItem :item="trainDetail"></v-trainItem>
      <div class="train-introduce">
        <div class="train-introduce-title">
          培训简介
        </div>
        <div class="train-introduce-content"
             @click="gotoPDFDetail"
             v-if="trainDetail.pdfFirstPage">
          <img :src="trainDetail.pdfFirstPage">
        </div>
        <div class="train-introduce-content" v-else>
          暂无简介
        </div>
      </div>
    </div>
    <div class="button-box"
         v-if="orginType==1||orginType==3">
      <v-button :disabled="false"
                width="75"
                bgColor="#E72E33"
                height="45"
                @click="nowSignUp">立即报名</v-button>
    </div>
    <v-trainSignUp :qrCode="trainDetail.qrCode"></v-trainSignUp>
  </div>
</template>

<script>
    import VTrainItem from "./TrainingEnrolmentItem"
  import insertShareHistory from '../../mixins/insertShareHistory'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  import isWeixin from '../../mixins/isWeixin'
  import sourceOS from '../../mixins/sourceOS'
  const ERROR_CODE = "ERRORCODE0000";
  import trainSignUp from '../../components/common/trainSignUp/trainSignUp'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'TrainingEnrolmentDetail',
    mixins: [closeLoading, sourceOS, isWeixin, insertShareHistory],
    components: {
        'v-trainSignUp': trainSignUp,
        'v-trainItem': VTrainItem,
    },
    props: {},
    data() {
      return {
        signState: 1,
        traningid: this.$route.params.traningid,
        userid: this.$route.params.userid,
        orginType: this.$route.params.orginType,
        trainDetail: {},
        sendImgUrl: 'https://www.yihuisoft.com/appImage/train/trainIcon@3x.png'
      }
    },
    watch: {},
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['signUpState', 'userInfoname']),
      sendSubTitle() {
        return '理财经理【' + this.userInfoname + '】为您推荐的培训信息，请点击查看'
      }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SIGNUPSTATE', 'SET_USERINFONAME', 'insertShareHistory']),
      wxRegCallback() {
        var shareUrl = window.location.href;
        var parameObj = {
          title1: this.trainDetail.name, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: this.sendImgUrl, // 分享图标, 请自行替换，需要绝对路径
          title2: this.trainDetail.name, // 分享标题, 请自行替换
          desc2: this.sendSubTitle, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: this.sendImgUrl, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
      shareToWX() {
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          let parameProduct = {
            "url": window.location.href,
            "title": this.trainDetail.name,
            "subTitle": this.sendSubTitle,
            "shareImg": this.sendImgUrl,
          }
          window.webkit.messageHandlers.toGetLocationHref.postMessage(JSON.stringify(parameProduct));
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.getLocationHref(window.location.href, this.trainDetail.name, this.sendSubTitle, this.sendImgUrl);
        }
      },
      backLast() {
        if (this.orginType == 1) {
          this.$router.push({
            path:
              "/TrainingEnrolmentList/" +
              this.userid
          });
        }
        else if (this.orginType == 2) {
          this.$router.push({
            path:
              "/TrainingEnrolmentHistoryList/" +
              this.userid
          });
        }
        else if (this.orginType == 3) {
          var u = navigator.userAgent;
          if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            window.webkit.messageHandlers.toDestoryActivity.postMessage(null);
          }
          else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            Android.destoryActivity();
          }
        }

      },
      gotoPDFDetail() {
        this.$router.push({
          path:
            "/PDFReadPage/" +
            this.userid + "/" + this.traningid + '/' + this.orginType
        });
      },
      nowSignUp() {
        this.SET_SIGNUPSTATE(true);
      }
    },
    created() {
      let parames = {
        "functionName": "newTrainingService",
        "methodName": "selectTrainingById",
        "originSource": {
          "OS": this.OS,
          "version": "h5_v2.0"
        },
        "data": {
          "id": this.traningid
        }
      }
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("获取培训详情参数======>", parames);
        console.log("获取培训详情结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          this.trainDetail = result.data.training;
        }
      });
      let parame1 = {
        functionName: "userAppService",
        methodName: "selectUserBasicInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame1)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("理财经理======>", result);
          if (result.data.userInfo) {
            this.SET_USERINFONAME(result.data.userInfo.name);
          }
        }
      });
    },
    mounted() {
      wxapi.wxRegister(this.wxRegCallback);
    }
  }
</script>