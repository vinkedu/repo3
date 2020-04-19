<style scoped  lang="less">
  @import "~@/style/varibles.less";
  .product-box-outer{
    background: #fff;
  }
  .product-box {
    padding-bottom: 70px;
  }
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
  .myManageMoneyProduct-top {
    width: 100%;
    height: 200px;
    background: url("../image/myproduct-top-background.png") no-repeat;
    background-size: cover;
    padding-top: 80px;
    .myManageMoneyProduct-top-title {
      .myManageMoneyProduct-top-title-icon {
        padding: 18px 14px 10px;
        img {
          width: 12px;
          height: 22px;
        }
      }
      .myManageMoneyProduct-top-title-name {
        margin: 0 auto;
        padding-top: 18px;
        width: 72px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.8;
      }
    }
    .myManageMoneyProduct-top-content {
      padding: 15px 20px 5px;
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius:4px;
      margin: 0 15px 10px;
      background: #fff;
      .name-code-box {
        height: 78px;
        .myManageMoneyProduct-top-content-name {
          font-size: 18px;
          color: #000;
          line-height: 1.5;
          padding-bottom: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .myManageMoneyProduct-top-content-code {
          font-size: 12px;
          color: #000;
          line-height: 1.5;
        }
      }
      .labelBox {
        background: #fff;
        font-size: 10px;
        line-height: 10px;
        padding: 5px;
        display: inline-block;
        border-radius: 12px 12px 12px 0px;
        margin-right: 16px;
        margin-bottom: 12px;
      }
      .redRisk {
        color: @yhRed;
        border: 1px solid @yhRed;
      }
      .greenType {
        color: @yhGreen;
        border: 1px solid @yhGreen;
      }
    }
    .productTable {
      margin: 0 auto;
      // width: 347px;
      height: 75px;
      background: rgba(255, 255, 255, 1);
      // box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
      tr {
        display: flex;
        td {
          flex: 1;
          vertical-align: bottom;
          overflow: hidden;
          text-align: center;
        }
        td:first-child {
          text-align: left;
        }
        td:last-child {
          text-align: right;
        }
      }
      tr:first-child td {
        padding: 0 0 5px;
        font-size: 12px;
        color: #999;
      }
      tr:nth-child(2) td {
        padding: 6px 0 5px;
        font-size: 18px;
      }
      .first-important-red {
        color: @yhRed;
      }
      .first-important-green {
        color: #10ad94;
      }
      .gray-border{
        height: 30px;
        width: 1px;
        background: #ddd;
        position: relative;
        top: -10px;
      }
    }
  }
  .myManageMoneyProduct {
    background: #fff;
    padding: 11px 14px 11px;
    height: 100%;
    box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
    border-radius:4px;
    .product-list {
      padding: 15px 1px 15px;
      border-bottom: 1pt solid rgba(238, 238, 238, 0.6);
      .left-product-title {
        font-size: 16px;
      }
      .right-product-number {
        font-size: 14px;
        line-height: 1.5;
      }
    }
    .product-list:last-child {
      border-bottom: 1pt solid rgba(238, 238, 238, 0);
    }
  }
  .myManageMoneyProduct-margin {
    margin: 105px 14px;
  }
  .button-box {
    text-align: center;
    padding: 11px 0;
    background: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>

<template>
  <div class="flex-wrapper product-box-outer">
    <div class="product-box"
         v-if="haveproduct"
         @touchend="touchEndTime()">
      <div class="myManageMoneyProduct-top">
        <div class="myManageMoneyProduct-top-content">
          <div class="name-code-box">
            <div class="myManageMoneyProduct-top-content-name">{{productname}}</div>
            <div class="myManageMoneyProduct-top-content-code">{{productcode}}</div>
          </div>
          <div class="labelBox redRisk"
               v-if="productriskGrade">
            {{productriskGrade}}
          </div>
          <div class="labelBox greenType"
               v-if="earnType">
            {{earnType}}
          </div>
          <table class="productTable">
            <tr>
              <td>业绩比较基准</td>
              <td>产品期限</td>
              <td>起投金额</td>
            </tr>
            <tr>
              <td class="first-important-red">{{earnRate}}</td>
              <div class="gray-border"></div>
              <td>{{term}}</td>
              <div class="gray-border"></div>
              <td>{{startMoney|formatRMB}}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="myManageMoneyProduct"
           :class="{'myManageMoneyProduct-margin':productcode}">
        <div class="product-list clearfix"
             v-if="productCurrency">
          <div class="left-product-title left">
            产品币种
          </div>
          <div class="right-product-number right">
            {{productCurrency}}
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="productIssure">
          <div class="left-product-title left">
            发行机构
          </div>
          <div class="right-product-number right">
            {{productIssure}}
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="investType">
          <div class="left-product-title left">
            投资类型
          </div>
          <div class="right-product-number right">
            {{investType}}
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="pubTime">
          <div class="left-product-title left">
            发行时间
          </div>
          <div class="right-product-number right">
            {{pubTime}}
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="yieldTime">
          <div class="left-product-title left">
            收益时间
          </div>
          <div class="right-product-number right">
            {{yieldTime}}
          </div>
        </div>
      </div>
      <div class="button-box">
        <v-button :disabled="false"
                  width="80"
                  bgColor="#cd0000"
                  height="45"
                  @click="onlineOrder"
                  v-if="showshare">预约理财经理</v-button>
        <v-button :disabled="false"
                  width="80"
                  bgColor="#cd0000"
                  height="45"
                  @click="shareManageMoneyProduct"
                  v-else>分享</v-button>
      </div>
    </div>
    <div class="bank-product"
         v-if="codetype==400 || !haveproduct">
      <p class="text-center">该产品已下架</p>
    </div>
  </div>
</template>
<script>

  import isWeixin from '../../../mixins/isWeixin'
  import sourceOS from '../../../mixins/sourceOS'
  import getShareImgUrl from '../../../mixins/getShareImgUrl'
  import insertShareHistoryV2_1 from '../../../mixins/insertShareHistoryV2_1'
  import initStartTime from '../../../mixins/initStartTime'
  import initEndTime from '../../../mixins/initEndTime'
  import getWeather from '../../../mixins/getWeather'
  import wx from 'weixin-js-sdk'
  import html2canvas from 'html2canvas'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'myManageMoneyProduct',
    mixins: [getWeather, initEndTime, initStartTime, insertShareHistoryV2_1, getShareImgUrl, sourceOS, isWeixin],
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
      //产品ID
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
        earnRate: '',
        earnType: '',
        term: '',
        startMoney: '',
        // 收益时间
        yieldTime: '',
        // 发行时间
        pubTime: '',
        //投资类型
        investType: '',
        //发行机构
        productIssure: '',
        //产品币种
        productCurrency: '',
        //收益类型
        productRevenueType: '',
        //查看时间
        nowSameTime: '',
        //生成图片
        dataURL: '',
        //数据状态
        codetype: 200,
        //是否有产品
        haveproduct: true,
        //产品代码
        productcode: '',
        //产品代码显示
        showproductcode: false,
        //产品名称
        productname: '',
        //产品风险等级
        productriskGrade: "",
        //显示产品图片
        haveproductimage: true,
        //产品图片
        productimage: "",
        //产品ID
        productId: '',
        //产品图片刷新时间
        phototimer: '',
        //产品浏览ID
        productLookId: '',
        //活动链接
        productUrl: '',
        //分享时间
        nowDate: '',
        productType: this.$route.params.productType
      }
    },
    created() {
      //产品基本信息获取
      let parame2 = {
        "functionName": "productManageService",
        "methodName": "getFinancialDetail",
        "originSource": {
          OS: this.OS,
          version: "H5_V2.0"
        },
        "data": {
          "productId": this.fieldid
        }
      };
      this.$post(JSON.stringify(parame2)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          this.codetype = result.data.codeType;
          console.log('产品信息', result)
          if (result.data.resultData != null) {
            this.haveproduct = true;
            //判断是否显示产品编号
            if (result.data.resultData.productCode != null) {
              this.productcode = result.data.resultData.productCode;
              this.showproductcode = true;
            }
            this.earnType = result.data.resultData.earnType;
            if (result.data.resultData.earnRate) {
              this.earnRate = result.data.resultData.earnRate;
            } else {
              this.earnRate = '--';
            }
            this.earnRate = result.data.resultData.earnRate;
            this.term = result.data.resultData.term;
            this.startMoney = result.data.resultData.startMoney;
            //产品ID
            this.productId = result.data.resultData.id;
            //产品名
            this.productname = result.data.resultData.productName;
            this.SET_ORDERPRODUCTNAME(result.data.resultData.productName);
            //产品风险等级
            this.productriskGrade = result.data.resultData.riskLevel;
            //产品链接
            if (result.data.resultData.productUrl) {
              this.productUrl = result.data.resultData.productUrl;
            }
            //产品图片
            this.productCurrency = result.data.resultData.currency;
            this.productIssure = result.data.resultData.publishBank;
            this.investType = result.data.resultData.investType;
            if (result.data.resultData.startTimes) {
              if (result.data.resultData.endTimes) {
                this.pubTime = result.data.resultData.startTimes + '-' + result.data.resultData.endTimes;
              } else {
                this.pubTime = result.data.resultData.startTimes;
              }
            } else {
              if (result.data.resultData.endTimes) {
                this.pubTime = result.data.resultData.endTimes;
              } else {
                this.pubTime = '';
              }
            }
            if (result.data.resultData.earnStartTimes) {
              if (result.data.resultData.earnEndTimes) {
                this.yieldTime = result.data.resultData.earnStartTimes + '-' + result.data.resultData.earnEndTimes;
              } else {
                this.yieldTime = result.data.resultData.earnStartTimes;
              }
            } else {
              if (result.data.resultData.earnEndTimes) {
                this.yieldTime = result.data.resultData.earnEndTimes;
              } else {
                this.yieldTime = '';
              }
            }
            if (result.data.resultData.image === null) {
              this.haveproductimage = false;
            }
          } else {
            this.haveproduct = false;
          }
        }
        setTimeout(() => {
          wxapi.wxRegister(this.wxRegCallback);
        }, 500);
      });
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SHOWORDER','SET_ORDERPRODUCTNAME']),
      onlineOrder() {
        this.SET_SHOWORDER(true);
      },
      shareManageMoneyProduct() {
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          var parameObject = {
            productId: this.fieldid,
            productName: this.productname,
            productType: this.productType,
            earnRate: this.earnRate,
            term: this.term,
            fundShowNumber: '-1',
          }
          window.webkit.messageHandlers.toShareProduct.postMessage(parameObject);
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.toShareProduct(this.fieldid, this.productname, this.productType, this.earnRate, this.term, '-1');
        }
      },

      //关闭大图
      closebigimage() {

      },
      //展示产品大图
      showbigimage() {

      },
      wxRegCallback() {
        this.nowDate = Date.parse(new Date());
        var getDate = new Date();
        var nowMonth = getDate.getMonth() + 1;
        var nowDay = getDate.getDate();
        if (this.creditCity != '' && this.weather != '') {
          var addTitle = nowMonth + '.' + nowDay + ' | 理财产品推荐 | ' + this.creditCity + '市 ' + this.weather + ' | ' + this.productname
        } else {
          var addTitle = nowMonth + '.' + nowDay + ' | 理财产品推荐 | ' + this.productname
        }
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/seeCommonProduct/' + this.nowDate + '/' + this.userid + '/' + this.productId + "/" + this.openid + '/' + this.nowDate + "/1/T9";
        var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的理财产品，请点击查看';
        var shareImageUrl;
        if (this.isShare == 0) {
          shareImageUrl = this.headPortrait;
        } else {
          shareImageUrl = this.dataURL;
        }
        var parameObj = {
          title1: addTitle, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: shareImageUrl, // 分享图标, 请自行替换，需要绝对路径
          title2: this.productname, // 分享标题, 请自行替换
          desc2: shareDesc, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: shareImageUrl, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['headPortrait', 'userInfoname', 'creditCity', 'weather']),
      //每次请求的图片不同的时间戳
      changebleproductImg: function () {
        var timestamp = new Date().getTime();
        return this.productimage + '?v=' + timestamp;
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
      setTimeout(() => {
        this.setStartTime(7, this.productId, this.isShare);
      }, 500);
    }

  }
</script>




