<style scoped lang="less">
  .flex-wrapper {
    background: #fff;
    .outer-shareman-box {
      padding-bottom: 20px;
      background: #fff;
      .serve-orgn {
        background: #fff;
        margin: 0 13px;
        padding: 10px 0;
        border-top: 1px solid #ddd;
        .serve-orgn-title {
          font-size: 16px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 18px;
          padding: 5px 0 10px;
        }
        .serve-orgn-content {
          font-size: 14px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: rgba(102, 102, 102, 1);
          line-height: 21px;
          text-align: justify;
          .serve-orgn-item{
            padding-bottom: 8px;
          }
        }
      }
      .personal-photo-list{
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px;
        margin: 13px 14px;
      }
      .personphoto {
        background: #fff;
        padding: 13px 13px;
        .personphotofont {
          font-size: 16px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 18px;
        }
      }
      .education-serve-box{
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px;
        margin: 0 14px;
      }
      .education-experience {
        background: #fff;
        padding: 13px 13px;
        .education-experience-title {
          font-size: 16px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 21px;
        }
        .education-experience-content {
          max-width: 250px;
          font-size: 14px;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          line-height: 21px;
          text-align: justify;
          padding-left: 5px;
          .educationitem{
            padding-bottom: 8px;
          }
        }
      }
      .tab,
      .tab1 {
        margin: 0 auto;
        background: #fff;
        height: 104px;
        width: 347px;
        white-space: nowrap;
        overflow: hidden;
        background: #fff;
        .tab_content,
        .tab_content1 {
          height: 104px;
          margin-left: 14px;
          .tab_item,
          .tab_item1 {
            display: inline-block;
            height: 94px;
            width: 123px;
            margin: 0 0 0 11px;
            img {
              width: 123px;
              height: 94px;
              object-fit: cover;
              border-radius: 2px;
            }
          }
        }
      }
      .video {
        margin: 13px 14px;
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px;
        .mod-play1er {
          position: relative;
          height: 182px;
        }
        .mod-play1er .play1er {
          top: 0;
          left: 0;
          right: 0;
          background: #000;
        }

        .mod-play1er .play1er-box {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 182px;
          overflow: hidden;
        }

        .mod-play1er video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0 none;
          background: #000;
          overflow: hidden;
          box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
          border-radius:4px;
        }
      }
      .button-box {
        text-align: center;
        padding: 11px 0;
        background: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
      }
    }
    .WXMarginBottom {
      padding-bottom: 70px;
    }
  }
</style>

