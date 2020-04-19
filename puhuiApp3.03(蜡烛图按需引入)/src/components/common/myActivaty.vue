<style scoped  lang="less">
  .bank-product {
    text-align: left;
    padding: 15px;
    background: #fff;
    margin: 5px 0;
    font-size: 14px;
    color: #666666;
    letter-spacing: -0.34px;
    .text-center {
      text-align: center;
      font-weight: bold;
    }
  }
  .activaty-box {
    background: #f7f7f7;
    padding: 11px 14px;
    height: 100%;
    .activaty {
      background: #fff;
      padding: 4px 14px 20px;
      .activaty-during {
        padding-bottom: 10px;
        font-size: 13px;
      }
      .activaty-image-box img {
        height: 180px;
        width: 100%;
        object-fit: cover;
      }
      .activaty-content {
        padding: 10px 0;
        .activaty-content-title {
          font-size: 14px;
          padding-bottom: 10px;
        }
        .activaty-content-detail {
          color: #666;
          font-size: 13px;
          overflow: hidden;
          white-space: normal;
          word-wrap: break-word;
          word-break: break-all;
          text-overflow: ellipsis;
        }
      }
    }
    .button-box {
      text-align: center;
      padding: 11px 0;
    }
  }

  .noshow {
    position: absolute;
    top: 0;
    width: 100px;
    height: 100px;
    opacity: 0;
    .htmlToImage {
      background: #45b856;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .activaty-keyword-box {
        text-align: center;
        font-size: 23px;
        color: #fff;
        font-family: Microsoft Yahei;
      }
    }
  }
</style>

