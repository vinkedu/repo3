<style lang="less" scoped>
  .investmentAnalysisAadar {
    margin: 11px 14px 11px;
    padding: 0px 9px 12.5px;
    background: #fff;
  }
  .investmentAnalysisAadarOne {
    background: #fff;
  }
</style>

<template>
  <div>
    <div :class="{investmentAnalysisAadar:shapeType!=1,investmentAnalysisAadarOne:shapeType==1}">
      <div class="radar-charts"
           ref="chartTwo"
           style="height: 229px;width: 100%;">
      </div>
    </div>
  </div>
</template>
<script>
  require('echarts/lib/chart/radar')
  import sourceOS from '../../../mixins/sourceOS'
  import closeLoading from '../../../mixins/closeLoading'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  export default {
    name: 'radarEcharts',
    mixins: [closeLoading, sourceOS],
    props: {
      //微信用户ID
      shapeType: {
        type: String,
      },
      //App内微信用户ID
      appOpenid: {
        type: String,
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //分析ID
      fieldid: {
        type: String,
      },
    },
    data() {
      return {

      };
    },
    components: {

    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['riskPreferenceList']),
    },
    watch: {
      riskPreferenceList: {
        deep: true,
        handler: function (newV, oldV) {
          console.log(newV, oldV);
          //数据列表
          var shape = '';
          var indicatorList = [];
          if (this.shapeType == 1) {
            shape = 'rect';
            indicatorList = [
              { text: '晚报', max: 5 },
              { text: '产品', max: 5 },
              { text: '财经新闻', max: 5 },
              { text: '活动', max: 5 },
              { text: '今日财经', max: 5 },
            ];
          }
          else if (this.shapeType == 2) {
            shape = 'circle';
            indicatorList = [
              { text: '风险偏好', max: 5 },
              { text: '投资期限', max: 5 },
              { text: '专业能力', max: 5 },
              { text: '投资基金', max: 5 },
              { text: '期望收益', max: 5 },
            ];
          }
          let color1 = ['rgba(255,255,255, 1)', 'rgba(238, 238, 238, 1)',
            'rgba(255,255,255, 1)', 'rgba(238, 238, 238, 1)',
            'rgba(255,255,255, 1)'];

          let equityLevel = [];
          let equityPercent = [this.riskPreferenceList.durationLevel, this.riskPreferenceList.investLevel, this.riskPreferenceList.professionLevel, this.riskPreferenceList.profitLevel, this.riskPreferenceList.riskLevel];
          equityPercent.forEach((e, i) => {
            if (e != 0) {
              equityLevel.push(e);
            }
            console.log(i);
          });
          this.createChartOne(shape, equityLevel, indicatorList, color1);
        }
      },

    },
    methods: {
      //画雷达图
      createChartOne(shape, data, indicatorList, color1) {
        let chartone = this.$echarts.init(this.$refs.chartTwo);
        chartone.setOption({
          title: {
            // text: '自定义雷达图'
          },
          legend: {
            data: []
          },
          radar:
          {
            indicator: indicatorList,
            splitArea: {
              areaStyle: {
                color: color1,
              }
            },
            shape: shape,
            center: ['50%', '55%'],
            radius: 88,
            splitNumber: 5,
            name: {
              formatter: '【{value}】',
              textStyle: {
                color: '#666666'
              }
            },
          }
          ,
          series:
          {
            name: '成绩单',
            type: 'radar',
            data: [
              {
                value: data,
                name: '投资偏好',
                areaStyle: {
                  normal: {
                    opacity: 1,
                    color: new this.$echarts.graphic.RadialGradient(1, 1, 1, [//eslint-disable-line
                      {
                        color: '#fad2d0',
                        offset: 0
                      },
                      {
                        color: '#fad2d0',
                        offset: 1
                      }
                    ])
                  }
                },
                label: {
                  normal: {
                    // show: true,
                    formatter: function (params) {
                      return params.value;
                    }
                  }
                }
              }
            ]
          }
        });
        window.addEventListener("resize", () => {
          chartone.resize();
        });
      },

    },
    created() {

    },
    mounted() {
      if (this.shapeType == 1) {
        // 雷达图数据获取
        let parame1 = {
          "functionName": "userWechatService",
          "methodName": "selectLookStaticInfo",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": {
            "openId": this.appOpenid,
          }
        }
        this.$post(JSON.stringify(parame1)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            console.log("雷达图数据aa======>", result);
            var equityLevel = [];
            var equityPercent = [];
            var equitySum = 0;
            for (let i = 0; i < result.data.lookStaticList.length; i++) {
              equityPercent.push(result.data.lookStaticList[i].lookNum);
            }
            if (result.data.lookStaticList.length < 7) {
              for (let i = 0; i < 7 - result.data.lookStaticList.length; i++) {
                equityPercent.push(1);
              }
            }
            equityPercent.forEach((e, i) => {
              if (e != 0) {
                equityLevel.push(e);
                equitySum += e;
              }
              console.log(i);
            });
            var indicatorList = [];
            for (let i = 0; i < 7; i++) {
              if (i == 0) {
                indicatorList.push({ text: '今日财经', max: equitySum });
              }
              if (i == 1) {
                indicatorList.push({ text: '财经新闻', max: equitySum });
              }
              if (i == 2) {
                indicatorList.push({ text: '名片', max: equitySum });
              }
              if (i == 3) {
                indicatorList.push({ text: '产品', max: equitySum });
              }
              if (i == 4) {
                indicatorList.push({ text: '活动', max: equitySum });
              }
              if (i == 5) {
                indicatorList.push({ text: '晚报', max: equitySum });
              }
              if (i == 6) {
                indicatorList.push({ text: '投资分析', max: equitySum });
              }
            }
            let shape = 'rect';
            var color1 = ['rgba(255,255,255, 1)', 'rgba(238, 238, 238, 1)',
              'rgba(255,255,255, 1)', 'rgba(238, 238, 238, 1)',
              'rgba(255,255,255, 1)'];
            this.createChartOne(shape, equityLevel, indicatorList, color1);
          }
        });
      }
      else if (this.shapeType == 2) {
        // 雷达图数据获取
        let parame1 = {
          "functionName": "pushService",
          "methodName": "selectInvestAnalysis",
          originSource: {
            OS: this.OS,
            version: "H5_V2.0"
          },
          "data": {
            "openId": this.appOpenid,
            "userId": this.userid,
            "id": this.fieldid
          }
        }
        this.$post(JSON.stringify(parame1)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            console.log("雷达图数据======>", result);
            let shape = 'circle'
            var indicatorList = [
              { text: '风险偏好', max: 5 },
              { text: '投资期限', max: 5 },
              { text: '专业能力', max: 5 },
              { text: '投资基金', max: 5 },
              { text: '期望收益', max: 5 },
            ];
            let color1 = ['rgba(255,255,255, 1)', 'rgba(238, 238, 238, 1)',
              'rgba(255,255,255, 1)', 'rgba(238, 238, 238, 1)',
              'rgba(255,255,255, 1)'];

            let equityLevel = [];
            let equityPercent = [result.data.durationLevel, result.data.investLevel, result.data.professionLevel, result.data.profitLevel, result.data.riskLevel];
            equityPercent.forEach((e, i) => {
              if (e != 0) {
                equityLevel.push(e);
              }
              console.log(i);
            });
            this.createChartOne(shape, equityLevel, indicatorList, color1);
          }
        });
      }

    }
  }
</script>
