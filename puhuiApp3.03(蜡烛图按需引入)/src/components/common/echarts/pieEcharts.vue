<style lang="less" scoped>
  .investmentAnalysis {
    margin: 0 14px 11px;
    padding: 0px 9px 12.5px;
    background: #fff;
    .invest-rank {
      width: 320px;
      height: 35px;
      background: rgba(247, 247, 247, 1);
      text-align: center;
      font-size: 12px;
      line-height: 35px;
      color: #666;
      margin: 0 5px;
      .number-color {
        color: #b90901;
        font-size: 17px;
      }
    }
  }
</style>

<template>
  <div>
    <div class="investmentAnalysis">
      <div class="pie-charts"
           ref="chartone"
           style="height: 170px;width: 100%;">
      </div>
      <div class="invest-rank">
        您的投资能力已打败市场<span class="number-color">{{marketPercent}}%</span>的人
      </div>

    </div>
  </div>
</template>
<script>
  require('echarts/lib/chart/pie')
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  import closeLoading from '../../../mixins/closeLoading'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  export default {
    mixins: [closeLoading, sourceOS],
    props: {
      //微信用户ID
      appOpenid: {
        type: String,
      },
    },
    name: 'pieEcharts',
    data() {
      return {
        marketPercent: '--'
      };
    },
    components: {

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['newRiskAllocationList', 'marketPercent']),
    },
    watch: {
      newRiskAllocationList: {
        deep: true,
        handler: function (newV, oldV) {
          console.log(newV, oldV);
          //市场竞争百分比
          // this.marketPercent=result.data.marketPercent;
          //数据列表
          let dataArray = this.newRiskAllocationList;
          let legend = ["商品型 ", "固收型 ", "货币型 ", "权益型 ", "保障类 "];
          let equityPercent = [];
          let color1 = ["#519ee8", "#f25d68", "#ecc644", "#2ec4b6", '#86e1ed'];
          dataArray.forEach((e, i) => {
            // console.log("balance", e.proportion, legend[i]);
            if (e != 0) {
              legend[i] += e.proportion;
              equityPercent.push({
                value: e.proportion,
                name: legend[i]
              });
            }
          });
          this.createChartOne(equityPercent, legend, color1);
        }
      },
      marketPercent: {
        deep: true,
        handler: function (newV, oldV) {
          console.log(newV, oldV);
          //市场竞争百分比
          console.log(this.marketPercent);
        }
      },
    },
    methods: {
      //画饼图
      createChartOne(data, legend, color1) {
        let chartone = this.$echarts.init(this.$refs.chartone);
        chartone.setOption({
          title: {
            text: "配置建议",
            left: '0',
            top: '10'
          },
          grid: {
            left: "25%", // 与容器左侧的距离
            right: "25%", // 与容器右侧的距离
            bottom: '0%'
          },
          color: color1,
          legend: {
            orient: 'vertical',
            x: 'right',
            top: '28%',
            left: '55%',
            icon: "circle",
            itemWidth: 8, // 设置宽度
            itemHeight: 10, // 设置高度
            data: legend
          },
          series: [
            {
              name: "半径模式",
              type: "pie",
              radius: [27, 54],
              center: ["30%", "60%"],
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              data: data
            }
          ]
        });
        window.addEventListener("resize", () => {
          chartone.resize();
        });
      },

    },
    created() {

    },
    mounted() {
      // 饼图数据获取
      let parame1 = {
        "functionName": "pushService",
        "methodName": "selectRiskAllocationInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V2.0"
        },
        "data": {
          "openId": this.appOpenid
        }
      }
      this.$post(JSON.stringify(parame1)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("饼图数据======>", result);
          this.marketPercent = result.data.marketPercent;
          let dataArray = result.data.newRiskAllocationList;
          let legend = ["商品型 ", "固收型 ", "货币型 ", "权益型 ", "保障类 "];
          let equityPercent = [];
          let color1 = ["#519ee8", "#f25d68", "#ecc644", "#2ec4b6", '#86e1ed'];
          dataArray.forEach((e, i) => {
            // console.log("balance", e.proportion, legend[i]);
            if (e != 0) {
              legend[i] += e.proportion + '%';
              equityPercent.push({
                value: e.proportion,
                name: legend[i]
              });
            }
          });
          this.createChartOne(equityPercent, legend, color1);
        }
      });

    }
  }
</script>
