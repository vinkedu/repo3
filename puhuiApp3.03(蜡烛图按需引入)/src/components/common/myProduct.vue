<style scoped  lang="less">
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
  .myproduct {
    margin: 0 11px;
    background: #fff;
    padding: 11px 14px;
    height: 100%;
    .myproduct-title {
      font-size: 16px;
      line-height: 1;
    }
    .flex-box {
      border-bottom: 1pt solid #eee;
      padding: 10px 0;
      .big-number {
        font-size: 25px;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        padding: 10px 0 7px;
      }
      .light-red {
        color: #df1a19;
      }
      .myproduct-left-item-msg {
        color: #999999;
        font-size: 12px;
        width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      td {
        width: 50%;
      }
    }
    .product-list {
      padding: 15px 1px 15px;
      border-bottom: 1pt solid #eee;
      .left-product-title {
        font-size: 15px;
      }
      .right-product-number {
        font-size: 12px;
        line-height: 1.5;
      }
    }
    .product-image-box {
      padding: 11px 0;
      .product-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }
    }
  }
  .button-box {
    text-align: center;
    padding: 11px 0;
  }
  .noshow {
    position: absolute;
    top: 0;
    width: 100px;
    height: 100px;
    opacity: 0;
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
  <div>
    <div class="product-box"
         v-if="haveproduct"
         @touchend="touchEndTime()">
      <div class="myproduct">
        <div class="myproduct-title">{{productname}}</div>
        <div class="flex-box clearfix">
          <div class="left big-number light-red">{{productindex1}}</div>
          <div class="left big-number">{{productindex2}}</div>
          <div class="left myproduct-left-item-msg">{{productindexName1}}</div>
          <div class="left myproduct-left-item-msg">{{productindexName2}}</div>
        </div>
        <div class="product-list clearfix"
             v-if="showproductcode">
          <div class="left-product-title left">
            产品代码
          </div>
          <div class="right-product-number right">
            {{productcode}}
          </div>
        </div>
        <div class="product-list clearfix">
          <div class="left-product-title left">
            产品风险
          </div>
          <div class="right-product-number right">
            {{productriskGrade}}
          </div>
        </div>
        <div class="product-list clearfix">
          <div class="left-product-title left">
            {{productindexName3}}
          </div>
          <div class="right-product-number right">
            {{productindex3}}
          </div>
        </div>
        <div class="product-image-box"
             v-if="haveproductimage"
             @click="showbigimage">
          <img class="product-image"
               v-lazy="changebleproductImg"
               :large="changebleproductImg"
               preview="0"
               preview-text="">
        </div>
      </div>
      <div class="button-box"
           v-if="productUrl!='' && productUrl!=null">
        <v-button :disabled="false"
                  width="80"
                  bgColor="#cd0000"
                  height="45"
                  @click="checkDetail">查看产品链接</v-button>
      </div>
    </div>
    <div class="bank-product"
         v-if="codetype==400 || !haveproduct">
      <p class="text-center">该产品已下架</p>
    </div>
    <div class="noshow">
      <div class="canvasImg"
           ref="imageWrapper">
        <div class="htmlToImage">
          <div>
            <div class="activaty-keyword-box">{{productindex1}}</div>
            <div class="activaty-keyword-box">{{productindex2}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import getShareImgUrl from '../../mixins/getShareImgUrl'
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  import getWeather from '../../mixins/getWeather'
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
    name: 'myProduct',
    mixins: [getWeather, initEndTime, initStartTime, insertShareHistory, getShareImgUrl, sourceOS],
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
        //产品基本信息
        productindexName1: "",
        productindex1: "",
        productindexName2: "",
        productindex2: "",
        productindexName3: "",
        productindex3: "",
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
      }
    },
    created() {
      //产品基本信息获取
      let parame2 = {
        functionName: "productService",
        methodName: "selectProductById",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          id: this.fieldid,
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame2)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          this.codetype = result.data.codeType;
          console.log('产品信息', result)
          if (result.data.product != null) {
            this.haveproduct = true;
            //判断是否显示产品编号
            if (result.data.product.code != null) {
              this.productcode = result.data.product.code;
              this.showproductcode = true;
            }
            //产品ID
            this.productId = result.data.product.id;
            //产品名
            this.productname = result.data.product.name;
            //产品详情
            this.productindexName1 = result.data.product.indexName1;
            this.productindex1 = result.data.product.index1;
            this.productindexName2 = result.data.product.indexName2;
            this.productindex2 = result.data.product.index2;
            this.productindexName3 = result.data.product.indexName3;
            this.productindex3 = result.data.product.index3;
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
            //     setTimeout(() => {
            //         var getHeight=document.getElementsByClassName('product-box')[0].clientHeight;
            //         html2canvas(this.$refs.imageWrapper,{
            //             backgroundColor:null,
            //             y:getHeight
            //         }).then((canvas) => {
            //             let dataURL = canvas.toDataURL("image/png")
            //             this.dataURL = dataURL;
            //         });
            //     }, 50);
          } else {
            this.haveproduct = false;
          }
        }
      });
    },
    methods: {
      //查看活动详情
      checkDetail() {
        window.location.href = this.productUrl;
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
          var addTitle = nowMonth + '.' + nowDay + ' | 今日财经 | ' + this.creditCity + '市 ' + this.weather + ' | ' + this.productname
        } else {
          var addTitle = nowMonth + '.' + nowDay + ' | 今日财经 | ' + this.productname
        }
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/see/' + this.nowDate + '/' + this.userid + '/' + this.productId + "/" + this.openid + '/' + this.nowDate + "/T4";
        var shareDesc = '您的理财经理【' + this.userInfoname + '】向您推荐新的理财产品，请点击查看';
        var parameObj = {
          title1: addTitle, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: this.dataURL, // 分享图标, 请自行替换，需要绝对路径
          title2: this.productname, // 分享标题, 请自行替换
          desc2: shareDesc, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: this.dataURL, // 分享图标, 请自行替换，需要绝对路径
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
      wxapi.wxRegister(this.wxRegCallback);
      setTimeout(() => {
        this.setStartTime(7, this.productId, this.isShare);
      }, 250);
    }

  }
</script>




