<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .newsCont {
    background-color: #fff;
    margin: 0;
    padding: 0 15px 15px;
    .bottom-tip {
      font-size: 10px;
      font-weight: normal;
      color: rgba(102, 102, 102, 1);
      line-height: 15px;
      padding: 14px 0 0;
      .red-font {
        color: #e72e33;
      }
    }
    .hotTextTitle {
      font-size: 18px;
      color: #b90901;
      background: #fff;
      padding: 10px 0;
      // border-bottom: 1px solid #eee;
      // margin-bottom: 12.5px;
      .title-icon {
        width: 71px;
        height: 20px;
      }
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
        vertical-align: middle;
      }
    }
    .recomment-content-box {
      display: flex;
      .recomment-left-icon {
        width: 35px;
        height: 50px;
        display: flex;
        align-items: center;
        margin-top: 85px;
        img {
          height: 23px;
          width: 23px;
        }
      }
      .recomment-right-content {
        flex: 1;
        max-width: 100%;
        position: relative;
        .zuo-hua-icon-box{
          padding: 15px 0;
          position: absolute;
          right: -10px;
          top: 50%;
          z-index: 1;
          transform: translateY(-23px);
          .zuo-hua-icon {
            width: 24px;
            height: 15px;
          }
        }
        .you-hua-icon-box{
          padding: 15px 0;
          position: absolute;
          left: -10px;
          top: 50%;
          z-index: 1;
          transform: translateY(-23px);
          .you-hua-icon{
            width: 24px;
            height: 15px;
          }
        }
        .swipe-box {
          box-shadow: 0px 2px 8px 0px rgba(51, 51, 51, 0.2);
          border-radius: 4px;

          .newsDetils {
            padding-bottom: 10px;
            margin: 0;
            .newsDetilsTitle {
              font-size: 20px;
              color: #000;
              line-height: 30px;
              word-break: break-all;
              font-weight: 610;
              padding: 12.5px 15px 13.5px;
              letter-spacing: 0.5px;
              font-family: Georgia;

              // color: #000;
              // color: #fff;
              // text-shadow:
              // 1px 1px 0 #969696,
              // 2px 2px 0 #969696,/* end of 2 level deep grey shadow */
              // 3px 3px 0 #969696; /* end of 4 level deep dark shadow */
            }
            .newsContbannerImg {
              width: 100%;
              height: 80px;
              position: relative;
              overflow: hidden;
              .innerImage {
                width: 100%;
                position: absolute;
                margin: auto;
                top: -9999px;
                right: -9999px;
                bottom: -9999px;
                left: -9999px;
              }
            }
            .newsDetil {
              // overflow: hidden;
              // text-overflow: ellipsis;
              // display: -webkit-box;
              // -webkit-box-orient: vertical;
              // -webkit-line-clamp: 3;
              // text-align: justify;
              // padding: 0 12px;
              background: #fff;
              margin: 0;
              color: #333;
              word-break: break-all;
              padding: 0 15px;
              font-size: 17px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              line-height: 25px;
              letter-spacing: 0.5px;
              font-family: Georgia;
            }
            .comment-box {
              margin: 16px 15px;
              background: rgba(247, 247, 247, 1);
              border-radius: 4px;
              padding: 9px;
            }
            .commentRight {
              font-size: 14px;
              font-weight: 400;
              line-height: 17px;
              color: rgba(102, 102, 102, 1);
              font-family: Georgia;
            }
            .commentLeft {
              display: flex;
              align-items: center;
              margin-bottom: 7px;
              .commentImg {
                height: 28px;
                width: 28px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 9px;
              }
            }
          }
        }

        .commentButtonBox {
          background: #fff;
          border-bottom: 1px solid #eee;
          .managercommentButton {
            position: relative;
            top: 1px;
            height: 23px;
            width: 70px;
            margin: 0 auto;
            text-align: center;
            background: linear-gradient(to bottom, #f7f7f7, #fff);
            font-size: 12px;
            color: #666;
            line-height: 24px;
            .arrowD {
              height: 5px;
              width: 10px;
              background-image: url("../image/arrow_d@2x.png");
              position: relative;
              top: 9px;
            }
            .arrowU {
              height: 5px;
              width: 10px;
              background-image: url("../image/arrow_u@2x.png");
              position: relative;
              top: 9px;
            }
          }
        }
        .mamanagerCommentContent {
          margin-top: 10px;
          background: #f7f7f7;
          padding: 15px 5%;
          margin-bottom: 15px;
        }
        .managerTold {
          margin-top: 10px;
          background: #f7f7f7;
          padding: 0 17.5px 0 12.5px;
          .checkcomment {
            margin-top: 10px;
            padding: 0;
            height: 36px;
            & > .left {
              margin-right: 8px;
            }
            .feelgood-content {
              display: flex;
              align-items: center;
              .feelgoodBox {
                display: flex;
                align-items: center;
                height: 37px;
                .feelgood {
                  width: 12pt;
                  height: 11pt;
                  background-image: url("../image/like_icon@2x.png");
                }
                .overfeelgood {
                  width: 12pt;
                  height: 12pt;
                  background-image: url("../image/overlike_icon@2x.png");
                }
              }
            }
            .feelgoodfont {
              line-height: 37px;
              font-size: 14px;
              color: #999;
              position: relative;
              left: 3pt;
              padding-right: 10px;
              display: inline-block;
            }
            .overfeelgoodfont {
              color: #bd160e;
            }
            .comment-content {
              display: flex;
              align-items: center;
              .commentcontentBox {
                display: flex;
                align-items: center;
                height: 37px;
                .commentcontent {
                  width: 12pt;
                  height: 10.5pt;
                  background-image: url("../image/com_icon@2x.png");
                }
              }
            }
            .commentcontentfont {
              line-height: 37px;
              font-size: 14px;
              color: #999;
              position: relative;
              left: 3pt;
              display: inline-block;
            }
            .overcheck {
              height: 5px;
              width: 10px;
              background-image: url("../image/arrow_u@2x.png");
              vertical-align: middle;
              margin-top: -3px;
            }
            .check {
              height: 5px;
              width: 10px;
              background-image: url("../image/arrow_d@2x.png");
              vertical-align: middle;
            }
            .checkfont {
              line-height: 40px;
              font-size: 12px;
              color: #666;
              margin-top: -3px;
            }
          }
        }
        .select-message {
          margin-top: -2px;
          padding: 0 17.5px;
          background: #f7f7f7;
          .userList:first-child {
            padding-top: 10px;
            border-top: 1px solid #eee;
          }
          .userList:last-child {
            padding-bottom: 1.5px;
          }
          .userList {
            border: 1px solid transparent;
            background: transparent;
            width: 100%;
            text-align: left;
            outline: none;
            display: flex;
            align-items: flex-start;
            padding: 0;
            overflow: hidden;
            .userImg {
              height: 25px;
              width: 25px;
              border-radius: 50%;
              object-fit: cover;
            }
            .comment {
              padding: 6.5px 0 0 6px;
              margin-bottom: 16px;
              flex: 1;
              line-height: 20px;
              overflow: hidden;
              .userNick {
                font-size: 12px;
                color: #666;
              }
              .commentTime {
                margin-left: 5px;
                font-size: 12px;
                color: #999;
              }
              .userNickContent {
                font-size: 12px;
                margin-top: 10px;
                color: #333;
                overflow: hidden;
                white-space: normal;
                word-wrap: break-word;
                word-break: break-all; /*Only work in IE*/
                text-overflow: ellipsis; /*Not working in FF*/
              }
            }
          }
        }
        .selectnomessage {
          padding: 10px 17.5px;
          background: #f7f7f7;
          text-align: center;
          color: #666;
          font-size: 12px;
        }
      }
    }

    .bottom-trans-button {
      text-align: center;
      font-size: 13px;
      padding-top: 10px;
      .bottom-trans-button-title {
        display: flex;
        align-items: center;
        justify-content: center;
        .arrowD {
          height: 5px;
          width: 10px;
          background-image: url("../image/arrow_d@2x.png");
          margin-left: 5px;
        }
        .arrowU {
          height: 5px;
          width: 10px;
          background-image: url("../image/arrow_u@2x.png");
          margin-right: 8px;
          margin-left: 5px;
        }
      }
    }
    .close-first-recomment-state {
      height: 0;
      overflow: hidden;
    }
  }
  .margin-bottom-box {
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
  @keyframes bounce {
    0% {
      transform: translateX(-50%);
    }
    50% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(50%);
    }
  }
