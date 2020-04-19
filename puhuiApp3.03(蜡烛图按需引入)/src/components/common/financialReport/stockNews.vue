<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .stockIcon {
    background-image: url("../image/art_tit_ic03@2x.png");
  }
</style>
<template>
  <div>
    <div class="hotText"
         v-if="moduleF">
      <div class="hotTextTitle clearfix">
        <div class="left">
          <i class="stockIcon icon"></i>
        </div>
        <div class="left">股市盘点</div>
        <div class="right"
             v-if="!isWeixin && historyid!=1">
          <button @click="changeHotText('stock')">换一组</button>
        </div>
      </div>
      <div class="hotTextList"
           v-for="(item,index) in stockList"
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
        <v-lable :lableList='item.tagList'></v-lable>
      </div>
    </div>
  </div>
</template>
<script>
  import lable from '../../../components/common/financialReport/lable'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "stockNews",
    mixins: [sourceOS],
    inject: ["checkArticle", "showModule"],
    components: {
      'v-lable': lable,
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
    },
    data() {
      return {
        lableList: ['股指普涨股指股指普涨股指股指普涨股指', '指数涨逾指数涨逾指数涨逾指数涨逾指数涨逾指数涨逾'],
        //微信端显示
        isWeixin: false,
        //股市盘点文章ID
        moduleFId: '',
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['moduleF', 'stockList']),
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
        //股市盘点
        this.initStock();
      }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_STOCKLIST']),
      //初始化股市盘点
      initStock() {
        let parame = {
          "functionName": "appService",
          "methodName": "selectStock",
          originSource: {
            OS: this.OS,
            version: "H5_V2.2"
          },
          "data": {
            "pubTime": this.formatDate
          }
        }
        this.$post(JSON.stringify(parame)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log("==>股市盘点", result);
            this.SET_STOCKLIST(result.data.stockList);
            let getString = '';
            for (var i = 0; i < result.data.stockList.length; i++) {
              getString += result.data.stockList[i].id + ',';
            }
            this.moduleFId = getString.substring(0, getString.length - 1);
          }
          if (result.data.codeType == '400') {
            this.showModule('A-H-I-J-K');
          }
        });
      },
      //换一组
      changeHotText(string) {
        if (string == 'stock') {
          this.initStock();
        }
      },
    }
  }
</script>


