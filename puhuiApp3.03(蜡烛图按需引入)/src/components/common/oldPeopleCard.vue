<style scoped lang="less">
  .oldPeopleCard-box {
    background-color: #fff;
    .pagefull {
      .yh-discripman {
        margin: 10px 14px 13px;
        background: #ffffff;
        height: 155px;
        position: relative;
        background: url("./image/peopleCardBackground.png");
        background-size: cover;
        box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.2);
        border-radius: 4px;
        .left-info {
          padding: 19px 0 0 29px;
          .bank-logo {
            img {
              height: 24px;
              width: 86px;
            }
            .anjiBankIcon {
              height: 24px;
              width: 123px;
            }
            .nanxunBankIcon {
              height: 23px;
              width: 80px;
            }
          }
          .manager-name {
            padding-top: 15px;
            display: flex;
            align-items: center;
            .manager-name-content {
              font-size: 18px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              line-height: 25px;
              padding-right: 6px;
            }
            img {
              width: 19px;
              height: 17px;
            }
          }
          .manager-job {
            font-size: 10px;
            font-weight: 300;
            color: rgba(153, 153, 153, 1);
            line-height: 14px;
            height: 14px;
          }
          .manage-email {
            font-size: 12px;
            font-family: PingFangSC-Light, PingFang SC;
            font-weight: 300;
            color: rgba(51, 51, 51, 1);
            padding-top: 12px;
            line-height: 17px;
          }
        }
        .right-image {
          padding: 37px 40px;
          .right-image-box {
            width: 76px;
            height: 76px;
            border-radius: 50%;
            background: #d8d8d8;
            padding: 2px;
            img {
              width: 72px;
              height: 72px;
              object-fit: cover;
              border-radius: 50%;
            }
          }
        }
      }
      .showmoreright {
        padding-right: 22px;
        text-align: right;
        padding-bottom: 9px;
        margin-top: 25px;
        .showmorefont {
          font-size: 12px;
          color: #adadad;
          letter-spacing: 0.67px;
          text-align: right;
        }
      }
    }
    .tab {
      margin: 0 auto;
      background: #fff;
      height: 75px;
      width: 95%;
      white-space: nowrap;
      overflow: hidden;
      background: #fff;
      .tab_content {
        height: 75px;
        margin-left: 14px;
        .tab_item {
          display: inline-block;
          min-width: 109px;
          margin: 0 11px 0 0;
          box-shadow: 0px 2px 6px 0px rgba(51, 51, 51, 0.2);
          border-radius: 2px;
          border: 1px solid rgba(247, 247, 247, 1);
          padding: 11px 12px;
          .tab_item_top_title {
            display: flex;
            align-items: center;
            font-size: 14px;
              font-family: HiraginoSansGB-W3, HiraginoSansGB;
              font-weight: normal;
              color: rgba(51, 51, 51, 1);
              line-height: 21px;
            img{
              margin-right: 5px;
            }
            .telIcon {
              width: 12px;
              height: 11px;
            }
            .WeixinIcon,.mainIcon,.birthdayIcon{
              width: 13px;
              height: 11px;
            }
            .qqIcon{
              width: 11px;
              height: 12px;
            }
            .manIcon{
              width: 11px;
              height: 13px;
            }
            
          }
          .tab_item_bottom_content{
            font-size:12px;
            font-family:HiraginoSansGB-W3,HiraginoSansGB;
            font-weight:normal;
            color:rgba(153,153,153,1);
            line-height:18px;
          }
        }
        .tab_item:first-child {
          margin-left: 5px;
        }
      }
    }
    .detailinformation {
      margin: 0 14px;
      background: #fff;
      padding: 0 10px;
      box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.2);
      border-radius: 4px;
      .tabletr {
        padding: 17px 0 17px;
        border-bottom: 1px solid rgba(216, 216, 216, 1);
        .tablefirst {
          .title-name {
            font-size: 16px;
            font-weight: normal;
            color: rgba(0, 0, 0, 1);
            line-height: 24px;
          }
          .tabletel {
            font-size: 14px;
            font-weight: normal;
            color: rgba(102, 102, 102, 1);
            line-height: 24px;
            max-width: 245px;
            padding-left: 5px;
          }
          .tabletelLast {
            max-width: 285px;
          }
        }
        .left-25 {
          margin-left: 25%;
        }
        .calltelephone {
          padding: 3px 6px;
          .phone {
            width: 17px;
            height: 17px;
            background-size: cover;
            background-image: url("./image/telephoneIcon.png");
          }
        }
        .copy {
          font-size: 12px;
          color: #000000;
          letter-spacing: 0;
          border: 0;
          background-color: transparent;
          border-radius: 5px;
          padding: 3px 6px;
          img {
            height: 18px;
            width: 18px;
          }
        }
      }
      .tableLast {
        border-bottom: 0 solid rgba(216, 216, 216, 0);
      }
    }
  }