</style>
<style lang="less">
  .recomment-right-content {
    .van-swipe__indicator {
      background: #999;
    }
  }
</style>
<template>
  <div>
    <div class="newsCont"
         v-if="moduleC">
      <div class="hotTextTitle clearfix">
        <div class="left">
          <img src="../image/headlineRecomendationIcon.png"
               class="title-icon">
        </div>
      </div>
      <div class="recomment-content-box">
        <div class="recomment-right-content">
          <div class="zuo-hua-icon-box">
            <img src="../image/zuo_hua_icon.gif" class="zuo-hua-icon" @click="nextSwipe">
          </div>
          <div class="you-hua-icon-box">
            <img src="../image/you_hua_icon.gif" class="you-hua-icon" @click="prevSwipe">
          </div>
          <div class="swipe-box">
            <van-swipe class="my-swipe"
                       ref="mySwipe"
                       :show-indicators="false"
                       @change="onChange">
              <van-swipe-item v-for="(item,index) in hotTodayList30"
                              :key="index">
                <div class="newsDetils"
                     @click="checkArticle(item.id,item.title,item)">
                  <div class="newsDetilsTitle">{{item.title}}</div>
                  <div class="newsDetil"
                       v-html="item.abstractStr">
                  </div>
                  <div v-show="index==recommentSelectedIndex"
                       class="comment-box">
                    <div class="commentLeft">
                      <img v-lazy="headPortrait"
                           class="commentImg">点评
                    </div>
                    <div class="commentRight word-wrap"
                         v-if="hotTodayList30[recommentSelectedIndex].userComment!=null">
                      <div v-html="hotTodayList30[recommentSelectedIndex].userComment.commentary"></div>
                    </div>
                  </div>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
      </div>
      <div class="bottom-tip"><span class="red-font">* </span>头条推荐您可以<span class="red-font">‘左右滑动’</span>选取喜欢的头条并转发获客</div>
    </div>
    <div class="margin-bottom-box"></div>
  </div>
