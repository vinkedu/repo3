<style scoped  lang="less">
  .outer {
    padding-bottom: 54px;
    .shareWeixin {
      position: fixed;
      left: 0;
      bottom: 0;
      height: 54px;
      width: 100%;
      background: #fff;
      z-index: 2;
      text-align: center;
      padding-right: 7px;
      .icon-box {
        display: flex;
        align-items: center;
        height: 54px;
        padding: 8px;
        .thumbs-icon {
          height: 17px;
          width: 21px;
        }
        .share-icon {
          height: 17px;
          width: 18px;
        }
      }
      .good-number {
        display: flex;
        align-items: center;
        height: 100%;
        padding-right: 26px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(112, 112, 112, 1);
      }
    }
  }
</style>

<template>
  <div class="outer" v-if="!showshare&&videoPayStatus!=0">
    <div class="shareWeixin clearfix">
      <div class="right icon-box"
           @click="shareToWeixin">
        <img src="../image/fenxiang-3 copy@2x.png"
             class="share-icon"
             alt="">
      </div>
      <div class="right good-number">
        {{courseInfo.goodNum}}
      </div>
      <div class="right icon-box"
           v-if="likeStatus==false"
           @click="addLikeRecord">
        <img src="../image/shoucang@2x.png"
             class="thumbs-icon"
             alt="">
      </div>
      <div class="right icon-box"
           v-else>
        <img src="../image/aixin@2x.png"
             class="thumbs-icon"
             alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import isWeixin from '../../../mixins/isWeixin'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  import sourceOS from '../../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'videothumbsUp',
    mixins: [sourceOS,isWeixin],
    props: {

    },
    data() {
      return {
        fieldid: this.$route.params.fieldid,
        userid: this.$route.params.userid,
        likeStatus: false,
      }
    },
    watch: {

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['courseInfo','videoPayStatus']),
    },
    created() {
      let parames = {
        "moduleName": "",
        "functionName": "courseService",
        "methodName": "selectLikeStatus",
        "pageNo": 1,
        "pageSize": 10,
        originSource: {
          OS: this.OS,
          version: "H5_V2.0"
        },
        data: {
          "courseId": this.fieldid,
          "userId": this.userid
        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("点赞参数======>", parames);
        console.log("点赞结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          this.likeStatus = result.data.likeStatus;
        }
      });
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_COURSEINFO']),
      initVideoCourseInfo() {
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
              "userId": this.userid
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          console.log("视频介绍参数======>", parames);
          console.log("视频介绍结果======>", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            this.SET_COURSEINFO(result.data.courseInfo);
          }
        });
      },
      addLikeRecord() {
        if (this.likeStatus == false) {
          let parames = {
            "moduleName": "",
            "functionName": "courseService",
            "methodName": "addLikeRecord",
            "pageNo": 1,
            "pageSize": 10,
            originSource: {
              OS: this.OS,
              version: "H5_V2.0"
            },
            data: {
              "courseId": this.fieldid,
              "userId": this.userid
            }
          };
          this.$post(JSON.stringify(parames)).then(result => {
            console.log("点赞成功参数======>", parames);
            console.log("点赞成功结果======>", result);
            if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
              this.likeStatus = true;
              this.initVideoCourseInfo();
            }
          });
        }
      },
      shareToWeixin() {
        setTimeout(() => {
          var u = navigator.userAgent;
          if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            var parameObject = {
              subTitle: this.courseInfo.name,
              description: this.courseInfo.description,
              imgUrl1: this.courseInfo.image,
              shareUrl1: window.location.href,
            }
            window.webkit.messageHandlers.toShareVideo.postMessage(parameObject);
          }
          else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            Android.toShareVideo(this.courseInfo.name, this.courseInfo.description, this.courseInfo.image, window.location.href);
          }
        }, 800);

      },
    }
  }
</script>


