<style scoped  lang="less">
  .commonProductList {
    background-color: #fff;
    margin: 0 14px 12.5px;
    padding: 0 15px;
    .yh-title {
      font-size: 18px;
      color: #b90901;
      background: #fff;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    .check-link-Box {
      display: flex;
      align-items: center;
    }
    .recomCont {
      padding: 0 0 15px;
      border-bottom: 1px solid #eee;
      background: #ffffff;
      .center-show-content {
        text-align: center;
        .getData {
          font-size: 24px;
          color: #000;
          word-break: break-all;
          line-height: 1;
          padding: 3px 0;
          color: #000;
        }
        .highLight {
          color: #c60114;
          font-size: 24px;
          position: relative;
          top: -3px;
          .red-percent {
            font-size: 20px;
            position: absolute;
            bottom: 5px;
          }
        }
        .earningRateFont {
          font-size: 14px;
          color: #999;
        }
      }
      .productTable {
        width: 100%;
        padding-top: 10px;
        .leftInfo {
          width: 45%;
          text-align: right;
        }
        .rightInfo {
          width: 45%;
          text-align: left;
        }
        .earningRateFont {
          font-size: 14px;
          font-weight: normal;
          color: rgba(153, 153, 153, 1);
          line-height: 21px;
          margin-right: 5px;
        }
        .getData {
          font-size: 14px;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 21px;
        }
      }
      .bannerImgfirst {
        box-sizing: border-box;
        width: 100%;
        height: 80px;
        position: relative;
        overflow: hidden;
        .centerImg {
          position: absolute;
          margin: auto;
          top: -9999px;
          right: -9999px;
          bottom: -9999px;
          left: -9999px;
          width: 100%;
        }
      }
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
</style>

<template>
  <div>
    <div class="commonProductList">
      <div class="yh-title clearfloat">
        {{userInfoname}}为您推荐产品
      </div>
      <div class="recomCont"
           v-for="(item,index) in productList"
           :key="index"
           @click="goProductDetailPage(item.id,item.productCode,item.prdType)">
        <v-namecodeline :name='item.productName'
                        :code='item.productCode'
                        :showCode='item.productCode'
                        origin='product'
                        :productType='item.prdType'></v-namecodeline>
        <div v-if="item.prdType==1">
          <div class="center-show-content">
            <div class="getData highLight">
              {{item.earnRate|limitTen}}
            </div>
            <div class="earningRateFont">业绩比较基准</div>
          </div>
          <div class="productTable clearfix">
            <div class="leftInfo left">
              <span class="earningRateFont">产品期限</span>
              <span class="getData">{{item.term|limitTen}}</span>
            </div>
            <div class="rightInfo right">
              <span class="earningRateFont">起投金额</span>
              <span class="getData">{{item.startMoney|formatRMB|limitTen}}</span>
            </div>
          </div>
        </div>
        <div v-else="item.prdType==2">
          <div class="center-show-content">
            <div class="getData highLight">
              {{item.unitTotal|limitTen}}
            </div>
            <div class="earningRateFont">单位净值</div>
          </div>
          <div class="productTable clearfix">
            <div class="leftInfo left">
              <span class="earningRateFont">日涨跌幅</span>
              <span class="getData">{{item.pctChange|keepTwoNum|limitTen}}%</span>
            </div>
            <div class="rightInfo right">
              <span class="earningRateFont">风险等级</span>
              <span class="getData">{{item.riskLevel|limitTen}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import insertShareHistoryV2_1 from '../../mixins/insertShareHistoryV2_1'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  import getWeather from '../../mixins/getWeather'
  import closeLoading from '../../mixins/closeLoading'
  import sourceOS from '../../mixins/sourceOS'
  import namecodeline from '../../components/common/NameCodeLine'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import { setTimeout } from 'timers';
  import wx from 'weixin-js-sdk'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "commonProductList",
    mixins: [sourceOS, closeLoading, getWeather,insertShareHistoryV2_1],
    components: {
      'v-namecodeline': namecodeline
    },
    data() {
      return {
        userid: this.$route.params.userid,
        todaytime: this.$route.params.todaytime,
        //图片定时器
        phototimer: '',
        //产品浏览ID
        productLookId: '',
        //没有产品
        noproduct: false,
        //产品图片
        haveproductimage: true,
        //显示产品编号
        showproductcode: false,
        //产品名称
        productname: "",
        //产品风险等级
        productriskGrade: "",
        //产品图片
        productimage: "",
        //产品基本信息
        productindexName1: "",
        productindex1: "",
        productindexName2: "",
        productindex2: "",
        productindexName3: "",
        productindex3: "",
        //是否有产品
        haveproduct: false,
        //微信端显示
        isWeixin: false,
        //产品更改图标显示
        haveproducticon: false,
        //活动链接
        productUrl: '',
        // 产品列表
        productList: []
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['creditCity', 'headPortrait', 'moduleB', 'userInfoname', 'weather', 'shareLookId', 'productType', 'financeProductId', 'productCode']),
      //每次请求的图片不同的时间戳
      changebleproductImg: function () {
        var timestamp = new Date().getTime();
        return this.productimage + '?v=' + timestamp;
      },
      isLowRisk: function () {
        if (String(this.productriskGrade).indexOf("低") != -1) {
          return true;
        } else {
          return false;
        }
      },
      isHighRisk: function () {
        if (String(this.productriskGrade).indexOf("高") != -1) {
          return true;
        } else {
          return false;
        }
      },
    },
    created() {
      //判断微信环境
      let parame2 = {
        "functionName": "marketingTemplateService",
        "methodName": "selectHistoryMarketingTemplateInfo",
        "originSource": {
          OS: this.OS,
          version: "H5_V2.0"
        },
        pageSize: 1,
        pageNo: 10,
        "data": {
          "appUserId": this.userid,
          "createTime": this.todaytime
        }
      };
      this.$post(JSON.stringify(parame2)).then(result => {
        console.log('产品信息参数', parame2)
        console.log('产品信息', result)
        if (result.errorCode == ERROR_CODE) {
          if (result.data.productList != null) {
            this.productList = result.data.productList;
          }
        }
      });
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
          if (result.data.userInfo.headPortrait != null) {
            this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
          } else {
            this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
          }
        }
      });
    },
    watch: {

    },
    mounted() {
      //清除定时器
      clearInterval(this.phototimer);
      this.phototimer = setInterval(() => {
        //预览图片刷新
        this.$previewRefresh();
      }, 500);
      wxapi.wxRegister(this.wxRegCallback);
      //监听关闭图片查看器
      this.$preview.on('close', () => {//close只是众多事件名的其中一个，更多请查看文档
        clearInterval(this.phototimer);
        console.log('图片查看器被关闭');
        this.closebigimage();
      })
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_USERINFONAME', 'SET_FINANCEPRODUCTID', 'SET_PRODUCTDATASTATE', 'SET_PRODUCTTYPE', 'SET_PRODUCTCODE', 'SET_HEADPORTRAIT']),
      goProductDetailPage(productId, productCode, prdType) {
        let top =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset;
        sessionStorage.setItem("id", JSON.stringify(top));
        var CodeID;
        if (prdType == 1) {
          CodeID = productId;
        } else if (prdType == 2) {
          CodeID = productCode;
        }
        var routePath = "/commonProductItem/" +
          this.userid +
          "/" +
          CodeID +
          "/" +
          prdType
        var AppUrl = "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/" + process.env.VUE_APP_FRONT + "/#" + routePath;
        //在微信中打开
        //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
        this.$router.push({
          path: routePath
        });
        window.scollTop = 0;
      },
      //判断字符串是否有%
      isPercent(str) {
        return str.indexOf("%") != -1;
      },
      wxRegCallback() {
        this.nowDate = Date.parse(new Date());
        var getDate = new Date();
        var nowMonth = getDate.getMonth() + 1;
        var nowDay = getDate.getDate();
        if (this.creditCity != '' && this.weather != '') {
          var addTitle = nowMonth + '.' + nowDay + ' | 新的理财产品列表推荐 | ' + this.creditCity + '市 ' + this.weather 
        } else {
          var addTitle = nowMonth + '.' + nowDay + ' | 新的理财产品列表推荐'
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
          title2: addTitle, // 分享标题, 请自行替换
          desc2: shareDesc, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: shareImageUrl, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
      
      //查看产品详情
      checkDetail() {
        //获取是否微信
        window.location.href = this.productUrl;
      },

      //展示产品大图
      showbigimage() {
        var productLookTime = Date.parse(new Date());
        let parames = {
          "functionName": "productService",
          "methodName": "addFinanceProductLook",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            userId: this.userid,
            personType: '',
            openId: this.openid,
            functionType: "7",
            city: this.creditCity,
            startTime: this.transFormatTime(productLookTime),
            shareLookId: this.shareLookId
          }
        }

        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType == '200') {
            console.log('产品查看记录成功', result)
            this.productLookId = result.data.lookId;
          }
        });
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          return;
        } else {
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            Android.showImage('true');
          }
        }
      },
      //转换时间
      transFormatTime(inputTime) {
        let date = new Date(inputTime * 1);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        let s = date.getSeconds();
        s = s < 10 ? "0" + s : s;
        return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
      },
      //关闭人物大图
      closebigimage() {
        let parames = {
          "functionName": "productService",
          "methodName": "updateEndTimeById",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            "id": this.productLookId
          }
        }
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType == '200') {
            console.log('产品查看结束', result)
          }
        });
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          return;
        } else {
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            Android.showImage('false');
          }
        }
      },

    }
  }
</script>
