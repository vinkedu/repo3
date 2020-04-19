<style lang="less" scoped>
  .TrainingEnrolmentHistoryList {
    text-align: center;
    background: #fff;
    .top-banner {
      text-align: center;
      position: fixed;
      top: 0;
      background: #fff;
      width: 100%;
      z-index: 1;
      border-bottom: 1px solid #ddd;
      .sign-up-title {
        font-size: 18px;
        font-weight: normal;
        color: rgba(0, 0, 0, 1);
        display: inline-block;
        height: 54px;
        line-height: 54px;
      }
      .leftIcon {
        height: 54px;
        display: flex;
        align-items: center;
        padding-left: 16px;
        img {
          height: 23px;
          width: 13px;
        }
      }
      .rightTitle {
        font-size: 16px;
        font-weight: normal;
        color: #fff;
        height: 54px;
        display: flex;
        align-items: center;
        padding-right: 16px;
      }
    }
    .train-list {
      text-align: left;
      margin: 10px 14px;
      .train-item {
        background: #fff;
        padding-top: 1px;
        .train-item-title {
          margin: 15px;
          font-size: 16px;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 1.5;
          text-align: justify;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2; // 2即为n
          -webkit-box-orient: vertical;
        }
        .train-item-content {
          padding: 0 0 15px 15px;
          .sign-up-detail-title {
            font-size: 12px;
            font-weight: normal;
            color: rgba(153, 153, 153, 1);
            line-height: 22px;
            display: flex;
            align-items: center;
            .sign-place {
              padding-right: 10px;
              padding-top: 3px;
              img {
                width: 11px;
                height: 14px;
              }
            }
            .sign-timer {
              padding-right: 10px;
              padding-top: 4px;
              img {
                width: 14px;
                height: 14px;
              }
            }
          }
          .sign-up-label {
            padding-top: 5px;
            img {
              width: 48px;
              height: 20px;
            }
          }
        }
      }
    }
    .train-list:first-child {
      margin-top: 55px;
    }
    .loading {
      display: flex;
      .loading-icon {
        padding-top: 10px;
        margin: 0 auto;
      }
    }
    .bottom-line {
      padding-top: 5px;
      color: #999;
      padding-bottom: 15px;
    }
  }
  .top-position {
    padding-top: 55px;
    .train-list:first-child {
      margin-top: 60px;
    }
    .bottom-line {
      padding-top: 60px;
    }
  }
</style>
<style lang="less">
  .TrainingEnrolmentHistoryList /deep/ .van-tab__text{
    font-size: 14px;
    color: #999;
  }
  .TrainingEnrolmentHistoryList .van-tabs--line .van-tabs__wrap {
    height: 42px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
  }
  .TrainingEnrolmentHistoryList.top-position .van-tabs--line .van-tabs__wrap {
    top: 55px;
  }
  .TrainingEnrolmentHistoryList .van-tab--active  .van-tab__text{
    color: @yhRed;
    font-weight: 500;
    font-size: 16px;
  }
  .TrainingEnrolmentHistoryList /deep/ .van-tabs__line {
    background-color: @yhRed;
    height: 3px;
    width: 22px !important;
  }
