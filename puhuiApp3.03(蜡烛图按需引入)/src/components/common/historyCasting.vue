<style lang="less" scoped>
  .history-casting {
    background: #fff;
    /*padding: 10px 14px;*/
    padding-bottom: 100px;
    .history-casting-box {
      background: #fff;
      padding: 11px 14px 18px 15.5px;
      .history-casting-title {
        font-size: 18px;
        padding: 0 0 10px;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
        margin-bottom: 14px;
      }
      .history-casting-list {
        color: #666666;
        font-size: 14px;
        .history-casting-item {
          min-height: 62px;
          padding: 10px 11px;
          background:rgba(255,255,255,1);
          box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
          border-radius:4px;
          margin-top:8px;
          display: flex;
          align-items: center;
          .selectColor {
            color: rgb(185, 9, 1);
            opacity: 1;
            .rightIcon {
              vertical-align: top;
              height: 18px;
              width: 18px;
            }
          }
        }
        .active {
          color: #E73237;
        }
      }
    }
  }
</style>

<template>
  <div class="history-casting">
    <div class="history-casting-box">
      <div class="history-casting-title">
        历史播报
      </div>
      <div class="history-casting-list">
        <div class="history-casting-item"
             v-for="(item,index) in historyCastingList"
             :key="index"
             :class="{'active':ind === index}"
             @click="changeBgc(index)">
          {{item.broadType}}
          {{item.broadTitle}}
          <!--<span v-if="ind === index"
                class="selectColor">
            <img src="./image/对号@3x.png"
                 class="rightIcon">
          </span>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  export default {
    name: 'historyCasting',
    inject: ['routerRefresh'],   //在子组件中注入在父组件中出创建的属性
    mixins: [sourceOS],
    props: {
      //微信用户ID
      openid: {
        type: String,
      },
      //是否是历史数据
      historyid: {
        type: String
      },
      //时间戳
      todaytime: {
        type: String
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //是否为分享文章
      isShare: {
        type: String,
      },
      //小程序
      isWXApplet: {
        type: String
      },
      //播报id
      fieldid: {
        type: String
      },
    },
    data() {
      return {
        historyCastingList: [

        ],
        ind: 0
      };
    },
    components: {

    },
    computed: {

    },
    methods: {
      //改变颜色
      changeBgc: function (index) {
        this.ind = index;
        this.$router.push({
          path:
            "/eveningBroadcasting/" +
            this.todaytime +
            "/" +
            this.userid +
            "/" +
            this.historyCastingList[index].id +
            "/" +
            this.openid +
            "/" +
            this.isShare
        });
        //回到页面顶部
        setTimeout(() => {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          window.pageYOffset = 0;
        }, 1);
        this.routerRefresh();

      }

    },
    created() {
      let parame1 = {
        "functionName": "newBroadCastService",
        "methodName": "selectBroadHistoryList",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        "data": {

        }
      };
      this.$post(JSON.stringify(parame1)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log('历史播报数据', result);
          this.historyCastingList = result.data.newBroadCastList;
          var idList = [];
          for (var i = 0; i < this.historyCastingList.length; i++) {
            idList.push(this.historyCastingList[i].id);
          }
          this.ind = idList.indexOf(Number(this.fieldid));
        }
      });
    },
    mounted() {

    },
  }
</script>