</template>
<script>
  import isWeixin from '../../../mixins/isWeixin'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'firstRecomment',
    inject: ["checkArticle", "showModule", "transDeleteButton", "PartState"],
    mixins: [sourceOS, isWeixin],
    props: {
      //时间戳
      todaytime: {
        type: String
      },
      //是否为历史数据
      historyid: {
        type: String
      },
      //理财经理ID
      userid: {
        type: String
      },
      //小程序
      isWXApplet: {
        type: String
      },
    },
    data() {
      return {
        recommentSelectedIndex: 0,
        recommentState: true,
        commentObjList: [],
        //评论
        showcommentList: [],
        firstRecommentIdList: [],
        //点赞状态
        showfeelgoodList: [],
        //评论数
        commentNumList: [],
        //点赞数
        goodNumList: [],
        //微信端显示
        isWeixin: false,
        //今日头条图片
        newsImageUrl1: 'https://www.yihuisoft.com/appImage/firstRecommentBackground1.png',
        newsImageUrl2: 'https://www.yihuisoft.com/appImage/firstRecommentBackground2.png',
        newsImageUrl3: 'https://www.yihuisoft.com/appImage/firstRecommentBackground3.png',
        newsImageUrl4: 'https://www.yihuisoft.com/appImage/firstRecommentBackground4.png',
        //理财师评论折叠
        managerCommentStateList: [false],
        //点赞
        showfeelgood: false,
        //文章点赞数量
        articlegoodnumber: 0,
        //页码
        No: 1,

        //评论列表
        commentList: [],
        //头像
        HEAD_PORTRAIT: [],
        //是否可以删除
        showdelete: [],
        //评论ID集合
        commentListid: [],
        //头条推荐文章ID
        moduleCId: ''
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['hotTodayRes', 'headPortrait', 'commentary', 'moduleC', 'hotTodayList30']),
      //时间转化
      formatDate: function () {
        let date = new Date(this.todaytime * 1);
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
    },
    created() {
      //判断微信环境
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
        this.isWeixin = true;
      } else {
        //头条推荐
        this.initFirstComment();
      }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_HOTTODAYRES', 'SET_COMMENTARY', 'SET_DELETEPRODUCTID', 'SET_HOTTODAYLIST30', 'SET_COMMENTARTICLEINDEX']),
      // 上一页轮播图
      prevSwipe(){
        this.$refs.mySwipe.prev();
      },
      // 下一页轮播图
      nextSwipe(){
        this.$refs.mySwipe.next();
      },
      onChange(index) {
        this.recommentSelectedIndex = index;
        this.moduleCId = this.hotTodayList30[index].id;
        console.log(this.recommentSelectedIndex);
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          setTimeout(() => {
            window.webkit.messageHandlers.toSectionDict.postMessage(this.PartState());
          }, 500);
        }
      },
      //  3.0新版本头条推荐
      initFirstComment() {
        let parame7 = {
          "functionName": "todayFinanceService",
          "methodName": "selectHeadRecommend",
          "pageNo": 1,
          "pageSize": 10,
          originSource: {
            OS: this.OS,
            version: "H5_V3.0"
          },
          "data": {
            "pubTime": this.formatDate
          }
        }
        this.$post(JSON.stringify(parame7)).then(result => {
          console.log("==>头条推荐3.0参数", parame7);
          console.log("==>头条推荐3.0结果", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log("==>头条推荐3.0参数", parame7);
            console.log("==>头条推荐3.0结果", result);
            this.SET_HOTTODAYLIST30(result.data.hotTodayList);
            this.managerCommentStateList = [];
            this.showfeelgoodList = [];
            this.goodNumList = [];
            this.commentNumList = [];
            this.firstRecommentIdList = [];
            this.showcommentList = [];
            this.commentObjList = [];
            this.initcomment();
            this.initFeelGood();
            for (let i = 0; i < result.data.hotTodayList.length; i++) {
              this.showcommentList.push(false);
              this.managerCommentStateList.push(false);
              this.showfeelgoodList.push(false);
              this.firstRecommentIdList.push(result.data.hotTodayList[i].id);
              this.commentObjList.push([]);
              if (result.data.hotTodayList[i].userComment != null) {
                this.goodNumList.push(result.data.hotTodayList[i].userComment.goodNum);
                this.commentNumList.push(result.data.hotTodayList[i].userComment.commentNum);
              }
              else {
                this.goodNumList.push(0);
                this.commentNumList.push(0);
              }
            }
            //评论
            this.moduleCId = result.data.hotTodayList[0].id;
            var u = navigator.userAgent;
            if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
              setTimeout(() => {
                window.webkit.messageHandlers.toSectionDict.postMessage(this.PartState());
              }, 500);
            }
          }
          if (result.data.codeType == '400') {
            this.showModule('A-H-I-J-K');
          }
        });
      },
      //换一组
      // changeHotText(string) {
      //   if (string == 'FirstRecomment') {
      //     this.initFirstComment();
      //   }
      // },
      //理财师评论折叠
      commentMulclick(index) {
        console.log(this.managerCommentStateList, index);
        for (let i = 0; i < this.managerCommentStateList.length; i++) {
          if (i === index) {
            this.managerCommentStateList[index]
              ? this.managerCommentStateList.splice(index, 1, false)
              : this.managerCommentStateList.splice(index, 1, true)
          }
        }
      },
      //点赞数据获取
      feelgood(index, itemId) {
        if (this.userid != -1) {
          let parame4 = {
            functionName: "appService",
            methodName: "articleGood",
            originSource: {
              OS: this.OS,
              version: "H5_V1.0"
            },
            data: {
              userId: this.userid, // 用户ID
              otherId: itemId // 文章ID
            }
          };
          this.$post(JSON.stringify(parame4)).then(result => {
            console.log('点赞', result);
            if (result.errorCode == ERROR_CODE) {
              this.goodNumList.splice(index, 1, result.data.goodNum);
              console.log(this.goodNumList)
            }
          });
          if (this.showfeelgoodList[index] == false) {
            this.showfeelgoodList.splice(index, 1, true);
          } else {
            this.showfeelgoodList.splice(index, 1, false);
          }
        }
      },
      //初始化点赞状态
      initFeelGood() {
        for (let indexi = 0; indexi < this.hotTodayList30.length; indexi++) {
          //获取数据
          let parame5 = {
            functionName: "appService",
            methodName: "checkUserGood",
            originSource: {
              OS: this.OS,
              version: "H5_V1.0"
            },
            data: {
              userId: this.userid, // 用户ID
              otherId: this.hotTodayList30[indexi].id // 文章ID
            }
          };
          this.$post(JSON.stringify(parame5)).then(result => {
            if (result.errorCode == ERROR_CODE) {
              if (result.data.goodStatus == 0) {
                this.showfeelgoodList.splice(indexi, 1, false);
              } else if (result.data.goodStatus == 1) {
                this.showfeelgoodList.splice(indexi, 1, true);
              }
            }
          });
        }
      },
      //调用手机键盘
      entercommentcontent(id) {
        var u = navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          //android终端
          if (id != "") {
            Android.goInputText(id);
          }
        } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          //ios终端
          // webkit.messageHandlers.Xiaov.postMessage(null);
          if (id != "") {
            window.webkit.messageHandlers.toComment.postMessage(id);
            app.toComment(id);
          }
        }
      },
      //跳转具体文章
      gotocommentone() {
        let self = document.getElementById("checkcomment");
        let top =
          self.offsetTop +
          document.documentElement.scrollTop +
          self.offsetHeight -
          window.innerHeight / 3;
        document.documentElement.scrollTop = top;
        document.body.scrollTop = top;
        window.pageYOffset = top;
        //延迟进入缓存
        setTimeout(() => {
          this.entercommentcontent(this.hotTodayList30[this.recommentSelectedIndex].id);
        }, 500);
      },
      //给ios/Android掉用的方法
      gotocomment() {
        setTimeout(() => {
          this.gotocommentone();
        }, 500);
      },
      //初始化评论
      initcomment(state) {
        for (let indexi = 0; indexi < this.hotTodayList30.length; indexi++) {
          let parame3;
          if (state == 'isWeixin') {
            parame3 = {
              functionName: "appService",
              methodName: "selectCommentByPage",
              pageNo: 1,
              pageSize: 3,
              data: {
                userId: this.userid, // 用户ID
                otherId: this.hotTodayList30[indexi].id // 文章ID
              }
            };
          } else {
            parame3 = {
              functionName: "appService",
              methodName: "selectCommentByPage",
              pageNo: 1,
              pageSize: 3,
              originSource: {
                OS: this.OS,
                version: "H5_V1.0"
              },
              data: {
                otherId: this.hotTodayList30[indexi].id // 文章ID
              }
            };
          }
          this.$post(JSON.stringify(parame3)).then(result => {
            console.log('初始化评论', result);
            if (result.errorCode == ERROR_CODE) {
              //评论内容
              if (result.data.commentList != []) {
                this.commentObjList.splice(indexi, 1, result.data.commentList);
                this.commentNumList.splice(indexi, 1, '');
                setTimeout(() => {
                  this.commentNumList.splice(indexi, 1, result.sumCount);
                }, 100);
              }
            }
          });
        }
      },

      //精选评论展开
      commentcheck(index) {
        if (this.showcommentList[index] == true) {
          this.showcommentList.splice(index, 1, false);
        } else {
          this.showcommentList.splice(index, 1, true);
        }
      },
      //显示删除按钮
      showdeletebutton(boolean, id, index) {
        //判断微信环境
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) != "micromessenger") {
          if (boolean) {
            this.transDeleteButton();
            this.SET_DELETEPRODUCTID(id);
            this.SET_COMMENTARTICLEINDEX(index);
          }
        }
      },
    },
    mounted() {
      //评论功能
      window.gotocomment = this.gotocomment;
      //初始化评论
      window.initcomment = this.initcomment;
    }
  }
</script>


