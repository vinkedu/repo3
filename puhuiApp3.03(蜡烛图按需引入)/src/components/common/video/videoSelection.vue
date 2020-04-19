<style lang="less" scoped>
  .video-selection {
    margin-top: 2px;
    padding: 10px 14px;
    // padding: 11.5px 0 0;
    background: #fff;
    .video-list {
      .video-item {
        margin-top: 8px;
        box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
        border-radius:4px;
        .video-item-title {
          width: 180px;
          padding-left: 10px;
          color: #999;
          font-size: 14px;
          line-height: 46px;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }
        .video-item-state {
          padding-left: 15px;
          height: 46px;
          padding-right: 40px;
          border-bottom: 1px solid rgba(238, 238, 238, 1);
          display: flex;
          align-items: center;
          .video-item-state-box {
            font-size: 10px;
            background: #a0a0a0;
            color: #fff;
            line-height: 1.7;
            width: 48px;
            height: 15px;
            border-radius: 8px;
            text-align: center;
          }
          .red {
            background: #b90901;
          }
        }
        .video-item-playIcon {
          width: 50px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 16px;
            width: 16px;
          }
        }
      }
    }
    .loading {
      display: flex;
      .loading-icon {
        padding-top: 10px;
        margin: 0 auto;
      }
    }
    .bottomlineBox {
      text-align: center;
      background: #f7f7f7;
      width: 110px;
      margin: 0 auto;
      position: relative;
      top: -9px;
      color: #999;
      font-size: 10px;
    }
    .bottom-load-box{
      margin-top: 30px;
    }
  }
</style>
<template>
  <div class="video-selection">
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        class="page-infinite-list">
      <li class="page-infinite-listitem">
        <div class="video-list">
          <div class="video-item clearfix"
               v-for="(item,index) in sourceList"
               :key="index"
               @click="changeState(index)">
            <div class="video-item-title left">{{item.name}}</div>
            <div class="video-item-state left">
              <div class="video-item-state-box"
                   :class="{red:item.read==true}">
                <span v-if="item.read==true">已观看</span>
                <span v-else>未观看</span>
              </div>
            </div>
            <div class="video-item-playIcon right">
              <div v-if="videoIndex==index"
                   @click.stop.prevent="changePlayState(index)">
                <img v-if="item.playState==false"
                     src="../image/bofang-3@2x.png">
                <img v-else
                     src="../image/zanting@2x.png">
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="bottom-load-box">
      <div v-if="loading && !showEnd"
          class="loading">
        <div class="loading-icon">
          <mt-spinner type="fading-circle"
                      color="#ffba00"
                      class="loading-icon"></mt-spinner>
          <div>加载中</div>
        </div>
      </div>
      <div v-if="showEnd"
          class="bottomlineBox">我是有底线的</div>
    </div>
  </div>
</template>

