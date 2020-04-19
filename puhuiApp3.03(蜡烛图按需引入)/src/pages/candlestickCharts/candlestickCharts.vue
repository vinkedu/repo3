

<style scoped lang="less">
@import "~@/style/varibles.less";
.candlestickCharts{
  .title{
    font-size:18px;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:45px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    height: 45px;
  }
  .stack-flex-box{
    margin-top: 46px;
    padding: 10px 10px 0 10px;
    .stack-flex-item{
      display: inline-block;
      width: 30%;
      font-size: 12px;
      height: 30px;
      span{
        margin-left: 4px;
      }
      
    }
    .stack-flex-item:first-child{
      width: 40%;
      span{
        font-size: 16px;
        margin-left: 8px;
      }
    }
    .stack-flex-item:nth-child(2){
      span{
        font-size: 16px;
        margin-left: 8px;
      }
    }
    .red{
      color: #ec0000;
    }
    .green{
      color: #00da3c;
    }
  }
  #myChart {
    width: 100%;
    height:270px;
    margin: 0 auto;
  }
  /deep/ .van-tab--active{
    background: #ddd;
    font-weight: bold;
  }
  .time-pctchange{
    margin-top: 10px;
    background: #fff;
    padding: 14px;
    .time-pctchange-title{
      font-size:14px;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:20px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 14px;
    }
    .time-pctchange-content{
      /deep/ .van-cell{
        padding: 10px 0;
      }
      .green{
        color:@yhGreen
      }
      .red{
        color:@yhRed
      }
    }
  }
  .recommen-reason{
    margin-top: 10px;
    padding: 14px 13px;
    background: #fff;
    .recommen-reason-title{
      font-size:14px;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:20px;
    }
    .recommen-reason-content{
      padding-top: 7px;
      font-size:14px;
      font-weight:400;
      color:rgba(102,102,102,1);
      line-height:21px;
      letter-spacing:1px;
    }
  }
}

</style>
<template>
  <div class="candlestickCharts">
    <van-nav-bar :title="stackObj.selectName" fixed>
      <div slot="left" @click="onBack">
        <van-icon name="arrow-left" color="#959595" size="24" />
      </div>
    </van-nav-bar>
    <div class="stack-flex-box">
      <div class="stack-flex-item">上一收盘价<span class="red" :class="{green:stackObj.selectPctchange1<0}">{{stackObj.selectPrice}}</span></div>
      <div class="stack-flex-item">涨幅 <span class="red" :class="{green:stackObj.selectPctchange1<0}">{{stackObj.selectPctchange1}}</span></div>
      <div class="stack-flex-item">代码 <span>{{stackObj.selectCode}}</span></div>
    </div>
      <!-- <button>我是按钮</button> -->
      <div id='myChart'
           ref="myChart">
      </div>
    <van-tabs @click="onClick" title-active-color="#E72E33">
      <van-tab title="近一周"></van-tab>
      <van-tab title="近一月"></van-tab>
      <van-tab title="近三月"></van-tab>
      <van-tab title="近半年"></van-tab>
    </van-tabs>
    <div class="time-pctchange">
      <div class="time-pctchange-title clearfix">
        <div class="left">时间</div>
        <div class="right">涨跌幅</div>
      </div>
      <div class="time-pctchange-content">
        <van-cell title="前一交易日" value-class="red" :value="stackObj.selectPctchange1" />
        <van-cell title="前二交易日" value-class="red" :value="stackObj.selectPctchange2" />
        <van-cell title="前三交易日" value-class="red" :value="stackObj.selectPctchange2" />
      </div>
    </div>
    <div class="recommen-reason">
      <div class="recommen-reason-title">推荐购买理由</div>
      <div class="recommen-reason-content">在保持基金资产的低风险和高流动性的前提下，力争实现稳定的、超越业绩比较基准的投资回报。</div>
    </div>
    <div class="recommen-reason">
      <div class="recommen-reason-title">建议卖出时机</div>
      <div class="recommen-reason-content">本基金采取利率策略、类属配置策略、个券选择策略、相对价值策略、银行存款投资策略、流动性管理策略等 投资策略，在严格的控制风险的前提，实现组合增值。</div>
    </div>
  </div>
