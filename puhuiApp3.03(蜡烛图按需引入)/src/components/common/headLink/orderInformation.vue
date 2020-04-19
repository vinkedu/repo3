<style lang="less" scoped>
  .orderInformation-outer {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2;
    max-width: 445px;
    .center-box {
      z-index: 9;
      width: 100%;
      margin-top: 170px;
      .orderInformation {
        margin: 0 auto;
        width: 310px;
        height: 250px;
        position: relative;
        background: #fff;
        border-radius: 5px;
        text-align: center;
        .orderInformation-image {
          background: #fff;
          position: absolute;
          top: -40px;
          left: 9px;
          padding: 5px;
          border-radius: 50%;
          img {
            height: 74px;
            width: 74px;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .renzheng-icon {
          position: absolute;
          width: 24px;
          height: 27px;
          left: 70px;
          top: 15px;
        }
        .orderInformation-title {
          font-size: 13px;
          width: 190px;
          height: 60px;
          text-align: left;
          margin: 10px 19px 25px;
          line-height: 1.8;
        }
        .number-keyboard {
          margin: 0 15px;
          .input-telephone {
            border: 1px solid #eeeeee;
          }
          .error-tel-message {
            font-size: 12px;
            color: red;
          }
          .red-border {
            border: 1px solid red;
          }
          .van-cell {
            padding: 8px 10px;
          }
        }
        .select-list-box {
          margin: 10px 0;
          border: 1px solid #eeeeee;
          .arrow-right-icon-box {
            img {
              width: 5px;
              height: 10px;
            }
          }
        }
        .inputSex {
          border: 1px solid #eeeeee;
          width: 32%;
        }
        .inputUserName {
          background: #fff;
          width: 65%;
          border: 1px solid #eee;
        }
        .saveMessage {
          margin-top: 10px;
          border: 1px solid #eee;
          .layer_v_msg {
            height: 85px;
            width: 100%;
            padding: 7px;
            border: 1px solid #dcdcdc;
            font-size: 14px;
            color: #333537;
            -webkit-overflow-scrolling: touch;
          }
        }
        .show-more-info {
          font-size: 12px;
          padding: 10px;
          width: 200px;
          margin: 0 auto;
          padding-top: 20px;
          img {
            height: 5px;
            width: 10px;
          }
        }
        .order-button {
          button {
            font-size: 12px;
          }
        }
      }
      .showMoreHeight {
        height: 460px;
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
    .center-box-position {
      margin-top: 70px;
    }
    .center-box-input-position {
      margin-top: 0px;
    }
    .picker-outer {
      height: 88px;
      .sex-button {
        width: 100px;
      }
    }
  }
</style>
<template>
  <div class="orderInformation-outer flex-wrapper"
       v-if="showOrder"
       @click="closeDialogs">
    <div class="center-box"
         :class="{'center-box-position':showInfoDetail,'center-box-input-position':customerMessageState}">
      <div class="orderInformation clearfix"
           :class="{'showMoreHeight':showInfoDetail}">
        <div class="orderInformation-image">
          <img :src="headPortrait">
        </div>
        <img src="../image/认证@2x.png"
             class="renzheng-icon"
             v-if="showOrgnCode">
        <div class="clearfix">
          <div class="orderInformation-title right">
            {{OrderMessage}}
          </div>
        </div>
        <div class="number-keyboard clearfix">
          <div class="input-telephone"
               :class="{'red-border':(isRedInput&&openErrorWarning)}">
            <van-field readonly
                       clickable
                       :value="customerTel"
                       placeholder="输入您的联系方式（必填）"
                       @touchstart.native.stop="startInput"
                       @focus='openCheck' />
          </div>
          <div class="error-tel-message"
               v-if="openErrorWarning">
            {{getMessage}}
          </div>
          <div v-if="showInfoDetail">
            <div class="select-list-box">
              <van-cell is-link
                        @click="showPopupTimeOpen">{{customerTime}}</van-cell>
            </div>
            <div class="clearfix">
              <div class="inputUserName left">
                <van-field v-model="customerName"
                           placeholder="输入您的姓名" />
              </div>
              <div class="inputSex  right">
                <van-cell is-link
                          @click="showPopupSexOpen">{{customerSex}}</van-cell>
              </div>
            </div>
            <div class="saveMessage">
              <van-cell-group>
                <van-field v-model="customerMessage"
                           rows="2"
                           @focus="focusCustomerMessage"
                           @blur="blurCustomerMessage"
                           type="textarea"
                           maxlength="100"
                           placeholder="请输入留言"
                           show-word-limit />
              </van-cell-group>
            </div>
          </div>
        </div>
        <div class="show-more-info"
             @click="transState">
          {{transInfo}}
          <img src="../image/downArrow@2x.png"
               alt=""
               v-if="!showInfoDetail">
          <img src="../image/upArrow@2x.png"
               alt=""
               v-else>
          <div></div>
        </div>
        <div class="order-button">
          <v-button :disabled="false"
                    width="30"
                    bgColor="#B90901"
                    height="30"
                    class="yh-small"
                    @click="orderTo">
            预约
          </v-button>
        </div>
      </div>
      <div class="center-box-bottom">
        <div class="close-box"
             @click="closeOrderInput">
          <img src="../image/关闭icon备份@2x.png"
               class="close-box-icon">
        </div>
      </div>
    </div>
    <van-popup v-model="showPopupSex"
               position="bottom"
               :style="{ height: '25%',width:'100%' }">
      <div class="picker-outer">
        <div class="clearfix">
          <div class="right sex-button">
            <v-button :disabled="false"
                      width="100"
                      bgColor="#04be02"
                      height="35"
                      @click="confirmSex">确定</v-button>
          </div>
        </div>
        <van-picker :columns="sexColumns"
                    @change="onChangeSex"
                    :visible-item-count=3
                    :item-height=35
                    :swipe-duration=100 />
      </div>
    </van-popup>
    <van-popup v-model="showPopupTime"
               position="bottom"
               :style="{ height: '25%',width:'100%' }">
      <div class="picker-outer">
        <div class="clearfix">
          <div class="right sex-button">
            <v-button :disabled="false"
                      width="100"
                      bgColor="#04be02"
                      height="35"
                      @click="confirmTime">确定</v-button>
          </div>
        </div>
        <van-picker :columns="timeColumns"
                    @change="onChangeTime"
                    :visible-item-count=3
                    :item-height=35
                    :swipe-duration=300 />
      </div>
    </van-popup>
    <van-number-keyboard :show="show"
                         theme="custom"
                         extra-key=""
                         :maxlength='11'
                         close-button-text="完成"
                         @blur="show = false"
                         @input="onInput"
                         @delete="onDelete"
                         v-model="customerTel" />
  </div>
</template>

<script>
  import _ from 'lodash'
  import { Toast } from 'vant';
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import closeLoading from '../../../mixins/closeLoading'
  export default {
    name: 'orderInformation',
    mixins: [closeLoading],
    components: {
    },
    props: ["isshowAlert"],
    data() {
      return {
        customerMessageState: false,
        sexColumns: ['先生', '女士'],
        timeColumns: ['任何时间', '一小时后联系我', '一天内联系我', '三天内联系我'],
        showPopupSex: false,
        checkStart: false,
        isRedInput: false,
        userid: this.$route.params.userid,
        openid: this.$route.params.openid,
        customerMessage: '',
        OrderMessage: '您好！我是您的专属理财经理，您可以在这里和我预约哦！',
        show: false,
        customerTel: '',
        transInfo: '更多选填信息',
        customerTime: '任何时间',
        customerSex: '先生',
        customerName: '',
        showInfoDetail: false,
        getSelectSex: '',
        showPopupTime: false,
        getSelectTime: '',
        closeClear: false,
      }
    },
    watch: {

    },
    computed: {
      openErrorWarning() {
        if (this.show == false && this.closeClear == false) {
          return true;
        }
      },
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['showOrder', 'headPortrait', 'showOrgnCode', 'orderProductName']),
      getMessage() {
        var message = "";
        var mPattern = /^1([3456789])\d{9}$/;
        if (this.checkStart) {
          if (this.customerTel == '' || this.customerTel == undefined) {
            message = "联系方式不能为空！";
            this.isRedInput = true;
          } 
          else if (this.customerTel.length != 11 && this.customerTel.length != 7 && this.customerTel.length != 8) {
            message = "请输入正确的位数！";
            this.isRedInput = true;
          }
          else if(!mPattern.test(this.customerTel)){
            message = "请输入正确的手机号码！";
            this.isRedInput = true;
          }
          else {
            this.isRedInput = false;
          }
          return message;
        }
      },
    },
    methods: {
      blurCustomerMessage() {
        let u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
          this.customerMessageState = false;
        }
      },
      focusCustomerMessage() {
        let u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
          this.customerMessageState = true;
        }
      },
      startInput() {
        this.show = true;
        this.closeClear = false;
      },
      confirmTime() {
        this.customerTime = this.getSelectTime;
        this.showPopupTime = false;
      },
      onChangeTime(picker, value, index) {
        this.getSelectTime = value;
      },
      showPopupTimeOpen() {
        this.showPopupTime = true;
      },
      confirmSex() {
        this.customerSex = this.getSelectSex;
        this.showPopupSex = false;
      },
      onChangeSex(picker, value, index) {
        this.getSelectSex = value;
        // this.customerSex=this.getSelectSex;
      },
      showPopupSexOpen() {
        this.showPopupSex = true;
      },
      openCheck() {
        this.checkStart = true;
      },
      transState() {
        this.showInfoDetail = !this.showInfoDetail;
        console.log(this.showInfoDetail);
        if (this.transInfo == '更多选填信息') {
          this.transInfo = '收起选填信息'
        }
        else {
          this.transInfo = '更多选填信息'
        }
      },
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SHOWORDER']),
      closeDialogs() {
        this.isShowDialogs = false;
      },
      orderTo:_.throttle(function(){
        if (this.getMessage) {
          Toast.fail(this.getMessage);
          return;
        }
        var sendSex = '';
        var sendTimeDuring = '';
        if (this.customerSex == '先生') {
          sendSex = '男';
        } else if (this.customerSex == '女士') {
          sendSex = '女';
        }
        if (this.customerTime == '任何时间') {
          sendTimeDuring = 0;
        }
        else if (this.customerTime == '一小时后联系我') {
          sendTimeDuring = 1;
        }
        else if (this.customerTime == '一天内联系我') {
          sendTimeDuring = 2;
        }
        else if (this.customerTime == '三天内联系我') {
          sendTimeDuring = 3;
        }
        this.openErrorWarning = true;
        this.checkStart = true;
        if (this.orderProductName) {
            this.customerMessage = '【' + this.orderProductName + '】' + this.customerMessage;
        }
        let parames = {
          "functionName": "newAppointmentService",
          "methodName": "insertAppointment",
          "data": {
            name: this.customerName,
            sex: sendSex,
            phone: this.customerTel,
            appointmentTime: sendTimeDuring,
            message: this.customerMessage,
            userId: this.userid,
            openId: this.openid
            // openId: "o5D4fwa1NymcEKUyDyq4Ubi5qTLU"
          }
        }
        this.$post(JSON.stringify(parames)).then(result => {
          if (this.getMessage == '' && this.customerTel != '') {
            this.SET_SHOWORDER(false);
            this.customerTel = '';
            this.customerName = '';
            this.customerMessage = '';
            this.checkStart = false;
            this.showInfoDetail = false;
            Toast.success('预约成功');
          }
          console.log('参数', parames);
          console.log('错误日志', result);
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            console.log("预约信息结果======>", result);
          }
        });
      },1000),
      closeOrderInput() {
        this.customerTel = '';
        this.closeClear = true;
        this.getSelectTime = '任何时间';
        this.customerTime = '任何时间';
        this.getSelectSex = '先生';
        this.customerSex = '先生';
        this.customerName = '';
        this.customerMessage = '';
        this.SET_SHOWORDER(false);
      },
      onDelete() { },
      onInput() { },
      openMenu() {
      },
      closeMenu() {
      },
    },
    created() {
      this.getSelectTime = '任何时间';
      this.customerTime = '任何时间';
      this.getSelectSex = '先生';
      this.customerSex = '先生';
    },
    mounted() {

    }
  }
</script>