<style scoped  lang="less">
  .productContent {
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
    .editIconBox {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      .editIcon {
        width: 10.5px;
        height: 12px;
        background-image: url("./image/bot_menu_edit@2x.png");
      }
    }
    .check-link-Box {
      display: flex;
      align-items: center;
    }
    .recomCont {
      padding: 0 0 15px;
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
        .display-higher {
          padding-top: 2px;
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
  .productContent-30{
    padding: 0 14px 11px;
    padding: 0;
    .yh-title-30{
      border-bottom: 1px solid #ddd;
      color: #000;
    }
    .recomCont-30{
      margin-top: 15px;
      padding: 0 0 15px 16px;
      box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
      border-radius:4px;
    }
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
</style>

<template>
  <div>
    <div class="productContent" :class="{'productContent-30':versionStyle==2}"
         v-if="moduleB&&haveproduct">
      <div class="yh-title clearfloat"
           v-if="weixinforyou" :class="{'yh-title-30':versionStyle==2}">
        {{userInfoname}}为您推荐产品
        <div class="right editIconBox"
             @click="enterproductList"
             v-if="(haveproducticon && historyid!=1)||isWXApplet==1">
          <i class="editIcon"></i>
        </div>
        <div class="right check-link-Box"
             v-if="isWeixin  && productUrl!=null  && productUrl!='' && historyid!=1">
          <v-button :disabled="false"
                    width="100"
                    bgColor="#b90901"
                    height="22"
                    class="yh-small"
                    @click="checkDetail">查看详情</v-button>
        </div>
      </div>
      <div class="recomCont" :class="{'recomCont-30':versionStyle==2}"
           v-if="haveproduct"
           @click="goProductDetailPage">
        <v-namecodeline :name='productname'
                        :code='productCode'
                        :showCode='showproductcode'
                        origin='product'
                        :productType='productType'></v-namecodeline>
        <div class="center-show-content">
          <div class="getData highLight">
            {{productindex1|formatNull|limitTen}}
          </div>
          <div class="earningRateFont">{{productindexName1|limitTen}}</div>
        </div>
        <div class="productTable clearfix">
          <div class="leftInfo left">
            <div class="getData right"
                 :class="{'display-higher':productindex3=='--'}">{{productindex2|formatNull|limitTen}}</div>
            <div class="earningRateFont right"
                 :class="{'display-higher':productindex3=='--'}">{{productindexName2|limitTen}}</div>
          </div>
          <div class="rightInfo right clearfix">
            <div class="earningRateFont left"
                 :class="{'display-higher':productindex3=='--'}">{{productindexName3|limitTen}}</div>
            <div class="getData left">{{productindex3|limitTen}}</div>
          </div>
        </div>

      </div>
      <div class="recomCont"
           v-if="noproduct">
        <div class="addproduct"
             @click="enterproductList">
          <div class="addproduct-font">添加产品</div>
        </div>
      </div>
      <div class="noproducttell"
           v-if="noproduct">若没有添加推荐的产品，分享后此模块将会隐藏</div>
    </div>
    <div class="margin-bottom-box" v-if="moduleB&&haveproduct&&versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import namecodeline from '../../components/common/NameCodeLine'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import { setTimeout } from 'timers';
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "product",
    mixins: [sourceOS],
    components: {
      'v-namecodeline': namecodeline
    },
    props: {
      //微信用户ID
      openid: {
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
      //是否是历史数据
      historyid: {
        type: String
      },
      //是否为分享文章
      isShare: {
        type: String,
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
    data() {
      return {
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
        //微信信息
        weixinforyou: true,
        //产品更改图标显示
        haveproducticon: false,
        //活动链接
        productUrl: '',
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['creditCity', 'moduleB', 'userInfoname', 'financeProductDetail', 'shareLookId', 'productType', 'financeProductId', 'productCode']),
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
      var ua = navigator.userAgent.toLowerCase();
      if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
        this.isWeixin = true;
      } else {
        //产品基本信息获取
        let parame2 = {
          functionName: "productService",
          methodName: "selectProductBasicInfo",
          originSource: {
            OS: this.OS,
            version: "H5_V2.0"
          },
          data: {
            userId: this.userid
          }
        };
        this.$post(JSON.stringify(parame2)).then(result => {
          console.log('产品信息参数', parame2)
          console.log('产品信息', result)
          if (result.errorCode == ERROR_CODE) {
            if (result.data.product != null) {
              this.haveproduct = true;
              this.haveproducticon = true;
              //微信端不显示编辑按钮
              var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
              if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
                this.haveproducticon = false;
              }
              this.noproduct = false;
              //判断是否显示产品编号
              if (result.data.product.code != null) {
                this.SET_PRODUCTCODE(result.data.product.code)
                this.showproductcode = true;
              }
              //产品名
              this.productname = result.data.product.name;
              //产品详情
              this.productindexName1 = result.data.product.indexName1;
              this.productindex1 = result.data.product.index1;
              this.productindexName2 = result.data.product.indexName2;
              this.productindex2 = result.data.product.index2;
              this.productindexName3 = result.data.product.indexName3;
              this.productindex3 = result.data.product.index3;
              // 产品类型
              this.SET_PRODUCTTYPE(result.data.product.productType);
              //产品ID
              this.SET_FINANCEPRODUCTID(result.data.product.id);
              //产品风险等级
              this.productriskGrade = result.data.product.riskGrade;
              //产品链接
              if (result.data.product.productUrl) {
                this.productUrl = result.data.product.productUrl;
              }
              //产品图片
              this.productimage = result.data.product.image;
              if (result.data.product.image === null) {
                this.haveproductimage = false;
              }
            } else {
              this.haveproduct = false;
              this.noproduct = true;
              let ua = navigator.userAgent.toLowerCase();
              if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
                this.noproduct = false;
                this.weixinforyou = false;
              }
              this.haveproducticon = false;
            }
            setTimeout(() => {
              this.SET_PRODUCTDATASTATE();
            }, 250);
          }
        });
      }
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
        }
      });


    },
    watch: {
      financeProductDetail: {
        deep: true,
        handler: function (newV, oldV) {
          console.log('产品获取', this.financeProductDetail,newV,oldV);
          if (this.financeProductDetail != null) {
            this.haveproduct = true;
            this.haveproducticon = true;
            //微信端不显示编辑按钮
            var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
            if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
              this.haveproducticon = false;
            }
            this.noproduct = false;
            console.log(this.financeProductDetail.code);
            //判断是否显示产品编号
            if (this.financeProductDetail.code != null) {
              this.SET_PRODUCTCODE(this.financeProductDetail.code)
              this.showproductcode = true;
            }
            //产品名
            this.productname = this.financeProductDetail.name;
            //产品详情
            this.productindexName1 = this.financeProductDetail.indexName1;
            this.productindex1 = this.financeProductDetail.index1;
            this.productindexName2 = this.financeProductDetail.indexName2;
            this.productindex2 = this.financeProductDetail.index2;
            this.productindexName3 = this.financeProductDetail.indexName3;
            this.productindex3 = this.financeProductDetail.index3;
            // 产品类型
            this.SET_PRODUCTTYPE(this.financeProductDetail.productType);
            //产品ID
            this.SET_FINANCEPRODUCTID(this.financeProductDetail.id);

            //产品风险等级
            this.productriskGrade = this.financeProductDetail.riskGrade;
          } else {
            this.haveproduct = false;
            this.noproduct = true;
            let ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
              this.noproduct = false;
              this.weixinforyou = false;
            }
            this.haveproducticon = false;
          }
        }
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
    },
    methods: {
      goProductDetailPage() {
        let top =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset;
        sessionStorage.setItem("id", JSON.stringify(top));
        var CodeID;
        if (this.productType == 1) {
          CodeID = this.financeProductId
        } else if (this.productType == 2) {
          CodeID = this.productCode;
        }
        var routePath = "/commonproduct/" +
          this.todaytime +
          "/" +
          this.userid +
          "/" +
          CodeID +
          "/" +
          this.productType +
          "/" +
          this.openid +
          "/0";
        var AppUrl = "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/" + process.env.VUE_APP_FRONT + "/#" + routePath;
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          //在微信中打开
          //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
          this.$router.push({
            path: routePath
          });
          window.scollTop = 0;
        }
        var u = navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          //android终端
          Android.toProductDetial(AppUrl, this.productType);
        } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          var parameObj = {
            url: AppUrl,
            type: this.productType
          }
          window.webkit.messageHandlers.toProductDetial.postMessage(JSON.stringify(parameObj));
        }
      },
      //判断字符串是否有%
      isPercent(str) {
        return str.indexOf("%") != -1;
      },
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_USERINFONAME', 'SET_FINANCEPRODUCTID', 'SET_PRODUCTDATASTATE', 'SET_PRODUCTTYPE', 'SET_PRODUCTCODE']),
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
      //查看产品列表
      enterproductList() {
        let routePath = "/financialProductList/" +
          this.userid +
          "/0";
        this.$router.push({
            path: routePath
          });
        window.scollTop = 0;
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) != "micromessenger") {
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            //android终端
            Android.hideTab();
          }
        }
      },
    }
  }
</script>
