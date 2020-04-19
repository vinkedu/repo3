<style lang="less" scoped>
  .courseIntroduction {
    .courseIntroduction-top{
      background: #fff;
      padding: 17px 0 7px;
      margin-top: 2px;
      .video-title{
        margin: 0 14px 10px;
        font-size:16px;
        font-weight:bold;
        color:rgba(51,51,51,1);
        line-height:23px;
      }
      .video-speaker {
        margin: 0 14px 10px;
        padding: 11.5px 17px;
        background: #fff;
        box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
        border-radius:4px;
        .video-speaker-title {
          padding-bottom: 10px;
          .video-speaker-head-portrait {
            height: 37px;
            width: 37px;
            border-radius: 50%;
            object-fit: cover;
          }
          .video-speaker-name {
            font-size: 15px;
            color: #444;
            display: flex;
            align-items: center;
            height: 37px;
            padding-left: 10px;
          }
        }
        .video-speaker-content {
          padding-top: 5px;
          font-size: 13px;
          color: #666;
          line-height: 2;
          border-top: 1px solid #DDD;
        }
      }
    }
    .courseIntroduction-bottom{
      margin-top: 8px;
      background: #fff;
      padding: 13px 0;
      .video-course-title {
          margin: 10px 14px;
          font-size: 16px;
          color: #4a4a4a;
          font-weight: bold;
          color:rgba(51,51,51,1);
          line-height:23px;
        }
      .video-course {
        margin: 10px 14px;
        padding: 11.5px 17px;
        background: #fff;
        box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
        border-radius:4px;
        .video-course-content {
          padding-top: 10px;
          font-size: 13px;
          color: #666;
          line-height: 2;
        }
      }
    }
  }
</style>
<template>
  <div class="courseIntroduction">
    <div class="courseIntroduction-top">
      <div class="video-title">{{courseInfo.name}}</div>
      <div class="video-speaker">
        <div class="video-speaker-title clearfix">
          <img :src="courseInfo.speakerImage"
              class="left video-speaker-head-portrait">
          <div class="left video-speaker-name">
            主讲人： {{courseInfo.speakerName}} </div>
        </div>
        <div class="video-speaker-content">
          {{courseInfo.speakerDescription}}
        </div>
      </div>
    </div>
    <div class="courseIntroduction-bottom">
      <div class="video-course-title">课程简介</div>
      <div class="video-course">
        <div class="video-course-content">{{courseInfo.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  import insertShareHistory from '../../../mixins/insertShareHistory'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import sourceOS from '../../../mixins/sourceOS'
  let ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'courseIntroduction',
    mixins: [sourceOS, insertShareHistory],
    components: {},
    props: {},
    data() {
      return {
        fieldid: this.$route.params.fieldid,
        userid: this.$route.params.userid,
        openid: this.$route.params.openid,
        todaytime: this.$route.params.todaytime,
      }
    },
    watch: {},
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
        ...mapState(['courseInfo','videoPayStatus']),
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_COURSEINFO','SET_VIDEOPAYSTATUS']),
      wxRegCallback() {
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/videoCourse/' + this.todaytime + '/' + this.userid + '/' + this.fieldid + "/-1/-1";
        var parameObj = {
          title1: this.courseInfo.name, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: this.courseInfo.image, // 分享图标, 请自行替换，需要绝对路径
          title2: this.courseInfo.name, // 分享标题, 请自行替换
          desc2: this.courseInfo.description, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: this.courseInfo.image, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
        getVideoPayStatus(){
          if(this.videoPayStatus==0){
              return 0;
          }else if(this.videoPayStatus==1){
              return 1;
          }
        }
    },
    created() {
      let parames = {
        functionName: "courseService",
        methodName: "selectInfoById",
        "pageNo": 1,
        "pageSize": 10,
        originSource: {
          OS: this.OS,
          version: "H5_V2.0"
        },
        data: {
          "id": this.fieldid,
            "userId":this.userid
        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("视频介绍参数======>", parames);
        console.log("视频介绍结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          this.SET_COURSEINFO(result.data.courseInfo);
          this.SET_VIDEOPAYSTATUS(result.data.payStatus);
            var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
            if (ua.match(/MicroMessenger/i) != "micromessenger") {
                var u = navigator.userAgent;
                if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                    //ios终端
                    // window.webkit.messageHandlers.getVideoPayStatus.postMessage(this.videoPayStatus);
                }else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                }
            }
          wxapi.wxRegister(this.wxRegCallback);
        }
      });
    },
    mounted() {
        window.getVideoPayStatus = this.getVideoPayStatus;
    }
  }
</script>