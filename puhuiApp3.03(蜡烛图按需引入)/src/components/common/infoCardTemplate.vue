<style scoped lang="less">
.infoCardTemplate {
  width: 100%;
  height: 70px;
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: 5px;
  z-index: 0;
  border-radius: 0 0 8px 8px;
  .cardBox {
    padding: 13px 15px 0 25px;
    display: flex;
    .headPortrait {
      flex: 1;
      width: 48px;
      height: 48px;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .userInfo {
      flex: 2;
      /*padding-left: 11px;*/
      margin-right: auto;
      text-align: left;
      color: #999999;
      div:first-child {
        padding-top: 5px;
        font-size: 9.4px;
        color: #444444;
      }
      div:nth-child(2) {
        padding-top: 5px;
        font-size: 9px;
      }
    }
    .qrcode {
      // flex: 1;
        width: 52px;
        height: 52px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
}
.addInfoCardTemplate{
  height: 75px;
  .addCardBox{
    padding: 2px 10px 13px 25px;
  }
  .addheadPortrait{
    img{
      margin-left: 5px;
    }
  }
}
</style>
<template>
  <div class="infoCardTemplate" :style="`background-color:${bgColor}`" :class="{addInfoCardTemplate:addClass}">
    <div class="cardBox" :class="{addCardBox:addClass}">
      <div class="headPortrait" :class="{addheadPortrait:addClass,clearfix:addClass}">
        <img :src="userInfoObj.headPortrait||  require('./image/defaultHead.jpg')" alt="" />

      </div>
      <div class="userInfo">
        <div :style="`color:${signColor}`">{{ userInfoObj.name }}为您推荐</div>
        <div>微信号：{{ userInfoObj.wechat }}</div>
      </div>
      <div class="qrcode" id="qrCode">
        <img
          :src="QRcode || require('../common/image/shareQRcode.png')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import {mapActions} from 'vuex'

export default {
   name: 'infoCardTemplate',
   props:{
       bgColor:{
           type:String,
           default:'#fff'
       },
       signColor:{
         type:String,
         default:'#fff'
       },
       addClass:{
           type:Boolean,
           default:false
       }
   },
   data() {
       return {
       }
   },
  components: {},
  computed: {
    ...mapState(["userInfoObj",'QRcode'])
  },
  methods:{
     ...mapActions([
       "SET_SELECTEDTEMPPRODUCT"
     ]),
    testbtn(){
      var code =  new QRCode(this.$refs.qrCodeDiv, {
          text: 'http://baidu.com',
          width: 48,
          height: 48,
          colorDark: "#333333", //二维码颜色
          colorLight: "#ffffff", //二维码背景色
          correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
      })
     this.SET_SELECTEDTEMPPRODUCT({"QRCode": document.getElementsByTagName('canvas')[0].toDataURL()})
      console.log(this.selectedTempProduct)
    }
  }
}
</script>
