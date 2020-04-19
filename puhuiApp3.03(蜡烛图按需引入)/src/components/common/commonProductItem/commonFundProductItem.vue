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
  .myFundProduct-top {
    width: 100%;
    height: 200px;
    background: url("../image/myproduct-top-background.png") no-repeat;
    background-size: cover;
    padding-top: 80px;
    .myFundProduct-top-title {
      .myFundProduct-top-title-icon {
        padding: 18px 14px 10px;
        img {
          width: 12px;
          height: 22px;
        }
      }
      .myFundProduct-top-title-name {
        margin: 0 auto;
        padding-top: 18px;
        width: 72px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.8;
      }
    }
    .myFundProduct-top-content {
      padding: 15px 20px 5px;
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius:4px;
      margin: 0 15px 10px;
      background: #fff;
      .name-code-box {
        height: 78px;
        .myFundProduct-top-content-name {
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
        .myFundProduct-top-content-name-add-bottom {
          padding-bottom: 20px;
        }
        .myFundProduct-top-content-code {
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
  .myFundProduct {
    margin: 105px 14px 0;
    background: #fff;
    padding: 11px 14px;
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
  .myFundProductChange {
    margin: 10px 14px;
    background: #fff;
    padding: 11px 14px 11px;
    height: 100%;
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
      .redHighLight {
        color: @yhRed;
      }
      .greenHighLight {
        color: @yhGreen;
      }
    }
    .product-list:last-child {
      border-bottom: 1pt solid rgba(238, 238, 238, 0);
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
  .noshow {
    position: absolute;
    top: 0;
    width: 100px;
    height: 100px;
    opacity: 0;
    z-index: -1;
    .htmlToImage {
      background: #ffa200;
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
        line-height: 1.5;
      }
    }
  }
</style>

<template>
  <div class="flex-wrapper product-box-outer">
    <div class="product-box"
         v-if="haveproduct"
         @touchend="touchEndTime()">
      <div class="myFundProduct-top">
        <div class="myFundProduct-top-content">
          <div class="name-code-box">
            <div class="myFundProduct-top-content-name"
                 :class="{'myFundProduct-top-content-name-add-bottom':!productcode}">{{productname}}</div>
            <div class="myFundProduct-top-content-code">{{productcode}}</div>
          </div>
          <div class="labelBox redRisk"
               v-if="productriskGrade">
            {{productriskGrade}}
          </div>
          <div class="labelBox greenType"
               v-if="fundType">
            {{fundType}}
          </div>
          <table class="productTable"
                v-if="fundType=='货币式基金'">
            <tr>
              <td>七日年化收益</td>
              <td>万份收益</td>
              <td>风险等级</td>
            </tr>
            <tr>
              <td class="first-important-red"
                  v-if="yieldOfSevendays==null">{{yieldOfSevendays|keepTwoNum}}</td>
              <td class="first-important-red"
                  v-else>{{yieldOfSevendays|keepTwoNum}}</td>
              <div class="gray-border"></div>
              <td class="first-important-red">{{kunitYield|keepFourNum}}</td>
              <div class="gray-border"></div>
              <td>{{productriskGrade}}</td>
            </tr>
          </table>
          <table class="productTable"
                v-else>
            <tr>
              <td>单位净值</td>
              <td>日涨跌幅</td>
              <td>起投金额</td>
            </tr>
            <tr>
              <td class="first-important-red">{{unitTotal|keepFourNum}}</td>
              <div class="gray-border"></div>
              <td class="first-important-red"
                  :class="{'first-important-green':pctChange<0}">{{pctChange|keepTwoNum}}%</td>
              <div class="gray-border"></div>
              <td v-if="pchMinAmt=='--'">{{pchMinAmt}}</td>
              <td v-else>{{pchMinAmt}}元</td>
            </tr>
            
          </table>
        </div>
      </div>
      <div class="myFundProduct">
        <div class="product-list clearfix"
             v-if="FundSize">
          <div class="left-product-title left">
            基金规模
          </div>
          <div class="right-product-number right">
            {{FundSize|fundMoneyFormat}}
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="AccumulatedNet">
          <div class="left-product-title left">
            累计净值
          </div>
          <div class="right-product-number right">
            {{AccumulatedNet|keepFourNum}}
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="EstablishmentDate">
          <div class="left-product-title left">
            成立日
          </div>
          <div class="right-product-number right">
            {{EstablishmentDate}}
          </div>
        </div>
        <!-- <div class="product-list clearfix"
             v-if="DueDate">
          <div class="left-product-title left">
            到期日
          </div>
          <div class="right-product-number right">
            {{DueDate}}
          </div>
        </div> -->
      </div>
      <div class="myFundProductChange"
           v-if="recentOneWeekChange||recentOneMonthChange||recentThreeMonthsChange||recentSixMonthsChange||sinceChange">
        <div class="product-list clearfix"
             v-if="recentOneWeekChange||recentOneWeekChange===0">
          <div class="left-product-title left">
            近一周涨跌幅
          </div>
          <div class="right-product-number right"
               :class="{redHighLight:recentOneWeekChange>=0,greenHighLight:recentOneWeekChange<0}">
            {{recentOneWeekChange|keepTwoNum}}%
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="recentOneMonthChange||recentOneMonthChange===0">
          <div class="left-product-title left">
            近一月涨跌幅
          </div>
          <div class="right-product-number right"
               :class="{redHighLight:recentOneMonthChange>=0,greenHighLight:recentOneMonthChange<0}">
            {{recentOneMonthChange|keepTwoNum}}%
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="recentThreeMonthsChange||recentThreeMonthsChange===0">
          <div class="left-product-title left">
            近三月涨跌幅
          </div>
          <div class="right-product-number right"
               :class="{redHighLight:recentThreeMonthsChange>=0,greenHighLight:recentThreeMonthsChange<0}">
            {{recentThreeMonthsChange|keepTwoNum}}%
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="recentSixMonthsChange||recentSixMonthsChange===0">
          <div class="left-product-title left">
            近六月涨跌幅
          </div>
          <div class="right-product-number right"
               :class="{redHighLight:recentSixMonthsChange>=0,greenHighLight:recentSixMonthsChange<0}">
            {{recentSixMonthsChange|keepTwoNum}}%
          </div>
        </div>
        <div class="product-list clearfix"
             v-if="sinceChange||sinceChange===0">
          <div class="left-product-title left">
            成立以来涨跌幅
          </div>
          <div class="right-product-number right"
               :class="{redHighLight:sinceChange>=0,greenHighLight:sinceChange<0}">
            {{sinceChange|keepTwoNum}}%
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
                  @click="shareFundProduct"
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
    name: 'commonFundProductItem',
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
        pctChange: '',
        // 万份收益
        kunitYield: '',
        // 七日年化收益
        yieldOfSevendays: '',
        // 日涨跌幅
        pastPctChange: '',
        unitTotal: '',
        pchMinAmt: '',
        fundType: '',
        // 基金规模
        FundSize: '',
        // 累计净值
        AccumulatedNet: '',
        // 成立日
        EstablishmentDate: '',
        // 到期日
        DueDate: '',
        // 近一周涨跌幅
        recentOneWeekChange: '',
        // 近一月涨跌幅
        recentOneMonthChange: '',
        // 近三月涨跌幅
        recentThreeMonthsChange: '',
        // 近六月涨跌幅
        recentSixMonthsChange: '',
        // 成立以来涨跌幅
        sinceChange: '',
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
        "methodName": "getFundDetail",
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
            this.fundType = result.data.resultData.productType;
            //产品ID
            this.productId = result.data.resultData.id;
            //产品名
            this.productname = result.data.resultData.productName;
            this.SET_ORDERPRODUCTNAME(result.data.resultData.productName);
            //产品风险等级
            this.productriskGrade = result.data.resultData.riskLevel;
            this.kunitYield = result.data.resultData.kunitYield;
            this.yieldOfSevendays = result.data.resultData.yieldOfSevendays;
            this.pastPctChange = result.data.resultData.pastPctChange;
            this.unitTotal = result.data.resultData.unitTotal;
            if (result.data.resultData.pchMinAmt == null) {
              this.pchMinAmt = '--';
            } else {
              this.pchMinAmt = result.data.resultData.pchMinAmt;
            }
            this.pctChange = result.data.resultData.pctChange * 100;
            this.FundSize = result.data.resultData.fundScale;
            this.AccumulatedNet = result.data.resultData.addValue;
            this.EstablishmentDate = result.data.resultData.fundStartDate;
            this.DueDate = result.data.resultData.fundEndDate;
            if (result.data.resultData.weekPctChange) {
              this.recentOneWeekChange = result.data.resultData.weekPctChange * 100;
            }
            if (result.data.resultData.monthPctChange) {
              this.recentOneMonthChange = result.data.resultData.monthPctChange * 100;
            }
            if (result.data.resultData.threeMonthPctChange) {
              this.recentThreeMonthsChange = result.data.resultData.threeMonthPctChange * 100;
            }
            if (result.data.resultData.sixMonthPctChange) {
              this.recentSixMonthsChange = result.data.resultData.sixMonthPctChange * 100;
            }
            if (result.data.resultData.pastPctChange) {
              this.sinceChange = result.data.resultData.pastPctChange * 100;
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
      //查看活动详情
      shareFundProduct() {
        var fundShowNumber;
        if (this.fundType == '货币式基金') {
          fundShowNumber = this.yieldOfSevendays;
        } else {
          fundShowNumber = this.pastPctChange;
        }
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          var parameObject = {
            productId: this.fieldid,
            productName: this.productname,
            productType: this.productType,
            earnRate: '-1',
            term: '-1',
            fundShowNumber: fundShowNumber,
          }
          window.webkit.messageHandlers.toShareProduct.postMessage(parameObject);
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.toShareProduct(this.fieldid, this.productname, this.productType, -1, -1, fundShowNumber);
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
        var shareUrl = window.location.href;
        var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的理财产品，请点击查看';
        var shareImageUrl;
        if (this.isShare == undefined) {
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
      }, 250);
    }

  }
</script>




