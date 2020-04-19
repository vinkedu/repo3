<style scoped  lang="less">
  .pagefull {
    background-color: #f7f7f6;
    padding: 12.5px 14px;
    .pagefullImg {
      box-sizing: border-box;
      background-size: cover;
      background-image: url("./image/icard_bg@2x.png");
    }
    .pagefullImg1 {
      box-sizing: border-box;
      background-size: cover;
      background-image: url("./image/icard_bg2@2x.png");
    }
    .pagefullImg2 {
      box-sizing: border-box;
      background-size: cover;
      background-image: url("./image/icard_bg3@2x.png");
    }
    .yh-discripman {
      width: 100%;
      height: 200px;
      position: relative;
      .BackgroundYellow {
        position: absolute;
        right: 0;
        top: 0;
        background-image: url("./image/yellow@2x.png");
        width: 71.5px;
        height: 60px;
      }
      .changeSkinBox {
        position: absolute;
        top: 0;
        right: 0;
        padding: 7px 9px 14px 18px;
        z-index: 1;
        .changeSkin {
          background-image: url("./image/skin_c@2x.png");
          width: 16px;
          height: 14px;
          background-size: cover;
        }
        .changeSkin1 {
          background-image: url("./image/skin_a@2x.png");
          width: 16px;
          height: 14px;
          background-size: cover;
        }
        .changeSkin2 {
          background-image: url("./image/skin_b@2x.png");
          width: 16px;
          height: 14px;
          background-size: cover;
        }
      }
      .managePhotoBox {
        float: left;
        margin-left: 3%;
        margin-top: 20px;
        margin-right: 3%;
        height: 84px;
        width: 84px;
        border-radius: 50%;
        background: #f7f7f7;
        position: relative;
        .manage-photo {
          height: 74px;
          width: 74px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 5px;
          margin-top: 5px;
        }
        .renzheng-icon {
          position: absolute;
          width: 24px;
          height: 27px;
          right: 0;
          bottom: 0;
        }
      }
      .discripfont {
        overflow: hidden;
        float: right;
        height: 200px;
        width: 61%;
        margin-right: 4%;
        position: relative;
        .username {
          margin-top: 20px;
          text-align: left;
          #userInfoname {
            float: left;
            font-size: 24px;
          }
          .smallCode {
            float: left;
            font-size: 14px;
            margin-top: 12px;
          }
        }
        .userPlace {
          width: 100%;
          position: absolute;
          height: 20px;
          overflow: hidden;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .usercompany {
            font-size: 12px;
            color: #999999;
            padding-right: 7px;
          }
        }
        .certificate-dis {
          margin-top: 18px;
          height: 90px;
          overflow: hidden;
          font-size: 12px;
          color: #333;
          .linkcontent {
            padding-top: 9px;
            .tabletel {
              font-size: 12px;
              color: #333;
              line-height: 1.25;
              margin-left: 5px;
              display: inline-block;
              width: 140px;
              word-break: break-all;
            }
            .calltelephone {
              float: right;
              button {
                margin-top: -1px;
                border: 1px solid #d9d9d9;
                background: #f7f7f7;
                color: #818181;
                font-size: 11px;
                border-radius: 3px;
                height: 16px;
                line-height: 1;
                padding: 0 5px;
              }
            }
            .copy {
              float: right;
              margin-top: -1px;
              border: 1px solid #d9d9d9;
              background: #f7f7f7;
              color: #818181;
              font-size: 11px;
              border-radius: 3px;
              height: 16px;
              line-height: 1;
              padding: 0 5px;
            }
          }
        }
        .showmorefont {
          margin-top: 11px;
          font-size: 10px;
          color: #999;
          width: 61px;
          float: right;
          .arrowR {
            margin-top: 1.5px;
            height: 10px;
            width: 5px;
            background-image: url("./image/arrow_r@2x.png");
          }
        }
        .showmorefont1 {
          margin-top: 11px;
          font-size: 10px;
          color: #999;
          width: 43px;
          float: right;
          .arrowU {
            margin-top: 3px;
            height: 5px;
            width: 10px;
            background-image: url("./image/arrow_u@2x.png");
          }
        }
      }

      .managePhotoBox1 {
        float: left;
        margin-left: 3%;
        margin-top: 20px;
        margin-right: 3%;
        height: 84px;
        width: 84px;
        border-radius: 50%;
        background: #f7f7f7;
        position: relative;
        .renzheng-icon {
          position: absolute;
          width: 24px;
          height: 27px;
          right: 0;
          bottom: 0;
        }
        .manage-photo {
          height: 74px;
          width: 74px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 5px;
          margin-top: 5px;
        }
        .username {
          margin-top: 12px;
          margin-left: 12px;
          #userInfoname {
            font-size: 18px;
            color: #fff;
            text-align: left;
            width: 75px;
          }
          .smallCode {
            font-size: 10px;
            margin-top: 5px;
            color: #fff;
            text-align: left;
          }
        }
      }
      .discripfont1 {
        overflow: hidden;
        float: right;
        height: 200px;
        width: 61%;
        margin-right: 4%;
        position: relative;
        .usercompanyBlock {
          margin-left: 19%;
          padding-top: 40px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 81.5%;
          position: absolute;
          .usercompany {
            font-size: 12px;
            color: #999999;
            display: inline-block;
            line-height: 30px;
            padding-right: 7px;
          }
        }
        .certificate-dis {
          margin-top: 69px;
          height: 90px;
          overflow: hidden;
          font-size: 12px;
          color: #333;
          .linkcontent {
            padding-top: 9px;
            .tabletel {
              font-size: 12px;
              color: #333;
              line-height: 1.25;
              margin-left: 5px;
              display: inline-block;
              width: 130px;
              word-break: break-all;
            }
            .tabletel-short {
              width: 115px;
            }
            .calltelephone {
              float: right;
              button {
                margin-top: -1px;
                border: 1px solid #d9d9d9;
                background: #f7f7f7;
                color: #818181;
                font-size: 11px;
                border-radius: 3px;
                height: 16px;
                line-height: 1;
                padding: 0 5px;
              }
            }
            .copy {
              float: right;
              margin-top: -1px;
              border: 1px solid #d9d9d9;
              background: #f7f7f7;
              color: #818181;
              font-size: 11px;
              border-radius: 3px;
              height: 16px;
              line-height: 1;
              padding: 0 5px;
            }
          }
          .linkcontent:first-child {
            margin-left: 15.5%;
          }
          .linkcontent:nth-child(2) {
            margin-left: 10%;
          }
          .linkcontent:last-child {
            margin-left: 6%;
          }
        }
        .showmorefont {
          margin-top: 11px;
          font-size: 10px;
          color: #999;
          width: 61px;
          float: right;
          .arrowR {
            margin-top: 1.5px;
            height: 10px;
            width: 5px;
            background-image: url("./image/arrow_r@2x.png");
          }
        }
        .showmorefont1 {
          margin-top: 11px;
          font-size: 10px;
          color: #999;
          width: 43px;
          float: right;
          .arrowU {
            margin-top: 3px;
            height: 5px;
            width: 10px;
            background-image: url("./image/arrow_u@2x.png");
          }
        }
      }

      .managePhotoBox2 {
        float: right;
        margin-right: 3%;
        margin-top: 20px;
        margin-left: 3%;
        height: 84px;
        width: 84px;
        border-radius: 50%;
        background: #f7f7f7;
        position: relative;
        .renzheng-icon {
          position: absolute;
          width: 24px;
          height: 27px;
          right: 0;
          bottom: 0;
        }
        .manage-photo {
          height: 74px;
          width: 74px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 5px;
          margin-top: 5px;
        }
        .showmorefont {
          margin-right: 4%;
          margin-top: 68px;
          font-size: 10px;
          color: #999;
          width: 61px;
          float: right;
          .arrowR {
            margin-top: 1.5px;
            height: 10px;
            width: 5px;
            background-image: url("./image/arrow_r@2x.png");
          }
        }
        .showmorefont1 {
          margin-top: 63px;
          font-size: 10px;
          color: #999;
          width: 43px;
          float: right;
          .arrowU {
            margin-top: 3px;
            height: 5px;
            width: 10px;
            background-image: url("./image/arrow_u@2x.png");
          }
        }
      }
      .discripfont2 {
        overflow: hidden;
        float: left;
        height: 200px;
        width: 61%;
        margin-left: 4%;
        .username {
          margin-top: 20px;
          text-align: left;
          #userInfoname {
            float: left;
            font-size: 24px;
          }
          .smallCode {
            float: left;
            font-size: 14px;
            margin-top: 12px;
          }
        }
        .userPlace {
          width: 65%;
          position: absolute;
          height: 20px;
          overflow: hidden;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .usercompany {
            font-size: 12px;
            color: #999999;
            padding-right: 7px;
          }
        }
        .certificate-dis {
          margin-top: 18px;
          height: 90px;
          overflow: hidden;
          font-size: 12px;
          color: #333;
          .linkcontent {
            padding-top: 9px;
            .tabletel {
              font-size: 12px;
              color: #333;
              line-height: 1.25;
              margin-left: 5px;
              display: inline-block;
              width: 140px;
              word-break: break-all;
            }
            .calltelephone {
              float: right;
              button {
                margin-top: -1px;
                border: 1px solid #d9d9d9;
                background: #f7f7f7;
                color: #818181;
                font-size: 11px;
                border-radius: 3px;
                height: 16px;
                line-height: 1;
                padding: 0 5px;
              }
            }
            .copy {
              float: right;
              margin-top: -1px;
              border: 1px solid #d9d9d9;
              background: #f7f7f7;
              color: #818181;
              font-size: 11px;
              border-radius: 3px;
              height: 16px;
              line-height: 1;
              padding: 0 5px;
            }
          }
        }
      }
    }
    .detailinformation {
      background: #fff;
      padding: 17px 15px 15px;
      .tabletr {
        padding-bottom: 10px;
        border-bottom: 1px dashed #ddd;
        .tablefirst {
          font-size: 12px;
          color: #999;
          margin-right: 5px;
        }
      }
      .Profile {
        padding-top: 6px;
        word-wrap: break-word;
        color: #6d6d6d;
      }
    }
  }
  .pagefull-30{
    background-color: #fff;
    .yh-discripman-30{
      box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
      border-radius:4px;
    }
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
  .phone1,
  .mail,
  .wechat {
    width: 15px;
    height: 15px;
    background-size: cover;
  }
  .qqNum {
    width: 13px;
    height: 14.5px;
    background-size: cover;
    margin-right: 2px;
  }

  .phone1 {
    background-image: url("./image/icard_tel@2x.png");
  }
  .mail {
    background-image: url("./image/icard_lett@2x.png");
  }
  .qqNum {
    background-image: url("./image/icard_qq@2x.png");
  }
  .wechat {
    background-image: url("./image/icard_wechat@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    .pagefull .pagefullImg {
      background-image: url("./image/icard_bg@3x.png");
    }
    .pagefull .pagefullImg1 {
      background-image: url("./image/icard_bg2@3x.png");
    }
    .pagefull .pagefullImg2 {
      background-image: url("./image/icard_bg3@3x.png");
    }
  }
</style>

<template>
  <div>
    <div class="pagefull"
         v-if="showman"  :class="{'pagefull-30':versionStyle==2}">
      <div class="yh-discripman pagefullImg" :class="{'yh-discripman-30':versionStyle==2}"
           v-if="skin==1">
        <div class="BackgroundYellow">
        </div>
        <div @click.stop="changeSkin"
             v-if="(!isWeixin && historyid!=1) || isWXApplet==1"
             class="changeSkinBox">
          <div class="changeSkin">
          </div>
        </div>
        <div class="managePhotoBox">
          <img class="manage-photo"
               v-lazy="headPortrait">
          <img src="./image/认证@2x.png"
               class="renzheng-icon"
               v-if="showOrgnCode">
        </div>
        <div class="discripfont">
          <div class="username clearfix"
               id="username">
            <div id="userInfoname">{{userInfoname}}</div>

          </div>
          <div class="userPlace">
            <span class="usercompany"
                  v-show="showcompany">{{userInfocompany}}</span>
            <span class="usercompany">{{job}}</span>
          </div>
          <div class="certificate-dis">
            <div class="linkcontent">
              <div v-if="userinfoPhoneNamenone!=''">
                <i class="phone1"></i>
                <i class="tabletel">{{userinfoPhoneName | formatBankCard | splitLast}}</i>
                <a :href="userinfoPhoneName"
                   class="calltelephone"
                   v-if="isWeixin">
                  <button>拨打</button>
                </a>
              </div>
            </div>
            <div class="linkcontent"
                 v-show="showwechat">
              <i class="wechat"></i>
              <i class="tabletel">{{wechat}}</i>
              <button class="copy copyWechat"
                      @click="onCopywechat"
                      :data-clipboard-text="wechat">拷贝</button>
            </div>
            <div class="linkcontent"
                 v-show="showmail">
              <i class="mail"></i>
              <i class="tabletel">{{mail}}</i>
              <button class="copy copyMail"
                      @click="onCopymail"
                      :data-clipboard-text="mail">拷贝</button>
            </div>
          </div>
          <div class="showmorefont"
               @click.stop="showmore"
               v-if="showmorehide=='显示更多'">{{showmorehide}} <i class="arrowR"></i></div>
          <div class="showmorefont1"
               @click.stop="showmore"
               v-if="showmorehide=='收起'">{{showmorehide}} <i class="arrowU"></i></div>
        </div>
      </div>
      <div class="yh-discripman pagefullImg1" :class="{'yh-discripman-30':versionStyle==2}"
           v-if="skin==2">
        <div @click.stop="changeSkin"
             v-if="(!isWeixin && historyid!=1) || isWXApplet==1"
             class="changeSkinBox">
          <div class="changeSkin1">
          </div>
        </div>
        <div class="managePhotoBox1">
          <img class="manage-photo"
               v-lazy="headPortrait">
          <img src="./image/认证@2x.png"
               class="renzheng-icon"
               v-if="showOrgnCode">
          <div class="username clearfix"
               id="username">
            <div id="userInfoname">{{userInfoname}}</div>

          </div>
        </div>
        <div class="discripfont1">
          <div class="usercompanyBlock">
            <span class="usercompany"
                  v-show="showcompany">{{userInfocompany}}</span>
            <span class="usercompany">{{job}}</span>
          </div>
          <div class="certificate-dis">
            <div class="linkcontent">
              <div v-if="userinfoPhoneNamenone!=''">
                <i class="phone1"></i>
                <i class="tabletel tabletel-short">{{userinfoPhoneName | formatBankCard | splitLast}}</i>
                <a :href="userinfoPhoneName"
                   class="calltelephone"
                   v-if="isWeixin">
                  <button>拨打</button>
                </a>
              </div>
            </div>
            <div class="linkcontent"
                 v-show="showwechat">
              <i class="wechat"></i>
              <i class="tabletel">{{wechat}}</i>
              <button class="copy copyWechat"
                      @click="onCopywechat"
                      :data-clipboard-text="wechat">拷贝</button>
            </div>
            <div class="linkcontent"
                 v-show="showmail">
              <i class="mail"></i>
              <i class="tabletel">{{mail}}</i>
              <button class="copy copyMail"
                      @click="onCopymail"
                      :data-clipboard-text="mail">拷贝</button>
            </div>
          </div>
          <div class="showmorefont"
               @click.stop="showmore"
               v-if="showmorehide=='显示更多'">{{showmorehide}} <i class="arrowR"></i></div>
          <div class="showmorefont1"
               @click.stop="showmore"
               v-if="showmorehide=='收起'">{{showmorehide}} <i class="arrowU"></i></div>
        </div>
      </div>
      <div class="yh-discripman pagefullImg2" :class="{'yh-discripman-30':versionStyle==2}"
           v-if="skin==3">
        <div @click.stop="changeSkin"
             v-if="(!isWeixin && historyid!=1) || isWXApplet==1"
             class="changeSkinBox">
          <div class="changeSkin2">
          </div>
        </div>
        <div class="managePhotoBox2">
          <img class="manage-photo"
               v-lazy="headPortrait">
          <img src="./image/认证@2x.png"
               class="renzheng-icon"
               v-if="showOrgnCode">
          <div class="showmorefont"
               @click.stop="showmore"
               v-if="showmorehide=='显示更多'">{{showmorehide}} <i class="arrowR"></i></div>
          <div class="showmorefont1"
               @click.stop="showmore"
               v-if="showmorehide=='收起'">{{showmorehide}} <i class="arrowU"></i></div>
        </div>
        <div class="discripfont2">
          <div class="username clearfix"
               id="username">
            <div id="userInfoname">{{userInfoname}}</div>

          </div>
          <div class="userPlace">
            <span class="usercompany"
                  v-show="showcompany">{{userInfocompany}}</span>
            <span class="usercompany">{{job}}</span>
          </div>
          <div class="certificate-dis">
            <div class="linkcontent">
              <div v-if="userinfoPhoneNamenone!=''">
                <i class="phone1"></i>
                <i class="tabletel">{{userinfoPhoneName | formatBankCard | splitLast}}</i>
                <a :href="userinfoPhoneName"
                   class="calltelephone"
                   v-if="isWeixin">
                  <button>拨打</button>
                </a>
              </div>
            </div>
            <div class="linkcontent"
                 v-show="showwechat">
              <i class="wechat"></i>
              <i class="tabletel">{{wechat}}</i>
              <button class="copy copyWechat"
                      @click="onCopywechat"
                      :data-clipboard-text="wechat">拷贝</button>
            </div>
            <div class="linkcontent"
                 v-show="showmail">
              <i class="mail"></i>
              <i class="tabletel">{{mail}}</i>
              <button class="copy copyMail"
                      @click="onCopymail"
                      :data-clipboard-text="mail">拷贝</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 个人详细信息 -->
      <div class="detailinformation"
           v-show="showall">
        <div class="tabletr">
          <span class="tablefirst"
                v-show="showage">
            {{age}}岁
          </span>
          <span class="tablefirst"
                v-show="showgender">
            {{gender}}
          </span>
        </div>
        <div class="Profile">
          {{abstractStr}}
        </div>
      </div>

    </div>
    <div class="margin-bottom-box" v-if="showman&&versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import { Toast } from 'vant';
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "peopleCard",
    mixins: [sourceOS],
    props: {
      //理财经理ID
      userid: {
        type: String,
      },
      //小程序
      isWXApplet: {
        type: String
      },
      // 样式版本
      versionStyle:{
        type:String,
        default:'1'
      }
    },
    data() {
      return {
        historyid: this.$route.params.historyid,
        //名片显示
        showman: true,
        //微信端显示
        isWeixin: false,
        //产品介绍
        tellpeopleproduct: '',
        //纯电话号码,
        userinfoPhoneNamenone: '',
        //可拨打电话号码
        userinfoPhoneName: '',
        //显示公司
        showcompany: false,
        //用户公司
        userInfocompany: "",
        //工作
        job: "",
        //年龄
        age: "",
        //性别
        gender: "",
        //邮箱
        mail: "",
        //qq号码
        qqNum: "",
        //微信号
        wechat: "",
        //显示年龄
        showage: false,
        //显示性别
        showgender: false,
        //显示电话
        showtel: false,
        //显示邮箱
        showmail: false,
        //显示qq号
        showqq: false,
        //显示微信
        showwechat: false,
        //展开变量
        showall: false,
        showmorehide: "显示更多",
        //用户简介
        abstractStr: "",
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['userInfoname', 'skin', 'headPortrait', 'showOrgnCode']),
    },
    created() {
      //判断微信环境
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        if (this.isWXApplet != 1) {
          this.isWeixin = true;
        }
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
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("理财经理======>", result);
          //肤色记录
          var ua = navigator.userAgent.toLowerCase();
          if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
            console.log("肤色");
          } else {
            this.SET_SKIN(result.data.userInfo.skinColour);
          }
          if (result.data.userInfo) {
            if (result.data.userInfo.orgnCode != null) {
              if (result.data.userInfo.orgnCode == 2 || result.data.userInfo.orgnCode == 3|| result.data.userInfo.orgnCode == 4|| result.data.userInfo.orgnCode == 5) {
                this.SET_SHOWORGNCODE(true);
              }
            }
            if (result.data.userInfo.abstractStr != null) {
              this.abstractStr = result.data.userInfo.abstractStr;
            }
            if (result.data.userInfo.headPortrait != null) {
              this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
            } else {
              this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
            }
            this.SET_USERINFONAME(result.data.userInfo.name);
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
          }
        } else {
          this.showman = false;
        }
      });
      //人物联系信息
      let parames1 = {
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
      this.$post(JSON.stringify(parames1)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          console.log("用户信息======>", result);
          if (result.data.userInfo) {
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
          }
        }
      });


    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_USERINFONAME', 'SET_SKIN', 'CHANGE_SKIN', 'SET_HEADPORTRAIT', 'SET_SHOWORGNCODE']),
      //展开切换
      showmore() {
        if (this.showall == true) {
          this.showmorehide = "显示更多";
          this.showall = false;
        } else {
          this.showmorehide = "收起";
          this.showall = true;
        }
      },
      //初始化肤色
      initSkin() {
        let parame = {
          "functionName": "userAppService",
          "methodName": "updateSkinColourById",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            "userId": this.userid,
            "skinColour": this.skin
          }
        }
        this.$post(JSON.stringify(parame)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log("==>初始化肤色", result);
          }
        });
      },
      //换肤
      changeSkin() {
        this.CHANGE_SKIN();
        this.initSkin();
      },
      //邮箱已拷贝
      onCopymail() {
        var clipboard = new ClipboardJS('.copyMail')  //此处为点击的dom的类名
        // eslint-disable-next-line no-unused-vars
        clipboard.on('success', e => {
          Toast.success('邮箱已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        // eslint-disable-next-line no-unused-vars
        clipboard.on('error', e => {
          Toast.fail('拷贝失败');
          // 释放内存
          clipboard.destroy()
        })
      },
      //QQ号已拷贝
      onCopyqqNum() {
        var clipboard = new ClipboardJS('.copyQQ')  //此处为点击的dom的类名
        // eslint-disable-next-line no-unused-vars
        clipboard.on('success', e => {
          Toast.success('QQ号已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        // eslint-disable-next-line no-unused-vars
        clipboard.on('error', e => {
          Toast.fail('拷贝失败');
          // 释放内存
          clipboard.destroy()
        })
      },
      //微信号已拷贝
      onCopywechat() {
        var clipboard = new ClipboardJS('.copyWechat')  //此处为点击的dom的类名
        // eslint-disable-next-line no-unused-vars
        clipboard.on('success', e => {
          Toast.success('微信号已拷贝');
          // 释放内存
          clipboard.destroy()
        })
        // eslint-disable-next-line no-unused-vars
        clipboard.on('error', e => {
          Toast.fail('拷贝失败');
          // 释放内存
          clipboard.destroy()
        })

      },
    }
  }
</script>


