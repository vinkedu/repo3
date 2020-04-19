<style lang="less" scoped>
  .AppletCode-outer {
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
      .AppletCode-box {
        width: 310px;
        height: 380px;
        text-align: center;
        position: relative;
        background: #fff;
        border-radius: 5px;
        .AppletCode-box-top {
          height: 123px;
          width: 100%;
          background: url("../image/AppletCodeBackground@2x.png");
          background-size: 100%;
          padding: 13px;
          text-align: center;
          .my-gold {
            font-size: 13px;
            color: #fff;
          }
          .my-gold-number {
            font-size: 40px;
            color: #fff;
            line-height: 1;
          }
          .rest-gold {
            font-size: 12px;
            color: #fff;
          }
          .rest-rmb {
            padding: 7px;
            font-size: 12px;
            color: #fff;
          }
        }
        .AppletCode-box-bottom {
          .AppletCode-box-bottom-img {
            padding: 18px;
            width: 160pt;
            height: 160pt;
            margin: 0 auto;
            position: relative;
            .puhuiAppImg {
              position: absolute;
              height: 38pt;
              width: 38pt;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
            #qrcode {
              text-align: center;
            }
          }
          .AppletCode-box-bottom-title {
            font-size: 14px;
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
  <div class="AppletCode-outer flex-wrapper"
       v-if="isAppletCode">
    <div class="center-box">
      <div class="AppletCode-box">
        <div class="AppletCode-box-top">
          <div class="my-gold">
            我的金币
          </div>
          <div class="my-gold-number">
            {{myGoldNumber}}
          </div>
          <div class="rest-gold">金币余额</div>
          <div class="rest-rmb">相当于{{goldTransMoney}}元人民币</div>
        </div>
        <div class="AppletCode-box-bottom">
          <div class="AppletCode-box-bottom-img">
            <img src="../image/普惠一站logo.png"
                 class="puhuiAppImg">
            <div id="qrDiv"
                 style="display: none;"></div>
            <div id="qrcode"></div>
          </div>
          <div class="AppletCode-box-bottom-title">
            长按二维码立即提现
          </div>

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
    name: 'AppletCode',
    mixins: [closeLoading, sourceOS],
    components: {},
    props: [],
    data() {
      return {
        myGoldNumber: 0,
        openid: this.$route.params.openid,
        userid: this.$route.params.userid,
      }
    },
    watch: {
      isAppletCode(newName, oldName) {
        setTimeout(() => {
          if (newName == true) {
            this.qrcode();
            this.getGoldNumber();
          }
        }, 50);
      }

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['isAppletCode']),
      goldTransMoney: function () {
        return (this.myGoldNumber / 100).toFixed(2);
      },
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_APPLETCODE']),
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
        this.SET_APPLETCODE(false);
      },
      //生成二维码
      qrcode() {
        let nowUrl = "https://www.yihuisoft.com/mp/" + this.userid
        // let nowUrl = "https://www.yihuisoft.com/mp/" + '162'
        let qrcode = new QRCode('qrDiv', {
          width: 170, // 设置宽度，单位像素
          height: 170, // 设置高度，单位像素
          text: nowUrl // 设置二维码内容或跳转地址
        })
        console.log('二维码', qrcode);
        var mycanvas1 = document.getElementsByTagName('canvas')[0];
        //将转换后的img标签插入到html中  
        var img = this.convertCanvasToImage(mycanvas1);
        document.getElementById('qrcode').append(img);//imagQrDiv表示你要插入的容器id        
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