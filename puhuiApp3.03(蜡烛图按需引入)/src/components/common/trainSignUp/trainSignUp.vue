<style lang="less" scoped>
  .trainSignUp-outer {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
    max-width: 445px;
    .center-box {
      position: absolute;
      top: 45%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      z-index: 999;
      .trainSignUp-box {
        width: 310px;
        text-align: center;
        position: relative;
        background: #fff;
        border-radius: 5px;
        .trainSignUp-box-top {
          width: 100%;
          background-size: 100%;
          text-align: center;
          padding: 30px 10px 20px;
          .trainSignUp-box-top-title {
            font-size: 16px;
            font-family: HiraginoSansGB-W3, HiraginoSansGB;
            font-weight: normal;
            color: rgba(51, 51, 51, 1);
          }
        }
        .trainSignUp-box-bottom {
          position: relative;
          .trainSignUp-box-bottom-content {
            width: 217px;
            /*box-shadow: 0 2px 20px 0 #babacd;*/
            padding: 5px;
            margin: 0 auto 20px;
          }
          .trainSignUp-box-bottom-tips {
            margin: 0 auto;
            width: 235px;
            font-size: 12px;
            font-weight: normal;
            color: rgba(153, 153, 153, 1);
            line-height: 20px;
            padding: 0 0 20px;
          }
          .save-button-box{
            padding-bottom: 15px;
          }
          .left-part-global {
            position: absolute;
            width: 13px;
            height: 25px;
            background-color: #7b7b7b;
            border: #7b7b7b;
            border-radius: 0 25px 25px 0;
            left: 0;
            top: 100px;
          }
          .right-part-global {
            position: absolute;
            width: 13px;
            height: 25px;
            background-color: #7b7b7b;
            border-radius: 25px 0 0 25px;
            right: -1px;
            top: 100px;
            border: #7b7b7b;
          }
        }
      }
    }
    .center-box-bottom {
      text-align: center;
      .close-box {
        width: 60px;
        height: 60px;
        margin: 0 auto;
        padding: 15px;
        .close-box-icon {
          width: 28px;
          height: 28px;
        }
      }
    }
  }
</style>
<template>
  <div class="trainSignUp-outer flex-wrapper"
       v-if="signUpState">
    <div class="center-box">
      <div class="trainSignUp-box">
        <div class="trainSignUp-box-top">
          <div class="trainSignUp-box-top-title">
            扫码报名
          </div>
        </div>
        <div class="trainSignUp-box-bottom">
          <div class="trainSignUp-box-bottom-content">
            <img :src="qrCode">
          </div>
          <div class="trainSignUp-box-bottom-tips">
            提示：请打开微信扫描二维码或保存后扫描 相册中的图片，添加客服进行预约。
          </div>
          <div class="save-button-box"
               v-if="!showshare">
            <v-button :disabled="false"
                      width="30"
                      bgColor="#E72E33"
                      height="28"
                      class="yh-small"
                      @click="saveMessage">保存</v-button>
          </div>
          <div class="left-part-global"></div>
          <div class="right-part-global"></div>
        </div>
      </div>
      <div class="center-box-bottom">
        <div class="close-box"
             @click="closeAppletCode">
          <img src="../image/关闭icon备份@2x.png"
               class="close-box-icon">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import isWeixin from '../../../mixins/isWeixin'
  // 二维码
  import QRCode from 'qrcodejs2'
  import sourceOS from '../../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import closeLoading from '../../../mixins/closeLoading'
  export default {
    name: 'trainSignUp',
    mixins: [closeLoading, sourceOS, isWeixin],
    components: {},
    props: {
      //微信用户ID
      qrCode: {
        type: String
      },
    },
    data() {
      return {
        myGoldNumber: 0,
        openid: this.$route.params.openid,
        userid: this.$route.params.userid,
      }
    },
    watch: {

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['signUpState']),
      goldTransMoney: function () {
        return (this.myGoldNumber / 100).toFixed(2);
      },
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SIGNUPSTATE']),

      saveMessage() {
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
           window.webkit.messageHandlers.toSavePicture.postMessage(this.qrCode);
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.toSavePicture(this.qrCode);
        }
        // this.downloadIamge(this.qrCode, 'pic')
        
      },
      downloadIamge(imgsrc, name) {//下载图片地址和图片名
        var image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function () {
          var canvas = document.createElement("canvas");
          canvas.width = image.width;
          canvas.height = image.height;
          var context = canvas.getContext("2d");
          context.drawImage(image, 0, 0, image.width, image.height);
          var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

          var a = document.createElement("a"); // 生成一个a元素
          var event = new MouseEvent("click"); // 创建一个单击事件
          a.download = name || "photo"; // 设置图片名称
          a.href = url; // 将生成的URL设置为a.href属性
          a.dispatchEvent(event); // 触发a的单击事件
        };
        image.src = imgsrc;
      },
      getGoldNumber() {
        // 用户基本信息获取
        let parame1 = {
          functionName: "redPackageService",
          methodName: "getGoldNum",
          originSource: {
            OS: this.OS,
            version: "H5_V2.0"
          },
          data: {
            openId: this.openid
            // openId: 'offfy5Kja1wq06NikwP9MVROgN_g'
          }
        };
        this.$post(JSON.stringify(parame1)).then(result => {
          console.log('金币获取', parame1);
          console.log('金币获取', result);
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            console.log("金币获取======>", result);
            this.myGoldNumber = result.data.goldNumber;
          }
        })
      },
      closeDialogs() {

      },
      closeAppletCode() {
        this.SET_SIGNUPSTATE(false);
      },
      //从 canvas 提取图片 image  
      convertCanvasToImage(canvas) {
        //新Image对象，可以理解为DOM  
        var image = new Image();
        // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
        // 指定格式 PNG  
        image.src = canvas.toDataURL("image/png");
        return image;
      }
    },
    created() {
      this.getGoldNumber();
    },
    mounted() {

    }
  }
</script>