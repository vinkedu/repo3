<style lang="less" scoped>
  .evening-broadcasting {
    background: #f7f7f7;
    padding: 10px 0;
    .broadcasting {
      background: #fff;
      padding: 11px 14px 18px 15.5px;
      .broadcasting-top {
        border-bottom: 1px solid #ddd;
        .play-box {
          border-radius: 50%;
          width: 42px;
          height: 42px;
          margin-top: 15px;
          .play-button {
            width: 42px;
            height: 42px;
          }
        }
        .play-content {
          box-sizing: border-box;
          padding-left: 19px;
          width: 270px;
          overflow: hidden;
          .play-date {
            font-size: 16px;
          }
          .play-title {
            font-size: 12px;
            color: #999999;
            padding-top: 2px;
          }
          .play-control {
            // width: 270px;
            width: 100%;
            #play-audio {
              width: 100%;
            }
            .timingLength {
              padding-top: 3px;
              padding-bottom: 12px;
              .time-l {
                font-size: 11px;
                color: #666;
              }
              .time-r {
                font-size: 11px;
                color: #999;
              }
            }
          }
        }
      }
      .broadcasting-bottom {
        padding-top: 13px;
        .broadcasting-bottom-title {
          color: #383838;
          font-size: 16px;
          font-weight: bold;
        }
        .broadcasting-bottom-image {
          height: 20px;
          width: 25px;
          padding:3px 5px;
        }
        .broadcasting-bottom-player{
          padding-bottom: 13px;
          border-bottom: 1px solid #ddd;
        }
        .broadcasting-bottom-abs {
          margin-top: 13px;
          padding: 15px 11px;
          box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
          border-radius:4px;
          .broadcasting-bottom-abs-item {
            font-size: 13px;
            color: #666;
            line-height: 1.4;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="evening-broadcasting">
    <div class="broadcasting">
      <div class="broadcasting-top clearfix">
        <div class="play-box left"
             @click="transPlayStatus">
          <img src="../image/播放.png"
               class="play-button"
               @touchstart="play"
               v-if="!isPlay">
          <img src="../image/暂停.png"
               class="play-button"
               @touchstart="pause"
               v-else>
        </div>
        <div class="play-content left">
          <div class="play-date">
            {{broadTitle}}
          </div>
          <div class="play-title">
            晚间播报
          </div>
          <div class="play-control">
            <audio id="audio"
                   :src="audioUrl"
                   ref="audio"
                   @timeupdate="updateTime">该浏览器不支持audio属性</audio>
            <progress-bar id="play-audio"
                          :percent="percent"
                          @percentChangeEnd="percentChangeEnd"
                          @percentChange="percentChange"></progress-bar>
            <div class="clearfix timingLength">
              <span class="time time-l left"
                    v-if="timeLoading">{{format(currentTime)}}</span>
              <span class="time time-l left"
                    v-else>-:--</span>
              <span class="time time-r right"
                    v-if="timeLoading">{{format(duration)}}</span>
              <span class="time time-r right"
                    v-else>-:--</span>
            </div>
          </div>
        </div>
      </div>
      <div class="broadcasting-bottom">
        <div class="clearfix broadcasting-bottom-player">
          <div class="left broadcasting-bottom-title">新闻概览</div>
          <div class="right broadcasting-bottom-image"
               @click="onCopyAbsList"
               v-if="!isWeixin">
            <img src="../image/矢量智能对象.png"
                 alt="">
          </div>
        </div>
        <div class="broadcasting-bottom-abs">
          <div v-for="(item,index) in newSList"
               class="broadcasting-bottom-abs-item word-wrap">
            {{item}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import ProgressBar from './progressBar'
  import wx from 'weixin-js-sdk'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'player',
    mixins: [sourceOS],
    props: {
      //晚间播报ID
      fieldid: {
        type: String,
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //时间戳
      todaytime: {
        type: String
      },
    },
    data() {
      return {
        playStatus: true,
        audioUrl: '',
        isPlay: false, // 是否播放
        width: 0, // 视频音频的总时间的长度条
        percent: 0,
        currentTime: 0,// 播放时间
        duration: 0,// 视频音频的总时长
        playing: false,
        timeLoading: true,
        newSList: [],
        waitingTime: 700,
        broadTitle: '',
        //微信端显示
        isWeixin: false,
      };
    },
    components: {
      ProgressBar,
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['newBroadCast']),
    },
    watch: {
      newBroadCast: {
        deep: true,
        handler: function (newV, oldV) {
          //时长
          this.duration = this.newBroadCast.audioDuration;
          this.broadTitle = this.newBroadCast.broadTitle;
          if (this.duration > 220) {
            this.waitingTime = 2200;
          }
          else if (this.duration > 200) {
            this.waitingTime = 2000;
          }
          else if (this.duration > 180) {
            this.waitingTime = 1800;
          }
          else if (this.duration > 120) {
            this.waitingTime = 1200;
          }
          else if (this.duration > 60) {
            this.waitingTime = 1000;
          } else {
            this.waitingTime = 700;
          }
          this.audioUrl = this.newBroadCast.audioUrl;
          //摘要列表
          var getNewSList = this.newBroadCast.broadAbstract.split('。').filter(item => item);
          var getAbsList = [];
          for (var i = 0; i < getNewSList.length; i++) {
            if (getAbsList.join().length + getNewSList[i].length < 200) {
              getAbsList.push(getNewSList[i]);
            }
          }
          this.newSList = getAbsList;
        }
      },
      currentTime() {
        this.percent = this.currentTime / this.duration;
      },
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_NEWBROADCAST']),
      //拷贝摘要
      onCopyAbsList() {
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          var titleSummaryParame = {
            title: '新闻概览',
            summary: this.newSList.join('。')
          }
          window.webkit.messageHandlers.executeTitleSummary.postMessage(titleSummaryParame);
          app.executeTitleSummary('新闻概览', this.newSList.join('。'));
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.goNewsOverview('新闻概览', this.newSList.join('。'));
        }
      },
      format(interval) {
        interval = interval | 0
        let minute = interval / 60 | 0
        let second = interval % 60
        if (second < 10) {
          second = '0' + second
        }
        return minute + ':' + second
      },
      percentChange(percent) {
        const currentTime = this.duration * percent
        this.currentTime = currentTime
      },
      percentChangeEnd(percent) {
        const currentTime = this.duration * percent
        this.$refs.audio.currentTime = currentTime
        if (!this.playing) {
          this.$refs.audio.play()
          this.playing = true;
          this.isPlay = true;
          this.play();
        }
      },
      updateTime(e) {
        this.currentTime = e.target.currentTime;
        if (this.audio.ended) {
          this.isPlay = false
        }
      },
      transPlayStatus() {
        this.playStatus = !this.playStatus;
      },
      // 播放
      play() {
        if (this.currentTime == 0) {
          var u = navigator.userAgent;
          if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            this.audio.load();
            this.timeLoading = false;
            setTimeout(() => {
              this.timeLoading = true;
            }, this.waitingTime);
            this.audio.play();
            this.isPlay = true
          }
          else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            this.audio.load()
            this.timeLoading = false;
            this.isPlay = true
            setTimeout(() => {
              this.timeLoading = true;
              this.audio.play();
            }, this.waitingTime);
          }
        } else {
          this.isPlay = true;
          this.audio.currentTime = this.currentTime;//重新播放
          this.audio.play();
        }

      },
      // 暂停
      pause() {
        this.audio.pause()
        this.isPlay = false
      },
    },
    created() {
      //判断微信环境
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
        this.isWeixin = true;
      }
      let parame1 = {
        "functionName": "newBroadCastService",
        "methodName": "selectDetailById",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        "data": {
          "interfaceType": "1",
          "id": this.fieldid
        }
      };
      this.$post(JSON.stringify(parame1)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log('晚间播报', result);
          this.SET_NEWBROADCAST(result.data.newBroadCase[0]);
          //时长
          this.duration = result.data.newBroadCase[0].audioDuration;
          this.broadTitle = result.data.newBroadCase[0].broadTitle;
          if (this.duration > 180) {
            this.waitingTime = 1600;
          }
          if (this.duration > 120) {
            this.waitingTime = 1300;
          }
          else if (this.duration > 60) {
            this.waitingTime = 1000;
          } else {
            this.waitingTime = 700;
          }
          this.audioUrl = result.data.newBroadCase[0].audioUrl;
          //摘要列表
          var getNewSList = result.data.newBroadCase[0].broadAbstract.split('。').filter(item => item);
          var getAbsList = [];
          for (var i = 0; i < getNewSList.length; i++) {
            if (getAbsList.join().length + getNewSList[i].length < 200) {
              getAbsList.push(getNewSList[i]);
            }
          }
          this.newSList = getAbsList;
        }
      });

    },
    mounted() {
      this.audio = this.$refs.audio;
      this.audio.load();
    },
  }
</script>
