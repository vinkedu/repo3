<style scoped  lang="less">
  .activaty-box {
    background: #f7f7f7;
    padding: 0 14px 11px;
    height: 100%;
    .activaty {
      background: #fff;
      padding: 0 14px 0;
      .yh-title {
        font-size: 18px;
        color: #b90901;
        background: #fff;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
        .editIconBox {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          .editIcon {
            width: 10.5px;
            height: 12px;
            background-image: url("./image/bot_menu_edit@2x.png");
          }
        }
        .check-link-Box {
          display: flex;
          align-items: center;
        }
      }
      .activaty-header {
        display: flex;
        align-items: center;
        padding-bottom: 5px;
        .activaty-title {
          font-size: 16px;
        }
        .activaty-code {
          margin-left: 8px;
          width: 34px;
          height: 14px;
          background: #f7f7f7;
          line-height: 14px;
          text-align: center;
          color: #666;
        }
      }
      .shortImageBox img {
        height: 80px;
        width: 100%;
        object-fit: cover;
      }
      .activaty-content {
        padding: 10px 0 15px;
        .activaty-detail {
          color: #666;
          font-size: 13px;
          line-height: 16px;
          word-break: break-all;
        }
        .detailshort {
          height: 47px;
          overflow: hidden;
        }
        .more-button-box {
          color: #666;
          padding: 7px 10px 10px;
          .arrowD {
            margin-left: 5px;
            height: 5px;
            width: 10px;
            background-image: url("./image/arrow_d@2x.png");
            vertical-align: middle;
            margin-bottom: 3px;
          }
          .arrowU {
            margin-left: 5px;
            height: 5px;
            width: 10px;
            background-image: url("./image/arrow_u@2x.png");
            vertical-align: middle;
            margin-bottom: 3px;
          }
        }
      }
      .recomt-Content {
        padding-top: 15px;
      }
      .recomCont {
        padding: 12.5px 0 15px;
        background: #ffffff;
        .addproduct {
          opacity: 0.3;
          background: #d8d8d8;
          height: 80px;
          position: relative;
          .addproduct-font {
            position: absolute;
            top: 30px;
            width: 100%;
            text-align: center;
            opacity: 0.4;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0.89px;
          }
        }
      }
      .noproducttell {
        padding-bottom: 6px;
        font-size: 11px;
        color: #d9d9d9;
        letter-spacing: 0;
        text-align: center;
      }
    }
    .button-box {
      text-align: center;
      padding: 11px 0;
    }
  }
  .activaty-box-30{
    background: #fff;
    .activaty-30{
      padding: 0;
      .yh-title{
        color: #000;
      }
      .recomt-Content-30{
        margin-top: 15px;
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px;
        padding: 0 16px 15px;
      }
    }
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
</style>

<template>
  <div>
    <div class="activaty-box"
         v-if="moduleL" :class="{'activaty-box-30':versionStyle==2}">
      <div class="activaty" :class="{'activaty-30':versionStyle==2}">
        <div class="yh-title clearfloat"
             v-if="weixinforyou">
          {{userInfoname}}为您推荐活动
          <div class="right editIconBox"
               @click="enterActivaty"
               v-if="haveActivatyIcon && historyid!=1">
            <i class="editIcon"></i>
          </div>
          <div class="right check-link-Box"
               v-if="isWeixin && activityUrl!=null  && activityUrl!='' && historyid!=1">
            <v-button :disabled="false"
                      width="100"
                      bgColor="#b90901"
                      height="22"
                      class="yh-small"
                      @click="checkDetail">查看详情</v-button>
          </div>
        </div>
        <div :class="{'recomt-Content-30':versionStyle==2}" class="recomt-Content"
             v-if="haveActivaty" >
          <v-namecodeline :name='activityName'
                          :code='activityKeyword'
                          :showCode='showActivatyCode' origin='activity'></v-namecodeline>
          <div class="shortImageBox"
               v-if="activityImage!=null">
            <img :src="activityImage"
                 alt=""
                 :large="activityImage"
                 preview="1"
                 preview-text="">
          </div>
          <div class="activaty-content">
            <div>
              <div :class="{detailshort:showShort}"
                   class="activaty-detail">
                <div class="detailActivaty"
                     v-html="transBr(activityDesc)">
                </div>
              </div>
              <div v-if="moreButtonShow"
                   class="more-button-box clearfix">
                <div class="right"
                     @click="transClick"
                     v-if="showMore">更多<i class="arrowD"></i></div>
                <div class="right"
                     @click="transClick"
                     v-else>收起<i class="arrowU"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="recomCont"
             v-if="noActivaty">
          <div class="addproduct"
               @click="enterActivaty">
            <div class="addproduct-font">添加活动</div>
          </div>
        </div>
        <div class="noproducttell"
             v-if="noActivaty">若没有添加推荐的活动，分享后此模块将会隐藏</div>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="moduleL&&versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import wx from 'weixin-js-sdk'
  import namecodeline from '../../components/common/NameCodeLine'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'activaty',
    mixins: [sourceOS],
    components: {
      'v-namecodeline': namecodeline
    },
    props: {
      //微信用户ID
      openid: {
        type: String,
      },
      //是否是历史数据
      historyid: {
        type: String
      },
      //时间戳
      todaytime: {
        type: String
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //是否为分享文章
      isShare: {
        type: String,
      },
      //小程序
      isWXApplet: {
        type: String
      },
      // 样式版本
      versionStyle:{
        type:String,
        default:'1'
      }
    },
    data() {
      return {
        //有活动
        haveActivaty: true,
        //没有活动
        noActivaty: false,
        //微信端显示
        isWeixin: false,
        //活动更改图标显示
        haveActivatyIcon: true,
        //微信信息
        weixinforyou: true,
        //显示活动编号
        showActivatyCode: true,
        //显示短文
        showShort: false,
        //显示按钮
        moreButtonShow: false,
        //按钮状态转换
        showMore: true,
        //活动图片
        activatyImage: '',
        //活动图片刷新时间
        phototimer: '',
        //活动关键词
        activityKeyword: '',
        //显示活动关键词
        showactivityKeyword: false,
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
      }
    },
    created() {
      //判断微信环境
      var ua = navigator.userAgent.toLowerCase();
      if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
        this.isWeixin = true;
      } else {
        //活动基本信息获取
        let parame2 = {
          functionName: "activityService",
          methodName: "selectActivityBasicInfo",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          data: {
            userId: this.userid
          },
        };
        this.$post(JSON.stringify(parame2)).then(result => {
          if (result.errorCode == ERROR_CODE) {
            console.log('活动信息', result)
            if (result.data.activity != null) {
              this.haveActivaty = true;
              this.haveActivatyIcon = true;
              //微信端不显示编辑按钮
              var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
              if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
                this.haveActivatyIcon = false;
              }
              this.noActivaty = false;
              //判断是否显示活动关键词
              if (result.data.activity.activityKeyword != null) {
                this.activityKeyword = result.data.activity.activityKeyword;
                this.showactivityKeyword = true;
              }
              //活动ID
              this.SET_FINANCEACTIVITYID(result.data.activity.id);
              //活动名
              this.activityName = result.data.activity.activityName;
              //活动描述
              this.activityDesc = result.data.activity.activityDesc;
              setTimeout(() => {
                this.fastHeightChange();
              }, 50);
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
              this.noActivaty = true;
              var ua = navigator.userAgent.toLowerCase();
              if (ua.match(/MicroMessenger/i) == "micromessenger") {
                this.noActivaty = false;
                this.weixinforyou = false;
              }
              this.haveActivatyIcon = false;
            }
            setTimeout(() => {
              this.SET_ACTIVITYDATASTATE();
            }, 250);
          }
        });
      }
      // 用户基本信息获取
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
          this.SET_USERINFONAME(result.data.userInfo.name);
        }
      });

    },
    watch: {
      financeActivityDetail: {
        deep: true,
        handler: function (newV, oldV) {
          console.log('活动信息', this.financeActivityDetail);
          if (this.financeActivityDetail != null) {
            this.haveActivaty = true;
            this.haveActivatyIcon = true;
            //微信端不显示编辑按钮
            var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
            if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
              this.haveActivatyIcon = false;
            }
            this.noActivaty = false;
            //判断是否显示活动关键词
            if (this.financeActivityDetail.activityKeyword != null) {
              this.activityKeyword = this.financeActivityDetail.activityKeyword;
              this.showactivityKeyword = true;
            }
            //活动名
            this.activityName = this.financeActivityDetail.activityName;
            //活动描述
            this.activityDesc = this.financeActivityDetail.activityDesc;
            setTimeout(() => {
              this.fastHeightChange();
            }, 50);
            //活动链接
            this.activityUrl = this.financeActivityDetail.activityUrl;
            //活动图片
            this.activityImage = this.financeActivityDetail.activityImage;
            if (this.financeActivityDetail.activityImage === null) {
              this.haveActivityImage = false;
            }
            //活动期限
            this.activityTimeLimit = this.financeActivityDetail.activityTimeLimit;
            if (this.financeActivityDetail.activityTimeLimit === null) {
              this.haveActivityTimeLimit = false;
            }
          } else {
            this.haveActivaty = false;
            this.noActivaty = true;
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
              this.noActivaty = false;
              this.weixinforyou = false;
            }
            this.haveActivatyIcon = false;
          }
        }
      },
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['creditCity', 'moduleL', 'userInfoname', 'financeActivityDetail']),
      changebleproductImg: function () {
        var timestamp = new Date().getTime();
        return this.activatyImage + '?v=' + timestamp;
      },

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


    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_USERINFONAME', 'SET_FINANCEACTIVITYID', 'SET_ACTIVITYDATASTATE']),
      transBr(val) {
        return (val + '').replace(/\n/g, "<br/>")
      },
      //查看活动详情
      checkDetail() {
        window.location.href = this.activityUrl;
      },
      //查看活动
      enterActivaty() {
        if (this.isWXApplet == 1) {
          //跳转小程序的页面

        } else {
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            //android终端
            Android.goAddActActivity();
          } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            //ios终端
            window.webkit.messageHandlers.toAddActivityVc.postMessage(null);
            app.toAddActivityVc();
          }
        }
      },
      //关闭大图
      closebigimage() {

      },
      //按钮名称变化
      transClick() {
        this.showMore = !this.showMore;
        this.showShort = !this.showShort;
      },
      //内容折叠
      fastHeightChange() {
        this.$nextTick(() => {
          //获取屏幕宽度(viewport)
          let htmlWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
          if (htmlWidth > 750) {
            htmlWidth = 750;
          }
          let pxTorem = htmlWidth / 375 * 47;
          if (document.getElementsByClassName("detailActivaty")[0].offsetHeight <= pxTorem) {
            this.showShort = false;
            this.moreButtonShow = false;
          }
          else {
            this.showShort = true;
            this.moreButtonShow = true;
          }
          this.showMore = true;
        });

      },
    }

  }
</script>




