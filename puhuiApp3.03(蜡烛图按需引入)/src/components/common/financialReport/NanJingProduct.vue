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
      background: #fff;
      margin-top: 10px;
      padding: 15px 0 20px;
      position: relative;
      .productTitleBox {
        background: #fff;
        padding: 0 10%;
        .productTitle {
          width: 100%;
          padding-bottom: 18.3%;
          background-image: url("../image/title@2x.png");
          background-size: cover;
          background-color: #fff;
        }
      }
      .productList {
        width: 100%;
        padding-bottom: 85%;
        background-image: url("../image/pro_img@2x.png");
        background-size: cover;
        background-color: #fff;
      }
      .productListBox {
        position: absolute;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        .row {
          flex-basis: 100%;
          display: flex;
        }
        .row:first-child,
        .row:nth-child(3) {
          justify-content: center;
        }
        .row:nth-child(2),
        .row:nth-child(4) {
          justify-content: space-between;
        }
        .row:first-child {
          position: relative;
          top: 72px;
        }
        .row:nth-child(2) {
          box-sizing: border-box;
          padding: 0 7%;
          position: relative;
          top: 51px;
        }
        .row:nth-child(3) {
          position: relative;
          top: -5px;
        }
        .row:nth-child(4) {
          position: relative;
          top: -12px;
          box-sizing: border-box;
          padding: 0 18.5%;
        }
        .row span {
          height: 85px;
          width: 85px;
          border-radius: 50%;
          background: #fff;
          opacity: 0;
        }
      }
    }
    @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
      .productTitle {
        background-image: url("../image/title@3x.png");
      }
      .productList {
        background-image: url("../image/pro_img@3x.png");
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
        v-if="orgnCode==2">
      <div class="yh-title clearfloat">
        精选产品推荐
      </div>
      <div class="productBox">
        <div class="productTitleBox">
          <div class="productTitle"></div>
        </div>
        <div class="productList">
        </div>
        <div class="productListBox">
          <div class="row">
            <span class="item"
                  @click="toBuyProduct(1)"></span>
          </div>
          <div class="row">
            <span class="item"
                  @click="toBuyProduct(5);"></span>
            <span class="item"
                  @click="toBuyProduct(2);"></span>
          </div>
          <div class="row">
            <span class="item"
                  @click="toBuyProduct(6);"></span>
          </div>
          <div class="row">
            <span class="item"
                  @click="toBuyProduct(4);"></span>
            <span class="item"
                  @click="toBuyProduct(3);"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="orgnCode==2&&versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "NanJingProduct",
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
      toBuyProduct(index) {
        var productTime = Date.parse(new Date());
        let top =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset;
        sessionStorage.setItem("id", top);
        var personType;
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          personType = 2;
        } else {
          personType = 1;
        }
        let parame = {
          "functionName": "productService",
          "methodName": "addFinanceProductLook",
          "data": {
            "userId": this.userid,
            "openId": this.openid,
            "functionType": index,
            "city": this.creditCity,
            'personType': personType,
            'startTime': this.transFormatTime(productTime),
            originSource: {
              OS: this.OS,
              version: "H5_V1.0"
            },
            'shareLookId': this.shareLookId
          }
        };
        this.$post(JSON.stringify(parame)).then(result => {
          console.log(result)
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log('插入查看记录成功', result.data.lookId);
            sessionStorage.setItem("lookId", result.data.lookId);
          }
        });
        var productUrl,productTitle;
        // 在微信中打开
        if (index == 1) {
          productUrl = "https://wx.vivatech.cn/app/index.php?i=32&c=entry&do=entry&m=viva_finance_share&h5id=NJCBA00DECD&staffno=" + this.empCode;
          productTitle = '稳健精选';
        }
        if (index == 2) {
          productUrl = "https://wx.haotianwang.cn/app/index.php?i=32&c=entry&do=index&m=viva_finance_structural_deposit&h5id=JGNJYH20180907&staffno=" + this.empCode;
          productTitle = '增值精选';
        }
        if (index == 3) {
          productUrl = "https://wx.haotianwang.cn/app/index.php?i=32&c=entry&do=entry&m=viva_finance_share&h5id=FBNJYH20171212&staffno=" + this.empCode;
          productTitle = '收益精选';
        }
        if (index == 4) {
          productUrl = "https://wx.haotianwang.cn/app/index.php?i=32&c=entry&do=index&m=viva_finance_noble_metal&h5id=GJNJYH20181206&staffno=" + this.empCode;
          productTitle = '闪亮精选';
        }
        if (index == 5) {
          productUrl = "https://wx.haotianwang.cn/app/index.php?i=32&c=entry&do=index&m=viva_finance_order&h5id=ZHNJYH20190515&staffno=" + this.empCode;
          productTitle = '月度精选';
        }
        if (index == 6) {
          productUrl = "http://bank.xinmeihua.com.cn/phzj/index?code=" + this.empCode + '&channel=PUHUIYIZH';
          productTitle = '金梅花';
        }
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


