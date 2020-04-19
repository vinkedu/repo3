<style scoped  lang="less">
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
      .globalMarket {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        .localMarket {
          padding: 0 5px;
          box-sizing: border-box;
          background-color: white;
          flex: 0 0 50%;
          height: 90px;
          color: #b90901;
          overflow: hidden;
          .localMarketFont {
            padding: 10px 0 0;
            color: #bdbdbd;
          }
          .stock-price {
            font-size: 21px;
            // border-right: 1px solid #eee;
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
      .nowPage {
        line-height: 32px;
        font-size: 15px;
      }
      .toYesterdayPrice {
        padding: 10px 0;
        color: #a4a4a4;
        text-align: center;
      }
      .page-box {
        padding-bottom: 10px;
      }
    }
  }
</style>

<template>
  <div class="outer-box">
    <div class="marketOverview"
         v-if="moduleK">
      <div class="marketOverviewTitle">全球概览</div>
      <div class="globalMarket">
        <div class="localMarket localMarket1"
             v-for="(item,index) in newIndexToolNowList"
             :key="index"
             :class="{'green':item.pctchange<0}">
          <div class="localMarketFont">{{item.name}}</div>
          <div class="stock-price">{{item.price | keepTwoNum}}</div>
          <div class="stockChange">{{item.change | formStockChange}} ({{item.pctchange | formStockPctChange}})</div>
        </div>

      </div>
      <div class="clearfix page-box">
        <!-- 分页-->
        <v-pagination class="right"
                      style="min-width:70px;"
                      @page-change="pageChange"
                      :total="total"
                      :page-size="pageSize"
                      :layout="['prev', 'next']"></v-pagination>
        <div class="right nowPage">当前页数 {{pageIndex}}/{{getPages}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "partMarket",
    mixins: [sourceOS],
    props: {
      //时间戳
      todaytime: {
        type: String
      }
    },
    data() {
      return {
        newIndexToolNowList: [],
        pageIndex: 1,
        pageSize: 10,
        total: 10,
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
      getPages: function () {
        return Math.ceil(this.total / 10);
      }
    },
    created() {
      //股市数据获取
      this.getTableData();
    },
    methods: {
      pageChange(pageIndex) {
        this.pageIndex = pageIndex
        this.getTableData()
        console.log(pageIndex)
      },
      //初始化股市概览数据
      getTableData() {
        let parame = {
          "functionName": "newIndexToolNowService",
          "methodName": "selectNewIndexToolNowInfoList",
          "pageNo": this.pageIndex,
          "pageSize": 10,
          "sort": "",
          "sortName": "",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            "toolTypes": [1, 2, 3, 4, 5]
          }
        }
        this.$post(JSON.stringify(parame)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log('股市数据查询成功==>', result);
            this.total = result.sumCount;
            //概览信息
            this.newIndexToolNowList = result.data.newIndexToolNowList;
          }
        })
      },
    }
  }
</script>


