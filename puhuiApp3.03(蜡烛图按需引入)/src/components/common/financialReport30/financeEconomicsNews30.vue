<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .hotTextIcon {
    background-image: url("../image/art_tit_ic04@2x.png");
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
  <div v-if="moduleO">
    <div class="hotText" :class="{'hotText-30':versionStyle==2}">
      <div class="hotTextTitle clearfix" :class="{'hotTextTitle-30':versionStyle==2}">
        <!--<div class="left">
          <i class="hotTextIcon icon"></i>
        </div>-->
        <div class="left">财经百科</div>
        <!--<div class="right"
             v-if="!isWeixin && historyid!=1">
          <button @click="changeHotText('hot')">换一组</button>
        </div>-->
      </div>
      <div class="hotTextList" :class="{'hotTextList-30':versionStyle==2}"
           v-for="(item,index) in financeEconomicsList"
           :key="index"
           @click="checkArticle(item.id,item.title,item)">
        <div class="hotTextListTitle">
          <span class="netTarminal">
            {{item.title}}
          </span>
        </div>
        <div class="hotTextListAbs">
          <span v-html="item.abstractStr"></span>
        </div>
        <v-lable30 :lableList='item.tagList' :itemIndex='index' versionStyle="2" :showCloseIcon="false"></v-lable30>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="versionStyle==2"></div>
  </div>
</template>
<script>
  import lable30 from '../../../components/common/financialReport30/lable30'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'financeEconomicsNews30',
    inject: ["checkArticle", "showModule"],
    mixins: [sourceOS],
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
          lableList: [],
          //微信端显示
          isWeixin: false,
          //财经百科文章ID
          moduleOId: '',
          userid: this.$route.params.userid,
          modelType:""
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      //   ...mapState(['moduleG', 'hotMarketList']),
        ...mapState(['moduleO','financeEconomicsList']),
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
        //财经百科
        this.initFinanceEconomics();
      }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_FINANCEECONOMICSLIST']),
      //初始化市场热文
        initFinanceEconomics() {
        let parame =
          {
              "functionName": "todayFinanceService",
              "methodName": "selectBaike",
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
            console.log("==>财经百科参数", parame);
            console.log("==>财经百科结果", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            this.SET_FINANCEECONOMICSLIST(result.data.baikeList);
            this.modelType=result.data.modelType;
              let getString = '';
              for (var i = 0; i < result.data.baikeList.length; i++) {
                getString += result.data.baikeList[i].id + ',';
              }
              this.moduleOId = getString.substring(0, getString.length - 1);
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


