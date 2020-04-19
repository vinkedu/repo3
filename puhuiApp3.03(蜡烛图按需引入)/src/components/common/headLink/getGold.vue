<style lang="less" scoped>
  .getGold {
    .cashOut {
      margin-left: 5px;
      position: fixed;
      left: 0;
      bottom: 65px;
      width: 87px;
      height: 87px;
      z-index: 1;
      text-align: center;
      border-radius: 50%;
      transition-duration: 1s;
      .cashOut-box {
        padding: 2.5px;
        position: relative;
        text-align: center;
        img.money-img {
          position: absolute;
          width: 30px;
          height: 30px;
          top: -30px;
          left: 30px;
          opacity: 0;
        }
        img.money-animation {
          opacity: 1;
          animation: bounce 1s ease-out;
        }
        .go-cashOut-box {
          width: 85px;
          height: 85px;
        }
        img.cashOutImg {
          width: 85px;
          height: 85px;
          object-fit: cover;
        }
        .add-money-number {
          color: #ff5406;
          opacity: 0;
          position: absolute;
          font-size: 20px;
          top: -30px;
          left: 65px;
          width: 50px;
          animation: transOpacity 4s ease-out;
          animation-delay: 1s;
          background: rgba(250, 207, 34, 1);
          border-radius: 20px;
        }
        .cashOut-title {
          position: absolute;
          top: 50%;
          left: 30%;
          color: #c82606;
          font-size: 12px;
          width: 42px;
          height: 16px;
          line-height: 18px;
          border-radius: 9px;
          background: linear-gradient(
            180deg,
            rgba(253, 245, 165, 1) 0%,
            rgba(250, 207, 34, 1) 100%
          );
        }
        .cashOut-during-time {
          font-size: 18px;
          color: #bc0a01;
        }
      }
    }
    .hidePart {
      left: -50px;
      transition-duration: 1s;
    }
  }
  @keyframes bounce {
    0% {
      transform: translate(150px, -250px) scale(6);
    }
    60% {
      transform: translate(75px, -125px) scale(3);
    }
    85% {
      transform: translate(0px, 0px) scale(0.5);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  @keyframes transOpacity {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
</style>
<template>
  <div class="getGold">
    <div class="cashOut"
         :class="{'hidePart':showPart}">
      <div class="left">
        <div class="cashOut-box">
          <img src="../image/编组 3@2x.png"
               class="money-img left"
               :class="{'money-animation':startAnimation}">
          <div class="add-money-number right"
               v-if="startAnimation">+{{goldNumber}}</div>
          <div class="go-cashOut-box"
               @click="goCashOut">
            <img class="cashOutImg"
                 src="../image/编组@3x.png">
            <div class="cashOut-title">提现</div>
            <div class="cashOut-during-time">{{duringTime}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import isWeixin from '../../../mixins/isWeixin'
  import { Toast } from 'vant';
  import sourceOS from '../../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  export default {
    name: 'getGold',
    mixins: [sourceOS, isWeixin],
    components: {},
    props: {
      //来源
      originType: {
        type: String
      },
      //显示一半
      showPart: {
        type: Boolean
      },

    },
    data() {
      return {
        goldNumber: '',
        goldTime: '',
        userid: this.$route.params.userid,
        openid: this.$route.params.openid,
        isShare:this.$route.params.isShare,
        startAnimation: false,
        oldTime: '',
        // 剩余时刻
        duringTime: '00:00',
        setDuringTime: '',
        fieldid: this.$route.params.fieldid,
      }
    },
    watch: {

    },
    computed: {},
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_APPLETCODE']),
      goCashOut() {
        this.SET_APPLETCODE(true);
      },
      tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
      },
      getDate() {
        if (this.showshare&&this.isShare!=0) {
          if (Number(this.oldTime) < 600) {
            this.setDuringTime = setInterval(() => {
              this.oldTime = Number(this.oldTime) + 1;
              var minute = Math.floor(this.oldTime / 60);
              var second = this.oldTime % 60;
              var str =
                this.tow(minute) + ':' +
                this.tow(second)
              this.duringTime = str;
              if (this.tow(minute) == '00' && this.tow(second) == '20') {
                this.goldNumber = '5';
                this.startAnimation = true;
                let parames = {
                  "functionName": "newMinappGoldService",
                  "methodName": "AddGold",
                  "data": {
                    "openId": this.openid,
                    "addType": "20s",
                    "remark": "123",
                    "otherId": this.fieldid,
                    "originType": this.originType
                  }
                }
                this.$post(JSON.stringify(parames)).then(result => {
                  console.log('红包id参数', parames);
                  console.log('红包id结果', result);
                  if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
                    console.log("红包id======>", result);
                  }
                });
                setTimeout(() => {
                  this.startAnimation = false
                }, 5000);
              }
              else if (this.tow(minute) == '02' && this.tow(second) == '00') {
                this.goldNumber = '15';
                this.startAnimation = true;
                let parames = {
                  "functionName": "newMinappGoldService",
                  "methodName": "AddGold",
                  "data": {
                    "openId": this.openid,
                    "addType": "2m",
                    "remark": "123",
                    "otherId": this.fieldid,
                    "originType": this.originType
                  }
                }
                this.$post(JSON.stringify(parames)).then(result => {
                  console.log('红包id参数', parames);
                  console.log('红包id结果', result);
                  if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
                    console.log("红包id======>", result);
                  }
                });
                setTimeout(() => {
                  this.startAnimation = false
                }, 5000);
              }
              else if (this.tow(minute) == '05' && this.tow(second) == '00') {
                this.goldNumber = '30';
                this.startAnimation = true;
                let parames = {
                  "functionName": "newMinappGoldService",
                  "methodName": "AddGold",
                  "data": {
                    "openId": this.openid,
                    "addType": "5m",
                    "remark": "123",
                    "otherId": this.fieldid,
                    "originType": this.originType
                  }
                }
                this.$post(JSON.stringify(parames)).then(result => {
                  console.log('红包id参数', parames);
                  console.log('红包id结果', result);
                  if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
                    console.log("红包id======>", result);
                  }
                });
                setTimeout(() => {
                  this.startAnimation = false;
                }, 5000);
              }
              else if (this.tow(minute) == '10' && this.tow(second) == '00') {
                Toast.success('今日阅读任务已达成');
                this.goldNumber = '50';
                this.startAnimation = true;
                let parames = {
                  "functionName": "newMinappGoldService",
                  "methodName": "AddGold",
                  "data": {
                    "openId": this.openid,
                    "addType": "10m",
                    "remark": "123",
                    "otherId": this.fieldid,
                    "originType": this.originType
                  }
                }
                this.$post(JSON.stringify(parames)).then(result => {
                  console.log('红包id参数', parames);
                  console.log('红包id结果', result);
                  if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
                    console.log("红包id======>", result);
                  }
                });
                setTimeout(() => {
                  this.startAnimation = false;
                }, 5000);
                clearInterval(this.setDuringTime);
              }
            }, 1000);
          } else {
            clearInterval(this.setDuringTime);
            var minute = Math.floor(this.oldTime / 60);
            var second = this.oldTime % 60;
            var str =
              this.tow(minute) + ':' +
              this.tow(second)
            this.duringTime = str;
          }
        }
      }
    },
    created() { },
    mounted() {
      if (this.originType == 1 || this.originType == 2 || this.originType == 3) {
        let parames = {
          "functionName": "newMinappGoldService",
          "methodName": "getReadingGold",
          "data": {
            "openId": this.openid,
          }
        }
        this.$post(JSON.stringify(parames)).then(result => {
          console.log('已获取金币参数', parames);
          console.log('已获取金币结果', result);
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            console.log("已获取金币结果======>", result);
            if (result.data.readingGold == 0) {
              this.oldTime = 0;
            }
            else if (result.data.readingGold == 5) {
              this.oldTime = 20;
            }
            else if (result.data.readingGold == 20) {
              this.oldTime = 120;
            }
            else if (result.data.readingGold == 50) {
              this.oldTime = 300;
            }
            else if (result.data.readingGold == 100) {
              this.oldTime = 600;
              Toast.success('今日阅读任务已达成');
            }
            else {
              this.oldTime = 0;
            }
            clearInterval(this.setDuringTime);
            this.getDate();
          } else {
            clearInterval(this.setDuringTime);
            this.getDate();
          }
        }, 1000);

      }
    },
    beforeDestroy() {
      clearInterval(this.setDuringTime)
    }
  }
</script>