</style>
<template>
  <div class="oldPeopleCard-box">
    <!-- 用户基本信息 -->
    <div class="pagefull">
      <div class="yh-discripman clearfix">
        <div class="left left-info">
          <div class="bank-logo">
            <img src="./image/南京银行logo.png"
                 v-if="orgnCode==2">
            <img src="./image/瑞丰银行logo.png"
                 v-if="orgnCode==3">
            <img src="./image/安吉农商银行.png"
                 class="anjiBankIcon"
                 v-if="orgnCode==4">
            <img src="./image/南浔银行.png"
                 class="nanxunBankIcon"
                 v-if="orgnCode==5">
          </div>
          <div class="manager-name">
            <span class="manager-name-content">{{userInfoname}}</span>
            <img src="./image/renzheng@2x.png"
                 v-if="orgnCode==2||orgnCode==3||orgnCode==4||orgnCode==5">
          </div>
          <div class="manager-job">
            {{job}}
          </div>
          <div class="manage-email"
               v-if="mail">
            {{mail}}
          </div>
        </div>
        <div class="right right-image">
          <div class="right-image-box">
            <img v-lazy="headPortrait">
          </div>
        </div>
      </div>
    </div>
    <!-- 展示流 -->
    <div class="tab"
         ref="tab" style="touch-action: none">
      <ul class="tab_content"
          ref="tabcontent">
        <li class="tab_item animated tada" v-if="userinfoPhoneNamenone" :class="{'fadeIn':tadaState}"
            ref="tabitem1" @click="dialPhoneNumber">
          <div class="tab_item_top_title">
            <img src="./image/telIcon.png" class="telIcon">
            <div>联系电话</div>
          </div>
          <div class="tab_item_bottom_content">{{userinfoPhoneName | splitLast}}</div>
        </li>
        <li class="tab_item copyWechat" v-if="showwechat" :class="{'animated fadeIn':fadeState1}"
            ref="tabitem2" @click="onCopywechat"
               :data-clipboard-text="wechat">
          <div class="tab_item_top_title">
            <img src="./image/WeixinIcon.png" class="WeixinIcon">
            <div>加我微信</div>
          </div>
          <div class="tab_item_bottom_content">{{wechat}}</div>  
        </li>

        <li class="tab_item copyMail" v-if="showmail" :class="{'animated fadeIn':fadeState2}"
            ref="tabitem3"  @click="onCopymail"
               :data-clipboard-text="mail">
          <div class="tab_item_top_title">
            <img src="./image/mailIcon.png" class="mainIcon">
            <div>个人邮箱</div>
          </div>
          <div class="tab_item_bottom_content">{{mail}}</div>  
        </li>
        <li class="tab_item copyQQ" v-if="showqq" :class="{'animated fadeIn':fadeState3}"
            ref="tabitem4" @click="onCopyqqNum"
               :data-clipboard-text="qqNum">
          <div class="tab_item_top_title">
            <img src="./image/QQIcon.png" class="qqIcon">
            <div>个人QQ</div>
          </div>
          <div class="tab_item_bottom_content">{{qqNum}}</div>  
        </li>

        <li class="tab_item" v-if="showage"
            ref="tabitem5">
          <div class="tab_item_top_title">
            <img src="./image/birthdayIcon.png" class="birthdayIcon">
            <div>年龄</div>
          </div>
          <div class="tab_item_bottom_content">{{age}}</div>
        </li>
        <li class="tab_item" v-if="showgender"
            ref="tabitem6">
          <div class="tab_item_top_title">
            <img src="./image/manIcon.png" class="manIcon" v-if="gender=='男'">
            <img src="./image/womanIcon.png" class="manIcon" v-else-if="gender=='女'">
            <div>性别</div>
          </div>
          <div class="tab_item_bottom_content">{{gender}}</div>
        </li>
      </ul>
    </div>
    <!-- 用户详细信息 -->
    <div class="detailinformation">
      <div class="tabletr tableLast"
           v-if="abstractStr">
        <div class="tablefirst clearfix">
          <div class="left title-name">自述:</div>
          <div class="tabletel tabletelLast word-wrap left">{{abstractStr}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import sourceOS from '../../mixins/sourceOS'
  import { Toast } from 'vant';
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "oldPeopleCard",
    mixins: [sourceOS],
    props: {
      //理财经理ID
      userid: {
        type: String,
      },
    },
    data() {
      return {
        tadaState:false,
        fadeState1:false,
        fadeState2:false,
        fadeState3:false,
        orgnCode: '',
        //微信端显示
        isWeixin: false,
        //用户名
        userInfoname: "",
        //显示公司
        showcompany: false,
        //用户公司
        userInfocompany: "",
        //用户工作
        job: "",
        //显示工作
        showjob: false,
        //服务客户数
        clientNum: "",
        //工作年限
        jobYears: "",
        showmorehide: "显示更多",
        //显示年龄
        showage: false,
        //年龄
        age: "",
        //显示性别
        showgender: false,
        //性别
        gender: "",
        //用户电话号码
        userinfoPhoneName: "",
        userinfoPhoneNamenone: "",
        //显示邮箱
        showmail: false,
        //邮箱
        mail: "",
        //显示qq号
        showqq: false,
        //qq号
        qqNum: "",
        //显示微信
        showwechat: false,
        //微信
        wechat: "",
        //自述
        abstractStr: "具有专业的理财业务知识，通晓金融理论与政策，熟知各项银行产品，对市场变化反应灵敏。能针对客户需求，为客户提供专业的理财资讯与定制化资产配置方案，真正做到让客户满意。",
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['headPortrait']),
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
        methodName: "queryUserInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame1)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          console.log("理财经理基本信息======>", result);
          this.userInfo = result.data.userInfo;
          if (result.data.userInfo) {
            this.orgnCode = result.data.userInfo.orgnCode;
            if (result.data.userInfo.abstractStr != null) {
              this.abstractStr = result.data.userInfo.abstractStr;
            }
            if (result.data.userInfo.headPortrait != null) {
              this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
            } else {
              this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
            }
            this.userInfoname = result.data.userInfo.name;
            this.clientNum = result.data.userInfo.clientNum;
            this.jobYears = result.data.userInfo.jobYears;
            if (
              result.data.userInfo.age != 0 &&
              result.data.userInfo.age != null
            ) {
              this.showage = true;
              this.age = result.data.userInfo.age;
            }
            if (result.data.userInfo.gender != null) {
              this.showgender = true;
              this.gender = result.data.userInfo.gender;
            }
            if (result.data.userInfo.mail != null) {
              this.showmail = true;
              this.mail = result.data.userInfo.mail;
            }
            if (result.data.userInfo.qqNum != null) {
              this.showqq = true;
              this.qqNum = result.data.userInfo.qqNum;
            }
            if (result.data.userInfo.wechat != null) {
              this.showwechat = true;
              this.wechat = result.data.userInfo.wechat;
            }

            if (result.data.userInfo.company != null) {
              this.userInfocompany = result.data.userInfo.company;
              this.showcompany = true;
            } else {
              this.showcompany = false;
            }
            if (result.data.userInfo.job != null) {
              this.job = result.data.userInfo.job;
              this.showjob = true;
            } else {
              this.showjob = false;
            }
            if (result.data.userInfo.mobilePhone != null) {
              this.userinfoPhoneName = "tel:" + result.data.userInfo.mobilePhone;
              this.userinfoPhoneNamenone = result.data.userInfo.mobilePhone;
            }
            setTimeout(() => {
              this.$nextTick(() => {
                this.InitTabScroll();
              });
            }, 250);

          }
        }
      });
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_HEADPORTRAIT']),
      // 拨打电话
      dialPhoneNumber(){
        if(this.isWeixin){
          this.tadaState=true;
          setTimeout(() => {
            this.tadaState=false;
          }, 1000);
          window.location.href = this.userinfoPhoneName;
        }
      },
      // 初始化水平滚动
      InitTabScroll() {
        this.$nextTick(() => {
          let imgW1=0,imgW2=0,imgW3=0,imgW4=0,imgW5=0,imgW6=0;
          if(this.userinfoPhoneNamenone){
            imgW1 = this.$refs.tabitem1.clientWidth+11;
          }
          if(this.showwechat){
            imgW2 = this.$refs.tabitem2.clientWidth+11;
          }
          if(this.showmail){
            imgW3 = this.$refs.tabitem3.clientWidth+11;
          }
          if(this.showqq){
            imgW4 = this.$refs.tabitem4.clientWidth+11;
          }
          if(this.showage){
            imgW5 = this.$refs.tabitem5.clientWidth+11;
          }
          if(this.showgender){
            imgW6 = this.$refs.tabitem6.clientWidth+11;
          }
          let width = 14 + imgW1 + imgW2 + imgW3 + imgW4 + imgW5 + imgW6;
          this.$refs.tabcontent.style.width = width + "px";
          if (!this.scroll1) {
            this.scroll1 = new BScroll(this.$refs.tab, {
              scrollX: 0,
              // click:true,
              scrollX: true,
              scrollY: false,
              eventPassthrough: "vertical"
            });
          } else {
            this.scroll1.refresh();
          }
        });
      },
      //邮箱已拷贝
      onCopymail() {
        this.fadeState2=true;
        setTimeout(() => {
          this.fadeState2=false;
        }, 1000);
        var clipboard = new ClipboardJS('.copyMail')  //此处为点击的dom的类名
        clipboard.on('success', e => {
          Toast.success('邮箱已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          // 不支持复制
          Toast.fail('您的设备暂不支持复制');
          // 释放内存
          clipboard.destroy()
        })
      },
      //微信号已拷贝
      onCopywechat() {
        this.fadeState1=true;
        setTimeout(() => {
          this.fadeState1=false;
        }, 1000);
        var clipboard = new ClipboardJS('.copyWechat')  //此处为点击的dom的类名
        clipboard.on('success', e => {
          Toast.success('微信号已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          Toast.fail('拷贝失败');
          // 释放内存
          clipboard.destroy()
        })

      },
      //QQ号已拷贝
      onCopyqqNum() {
        this.fadeState3=true;
        setTimeout(() => {
          this.fadeState3=false;
        }, 1000);
        var clipboard = new ClipboardJS('.copyQQ')  //此处为点击的dom的类名
        clipboard.on('success', e => {
          Toast.success('QQ号已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          Toast.fail('拷贝失败');
          // 释放内存
          clipboard.destroy()
        })
      },
    }
  }
</script>