</template>
<script>
  // 引入蜡烛图等组件
  require('echarts/lib/chart/candlestick')
  require('echarts/lib/chart/bar')
  import closeLoading from '../../mixins/closeLoading'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  // eslint-disable-next-line no-unused-vars
  import { mapActions } from 'vuex'
  export default {
    name: 'candlestickCharts',
    mixins: [closeLoading],
    data() {
      return {
        upColor: '#ec0000',
        upBorderColor: '#8A0000',
        downColor: '#00da3c',
        downBorderColor: '#008F28',
        dataCount: 7,
        currentIndex:0
      }
    },
    methods: {
      onBack() {
        // 返回
        this.$router.go(-1);
      },
      // eslint-disable-next-line no-unused-vars
      initDate(){
        return new Promise(resolve => {
          let parame1 =
          {
            "functionName": "stockService",
            "methodName": "getStockInfoList",
            "securityStr": null,
            "pageNo": 1,
            "pageSize": this.dataCount,
            "originSource": {
              "OS": "Android_867439030160289_9_App",
              "version": "2.9.6_V2.0"
            },
            "data": {
              "code": this.stackObj.selectCode,
              "showDays": this.dataCount

            }
          }
          this.$post(JSON.stringify(parame1)).then(result => {
            console.log('数据获取', result);
            var data = [];
            var volumeState = 1;
            for (var i = 0; i < result.data.newStockList.length; i++) {
              if(result.data.newStockList[i].open>=result.data.newStockList[i].close){
                volumeState=-1;
              }else{
                volumeState=1;
              }
              data[i] =[
                result.data.newStockList[i].tradeDate,
                result.data.newStockList[i].open,
                result.data.newStockList[i].high,
                result.data.newStockList[i].low,
                result.data.newStockList[i].close,
                result.data.newStockList[i].volume,
                volumeState
              ]
            }
            resolve(data.reverse());
          });
        });
      },
      onClick(name) {
        if(this.currentIndex==name){
          return
        }
        this.currentIndex=name;
        if(name==0){
          this.dataCount=7;
        }
        else if(name==1){
          this.dataCount=30;
        }
        else if(name == 2){
          this.dataCount=90;
        }else if (name == 3){
          this.dataCount=180
        }
        this.initCart();
      },
      async initCart() {
        var data = await this.initDate();
        console.log(data);
        var option = {
          dataset: {
            source: data
          },

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
            }
          },

          grid: [
            {
              left: '12%',
              height: 150,
              bottom: 100
            },
            {
              left: '12%',
              height: 50,
              bottom: 0
            }
          ],
          xAxis: [
            {
              type: 'category',
              scale: true,
              boundaryGap: false,
              // inverse: true,
              axisLine: { onZero: false },
              splitLine: { show: false },
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax'
            },
            {
              type: 'category',
              gridIndex: 1,
              scale: true,
              boundaryGap: false,
              axisLine: { onZero: false },
              axisTick: { show: false },
              splitLine: { show: false },
              axisLabel: { show: false },
              splitNumber: 20,
              min: 'dataMin',
              max: 'dataMax'
            }
          ],
          yAxis: [
            {
              scale: true,
              splitArea: {
                show: false
              },
              splitLine: { show: false },
              axisLine: { show: true },
              axisTick: { show: false },
            },
            {
              scale: true,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: { show: false },
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { show: false }
            }
          ],
          dataZoom: [
            {
              type: 'inside',
              xAxisIndex: [0, 1],
              start: 0,
              end: 100
            },

          ],
          visualMap: {
            show: false,
            seriesIndex: 1,
            dimension: 6,
            pieces: [{
              value: 1,
              color: this.upColor
            }, {
              value: -1,
              color: this.downColor
            }]
          },
          series: [
            {
              type: 'candlestick',
              itemStyle: {
                color: this.upColor,
                color0: this.downColor,
                borderColor: this.upBorderColor,
                borderColor0: this.downBorderColor
              },
              barWidth:"70%",
              encode: {
                x: 0,
                y: [1, 4, 3, 2]
              }
            },
            {
              name: 'Volumn',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              itemStyle: {
                color: '#7fbe9e'
              },
              barWidth:"70%",
              large: true,
              encode: {
                x: 0,
                y: 5
              }
            }
          ]
        };
        this.myChart.setOption(option, true);
      }
    },
    computed:{
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['stackObj'])
    },
    created() {
    },
    mounted() {
      console.log(this.stackObj);
      var _this=this
      this.myChart = this.$echarts.init(document.getElementById('myChart'));
      this.initCart();
      window.onresize=function(){_this.myChart.resize();}
    },

  }
</script>

