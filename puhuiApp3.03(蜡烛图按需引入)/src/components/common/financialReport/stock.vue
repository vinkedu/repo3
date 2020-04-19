
<style scoped  lang="less">
  @import "~@/style/varibles.less";
  .outer-box {
    padding: 0 15px;
    margin-top: 12.5px;
    .marketOverview {
      background: #fff;
      .marketOverviewTitle {
        font-size: 18px;
        padding: 10px 0;
        margin: 0 15px;
        border-bottom: 1px solid #eee;
      }
      .marketOverviewTitle-30{
        margin: 0;
      }
      .globalMarket {
        width: 100%;
        height: 160px;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .localMarket {
          padding: 0 5px;
          box-sizing: border-box;
          background-color: white;
          flex: 0 0 33.3%;
          height: 80px;
          color: #b90901;
          overflow: hidden;
          .localMarketFont {
            padding: 10px 0 0;
            color: #bdbdbd;
          }
          .stock-price {
            font-size: 21px;
            border-right: 1px solid #eee;
          }
          .stock-price1 {
            font-size: 21px;
          }
          .stockChange {
            font-size: 9px;
          }
        }
        .localMarket1 {
          padding-left: 15px;
        }
        .localMarket2 {
          padding-right: 5px;
        }
        .localMarket3 {
          padding: 0 5px;
        }
        .green {
          color: #1ca601;
        }
      }
      .globalMarket-30{
        padding-top: 15px;
        .localMarket{
          box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
          border-radius:4px;
          margin-bottom: 7px;
          flex: 0 0 32%;
          color: @yhRed;
          .stock-price{
            border: 0;
          }
          .stock-price-30{
            padding-top: 6px;
            font-size: 18px;
          }
          .stock-price1-30{
            padding-top: 6px;
            font-size: 18px;
          }
        }
        .localMarket1 {
          padding-left: 10px;
          margin-right: 2%;
        }
        .localMarket2 {
          padding-right: 2%;
        }
        .localMarket3 {
          padding: 0 5px;
          margin-right: 5px;
        }
        .green {
          color: @yhGreen;
        }
        
      }
      .toYesterdayPrice {
        padding: 10px 0;
        color: #a4a4a4;
        text-align: center;
      }
      .toYesterdayPrice-30{
        margin-top: 30px;
      }
    }
  }
</style>

<template>
  <div class="outer-box">
    <div class="marketOverview"
         v-if="moduleK">
      <div class="marketOverviewTitle" :class="{'marketOverviewTitle-30':versionStyle==2}">行情概览</div>
      <div class="globalMarket clearfix" :class="{'globalMarket-30':versionStyle==2}">
        <div class="localMarket localMarket1"
             :class="{'green':newStockMarketListShang.pctchange<0}">
          <div class="localMarketFont">上证指数</div>
          <div class="stock-price" :class="{'stock-price-30':versionStyle==2}">{{newStockMarketListShang.close | keepTwoNum}}</div>
          <div class="stockChange">{{newStockMarketListShang.change | formStockChange}} ({{newStockMarketListShang.pctchange | formStockPctChange}})</div>
        </div>
        <div class="localMarket localMarket3"
             :class="{'green':newStockMarketListHeng.pctchange<0}">
          <div class="localMarketFont">恒生指数</div>
          <div class="stock-price" :class="{'stock-price-30':versionStyle==2}">{{newStockMarketListHeng.close | keepTwoNum}}</div>
          <div class="stockChange">{{newStockMarketListHeng.change | formStockChange}} ({{newStockMarketListHeng.pctchange | formStockPctChange}})</div>
        </div>
        <div class="localMarket localMarket2"
             :class="{'green':newStockMarketListRi.pctchange<0}">
          <div class="localMarketFont">日经指数</div>
          <div class="stock-price1" :class="{'stock-price1-30':versionStyle==2}">{{newStockMarketListRi.close | keepTwoNum}}</div>
          <div class="stockChange">{{newStockMarketListRi.change | formStockChange}} ({{newStockMarketListRi.pctchange | formStockPctChange}})</div>
        </div>
        <div class="localMarket localMarket1"
             :class="{'green':newStockMarketListNa.pctchange<0}">
          <div class="localMarketFont">道琼斯指数</div>
          <div class="stock-price" :class="{'stock-price-30':versionStyle==2}">{{newStockMarketListNa.close | keepTwoNum}}</div>
          <div class="stockChange">{{newStockMarketListNa.change | formStockChange}} ({{newStockMarketListNa.pctchange | formStockPctChange}})</div>
        </div>
        <div class="localMarket localMarket3"
             :class="{'green':newStockMarketListDollar.pctchange<0}">
          <div class="localMarketFont">美元人民币</div>
          <div class="stock-price" :class="{'stock-price1-30':versionStyle==2}">{{newStockMarketListDollar.close | keepFourNum}}</div>
          <div class="stockChange">{{newStockMarketListDollar.change | formFourStockChange}} ({{newStockMarketListDollar.pctchange | formStockPctChange}})</div>
        </div>
        <div class="localMarket localMarket2"
             :class="{'green':newStockMarketListGold.pctchange<0}">
          <div class="localMarketFont">Au99.99价格</div>
          <div class="stock-price1" :class="{'stock-price-30':versionStyle==2}">{{newStockMarketListGold.close | keepTwoNum}}</div>
          <div class="stockChange">{{newStockMarketListGold.change | formStockChange}} ({{newStockMarketListGold.pctchange | formStockPctChange}})</div>
        </div>
      </div>
      <div class="toYesterdayPrice" :class="{'toYesterdayPrice-30':versionStyle==2}">截止上一交易日收盘</div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "stock",
    mixins: [sourceOS],
    props: {
      //时间戳
      todaytime: {
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
        //美元兑人民币集合
        newStockMarketListDollar: {},
        //黄金指数集合
        newStockMarketListGold: {},
        //上证指数集合
        newStockMarketListShang: {},
        //恒生指数集合
        newStockMarketListHeng: {},
        //日经指数集合
        newStockMarketListRi: {},
        //纳斯达克指数集合
        newStockMarketListNa: {},
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['moduleK']),
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
      //股市数据获取
      this.initStockList();
    },
    methods: {
      //初始化股市概览数据
      initStockList() {
        let parame = {
          "functionName": "appService",
          "methodName": "selectNewStockMarket",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            pubTime: this.formatDate // 当前时间
          }
        };
        this.$post(JSON.stringify(parame)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log('股市数据查询成功==>', result);
            //概览信息
            let newStockMarketListRes = result.data.newStockMarketList;
            for (var i = 0; i < newStockMarketListRes.length; i++) {
              if (newStockMarketListRes[i].name == "上证指数") {
                this.newStockMarketListShang = newStockMarketListRes[i];
              } else if (newStockMarketListRes[i].name == "恒生指数") {
                this.newStockMarketListHeng = newStockMarketListRes[i];
              } else if (newStockMarketListRes[i].name == "日经225") {
                this.newStockMarketListRi = newStockMarketListRes[i];
              } else if (newStockMarketListRes[i].name == "道琼斯") {
                this.newStockMarketListNa = newStockMarketListRes[i];
              } else if (newStockMarketListRes[i].name == "美元兑人民币") {
                this.newStockMarketListDollar = newStockMarketListRes[i];
              } else if (newStockMarketListRes[i].name == "Au99.99") {
                this.newStockMarketListGold = newStockMarketListRes[i];
              }
            }
          }
        })
      },
    }
  }
</script>


