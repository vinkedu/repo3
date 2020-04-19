<style lang="less" scoped>
  @import "~@/style/varibles.less";
  .TrainingEnrolmentList {
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
        color: rgba(0, 0, 0, 1);
        height: 54px;
        display: flex;
        align-items: center;
        padding-right: 16px;
      }
    }
    .train-list {
      text-align: left;
      margin: 10px 14px;

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
  .TrainingEnrolmentList /deep/ .van-tab__text{
    font-size: 14px;
    color: #999;
  }
  .TrainingEnrolmentList .van-tabs--line .van-tabs__wrap {
    height: 42px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 1;
  }
  .TrainingEnrolmentList.top-position .van-tabs--line .van-tabs__wrap {
    top: 55px;
  }
  .TrainingEnrolmentList .van-tab--active  .van-tab__text{
    color: @yhRed;
    font-weight: 500;
    font-size: 16px;
  }
  .TrainingEnrolmentList /deep/ .van-tabs__line {
    background-color: @yhRed;
    height: 3px;
    width: 22px !important;
  }
  
  
  
</style>
<template>
  <div class="TrainingEnrolmentList flex-wrapper"
       :class="{'top-position':!showshare}">
    <div class="top-banner clearfix"
         v-if="!showshare">
      <div class="sign-up-title">培训报名</div>
      <div class="left leftIcon"
           @click="backApp">
        <img src="../../components/common/image/topBackIcon.png"
             alt="">
      </div>
      <div class="right rightTitle"
           @click="gotoHistoryList">
        历史
      </div>
    </div>
    <van-tabs animated
              @click="onSelectTab">
      <van-tab v-for="(item,index) in tabsList"
               :title="item.dictName" :key="index">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            class="page-infinite-list">
          <li class="page-infinite-listitem">
            <div class="train-list"
                 v-for="(item,index) in trainingList"
                 :key="index"
                 @click="goTrainingDetail(item.id)">
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
    name: 'TrainingEnrolmentList',
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
        signState: 1,
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
      backApp() {
        var u = navigator.userAgent;
        if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          window.webkit.messageHandlers.toDestoryActivity.postMessage(null);
        }
        else if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.destoryActivity();
        }
      },
      gotoHistoryList() {
        this.$router.push({
          path:
            "/TrainingEnrolmentHistoryList/" +
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
              "status": "1",
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
            this.userid + "/" + id + '/1'
        });
      },
      onSelectTab(index) {
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
            "status": "1",
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
    mounted() {

    }
  }
</script>