<template>
  <div>
    <div class="activaty-box"
         v-if="haveActivaty"
         @touchend="touchEndTime()">
      <div class="activaty">
        <v-namecodeline :name='activityName'
                        :code='activityKeyword'
                        :showCode='showActivatyCode'
                        origin='myActivity'></v-namecodeline>
        <div class="activaty-during">活动期限 : {{activityTimeLimit}}</div>
        <div class="activaty-image-box"
             v-if="activityImage!=null">
          <img :src="activityImage"
               alt=""
               :large="activityImage"
               preview="1"
               preview-text="">
        </div>
        <div class="activaty-content">
          <div class="activaty-content-title">活动内容</div>
          <div class="activaty-content-detail">
            {{activityDesc}}
          </div>
        </div>
      </div>
      <div class="button-box"
           v-if="activityUrl!=''&&activityUrl!=null">
        <v-button :disabled="false"
                  width="80"
                  bgColor="#cd0000"
                  height="45"
                  @click="checkDetail">查看活动链接</v-button>
      </div>
    </div>
    <div class="bank-product"
         v-if="codetype==400 || !haveActivaty">
      <p class="text-center">该活动已过期</p>
    </div>
    <div class="noshow">
      <div class="canvasImg"
           ref="imageWrapper">
        <div class="htmlToImage">
          <div class="activaty-keyword-box">{{activityKeyword}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import getShareImgUrl from '../../mixins/getShareImgUrl'
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  import getWeather from '../../mixins/getWeather'
  import wx from 'weixin-js-sdk'
  import html2canvas from 'html2canvas'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  import namecodeline from '../../components/common/NameCodeLine'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'myActivaty',
    mixins: [getWeather, initEndTime, initStartTime, insertShareHistory, getShareImgUrl, sourceOS],
    components: {
      'v-namecodeline': namecodeline
    },
    props: {
      //用户ID
      userid: {
        type: String
      },
      //上一个微信查看用户
      fromopenid: {
        type: String
      },
      //微信用户ID
      openid: {
        type: String
      },
      //时间戳
      todaytime: {
        type: String
      },
      //是否为分享活动
      isShare: {
        type: String,
      },
      //活动ID
      fieldid: {
        type: String,
      },
      //二次分享时间
      twosharetime: {
        type: String
      },
      //是否是历史数据
      historyid: {
        type: String
      },
      //小程序
      isWXApplet: {
        type: String
      },
    },
    data() {
      return {
        //生成图片
        dataURL: '',
        //显示活动编号
        showActivatyCode: true,
        //活动图片刷新时间
        phototimer: '',
        //是否有活动
        haveActivaty: true,
        //活动关键词
        activityKeyword: '',
        //活动ID
        activityId: '',
        //活动名称
        activityName: '',
        //活动描述
        activityDesc: '',
        //活动链接
        activityUrl: '',
        //活动图片
        activityImage: '',
        //显示活动图片
        haveActivityImage: true,
        //活动期限
        activityTimeLimit: '',
        //显示活动期限
        haveActivityTimeLimit: true,
        //数据状态
        codetype: 200,
        //查看时间
        nowSameTime: '',

        //活动浏览ID
        activityLookId: '',
        //分享时间
        nowDate: '',
      }
    },
    created() {
      //活动基本信息获取
      let parame2 = {
        functionName: "activityService",
        methodName: "selectActivityById",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          id: this.fieldid,
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame2)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          this.codetype = result.data.codeType;
          console.log('获取具体活动信息', result)
          if (result.data.activity != null) {
            this.haveActivaty = true;
            //判断是否显示活动关键词
            if (result.data.activity.activityKeyword != null) {
              this.activityKeyword = result.data.activity.activityKeyword;
            }
            //活动ID
            this.activityId = result.data.activity.id;
            //活动名
            this.activityName = result.data.activity.activityName;
            //活动描述
            this.activityDesc = result.data.activity.activityDesc;
            //活动链接
            this.activityUrl = result.data.activity.activityUrl;
            //活动图片
            this.activityImage = result.data.activity.activityImage;
            if (result.data.activity.activityImage === null) {
              this.haveActivityImage = false;
            }
            //活动期限
            this.activityTimeLimit = result.data.activity.activityTimeLimit;
            if (result.data.activity.activityTimeLimit === null) {
              this.haveActivityTimeLimit = false;
            }
          } else {
            this.haveActivaty = false;
          }
        }
      });
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['headPortrait', 'userInfoname', 'creditCity', 'weather']),
    },
    mounted() {
      //清除定时器
      clearInterval(this.phototimer);
      this.phototimer = setInterval(() => {
        //预览图片刷新
        this.$previewRefresh();
      }, 500);
      //监听关闭图片查看器
      this.$preview.on('close', () => {//close只是众多事件名的其中一个，更多请查看文档
        clearInterval(this.phototimer);
        console.log('图片查看器被关闭');
        this.closebigimage();
      })
      wxapi.wxRegister(this.wxRegCallback);
      setTimeout(() => {
        this.setStartTime(19, this.activityId, this.isShare);
      }, 250);
    },
    methods: {
      wxRegCallback() {
        //二次分享
        this.nowDate = Date.parse(new Date());
        var getDate = new Date();
        var nowMonth = getDate.getMonth() + 1;
        var nowDay = getDate.getDate();
        if (this.creditCity != '' && this.weather != '') {
          var addTitle = nowMonth + '.' + nowDay + ' | 今日财经 | ' + this.creditCity + '市 ' + this.weather + ' | ' + this.activityName
        } else {
          var addTitle = nowMonth + '.' + nowDay + ' | 今日财经 | ' + this.activityName
        }
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/see/' + this.nowDate + '/' + this.userid + '/' + this.activityId + "/" + this.openid + '/' + this.nowDate + "/T5";
        var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的行内优惠活动，请点击查看';
        var parameObj = {
          title1: addTitle, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: this.dataURL, // 分享图标, 请自行替换，需要绝对路径
          title2: this.activityName, // 分享标题, 请自行替换
          desc2: shareDesc, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: this.dataURL, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
      //查看活动详情
      checkDetail() {
        window.location.href = this.activityUrl;
      },
      //关闭大图
      closebigimage() {

      },
    }

  }
</script>




