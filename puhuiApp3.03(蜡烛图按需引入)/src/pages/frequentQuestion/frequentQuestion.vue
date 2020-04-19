<style lang="less" scoped>
  .frequentQuestion {
    background: #fff;
    padding: 11.5px 14px;
    .question-list {
      background: #fff;
      // padding: 18px 11px;
      .question-list-item {
        border-bottom: 1px solid rgba(238, 238, 238, 1);
        padding: 15px;
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px;
        margin-bottom: 8px;
        .question-list-item-title {
          font-size: 16px;
          font-weight: normal;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
          .leftTitle{
            max-width: 290px;
          }
          .rightIcon {
            img {
              width: 14px;
              height: 7px;
            }
          }
        }
        .question-list-item-content {
          padding-top: 8px;
          font-size: 14px;
          font-weight: normal;
          color: rgba(102, 102, 102, 1);
          line-height: 1.5;
        }
      }
      .question-list-item:last-child {
        border-bottom: 1px solid rgba(238, 238, 238, 0);
      }
    }
  }
</style>
<template>
  <div class="frequentQuestion flex-wrapper">
    <div class="question-list">
      <div class="question-list-item"
           v-for="(item,index) in questionList"
           :key="index">
        <div class="question-list-item-title clearfix" @click="changeState(index)">
          <div class="left leftTitle">{{item.id|formatQuestionOrder}}{{item.question}}</div>
          <div class="right rightIcon"
               v-if="item.state">
            <img src="../../components/common/image/arrow_u@2x.png">
          </div>
          <div class="right rightIcon"
               v-else>
            <img src="../../components/common/image/arrow_d@2x.png">
          </div>
        </div>
        <div class="question-list-item-content"
             v-if="item.state">{{item.answer}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  const ERROR_CODE = "ERRORCODE0000"; //执行成功
  import sourceOS from '../../mixins/sourceOS'
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'frequentQuestion',
    mixins: [closeLoading,sourceOS],
    components: {},
    props: {},
    data() {
      return {
        questionList: [
        ],
      }
    },
    watch: {},
    computed: {},
    methods: {
      changeState(index) {
        this.questionList[index].state = !this.questionList[index].state;
      }
    },
    created() {
      let parames = {
        "functionName": "appService",
        "methodName": "selectCommonProblem",
        "originSource": {
          "OS": this.OS,
          "version": "h5_v2.0"
        },
        "data": {

        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("常见问题参数======>", parames);
        console.log("常见问题结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          for(var i=0;i<result.data.problemList.length;i++){
            result.data.problemList[i].state=false;
          }
          this.questionList=result.data.problemList;
        }
      });
    },
    mounted() {

    }
  }
</script>