<template>
  <div class="flex-wrapper">
    <transition name="move">
      <div @touchend="touchEndTime()" class="outer-shareman-box"
               :class="{'WXMarginBottom':showshare}">
        <!-- 用户基本信息 -->
        <v-oldpeoplecard :userid="this.$route.params.userid"></v-oldpeoplecard>
        <div class="video"
             v-if="videoUrl">
          <div class="mod-play1er">
            <div class="play1er ">
              <div class="play1er-box">
                <video :src="videoUrl"
                       type="application/x-mpegURL"
                       poster=""
                       controls="controls"
                       webkit-playsinline="true"
                       playsinline="true"
                       id="video"></video>
              </div>
            </div>
          </div>
        </div>
        <div class="serve-orgn"
             v-if="serveOrgn">
          <div class="serve-orgn-title">
            服务机构
          </div>
          <div class="serve-orgn-content">
            {{serveOrgn}}
          </div>
        </div>
        <!-- 个人图片展示 -->
        <div class="personal-photo-list">
          <div class="personphoto"
              v-show="lastGameList.length!=0">
            <span class="personphotofont">个人照片</span>
          </div>
          <div class="tab"
              ref="tab"
              v-if="lastGameList.length!=0">
            <ul class="tab_content"
                ref="tabcontent">
              <li class="tab_item"
                  v-for="(item, index) in lastGameList"
                  ref="tabitem"
                  :key="index">
                <img v-lazy="item"
                    @click="showbigimage(item)"
                    :large="item"
                    preview="0"
                    preview-text="">
              </li>
            </ul>
          </div>
        </div>
        <!-- 教育经历 -->
        <div class="education-experience clearfix"
             v-show="jiaoyujingli">
          <div class="left education-experience-title">
            教育经历:
          </div>
          <div class="left education-experience-content">
            <div class="educationitem clearfix word-wrap"
                 v-for="(item,index) in eduListone"
                 :key="index">{{item}}
            </div>
          </div>
        </div>
        <div class="education-serve-box">
          <!-- 专业经历 -->
          <div class="education-experience clearfix"
              v-show="cfStr">
            <div class="left education-experience-title">
              专业证书:
            </div>
            <div class="left education-experience-content word-wrap">
              {{cfStr}}
            </div>
          </div>
          <!-- 工作履历 -->
          <div class="serve-orgn"
              v-if="worklist.length!=0">
            <div class="serve-orgn-title">
              工作履历
            </div>
            <div class="serve-orgn-content">
              <div class="serve-orgn-item clearfix word-wrap"
                  v-for="(item,index) in worklist"
                  :key="index">{{item}}
              </div>
            </div>
          </div>
        </div>
        <v-orderInformation></v-orderInformation>
        <!-- 预约 -->
        <div class="button-box"
             v-if="showshare">
          <v-button :disabled="false"
                    width="80"
                    bgColor="#cd0000"
                    height="45"
                    @click="onlineOrder">预约理财经理</v-button>
          <!-- <v-button :disabled="false"
                    width="80"
                    bgColor="#cd0000"
                    height="45"
                    @click="shareManageMoneyProduct"
                    v-else>分享</v-button> -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import orderInformation from '../../components/common/headLink/orderInformation'
  import isWeixin from '../../mixins/isWeixin'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import sourceOS from '../../mixins/sourceOS'
  import closeLoading from '../../mixins/closeLoading'
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  import oldpeoplecard from '../../components/common/oldPeopleCard'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "shareman",
    mixins: [initEndTime, initStartTime, insertShareHistory, closeLoading, sourceOS, isWeixin],
    components: {
      'v-oldpeoplecard': oldpeoplecard,
      'v-orderInformation': orderInformation,
    },
    data() {
      return {
        cfStr: '',
        videoUrl: '',
        orgnCode: '',
        nowDate: '',
        //查看时间
        nowSameTime: '',
        sharemanLookId: '',
        isShare: this.$route.params.isShare,
        //安卓端
        isAndroid: false,
        //照片
        gerenzhaopian: false,
        //教育经历
        jiaoyujingli: false,
        //专业证书
        zhuanyezhengshu: false,
        //工作经历
        gongzuovli: false,
        //教育展示
        eduListone: [],
        //工作展示
        worklist: [],
        //已看
        lastGameList1: [],
        //展示具体图片
        lastGameList: [],
        //路径参数
        userid: this.$route.params.userid,
        todaytime: this.$route.params.todaytime,
        fieldid: this.$route.params.fieldid,
        openid: this.$route.params.openid,
        fromopenid: this.$route.params.fromopenid,
        twosharetime: this.$route.params.twosharetime,
        //展示图标
        showovercheck: true,
        //自述
        abstractStr: '具有专业的理财业务知识，通晓金融理论与政策，熟知各项银行产品，对市场变化反应灵敏。能针对客户需求，为客户提供专业的理财资讯与定制化资产配置方案，真正做到让客户满意。',
        professionalExperienceList: ['具有基金从业职格'],
      };
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['headPortrait']),
      title: function () {
        return this.userInfoname + '的名片'
      },
      //文章id
      fileId: function () {
        if (this.fieldid != -1) {
          return this.fieldid;
        } else {
          return "";
        }
      },
      serveOrgn: function () {
        if (this.orgnCode == 3) {
          return '瑞丰银行长期以来扎根经济沃土，服务三农小微，始终坚守定位，与区域经济血浓于水。自2008年起实施零售银行转型，规划实施“三步走”战略愿景，即2009年-2014年，打造“区域首选零售银行”；2015年-2019年，打造“全国一流农村商业银行”；2020年-2024年，真正夯实“百年金融老店”基础。'
        } else if (this.orgnCode == 2) {
          return '南京银行始终坚持做强做精做出特色的发展道路，各项业务平稳较快增长，经营效益稳步提升，风险管控不断加强，资产质量保持稳定，基础管理持续深化。南京银行持续深化机构战略布局。自2007年设立第一家分行以来，跨区域经营不断推进，先后设立了泰州、上海、无锡、北京、南通、杭州、扬州、苏州、常州、盐城、南京、镇江、宿迁、连云港、江北新区、徐州、淮安等17家分行,实现布局京沪杭及江苏省内设区市全覆盖。'
        } else {
          return '';
        }
      }

    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_HEADPORTRAIT', 'SET_SHOWORDER']),
      wxRegCallback() {
        this.nowDate = Date.parse(new Date());
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/see/' + this.todaytime + '/' + this.userid + '/' + this.fieldid + "/" + this.openid + '/' + this.nowDate + "/T3";
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
      //展示大图
      showbigimage(item) {
      },
      //关闭图片
      closebigimage() {
      },
      //初始化工作履历tab栏
      InitTabScroll() {
        if (this.lastGameList) {
          let imgW = this.$refs.tabitem[0].clientWidth;
          console.log(this.$refs.tabitem[0].clientWidth);
          let width = 14 + (11 + imgW) * this.lastGameList.length;
          this.$refs.tabcontent.style.width = width + "px";
          this.$nextTick(() => {
            if (!this.scroll1) {
              this.scroll1 = new BScroll(this.$refs.tab, {
                scrollX: 0,
                // click:true,
                scrollX: true,
                scrollY: false,
                eventPassthrough: "vertical"
              });
            } else {
              this.scroll1.refresh();
            }
          });
        }
      },
      // 预约理财经理
      onlineOrder() {
        this.SET_SHOWORDER(true);
      },
    },
    created() {
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        this.isWeixin = true;
      }
      var u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        //android终端
        this.isAndroid = true;
      }
      //获取用户基本信息
      let parame1 = {
        functionName: "userAppService",
        methodName: "queryUserInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame1)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          console.log("理财经理详细信息======>", result);
          if (result.data.userInfo) {
            this.orgnCode = result.data.userInfo.orgnCode;
            this.userInfoname = result.data.userInfo.name;
            if (result.data.userInfo.headPortrait != null) {
              this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
            } else {
              this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
            }
            this.abstractStr = result.data.userInfo.abstractStr;
          }
          this.cfStr = result.data.cfStr;
          this.videoUrl = result.data.videoUrl;
          if (result.data.photoList.length != 0) {
            this.gerenzhaopian = true;
            for (var i = 0; i < result.data.photoList.length; i++) {
              this.lastGameList.push(result.data.photoList[i].image);
            }
            setTimeout(() => {
              this.$nextTick(() => {
                this.InitTabScroll();
              });
            }, 250);

          }
          if (result.data.certificateList.length != 0) {
            this.zhuanyezhengshu = true;
            for (var i = 0; i < result.data.certificateList.length; i++) {
              this.lastGameList1.push(result.data.certificateList[i].image);
            }
          }
          console.log(result.data.certificateList.length);
          if (result.data.jobResumeList.length != 0) {
            this.gongzuovli = true;
            for (var i = 0; i < result.data.jobResumeList.length; i++) {
              this.worklist.push(result.data.jobResumeList[i].jobResume);
            }
          }
          if (result.data.eduList.length != 0) {
            this.jiaoyujingli = true;
            for (var i = 0; i < result.data.eduList.length; i++) {
              this.eduListone.push(result.data.eduList[i].eduUndergo);
            }
          }
        }
      });
    },
    mounted() {
      setTimeout(() => {
        this.setStartTime(9, this.fileId, this.isShare);

      }, 250);
      wxapi.wxRegister(this.wxRegCallback);
      //清除定时器
      var phototimer = setInterval(() => {
        //预览图片刷新
        this.$previewRefresh();
      }, 500);
      //监听关闭图片查看器
      this.$preview.on('close', () => {//close只是众多事件名的其中一个，更多请查看文档
        clearInterval(phototimer);
        console.log('图片查看器被关闭');
      });

    }
  };
</script>



