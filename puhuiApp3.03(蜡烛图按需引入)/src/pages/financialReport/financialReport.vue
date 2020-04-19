<style scoped lang="less">
  section {
    flex: 1;
    background-color: #f7f7f7;
    padding-bottom: 106px;
  }
  .clickShare {
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    max-width: 470pt;
    display: flex;
    .share-edit {
      padding: 8px 29px 5px;
      text-align: center;
      background: #fff;
      .share-edit-icon {
        width: 17px;
        height: 17px;
      }
      .share-edit-title {
        font-size: 10px;
        color: #8f8f8f;
      }
    }
    .clickShareBtn {
      flex: 1;
      line-height: 50px;
      height: 49px;
      white-space: nowrap;
      cursor: pointer;
      border: 1px solid #ab0b22;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: none;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      margin: 5px 10px;
      font-size: 18px;
      background-color: #ab0b22;
      color: #fff;
      z-index: 9999;
      border-radius: 25px;
    }
  }
  .delete {
    position: absolute;
    top: 0;
    right: 14px;
    line-height: 46px;
    font-size: 15px;
    color: #adadad;
  }
  .bulletin-detail {
    width: 100%;
    height: 100%;
    top: 0;
    background: #fff;
    opacity: 0;
    z-index: 99999;
    position: fixed;
    margin: 0 auto;
    max-width: 640px;
  }
  .bulletin-detail1 {
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 2;
    position: fixed;
    margin: 0 auto;
    max-width: 640px;
  }
  .bulletin-detail .detail-wrapper,
  .bulletin-detail1 .detail-wrapper1 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: table;
    position: fixed;
    margin: 0 auto;
    max-width: 640px;
  }
  .main-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .main-wrapper1 {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background: #f5f5f5;
    font-size: 17px;
  }
  .deletemycommentfont {
    font-size: 16px;
    color: #999999;
    text-align: center;
    line-height: 23px;
    border-color: #fff;
    opacity: 1;
    padding: 12px 15px 17px 15px;
    background: #fff;
  }
  .confirmdelete {
    margin-top: 2px;
    margin-bottom: 6px;
    font-size: 18px;
    color: #f4333c;
    text-align: center;
    padding: 12px 0;
    background: #fff;
  }
  .cancledelete {
    font-size: 18px;
    color: #333333;
    text-align: center;
    background: #fff;
    padding: 12px 0;
  }
  .feelgoodbtn {
    border: 0;
    padding: 0;
    background: transparent;
    vertical-align: top;
  }
  .bulletin-detail-enter-active,
  .bulletin-detail-leave-active {
    transition: 0.5s;
  }
  .bulletin-detail-enter,
  .bulletin-detail-leave-to {
    transform: translateY(100%);
  }
</style>

