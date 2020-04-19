<style scoped  lang="less">
  .linkman {
    position: fixed;
    right: 0;
    bottom: 80px;
    z-index: 1;
    transition-duration:1s;
    .man-image {
      width: 61px;
      height: 61px;
      background: #fff;
      z-index: 1;
      text-align: center;
      border-radius: 50%;
      margin: 0 11px;
      position: relative;
      bottom: -15px;
      .smallpicture-box {
        padding: 2.5px;
        img.smallpicture {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .linkman-name {
        position: absolute;
        bottom: -10px;
        width: 61px;
        height: 20px;
        background: #fff;
        border-radius: 8px;
        color: #000;
        border: 1px solid #8b929a;
        font-size: 12px;
        line-height: 1.5;
      }
    }
    .man-image-position {
      bottom: -60px;
    }
    .linkman-box {
      position: relative;
      bottom: -40px;
      width: 222px;
      height: 163px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
      border-radius: 10px 0px 0px 10px;
      .linkman-box-introduction {
        width: 100%;
        .linkman-box-introduction-content {
          width: 125px;
          height: 33px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(68, 68, 68, 1);
          line-height: 17px;
          margin-right: 13px;
          margin-top: 5px;
        }
      }
      .linkman-box-content {
        width: 193px;
        height: 53px;
        font-size: 12px;
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        line-height: 16px;
        margin: 8px 13px 8px 13px;
      }
      .linkman-button-box {
        text-align: center;
        button {
          margin: 6px;
          font-size: 13px;
        }
      }
    }
  }
  .hidePart {
    right: -35px;
    transition-duration:1s;
  }
</style>

<template>
  <div>
    <div class="linkman"
         :class="{'hidePart':showPart}">
      <div class="man-image"
           @click="transLinkmanState"
           :class="{'man-image-position':showLinkmanBox}">
        <div class="right"
             v-if="userinfoPhoneNamenone!=''">
          <div class="smallpicture-box">
            <img class="smallpicture"
                 v-lazy="headPortrait">
          </div>
        </div>
        <div class="linkman-name">
          {{userInfoname}}
        </div>
      </div>
      <div class="linkman-box"
           v-if="showLinkmanBox">
        <div class="linkman-box-introduction clearfix">
          <div class="linkman-box-introduction-content right">
            您好！我是您的专属 理财经理-{{userInfoname}}
          </div>
        </div>
        <div class="linkman-box-content">
          {{linkmanContent}}
        </div>
        <div class="linkman-button-box">
          <v-button :disabled="false"
                    width="40"
                    bgColor="#2EC4B6"
                    height="29"
                    class="yh-small"
                    @click="callPhone">
            来电咨询
          </v-button>
          <v-button :disabled="false"
                    width="40"
                    bgColor="#b90901"
                    height="29"
                    class="yh-small"
                    @click="onlineOrder">在线预约</v-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'linkMan',
    mixins: [sourceOS],
    props: {
      //显示一半
      showPart: {
        type: Boolean
      },
    },
    data() {
      return {
        showLinkmanBox: false,
        linkmanContent: '如您有任何产品或服务方面的需求，欢迎您直接和我联系，或留下联系方式，我会在您方便的时候与您联系。',
        linkmanIntroduction: '',
        //微信端显示
        isWeixin: false,
        //纯电话号码,
        userinfoPhoneNamenone: '',
        //可拨打电话号码
        userinfoPhoneName: '',
        // 理财经理ID
        userid: this.$route.params.userid,
      }
    },
    watch: {

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['moduleB', 'moduleL', 'financeActivityDetail', 'financeProductDetail', 'userInfoname', 'showOrder', 'headPortrait']),
    },
    created() {
      //判断微信环境
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        this.isWeixin = true;
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
        console.log('错误日志', result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("理财经理======>", result);
          if (result.data.userInfo) {
            if (result.data.userInfo.orgnCode != null) {
              if (result.data.userInfo.orgnCode==2||result.data.userInfo.orgnCode==3) {
                this.SET_SHOWORGNCODE(true);
              }
            }
            this.SET_USERINFONAME(result.data.userInfo.name);
            if (result.data.userInfo.headPortrait != null) {
              this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
            } else {
              this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
            }
            if (result.data.userInfo.mobilePhone != null) {
              this.userinfoPhoneName = "tel:" + result.data.userInfo.mobilePhone;
              this.userinfoPhoneNamenone = result.data.userInfo.mobilePhone;
            }else {
              this.userinfoPhoneName = "tel:" + result.data.userInfo.phone;
              this.userinfoPhoneNamenone = result.data.userInfo.phone;
            }
          }
        }
      });
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_USERINFONAME', 'SET_SHOWORDER', 'SET_HEADPORTRAIT','SET_SHOWORGNCODE']),
      transLinkmanState() {
        this.showLinkmanBox = !this.showLinkmanBox;
      },
      callPhone() {
        window.location.href = this.userinfoPhoneName;
      },
      onlineOrder() {
        this.SET_SHOWORDER(true);
        console.log(this.showOrder);
        this.showLinkmanBox = false;
      }
    }
  }
</script>


