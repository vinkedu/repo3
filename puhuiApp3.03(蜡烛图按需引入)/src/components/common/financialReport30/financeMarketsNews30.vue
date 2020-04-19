<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .hotTextIcon {
    background-image: url("../image/art_tit_ic04@2x.png");
  }
  .bottom-trans-button{
    text-align: center;
    font-size: 13px;
    .bottom-trans-button-title{
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
  .no-news-tips{
    text-align: center;
    font-size: 12px;
    color: #999;
  }
  .warming-tip{
    font-size:12px;
    font-weight:normal;
    color:rgba(153,153,153,1);
    line-height:18px;
    text-align: left;
    padding-bottom: 15px;
  }
  .hotText .hotTextList .hotTextListTitle .netTarminal {
    border-bottom: 0;
  }
  .hotText-30{
    margin: 0;
    .hotTextTitle-30{
      color: #000;
      border-bottom: 0.026667rem solid #ddd;
    }
    .hotTextList-30{
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius:4px;
      padding: 13px 10px 0;
      margin-bottom: 8px;
    }
    .warming-tip-30{
      padding-top: 15px;
    }
    
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
  
</style>
<template>
  <div v-if="moduleM">
    <div class="hotText" :class="{'hotText-30':versionStyle==2}">
      <div class="hotTextTitle clearfix" :class="{'hotTextTitle-30':versionStyle==2}">
        <!--<div class="left">
          <i class="hotTextIcon icon"></i>
        </div>-->
        <div class="left">金融市场</div>
        <div class="right"
             v-if="!isWeixin && historyid!=1">
          <!--<button @click="changeHotText('hot')">换一组</button>-->
          <div class="add-button" @click="addItem" v-if="financeMarketList.length<5&&userid!=-1">添加</div>
        </div>
      </div>
      <div v-for="(item,index) in financeMarketList" :key="index" >
        <div class="hotTextList" :class="{'hotTextList-30':versionStyle==2}"
             v-show="!(index>1&&recommentState)">
          <div @click="checkArticle(item.id,item.title,item)">
            <div>
              <div class="hotTextListTitle">
                <span class="netTarminal">
                  {{item.title}}
                </span>
              </div>
              <!-- <div class="hotTextListAbs">
                <span v-html="item.abstractStr"></span>
              </div> -->
              <!-- <div class="image-box"> 
                <ul class="image_list">
                  <li class="image_item"><img src="https://p3.pstatp.com/list/pgc-image/74e6a07e7b5e4eee876acd5614615d5b" alt=""></li>
                  <li class="image_item"><img src="https://p3.pstatp.com/list/pgc-image/4883525620e44fe888c45fcd4f8203b8" alt=""></li>
                  <li class="image_item"><img src="https://p3.pstatp.com/list/pgc-image/a9912aa841d24313afea57f76516f246" alt=""></li>
                </ul>
              </div> -->
            </div>
            <!-- <div v-else-if="index%2==1">
              <div class="hotTextListTitle_30">
                <span class="netTarminal">
                  {{item.title}}
                </span>
              </div>
              <div class="list_img_holder"> 
                  <img src="https://p3.pstatp.com/list/pgc-image/RuoAVRzXdkEEr">
              </div>
            </div> -->
          </div>
          <v-lable30 :lableList='item.tagList' :itemIndex='index' versionStyle="2" :showCloseIcon="financeMarketList.length>2&&userid!=-1"></v-lable30>
        </div>
      </div>
      <div class="warming-tip" v-if="!showshare" :class="{'warming-tip-30':versionStyle==2}">推荐内容已根据您收藏的产品进行优化</div>
      <div v-if="financeMarketList==false" class="no-news-tips">暂无新闻</div>
      <div class="bottom-trans-button" @click="recommentState=!recommentState"  v-if="!showshare&&financeMarketList.length>2">
        <div v-if="recommentState" class="bottom-trans-button-title">显示更多新闻<i class="arrowD"></i></div>
        <div v-else class="bottom-trans-button-title">收起<i class="arrowU"></i></div>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="versionStyle==2"></div>
  </div>
</template>
<script>
    import isWeixin from '../../../mixins/isWeixin'
    import _ from "lodash";
    import { Toast } from 'vant';
  import lable30 from '../../../components/common/financialReport30/lable30'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'financeMarketsNews30',
    inject: ["checkArticle", "showModule", "PartState"],
      provide: function() {
          return {
              //给addTab定义一个getAdd的调用名称
              getDeleteItem: this.deleteItem,
          };
      },
    mixins: [sourceOS,isWeixin],
    components: {
      'v-lable30': lable30,
    },
    props: {
      //时间戳
      todaytime: {
        type: String
      },
      //是否为历史数据
      historyid: {
        type: String
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
          recommentState:true,
          lableList: [],
          //微信端显示
          isWeixin: false,
          //金融市场文章ID
          moduleMId: '',
          userid: this.$route.params.userid,
          modelType:""
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      //   ...mapState(['moduleG', 'hotMarketList']),
        ...mapState(['moduleM','financeMarketList']),
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
        //金融市场
        this.initFinanceMarket();
      }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_FINANCEMARKETLIST']),
        addItem: _.throttle(function () {
          console.log("添加");
            let parame =
                {
                    "functionName": "todayFinanceService",
                    "methodName": "addNewsByModelType",
                    "pageNo": 1,
                    "pageSize": 10,
                    originSource: {
                        OS: this.OS,
                        version: "H5_V3.0"
                    },
                    "data": {
                        "userId": this.userid,
                        "modelType":this.modelType
                    }
                }
            this.$post(JSON.stringify(parame)).then(result => {
                console.log("==>新增参数", parame);
                console.log("==>新增结果", result);
                if (result.errorCode == ERROR_CODE && result.data.codeType == '200') {
                    if(result.data.count==0){
                        Toast.fail({message:"暂无更多新闻",duration:2000});
                    }else {
                        Toast.success({message:"添加成功",duration:2000});
                        this.initFinanceMarket();
                        var u = navigator.userAgent;
                        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                            setTimeout(() => {
                                window.webkit.messageHandlers.toSectionDict.postMessage(this.PartState());
                            }, 500);
                        }
                    }
                }else{
                    Toast.fail({message:"暂无更多新闻",duration:2000});
                }
            });
        }, 1000),
        deleteItem: _.throttle(function (index) {
            console.log("删除")
            let parame =
                {
                    "functionName": "todayFinanceService",
                    "methodName": "deleteNewsById",
                    "pageNo": 1,
                    "pageSize": 10,
                    originSource: {
                        OS: this.OS,
                        version: "H5_V3.0"
                    },
                    "data": {
                        "id":this.financeMarketList[index].id,
                        "userId": this.userid,
                        "modelType":this.modelType
                    }
                }
            this.$post(JSON.stringify(parame)).then(result => {
                console.log("==>删除参数", parame);
                console.log("==>删除结果", result);
                if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                    Toast.success({message:"移除成功",duration:2000});
                    this.initFinanceMarket();
                    var u = navigator.userAgent;
                    if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                        setTimeout(() => {
                            window.webkit.messageHandlers.toSectionDict.postMessage(this.PartState());
                        }, 500);
                    }
                }else{
                    Toast.fail({message:"移除失败请重试",duration:2000});
                }
            });
        }, 1000),
      //初始化市场热文
        initFinanceMarket() {
        let parame =
          {
              "functionName": "todayFinanceService",
              "methodName": "selectFinancialMarket",
              "pageNo": 1,
              "pageSize": 10,
              originSource: {
              OS: this.OS,
                  version: "H5_V3.0"
              },
              "data": {
                "userId": this.userid
              }
          }
        this.$post(JSON.stringify(parame)).then(result => {
            console.log("==>金融市场参数", parame);
            console.log("==>金融市场结果", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            this.SET_FINANCEMARKETLIST(result.data.marketList);
            this.modelType=result.data.modelType;
                let getString = '';
                for (var i = 0; i < result.data.marketList.length; i++) {
                  getString += result.data.marketList[i].id + ',';
                }
                this.moduleMId = getString.substring(0, getString.length - 1);
          }
          if (result.data.codeType == '400') {
            this.showModule('A-H-I-J-K');
          }
        });
      },
      //换一组
      /*changeHotText(string) {
        if (string == 'hot') {
          this.initHot();
        }
      },*/
    }
  }
</script>