<template>
  <div class="flex-wrapper">
    <!-- 头部固定联系栏 -->
    <v-linkman :userid="this.$route.params.userid"
               :todaytime="this.$route.params.todaytime"
               :isWXApplet="this.$route.params.isWXApplet"
               originType='1'
               type="3"></v-linkman>
    <section @touchend="touchEndTime()">
      <v-weather></v-weather>
      <!-- 个人基本信息 -->
      <v-peoplecard :userid="this.$route.params.userid"
                    ref="peoplecard"
                    :isWXApplet="this.$route.params.isWXApplet"></v-peoplecard>
      <!-- 译会产品推荐 -->
      <v-product :openid="this.$route.params.openid"
                 :userid="this.$route.params.userid"
                 :todaytime="this.$route.params.todaytime"
                 :historyid="this.$route.params.historyid"
                 :isWXApplet="this.$route.params.isWXApplet"
                 :haveBackBtn="this.haveBackBtn">
      </v-product>
      <!-- 译会活动推荐 -->
      <v-activaty :openid="this.$route.params.openid"
                  :userid="this.$route.params.userid"
                  :todaytime="this.$route.params.todaytime"
                  :historyid="this.$route.params.historyid"
                  :isWXApplet="this.$route.params.isWXApplet"
                  :haveBackBtn="this.haveBackBtn">
      </v-activaty>
      <v-famousremark></v-famousremark>
      <!-- 瑞丰产品推荐 -->
      <v-rfproduct :userid="this.$route.params.userid"
                   :openid="this.$route.params.openid"></v-rfproduct>
      <!-- 瑞丰产品推荐 -->
      <v-njproduct :userid="this.$route.params.userid"
                   :openid="this.$route.params.openid"></v-njproduct>
      <!-- 头条推荐 -->
      <v-firstrecomment :todaytime="this.$route.params.todaytime"
                        :userid="this.$route.params.userid"
                        :historyid="this.$route.params.historyid"
                        ref="firstrecomment"
                        :isWXApplet="this.$route.params.isWXApplet"></v-firstrecomment>
      <!-- 宏观经济 -->
      <v-economy :todaytime="this.$route.params.todaytime"
                 :historyid="this.$route.params.historyid"
                 ref="economy"
                 :isWXApplet="this.$route.params.isWXApplet"></v-economy>
      <!-- 地产聚焦 -->
      <v-housenews :todaytime="this.$route.params.todaytime"
                   :historyid="this.$route.params.historyid"
                   ref="housenews"
                   :isWXApplet="this.$route.params.isWXApplet"></v-housenews>
      <!-- 股市盘点 -->
      <v-stocknews :todaytime="this.$route.params.todaytime"
                   :historyid="this.$route.params.historyid"
                   ref="stocknews"
                   :isWXApplet="this.$route.params.isWXApplet"></v-stocknews>
      <!-- 市场热文 -->
      <v-marketnews :todaytime="this.$route.params.todaytime"
                    :historyid="this.$route.params.historyid"
                    ref="marketnews"
                    :isWXApplet="this.$route.params.isWXApplet"></v-marketnews>
      <!-- 地域新闻 -->
      <v-localnews :place="this.$route.params.place"
                   :userid="this.$route.params.userid"
                   ref="localnews"></v-localnews>
      <!-- 猜您喜欢 -->
      <v-maylike :openid="this.$route.params.openid"
                 :userid="this.$route.params.userid"
                 :todaytime="this.$route.params.todaytime"></v-maylike>
      <!-- 快讯简报 -->
      <v-fast></v-fast>
      <!-- 底部行情概览和声明 -->
      <!-- 行情概览 -->
      <v-stock :todaytime="this.$route.params.todaytime"></v-stock>
      <v-browsenum :browseNum="browseNum"></v-browsenum>
      <v-bottomfame :isWXApplet="this.$route.params.isWXApplet"></v-bottomfame>
      <!-- 底部转发和模块编辑 -->
      <div class="clickShare"
           v-if="isWXApplet==1">
        <!-- <div class="share-edit left" @click="moduleEdit">
                <img src="../../assets/image/bot_menu_edit@2x.png" class="share-edit-icon">
                <div class="share-edit-title">编辑模块</div>
            </div> -->
        <button class="clickShareBtn right"
                @click="shareToCustomer">转发获客</button>
      </div>
    </section>

    <!-- 是否可以删除 -->
    <transition name="bulletin-detail1">
      <div class="bulletin-detail1"
           v-show="confirmdeletebutton"
           @click="cancledelete">
        <div class="detail-wrapper1"
             @touchmove.prevent>
          <div class="main-wrapper1">
            <div class="deletemycommentfont">删除我的评论</div>
            <div class="confirmdelete"
                 @click="deleteowncomment">删除</div>
            <div class="cancledelete"
                 @click="cancledelete">取消</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import closeLoading from '../../mixins/closeLoading'
  import { Toast } from 'vant';
  import insertShareHistory from '../../mixins/insertShareHistory'
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  import getWeather from '../../mixins/getWeather'
  import wx from 'weixin-js-sdk'
  import VProduct from '../../components/common/product'
  import VActivity from '../../components/common/activaty'
  import VPeoplecard from '../../components/common/peopleCard'
  //微信分享
  import wxapi from '@/commonJS/wxapi'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "financialReport",
    mixins: [getWeather, initEndTime, initStartTime, insertShareHistory, closeLoading, sourceOS],
    components: {
      'v-linkman': () => import(`../../components/common/headLink/headLink`),
      'v-weather': () => import(`../../components/common/financialReport/weather`),
      'v-localnews': () => import(`../../components/common/financialReport/localNews`),
      'v-rfproduct': () => import(`../../components/common/financialReport/RFproduct`),
      'v-njproduct': () => import(`../../components/common/financialReport/NanJingProduct`),
      'v-stock': () => import(`../../components/common/financialReport/stock`),
      'v-fast': () => import(`../../components/common/financialReport/fastNews`),
      'v-maylike': () => import(`../../components/common/financialReport/maylike`),
      'v-economy': () => import(`../../components/common/financialReport/economy`),
      'v-housenews': () => import(`../../components/common/financialReport/houseNews`),
      'v-stocknews': () => import(`../../components/common/financialReport/stockNews`),
      'v-marketnews': () => import(`../../components/common/financialReport/marketNews`),
      'v-bottomfame': () => import(`../../components/common/bottomFame`),
      'v-browsenum': () => import(`../../components/common/financialReport/browseNum`),
      'v-firstrecomment': () => import(`../../components/common/financialReport/firstRecomment`),
      'v-famousremark': () => import(`../../components/common/financialReport/famousRemark`),
      'v-peoplecard': VPeoplecard,
      'v-product': VProduct,
      'v-activaty': VActivity,
    },
    provide: function () {
      return {
        //给checkArticle定义一个checkArticle的调用名称
        checkArticle: this.checkArticle,
        showModule: this.showModule,
        transDeleteButton: this.transDeleteButton,
        PartState: this.PartState,
      };
    },
    data() {
      return {
        //是否有返回按钮
        haveBackBtn: 1,
        //分享时间
        nowDate: '',
        //定时器
        nowSameTime: '',
        //今日财经浏览ID
        todayFinanceId: '',
        //模块数
        modules: '',
        moduleA: true,
        moduleHId: '0',
        moduleIId: '0',
        moduleJId: '0',
        moduleKId: '0',
        //安卓端
        isAndroid: false,
        //从路径上获取参数
        userid: this.$route.params.userid,
        todaytime: this.$route.params.todaytime,
        fieldid: this.$route.params.fieldid,
        openid: this.$route.params.openid,
        place: this.$route.params.place,
        fromopenid: this.$route.params.fromopenid,
        historyid: this.$route.params.historyid,
        twosharetime: this.$route.params.twosharetime,
        isWXApplet: this.$route.params.isWXApplet,
        //是否在微信端
        headShow: false,
        //全文浏览量
        browseNum: "",
        //是否显示删除按钮
        confirmdeletebutton: false,
      };
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['creditCity', 'shareArticleId', 'orgnCode', 'moduleD',
        'economyList', 'moduleE', 'houseList', 'moduleF', 'stockList', 'moduleG', 'hotMarketList',
        'weather', 'hotTodayRes', 'headPortrait', 'deleteproductid', 'moduleC', 'financeProductId', 
        'financeActivityId', 'commentary','productType']),
      //文章号
      fileId: function () {
        if (this.fieldid != -1) {
          return this.fieldid;
        } else {
          return "";
        }
      },
      //页码
      No1: function () {
        return this.No;
      },
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
    methods: {
      //转发获客
      shareToCustomer() {
        if (this.userid != -1) {
          var data = this.PartState();
          var cityLast = '';
          if (this.creditCity != '') {
            cityLast = '市';
          } else {
            cityLast = '';
          }
          wx.miniProgram.navigateTo({
            url: './editModule/shareFinance?data=' + data + '&city=' + this.creditCity + cityLast + '&weatcher=' + this.weather + '&abstractor=' + this.getTitleAbstract(),
            success: function () {
              console.log('success')
            },
            fail: function () {
              console.log('fail');
            },
            complete: function () {
              console.log('complete');
            }
          });
        } else {
          wx.miniProgram.navigateTo({
            url: './login/loginMethod',
            success: function () {
              console.log('success')
            },
            fail: function () {
              console.log('fail');
            },
            complete: function () {
              console.log('complete');
            }
          });
        }
      },
      //模块编辑
      moduleEdit() {
        var data = this.PartState();
        wx.miniProgram.navigateTo({
          url: './editModule/editModule?data=' + data,
          success: function () {
            console.log('success')
          },
          fail: function () {
            console.log('fail');
          },
          complete: function () {
            console.log('complete');
          }
        });
      },
      //展示删除按钮
      transDeleteButton() {
        this.confirmdeletebutton = true;
      },
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SHAREARTICLEID', 'SET_ORGNCODE', 'SET_MODULEH', 'SET_MODULEK',
        'SET_MODULEJ', 'SET_MODULEI', 'SET_MODULED', 'SET_ECONOMYLIST', 'SET_MODULEE', 'SET_HOUSELIST', 'SET_MODULEF',
        'SET_STOCKLIST', 'SET_MODULEG', 'SET_HOTMARKETLIST', 'SET_HOTTODAYRES',
        'SET_HEADPORTRAIT', 'SET_COMMENTARY', 'SET_MODULEC', 'SET_MODULEB', 'SET_MODULEL', 'SET_FINANCEPRODUCT',
        'SET_FINANCEACTIVITY', 'SET_SKIN', 'SET_REDPACKETID']),
      //今日财经
      getTodayNews() {
        //分享记录获取
        let parames = {
          functionName: "appService",
          methodName: "queryShare",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          data: {
            pubTime: this.formatDate,
            city: this.creditCity,
            userId: this.userid
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log("浏览量接口", result);
            //浏览量
            this.browseNum = result.data.browseNum;
          }
        });
      },

      //获取文章摘要
      getTitleAbstract(versionCode) {
        //获取是否微信
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger" && this.isWXApplet != 1) {
          return;
        } else {
          var modulesTitle = [];
          //头条推荐
          if (this.moduleC && modulesTitle.join().length + this.hotTodayRes.title.length < 200) {
            modulesTitle[0] = (this.hotTodayRes.title);
          } else {
            modulesTitle[0] = '';
          }
          //宏观经济
          if (this.moduleD && this.economyList != [] && modulesTitle.join().length + this.economyList[0].title.length < 200) {
            modulesTitle[1] = this.economyList[0].title;
          } else {
            modulesTitle[1] = '';
          }
          //地产聚焦
          if (this.moduleE && this.houseList != [] && modulesTitle.join().length + this.houseList[0].title.length < 200) {
            modulesTitle[2] = this.houseList[0].title;
          } else {
            modulesTitle[2] = '';
          }
          //股市盘点
          if (this.moduleF && this.stockList != [] && modulesTitle.join().length + this.stockList[0].title.length < 200) {
            modulesTitle[3] = this.stockList[0].title;
          } else {
            modulesTitle[3] = '';
          }
          //市场热文
          if (this.moduleG && this.hotMarketList != [] && modulesTitle.join().length + this.hotMarketList[0].title.length < 200) {
            modulesTitle[4] = this.hotMarketList[0].title;
          } else {
            modulesTitle[4] = '';
          }
          function noNull(element, index, array) {//eslint-disable-line
            console.log(array)
            return (element != '');
          }
          var secondAbstract = [this.hotTodayRes.title, this.hotTodayRes.abstractStr];
          if (versionCode == "2") {
            var shareAbstract = {
              first: modulesTitle.filter(noNull),
              second: secondAbstract,
            }
            return JSON.stringify(shareAbstract);
          } else {
            return JSON.stringify(modulesTitle.filter(noNull));
          }
        }
      },
      //删除评论
      deleteowncomment() {
        this.confirmdeletebutton = false;
        if (this.deleteproductid != "") {
          let parame6 = {
            functionName: "appService",
            methodName: "deleteCommentById",
            originSource: {
              OS: this.OS,
              version: "H5_V1.0"
            },
            data: {
              id: this.deleteproductid,
              otherId: this.hotTodayRes.id
            }
          };
          this.$post(JSON.stringify(parame6)).then(result => {
            if (result.errorCode == ERROR_CODE) {
              Toast.success('删除成功');
              this.$nextTick(() => {
                this.$refs.firstrecomment.initcomment();
              })
            } else {
              Toast.fail('删除失败');

            }
          });
        }
      },
      //微信模块显示
      WeixinShowPart() {
        let parame = {
          "functionName": "shareService",
          "methodName": "getShareInfo",
          originSource: {
            OS: this.OS,
            version: "H5_V2.2"
          },
          "data": {
            "pubTime": this.formatDate,
            "shareUser": this.userid
          }
        }
        this.$post(JSON.stringify(parame)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log('微信记录参数', parame);
            console.log('微信记录', result);
            if (this.isWXApplet != 1) {
              this.SET_SKIN(result.data.newWorldWideList.A);
              //产品
              this.SET_FINANCEPRODUCT(result.data.newWorldWideList.B);
              //头条推荐
              this.SET_HOTTODAYRES(result.data.newWorldWideList.C[0]);
              //点赞和评论
              this.$nextTick(() => {
                this.$refs.firstrecomment.initcomment('isWeixin');
                this.$refs.firstrecomment.initFeelGood();
              })
              //理财顾问说
              this.SET_COMMENTARY(result.data.newUserComment.commentary);
              //宏观经济
              this.SET_ECONOMYLIST(result.data.newWorldWideList.D);
              //地产聚焦
              this.SET_HOUSELIST(result.data.newWorldWideList.E);
              //股市盘点
              this.SET_STOCKLIST(result.data.newWorldWideList.F);
              //市场热文
              this.SET_HOTMARKETLIST(result.data.newWorldWideList.G);
              //模块显示
              this.showModule(result.data.newShareHistory.modules);
            }
            //我的活动
            this.SET_FINANCEACTIVITY(result.data.newWorldWideList.L);
            // 红包id获取
            this.SET_REDPACKETID(result.data.newShareHistory.redPacketId);
          }
          if (result.data.codeType == '400') {
            this.showModule('A-H-I-J-K');
          }
        });
      },
      //模块显示
      showModule(str) {
        this.moduleA = RegExp(/A/).test(str);
        this.SET_MODULEB(RegExp(/B/).test(str));
        this.SET_MODULEC(RegExp(/C/).test(str));
        this.SET_MODULED(RegExp(/D/).test(str));
        this.SET_MODULEE(RegExp(/E/).test(str));
        this.SET_MODULEF(RegExp(/F/).test(str));
        this.SET_MODULEG(RegExp(/G/).test(str));
        this.SET_MODULEH(RegExp(/H/).test(str));
        this.SET_MODULEI(RegExp(/I/).test(str));
        this.SET_MODULEJ(RegExp(/J/).test(str));
        this.SET_MODULEK(RegExp(/K/).test(str));
        this.SET_MODULEL(RegExp(/L/).test(str));
      },
      //模块控制
      PartState() {
        if (this.modules == '') {
          return 'error';
        } else {
          let AbcArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
          let moduleArr = [this.$refs.peoplecard.skin, this.financeProductId, this.$refs.firstrecomment.moduleCId
            , this.$refs.economy.moduleDId, this.$refs.housenews.moduleEId, this.$refs.stocknews.moduleFId
            , this.$refs.marketnews.moduleGId, this.moduleHId, this.moduleIId
            , this.moduleJId, this.moduleKId, this.financeActivityId];
          let AllModuleId = '';
          let placeArr = [];
          let NowModuleArr = this.modules.split('-');

          for (var i = 0; i < NowModuleArr.length; i++) {
            placeArr.push(AbcArr.indexOf(NowModuleArr[i]));
          }

          for (var j = 0; j < placeArr.length; j++) {
              if(moduleArr[placeArr[j]]!=undefined) {
                  AllModuleId += moduleArr[placeArr[j]] + '-';
              }
          }
          AllModuleId = AllModuleId.substring(0, AllModuleId.length - 1)
          let ObjectModule = {
            filesId: AllModuleId,
            modules: this.modules.replace(/-M|-N|-O/g,""),
            title: this.hotTodayRes.title,
            abstractStr: this.hotTodayRes.abstractStr,
            id: this.shareArticleId,
            productType:this.productType
          }
          console.log(ObjectModule);
          return JSON.stringify(ObjectModule);

        }
      },
      wxRegCallback() {
        this.nowDate = Date.parse(new Date());
        var getDate = new Date();
        var nowMonth = getDate.getMonth() + 1;
        var nowDay = getDate.getDate();
        var addTitle = '';
        if (this.creditCity != '' && this.weather != '') {
          addTitle = nowMonth + '.' + nowDay + ' | 今日财经 | ' + this.creditCity + '市 ' + this.weather + ' | ' + this.hotTodayRes.title;
        }
        else {
          addTitle = nowMonth + '.' + nowDay + ' | 今日财经 | ' + this.hotTodayRes.title;
        }
        var shareUrl = 'https://' + process.env.VUE_APP_LINK + '.yihuisoft.com/' + process.env.VUE_APP_FRONT + '/#/see/' + this.todaytime + '/' + this.userid + '/' + this.shareArticleId + "/" + this.openid + '/' + this.nowDate + "/T1";
        var parameObj = {
          title1: addTitle, // 分享标题, 请自行替换
          link1: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl1: this.headPortrait, // 分享图标, 请自行替换，需要绝对路径
          title2: addTitle, // 分享标题, 请自行替换
          desc2: this.hotTodayRes.abstractStr, // 分享描述, 请自行替换
          link2: shareUrl, // 分享链接，根据自身项目决定是否需要split
          imgUrl2: this.headPortrait, // 分享图标, 请自行替换，需要绝对路径
        }
        // 用于微信JS-SDK回调
        this.wxShareTimeline(parameObj.title1, parameObj.link1, parameObj.imgUrl1);
        this.wxShareAppMessage(parameObj.title2, parameObj.desc2, parameObj.link2, parameObj.imgUrl2);
      },
      //取消删除
      cancledelete() {
        if (this.confirmdeletebutton == true) {
          this.confirmdeletebutton = false;
          return "true";
        } else {
          this.confirmdeletebutton = false;
          return "false";
        }
      },

      //给ios/Android提供进入具体文章的方法
      checkArticle(index, title, obj) {
        let top =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset;
        sessionStorage.setItem("id", JSON.stringify(top));
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
          //ios的ua中无miniProgram，但都有MicroMessenger（表示是微信浏览器）
          wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
              console.log("在小程序里");
              //在微信中打开
              this.$router.push({
                path:
                  "/componentTwo/" +
                  "-1" +
                  "/" +
                  this.userid +
                  "/" +
                  index +
                  "/" +
                  this.openid +
                  "/" +
                  "0" +
                  "/" +
                  this.isWXApplet +
                  '/1'
              });
            } else {
              console.log("不在小程序里");
              //在微信中打开
              this.$router.push({
                path:
                  "/componentTwo/" +
                  "-1" +
                  "/" +
                  this.userid +
                  "/" +
                  index +
                  "/" +
                  this.openid +
                  "/" +
                  "0"
              });
            }
          })

          window.scollTop = 0;
        } else {
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            //android终端
            Android.startActivity(//eslint-disable-line
              "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/" + process.env.VUE_APP_FRONT + "/#/componentTwo/-1/" +
              this.userid +
              "/" +
              index +
              "/-1/0",
              title,
              obj.id
            );
          } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            var parameObj = {
              dict: "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/" + process.env.VUE_APP_FRONT + "/#/componentTwo/-1/" + this.userid + "/" + index + "/-1/0",
              article: obj
            }
            window.webkit.messageHandlers.toDictArticle.postMessage(JSON.stringify(parameObj));
            //ios终端
            app.toDictArticle(//eslint-disable-line
              "https://" + process.env.VUE_APP_LINK + ".yihuisoft.com/" + process.env.VUE_APP_FRONT + "/#/componentTwo/-1/" +
              this.userid +
              "/" +
              index +
              "/-1/0",
              obj
            );
          }
        }

      },
    },
    //离开页面时把页面高度存入session中
    activated() {
      document.documentElement.scrollTop = sessionStorage.getItem("id");
      document.body.scrollTop = sessionStorage.getItem("id");
      window.pageYOffset = sessionStorage.getItem("id");
    },
    //页面创建时请求数据
    created() {
      //判断安卓手机
      var u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        //android终端
        this.isAndroid = true;
      }
      //回到页面顶部
      setTimeout(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        window.pageYOffset = 0;
      }, 1);
      //获取是否微信
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        this.headShow = true;
      }
      var ua = navigator.userAgent.toLowerCase(); //eslint-disable-line
      if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
        setTimeout(() => {
          //微信模块显示
          this.WeixinShowPart();
        }, 250);
      }
      //把今日财经的分享时间记录
      sessionStorage.setItem("financialReport", this.todaytime);
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
          this.SET_ORGNCODE(result.data.userInfo.orgnCode);
          if (!this.headShow || this.isWXApplet == 1) {
            //模块
            this.modules = result.data.userInfo.modules;
            if (this.historyid != 1) {
              this.showModule(result.data.userInfo.modules);
            }
          }
          if (result.data.userInfo.headPortrait != null) {
            this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
          } else {
            this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
          }
        }
      });
      //今日财经分享新闻
      this.getTodayNews();
    },
    mounted() {
        setTimeout(()=>{
            this.PartState();
        },3000);
      //微信二次分享标题数据
      let parameWX = {
        functionName: "appService",
        methodName: "selectMoneyTodayParams",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          pubTime: this.formatDate
        }
      };
      this.$post(JSON.stringify(parameWX)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
          console.log("filedId", result);
          this.SET_SHAREARTICLEID(result.data.shareArticleId);
          wxapi.wxRegister(this.wxRegCallback);
        }
      });
      setTimeout(() => {
        console.log('摘要测试', this.getTitleAbstract(2));
      }, 5000);
      //删除评论
      window.cancledelete = this.cancledelete;
      //获取文章摘要
      window.getTitleAbstract = this.getTitleAbstract;
      //模块编辑
      window.PartState = this.PartState;
      //微信中插入分享记录
      setTimeout(() => {
        this.setStartTime(10, this.fileId, "1")
      }, 250);
    },
    beforeUpdate() {
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        var flag = true;
        if (flag) {
          if (sessionStorage.getItem("lookId") != null && sessionStorage.getItem("detailinformation") != null) {
            var DetailHeight = document.getElementsByClassName('detailinformation')[0].clientHeight;
            var topValue = sessionStorage.getItem("id") - sessionStorage.getItem("detailinformation") + DetailHeight;
            document.documentElement.scrollTop = topValue;
            document.body.scrollTop = topValue;
            window.pageYOffset = topValue;
            flag = false;
          }
        }
      }
    },
  };
</script>