<script>
    //Vuex公共状态辅助函数
    import { mapState } from 'vuex'
    //Vuex公共状态动作
    import { mapActions } from 'vuex'
  import sourceOS from '../../../mixins/sourceOS'
  let ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'videoSelection',
    mixins: [sourceOS],
    components: {},
    props: {},
    data() {
      return {
        fieldid: this.$route.params.fieldid,
        userid: this.$route.params.userid,
        sourceList: [],
        videoIndex: 0,
        loading: false,
        showEnd: false,
        pageIndex: 1,
        pageSize: 10,
        total: 10,
      }
    },
    watch: {
      sourceList: {
        deep: true,
        handler: function (newV, oldV) {
          console.log(newV, oldV);
          //市场竞争百分比
          console.log(this.sourceList);
        }
      },
    },
    computed: {
        //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
        ...mapState(['videoPayStatus']),
      getPages: function () {
        return Math.ceil(this.total / 10);
      }
    },
    methods: {
      //加载更多
      loadMore() {
        this.loading = true;
        console.log(1);
        setTimeout(() => {
          if (this.pageIndex < this.getPages) {
            this.pageIndex += 1;
            let parames = {
              functionName: "courseService",
              methodName: "selectSourceList",
              "pageNo": this.pageIndex,
              "pageSize": this.pageSize,
              originSource: {
                OS: this.OS,
                version: "H5_V2.0"
              },
              data: {
                "id": this.fieldid,
                "userId": this.userid
              }
            };
            console.log(parames);
            this.$post(JSON.stringify(parames)).then(result => {
              this.loading = false;
              console.log('视频列表查询成功==>', parames);
              if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                console.log('视频列表查询成功==>', result);
                this.total = result.sumCount;
                // 视频列表
                var newSourceList = result.data.sourceList;
                newSourceList.forEach((e, i) => {
                  if (e != 0) {
                    this.sourceList.push(e);
                  }
                });
              }
            })
          } else {
            this.loading = false;
            this.showEnd = true;
          }
        }, 1000);
      },
      changeState(index) {
          if(this.videoPayStatus==1){
            if (this.videoIndex != index) {
              this.videoIndex = index;
              this.sourceList[index].playState = false;
              document.getElementById('video').src = this.sourceList[index].source;
              document.getElementById('video').poster = this.sourceList[index].image;
            }
            document.getElementById('video').play();
          }else {
             this.$toast("购买本视频后进行观看 请点击右下方【购买】按钮");
              var u = navigator.userAgent;
              if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                  //ios终端
                  window.webkit.messageHandlers.getVideoPayStatus.postMessage(this.videoPayStatus);
              }
          }
      },
      changePlayState(index) {
          if (this.videoPayStatus==1) {
            if (this.videoIndex == index) {
              if (document.getElementById('video').paused) {
                document.getElementById('video').play();
                let parames = {
                  functionName: "courseService",
                  methodName: "addCourseReadTag",
                  "pageNo": 1,
                  "pageSize": 10,
                  originSource: {
                    OS: this.OS,
                    version: "H5_V2.0"
                  },
                  data: {
                    "courseId": this.fieldid,
                    "userId": this.userid,
                    "sourceId": this.sourceList[index].id
                  }
                };
                this.$post(JSON.stringify(parames)).then(result => {
                  console.log("插入参数======>", parames);
                  console.log("插入结果======>", result);
                  this.sourceList[index].read = true;
                });
              }
              else {
                document.getElementById('video').pause();
              }
            }
          }else {
              this.$toast("购买本视频后进行观看 请点击右下方【购买】按钮");
              var u = navigator.userAgent;
              if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                  //ios终端
                  window.webkit.messageHandlers.getVideoPayStatus.postMessage(this.videoPayStatus);
              }
          }
      }
    },
    created() {
      let parames = {
        functionName: "courseService",
        methodName: "selectSourceList",
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
        console.log("视频列表参数======>", parames);
        console.log("视频列表结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          this.sourceList = result.data.sourceList;
          this.total = result.sumCount;
          document.getElementById('video').src = this.sourceList[0].source;
          document.getElementById('video').poster = this.sourceList[0].image;
        }
      });
    },
    mounted() {
      var _this = this
      var myVideo = document.getElementById("video");
      myVideo.addEventListener('play', function () {
        _this.sourceList[_this.videoIndex].playState = true;
        let parames = {
          functionName: "courseService",
          methodName: "addCourseReadTag",
          "pageNo": 1,
          "pageSize": 10,
          originSource: {
            OS: _this.OS,
            version: "H5_V2.0"
          },
          data: {
            "courseId": _this.fieldid,
            "userId": _this.userid,
            "sourceId": _this.sourceList[_this.videoIndex].id
          }
        };
        _this.$post(JSON.stringify(parames)).then(result => {
          console.log("插入参数======>", parames);
          console.log("插入结果======>", result);
          _this.sourceList[_this.videoIndex].read = true;
        });
      });
      myVideo.addEventListener('pause', function () {
        _this.sourceList[_this.videoIndex].playState = false;
      })
    }
  }
</script>