</style>
<template>
  <div class="TrainingEnrolmentHistoryList flex-wrapper"
       :class="{'top-position':!showshare}">
    <div class="top-banner clearfix"
         v-if="!showshare">
      <div class="sign-up-title">历史培训</div>
      <div class="left leftIcon"
           @click="backLast">
        <img src="../../components/common/image/topBackIcon.png"
             alt="">
      </div>
      <div class="right rightTitle">
        历史
      </div>
    </div>
    <van-tabs animated
              @click="onSelectTab">
      <van-tab v-for="(item,index) in tabsList"
               :title="item.dictName">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            class="page-infinite-list">
          <li class="page-infinite-listitem">
            <div class="train-list"
                 v-for="(item,index) in trainingList"
                 :key="index"
                 @click="goTrainingDetail(item.id)">
              <!--<div class="train-item"
                   v-if="trainingList.length!=0">
                <div class="train-item-title word-wrap">
                  {{item.name}}
                </div>
                <div class="train-item-content clearfix">
                  <div class="left sign-up-detail">
                    <div class="sign-up-detail-title"
                         v-if="item.address">
                      <div class="sign-place">
                        <img src="../../components/common/image/signPlace.png">
                      </div>
                      {{item.address}}
                    </div>
                    <div class="sign-up-detail-title">
                      <div class="sign-timer">
                        <img src="../../components/common/image/signTimer.png">
                      </div>
                      <span v-if="item.endTime">{{item.endTime|fomatTime4}}</span>
                      <span v-else>不限时间</span>
                    </div>
                  </div>
                  <div class="right sign-up-label">
                    <img src="../../components/common/image/signEnd.png">
                  </div>
                </div>
              </div>-->
              <v-trainItem :item="item" v-if="trainingList.length!=0"></v-trainItem>
            </div>
          </li>
        </ul>
        <div v-if="loading && !showEnd"
             class="loading">
          <div class="loading-icon">
            <mt-spinner type="fading-circle"
                        color="#ffba00"
                        class="loading-icon"></mt-spinner>
            <div>加载中</div>
          </div>
        </div>
        <div v-if="showEnd"
             class="bottom-line">我是有底线的</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
    import VTrainItem from "./TrainingEnrolmentItem"
  import isWeixin from '../../mixins/isWeixin'
  import _ from 'lodash'
  const ERROR_CODE = "ERRORCODE0000";
  import sourceOS from '../../mixins/sourceOS'
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'TrainingEnrolmentHistoryList',
    mixins: [closeLoading, sourceOS, isWeixin],
    components: {
        'v-trainItem': VTrainItem,
    },
    props: {},
    data() {
      return {
        pageIndex: 1,
        pageSize: 10,
        total: 10,
        loading: false,
        showEnd: false,
        tabsList: [],
        trainingList: [],
        userid: this.$route.params.userid,
        nowTypeIndex: 1
      }
    },
    watch: {

    },
    computed: {
      getPages: function () {
        return Math.ceil(this.total / 10);
      }
    },
    methods: {
      backLast() {
        this.$router.push({
          path:
            "/TrainingEnrolmentList/" +
            this.userid
        });
      },
      loadMore: _.throttle(function () {
        this.loading = true;
        console.log(1);
        if (this.pageIndex < this.getPages) {
          this.pageIndex += 1;
          let parame = {
            "functionName": "newTrainingService",
            "methodName": "selectTrainingList",
            "pageNo": this.pageIndex,
            "pageSize": 10,
            originSource: {
              OS: this.OS,
              "version": "h5_v2.0"
            },
            "data": {
              "status": "2,3",
              "type": this.nowTypeIndex
            }
          }
          console.log('11111', parame);
          this.$post(JSON.stringify(parame)).then(result => {
            this.loading = false;
            if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
              console.log('培训列表接口成功==>', result);
              this.trainingList = this.trainingList.concat(result.data.trainingList);
              this.total = result.sumCount;
            }
          })
        } else {
          this.loading = false;
          this.showEnd = true;
        }
      }, 1000),
      goTrainingDetail(id) {
        this.$router.push({
          path:
            "/TrainingDetail/" +
            this.userid + "/" + id + '/2'
        });
      },
      onSelectTab(index, title) {
        this.trainingList = [];
        if (index == 0) {
          this.nowTypeIndex = '';
        } else {
          this.nowTypeIndex = index;
        }
        let parames = {
          "functionName": "newTrainingService",
          "methodName": "selectTrainingList",
          "pageNo": 1,
          "pageSize": 10,
          "originSource": {
            "OS": this.OS,
            "version": "h5_v2.0"
          },
          "data": {
            "status": "2,3",
            "type": this.nowTypeIndex
          }
        }
        this.$post(JSON.stringify(parames)).then(result => {
          console.log("获取培训列表参数======>", parames);
          console.log("获取培训列表结果======>", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            this.trainingList = result.data.trainingList;
            this.total = result.sumCount;
          }
        });
      }
    },
    created() {
      let parames = {
        "functionName": "newSysDictService",
        "methodName": "queryDict",
        "originSource": {
          "OS": this.OS,
          "version": "h5_v2.0"
        },
        "data": {
          "dictTypeCode": "TRAINING_TYPE"
        }
      }
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("获取培训字段参数======>", parames);
        console.log("获取培训字段结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          if (result.data.sysDictList.length != 0) {
            this.tabsList = [{ dictName: '全部' }].concat(result.data.sysDictList);
            this.onSelectTab(0, 1);
          }
        }
      });

    },
    mounted() { }
  }
</script>