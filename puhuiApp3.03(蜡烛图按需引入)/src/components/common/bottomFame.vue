<style scoped  lang="less">
  .outer-box {
    padding: 0 15px;
    .bottomline {
      .bottom-line {
        width: 80%;
        margin-left: 10%;
        opacity: 0.5;
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
      .ConponentFrom {
        color: #999;
        font-size: 11px;
        background: #fff;
        line-height: 21px;
        padding: 10px;
        .disclaimer {
          margin-top: 10px;
          background: #fff;
          padding: 10px 15px 15px;
          color: #000;
          .Exemption {
            line-height: 22px;
            margin-bottom: 10px;
            font-size: 16px;
            letter-spacing: 0.19px;
          }
          .Exemption-30{
            padding: 0 0 10px;
            margin: 0 15px;
          }
          .ExemptionText {
            padding: 10px 0 0;
            border-top: 1px solid #f5f5f5;
            p {
              color: #999;
              font-size: 12px;
              padding-bottom: 15px;
            }
          }
          .ExemptionText-30{
            border-top: 1px solid #ddd;
            margin: 0 15px;
          }
        }
        .disclaimer-30{
          padding: 0;
        }
        .margin-bottom-box{
          margin-top: 10px;
          background: #f7f7f7;
          width: 100%;
          height: 10px;
        }
      }
      .ConponentFrom-30{
        padding: 0;
      }
    }
    .havePaddingTop {
      padding-top: 15px;
    }
  }
  .outer-box-30{
    padding: 0;
  }
</style>

<template>
  <div class="outer-box" :class="{'outer-box-30':versionStyle==2}">
    <div class="bottomline"
         :class="{havePaddingTop:isSimple!=1}">
      <div class="overBottomLine"
           v-if="isSimple!=1">
        <div class="bottom-line">
          <hr class="hr1px">
        </div>
        <div class="bottomlineBox">我是有底线的</div>
      </div>
      <div class="ConponentFrom" :class="{'ConponentFrom-30':versionStyle==2}">
        <!-- <div class="margin-bottom-box" v-if="versionStyle==2"></div> -->
        <div class="disclaimer" :class="{'disclaimer-30':versionStyle==2}">
          <h3 class="Exemption" :class="{'Exemption-30':versionStyle==2}">免责声明</h3>
          <div class="ExemptionText" :class="{'ExemptionText-30':versionStyle==2}">
            <p>
              以上资讯内容及观点仅供交流使用，对任何个人和机构均不构成任何投资建议。以上资讯所提供信息导致的任何直接或者间接的投资盈亏后果不承担任何责任。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 普惠一站下载 -->
    <v-button :disabled="false"
              width="100"
              bgColor="#ab0b22"
              height="45"
              @click="goDown"
              v-if="isWeixin && isWXApplet!=1 &&isSimple!=1">下载 [ 普惠一站 ] 客户端查看更多</v-button>
  </div>
</template>
<script>
  export default {
    name: 'bottomFame',
    data() {
      return {
        //微信端显示
        isWeixin: false,
      }
    },
    props: {
      //简单模式
      isSimple: {
        type: String
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
    methods: {
      //下载app
      goDown() {
        var u = navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          //android终端
          window.location.href = "https://www.yihuisoft.com/appUrl";
        } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          //ios终端
          window.location.href = "https://apps.apple.com/us/app/普惠一站/id1479796341?l=zh&ls=1";
        }
      },
    },
    created() {
      //判断微信环境
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        this.isWeixin = true;
      }
    },
    mounted() {

    }
  }
</script>


