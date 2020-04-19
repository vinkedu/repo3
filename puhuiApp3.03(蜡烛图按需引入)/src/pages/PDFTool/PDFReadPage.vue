<style lang="less" scoped>
  .pdf {
    padding-bottom: 60px;
    .top-banner {
      text-align: center;
      position: fixed;
      top: 0;
      background: #fff;
      width: 100%;
      z-index: 1;
      .sign-up-title {
        font-size: 18px;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
        display: inline-block;
        padding: 15px;
      }
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
    .bottom-button-box {
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 375px;
      button {
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        border-radius: 2px;
        color: #fff;
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
        width: 100%;
        height: 49px;
        background: #b90901;
        font-size: 16px;
        border: 0px;
      }
      button:active {
        opacity: 0.6;
      }
    }
  }
</style>
<template>
  <div class="pdf">
    <div class="top-banner clearfix"
         v-if="!showshare">
      <div class="left leftIcon"
           @click="backLast">
        <img src="../../components/common/image/topBackIcon.png"
             alt="">
      </div>
    </div>
    <pdf v-for="i in numPages"
         :key="i"
         :src="pdfUrl"
         :page="i">
    </pdf>
    <!-- <button v-if="pdfData"
            @click="fileDownload(pdfData,'培训')">下载</button> -->
    <!-- <button @click="downLoad">下载</button> -->
    <div class="bottom-button-box copy copyMail"
         :data-clipboard-text="PDFDownPlace">
      <button @click="onCopyLink"
              v-if="!showshare">复制链接在{{openInEnvironment}}浏览器中下载</button>
      <button @click="wxdownLoad"
              v-else>下载文件</button>

    </div>
    <v-shareLeader></v-shareLeader>
  </div>
</template>
<script>
  import axios from 'axios'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import isWeixin from '../../mixins/isWeixin'
  const ERROR_CODE = "ERRORCODE0000";
  import sourceOS from '../../mixins/sourceOS'
  import { Toast } from 'vant';
  import closeLoading from '../../mixins/closeLoading'
  import pdf from 'vue-pdf'
  export default {
    name: 'Pdf',
    mixins: [closeLoading, sourceOS, isWeixin],
    components: {
      pdf,
      'v-shareLeader': () => import(`./shareLeader`),
    },
    data() {
      return {
        pdfData: '',
        trainDetail: {},
        pdfUrl: '',
        numPages: 1,
        activeIndex: 0,
        traningid: this.$route.params.traningid,
        userid: this.$route.params.userid,
        orginType: this.$route.params.orginType,
        openInEnvironment:''
      }
    },
    computed: {
      PDFDownPlace: function () {
        return window.location.href;
      }
    },
    created() {
      var u = navigator.userAgent;
      if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        this.openInEnvironment='Safari'
      }
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
          this.pdfTask(this.trainDetail.pdfUrl);
          setTimeout(() => {
            if (!this.showshare) {
              var u = navigator.userAgent;
              if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
                  this.downLoad();
                }
              }
              else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
                this.downLoad();
              }
            }
          }, 1000);
        }
      });
    },
    mounted: function () {
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SHARELEADERSTATE']),
      backLast() {
        this.$router.push({
          path:
            "/TrainingDetail/" +
            this.userid + "/" + this.traningid + '/' + this.orginType
        });
      },
      downLoad() {
        window.location.href = this.trainDetail.pdfUrl;
      },
      wxdownLoad() {
        this.SET_SHARELEADERSTATE(true);
      },
      //邮箱已拷贝
      onCopyLink() {
        var clipboard = new ClipboardJS('.copyMail')  //此处为点击的dom的类名
        clipboard.on('success', e => {
          Toast.success('链接已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          Toast.fail('您的设备不支持拷贝');
          // 释放内存
          clipboard.destroy()
        })
      },
      fileDownload(data, fileName) {
        let blob = new Blob([data], {
          //type类型后端返回来的数据中会有，根据自己实际进行修改
          type: "application/pdf"
        });
        let filename = fileName || "报表.xls";
        if (typeof window.navigator.msSaveBlob !== "undefined") {
          window.navigator.msSaveBlob(blob, filename);
        } else {
          var blobURL = window.URL.createObjectURL(blob);
          // 创建隐藏<a>标签进行下载
          var tempLink = document.createElement("a");
          tempLink.style.display = "none";
          tempLink.href = blobURL;
          tempLink.setAttribute("download", filename);
          if (typeof tempLink.download === "undefined") {
            tempLink.setAttribute("target", "_self");
          }
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
          window.URL.revokeObjectURL(blobURL);
        }
      },
      pdfTask(pdfUrl) {
        var self = this
        var loadingTask = pdf.createLoadingTask(pdfUrl)
        loadingTask.then(pdf => {
          self.pdfUrl = loadingTask
          self.numPages = pdf.numPages
        }).catch((err) => {
          console.error('pdf加载失败')
        })
      },
      pdfClick(pdfUrl, index) {
        if (index == this.activeIndex) return
        this.activeIndex = index
        this.pdfUrl = null
        this.pdfTask(pdfUrl)
      },
    }
  }
</script>