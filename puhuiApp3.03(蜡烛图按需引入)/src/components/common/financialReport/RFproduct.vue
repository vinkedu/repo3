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
    .productBox {
      width: 100%;
      height: 210px;
      background-color: #fff;
      display: flex;
      flex-flow: row wrap;
      align-content: flex-start;
      .item {
        box-sizing: border-box;
        background-color: white;
        flex: 0 0 25%;
        height: 100px;
        align-content: space-between;
        .RFproductimg {
          width: 51px;
          height: 51px;
          background: #f7f7f7;
          border-radius: 50%;
          margin: 17.5px auto 7.5px;
          position: relative;
          .productIcon1 {
            width: 27px;
            height: 27px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        .RFproductTel {
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
  .productContent-30{
    margin:0;
    padding-bottom: 10px;
    .yh-title{
      color: #000;
    }
    .productBox{
      box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.2);
      border-radius: 4px;
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
         v-if="orgnCode==3||orgnCode==4||orgnCode==5">
      <div class="yh-title clearfloat">
        精选产品推荐
      </div>
      <div class="productBox">
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(1)">
            <img src="../image/pro_img1@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">理财业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(2)">
            <img src="../image/pro_img2@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">基金业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(3)">
            <img src="../image/pro_img3@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">保险业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(4)">
            <img src="../image/pro_img4@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">黄金业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(5)">
            <img src="../image/pro_img5@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">存款业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(6)">
            <img src="../image/pro_img6@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">贷款业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(7)">
            <img src="../image/pro_img7@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">信用卡业务</div>
        </div>
        <div class="item">
          <div class="RFproductimg"
               @click="ToBuyProduct(8)">
            <img src="../image/pro_img8@3x.png"
                 class="productIcon1">
          </div>
          <div class="RFproductTel">外汇业务</div>
        </div>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="(orgnCode==3||orgnCode==4||orgnCode==5)&&versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "RFproduct",
    mixins: [sourceOS],
    props: {
      //理财经理ID
      userid: {
        type: String,
      },
      //微信用户ID
      openid: {
        type: String,
      },
      // 样式版本
      versionStyle:{
        type:String,
        default:'1'
      }
    },
    data() {
      return {
        //微信端显示
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['creditCity', 'orgnCode', 'shareLookId']),
    },
    created() {

    },
    methods: {
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
      //购买产品
      ToBuyProduct(index) {
        var productTime = Date.parse(new Date());
        let top =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset;
        sessionStorage.setItem("id", top);
        let DetailHeight = document.getElementsByClassName('detailinformation')[0].clientHeight;
        sessionStorage.setItem("detailinformation", DetailHeight);
        var productIndex = index + 10;
        let parame = {
          "functionName": "productService",
          "methodName": "addFinanceProductLook",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            "userId": this.userid,
            "openId": this.openid,
            "functionType": productIndex,
            "city": this.creditCity,
            'personType': '',
            'startTime': this.transFormatTime(productTime),
            'shareLookId': this.shareLookId
          }
        };
        this.$post(JSON.stringify(parame)).then(result => {
          console.log(result);
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log('瑞丰银行产品查看记录成功', result.data.lookId);
            sessionStorage.setItem("lookId", result.data.lookId);
          }
          //相关推荐
        });
        var productUrl,productTitle;
        if (index == 1) {
          productUrl = "http://fund.borf.cn/weixin/#/financial";
          productTitle = '理财业务';
        }
        if (index == 2) {
          productUrl = "http://fund.borf.cn/weixin/#/";
          productTitle = '基金业务';
        }

        if (index == 3) {
          productUrl = "http://yh.yiniu8.com/article/content-14.html";
          productTitle = '保险业务';
        }
        if (index == 4) {
          productUrl = "http://fund.borf.cn/weixin/#/preciousmetal";
          productTitle = '黄金业务';
        }

        if (index == 5) {
          productUrl = "http://yh.yiniu8.com/article/content-10.html";
          productTitle = '存款业务';
        }
        if (index == 6) {
          productUrl = "http://yh.yiniu8.com/article/content-11.html";
          productTitle = '贷款业务';
        }

        if (index == 7) {
          productUrl = "http://yh.yiniu8.com/article/content-17.html";
          productTitle = '信用卡业务';
        }
        if (index == 8) {
          productUrl = "http://fund.borf.cn/weixin/#/forex";
          productTitle = '外汇业务';
        }
        //获取是否微信
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          window.location.href = productUrl;
        } else {
          var u = navigator.userAgent;
          //ios终端
          let parameProduct = {
            "url": productUrl,
            "title": productTitle,
          }
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            //android终端
            Android.startActivityForProducct(JSON.stringify(parameProduct));
          } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            window.webkit.messageHandlers.toRuiFengProduct.postMessage(JSON.stringify(parameProduct));
            app.toRuiFengProduct(JSON.stringify(parameProduct));
          }
        }


      },
      //产品查看结束时间
      initEndProductTime() {
        if (sessionStorage.getItem("lookId") != null) {
          let parame = {
            "functionName": "productService",
            "methodName": "updateEndTimeById",
            originSource: {
              OS: this.OS,
              version: "H5_V1.0"
            },
            "data": {
              "id": sessionStorage.getItem("lookId")
            }
          }
          this.$post(JSON.stringify(parame)).then(result => {
            console.log(result)
            if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
              console.log('查看结束记录成功');
            }
          });
        }
      },
    },
    //离开页面时把页面高度存入session中
    activated() {
      this.initEndProductTime();
    },
    mounted() {
      //初始化结束产品时间
      window.initEndProductTime = this.initEndProductTime;
    }
  }
</script>


