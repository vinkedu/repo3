<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .newsCont {
    background-color: #fff;
    margin: 0 14px;
    padding: 0 15px 15px;
    .hotTextTitle {
      font-size: 18px;
      color: #b90901;
      background: #fff;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      margin-bottom: 12.5px;
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
    .newsDetils {
      .newsDetilsTitle {
        font-size: 16px;
        color: #000;
        padding: 12.5px 0 13.5px;
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
        background: #fff;
        padding: 12.5px 0 15px;
        font-size: 13px;
        color: #333;
        word-break: break-all;
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
      .commentLeft {
        .commentImg {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .commentRight {
        width: 75%;
        font-size: 13px;
        color: #333;
      }
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
</style>
<template>
  <div>
    <div class="newsCont"
         v-if="moduleC">
      <div class="hotTextTitle clearfix">
        <div class="left">头条推荐</div>
        <div class="right"
             v-if="!isWeixin && historyid!=1">
          <button @click="changeHotText('FirstRecomment')">换一组</button>
        </div>
      </div>
      <div class="newsDetils"
           @click="checkArticle(hotTodayRes.id,hotTodayRes.title,hotTodayRes)">
        <div class="newsDetilsTitle">{{hotTodayRes.title}}</div>
        <p class="newsContbannerImg">
          <img class="innerImage"
               v-lazy="newsImageUrl">
        </p>
        <div class="newsDetil">
          <div v-html="hotTodayRes.abstractStr"></div>
        </div>
      </div>
      <div class="commentButtonBox">
        <div class="managercommentButton"
             @click="checkManagerComment"
             v-if="managerCommentState">
          点评 <i class="arrowU"></i>
        </div>
        <div class="managercommentButton"
             @click="checkManagerComment"
             v-else>
          点评 <i class="arrowD"></i>
        </div>
      </div>
      <div class="mamanagerCommentContent clearfix"
           v-if="managerCommentState">
        <div class="commentLeft left">
          <img v-lazy="headPortrait"
               class="commentImg">
        </div>
        <div class="commentRight right word-wrap"
             v-html="commentary"></div>
      </div>
      <div class="managerTold">
        <div class="checkcomment clearfix"
             id="checkcomment">
          <div class="left  feelgood-content"
               v-show="!isWeixin && historyid!=1 && isWXApplet!=1">
            <div class="feelgoodBox"
                 @click="feelgood">
              <i class="feelgood"
                 :class="{'overfeelgood':showfeelgood === true}"></i>
            </div>
            <div class="feelgoodfont"
                 :class="{'overfeelgoodfont':showfeelgood === true}">{{articlegoodnumber}}</div>
          </div>
          <div class="left comment-content"
               v-show="!isWeixin && historyid!=1 && isWXApplet!=1">
            <div class="commentcontentBox"
                 @click="entercommentcontent">
              <i class="commentcontent"></i>
            </div>
            <div class="commentcontentfont">{{commentNum}}</div>
          </div>
          <div class="right checkfont"
               @click="commentcheck">
            {{checkcomment}}
            <i class="overcheck"
               :class="{'check':showovercheck === true}"></i>
          </div>
        </div>
      </div>
      <transition>
        <div class="select-message"
             v-if="showcomment">
          <div class="selectnomessage"
               v-if="commentList.length==0">
            暂无评论
          </div>
          <button class="userList"
                  v-for="(item,index) in commentList"
                  :key="index"
                  @click="showdeletebutton(index)"
                  :disabled="isWeixin">
            <img class="userImg"
                 height="25"
                 width="25"
                 :src="HEAD_PORTRAIT[index]">
            <div class="comment">
              <div class="clearfix">
                <div class="userNick left">
                  {{item.NAME}}
                </div>
                <div class="commentTime left">{{item.CREATE_TIME|fomatTime}}</div>
              </div>
              <div class="userNickContent">{{item.CONTENT|emojiFormat}}</div>
            </div>
          </button>
        </div>
      </transition>
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
    name: 'firstRecomment',
    inject: ["checkArticle", "showModule", "transDeleteButton", "PartState"],
    mixins: [sourceOS],
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
        //微信端显示
        isWeixin: false,
        //今日头条图片
        newsImageUrl: 'http://47.103.35.52:8181/images/appImages/6745e74f-4bb7-4fb7-80f7-3f704ad635fg.jpg',
        //理财师评论折叠
        managerCommentState: true,
        //点赞
        showfeelgood: false,
        //文章点赞数量
        articlegoodnumber: 0,
        //文章点赞数量
        commentNum: 0,
        //精选评论
        checkcomment: "精选评论",
        //页码
        No: 1,
        //显示已看
        showovercheck: true,
        //评论
        showcomment: false,
        //评论列表
        commentList: [],
        //头像
        HEAD_PORTRAIT: [],
        //是否可以删除
        showdelete: [],
        //点赞集合
        indListNum: [],
        //评论ID集合
        commentListid: [],
        //头条推荐文章ID
        moduleCId: ''
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['hotTodayRes', 'headPortrait', 'commentary', 'moduleC']),
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
      ...mapActions(['SET_HOTTODAYRES', 'SET_COMMENTARY', 'SET_DELETEPRODUCTID']),
      //初始化头条推荐
      initFirstComment() {
        let parame7 = {
          "functionName": "appService",
          "methodName": "selectHeadRecommend",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            "pubTime": this.formatDate
          }
        }
        this.$post(JSON.stringify(parame7)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log("==>头条推荐", result);
            let hotTodayListRes = result.data.hotTodayList;
            this.SET_HOTTODAYRES(result.data.hotTodayList[0]);
            //评论
            if (result.data.userComment != null) {
              let userComment = result.data.userComment;
              if (userComment.goodNum != null) {
                this.articlegoodnumber = userComment.goodNum;
              }
              this.SET_COMMENTARY(userComment.commentary);
              if (userComment.commentNum != null) {
                this.commentNum = userComment.commentNum;
              }
            }
            this.showcomment = false;
            this.initcomment();
            this.initFeelGood();
            let getString = '';
            for (var i = 0; i < result.data.hotTodayList.length; i++) {
              getString += result.data.hotTodayList[i].id + ',';
            }
            this.moduleCId = getString.substring(0, getString.length - 1);
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
      changeHotText(string) {
        if (string == 'FirstRecomment') {
          this.initFirstComment();
        }
      },
      //理财师评论折叠
      checkManagerComment() {
        this.managerCommentState = !this.managerCommentState;
      },
      //点赞数据获取
      feelgood() {
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
              otherId: this.hotTodayRes.id // 文章ID
            }
          };
          this.$post(JSON.stringify(parame4)).then(result => {
            console.log('点赞', result);
            if (result.errorCode == ERROR_CODE) {
              this.articlegoodnumber = result.data.goodNum;
            }
          });
          if (this.showfeelgood == false) {
            this.showfeelgood = true;
          } else {
            this.showfeelgood = false;
          }
        }
      },
      //初始化点赞数
      initFeelGood() {
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
            otherId: this.hotTodayRes.id // 文章ID
          }
        };
        this.$post(JSON.stringify(parame5)).then(result => {
          if (result.errorCode == ERROR_CODE) {
            if (result.data.goodStatus == 0) {
              this.showfeelgood = false;
            } else if (result.data.goodStatus == 1) {
              this.showfeelgood = true;
            }
          }
        });
      },
      //调用手机键盘
      entercommentcontent() {
        var u = navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          //android终端
          if (this.hotTodayRes.id != "") {
            Android.goInputText(this.hotTodayRes.id);
          }
        } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          //ios终端
          // webkit.messageHandlers.Xiaov.postMessage(null);
          if (this.hotTodayRes.id != "") {
            window.webkit.messageHandlers.toComment.postMessage(this.hotTodayRes.id);
            app.toComment(this.hotTodayRes.id);
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
          this.entercommentcontent();
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
        let parame3;
        if (state == 'isWeixin') {
          parame3 = {
            functionName: "appService",
            methodName: "selectCommentByPage",
            pageNo: 1,
            pageSize: 3,
            data: {
              userId: this.userid, // 用户ID
              otherId: this.hotTodayRes.id // 文章ID
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
              otherId: this.hotTodayRes.id // 文章ID
            }
          };
        }
        this.$post(JSON.stringify(parame3)).then(result => {
          console.log('初始化评论', result);
          if (result.errorCode == ERROR_CODE) {
            //评论内容
            if (result.data.commentList != []) {
              this.HEAD_PORTRAIT = [];
              this.showdelete = [];
              this.commentListid = [];
              this.commentList = result.data.commentList;
              for (var i = 0; i < result.data.commentList.length; i++) {
                this.commentListid.push(result.data.commentList[i].ID);
                if (this.commentList[i].USER_ID == this.userid) {
                  this.showdelete.push(true);
                } else {
                  this.showdelete.push(false);
                }
                if (result.data.commentList[i].HEAD_PORTRAIT != null) {
                  this.HEAD_PORTRAIT.push(
                    result.data.commentList[i].HEAD_PORTRAIT
                  );
                } else {
                  this.HEAD_PORTRAIT.push(
                    "http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg"
                  );
                }
                this.indListNum.push(result.data.commentList[i].GOOD_NUM);
              }
              this.commentNum = '';
              setTimeout(() => {
                this.commentNum = result.sumCount;
              }, 100);
            }
          }
        });
      },

      //精选评论展开
      commentcheck() {
        if (this.showcomment == true) {
          this.showcomment = false;
          this.showovercheck = true;
          this.checkcomment = "精选评论";
        } else {
          this.showcomment = true;
          this.showovercheck = false;
          this.checkcomment = "收起评论";
        }
      },
      //显示删除按钮
      showdeletebutton(index) {
        //判断微信环境
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) != "micromessenger") {
          if (this.showdelete[index]) {
            this.transDeleteButton();
            this.SET_DELETEPRODUCTID(this.commentListid[index]);
            console.log(this.commentListid[index]);
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


