<style lang="less" scoped>
  .newsDis {
    margin: 0 14px 12.5px;
    font-size: 14px;
    text-align: center;
    background: #fff;
    padding: 15px;
    .newDis-box {
      border: 1px dotted #a82517;
      border-radius: 20px;
      padding: 10px;
    }
  }
  .newsDis-30{
    padding: 15px 0;
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
</style>

<template>
  <div>
    <div class="newsDis" :class="{'newsDis-30':versionStyle==2}">
      <div class="newDis-box">
        “{{this.quote}}”
      </div>
    </div>
    <div class="margin-bottom-box" v-if="versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  export default {
    name: 'famousRemark',
    data() {
      return {
        //每日一语
        quote: '',
      };
    },
    mixins: [sourceOS],
    components: {

    },
    props: {
      // 样式版本
      versionStyle:{
        type:String,
        default:'1'
      }
    },
    computed: {

    },
    methods: {
      //初始化每日一语
      initHappyWord() {
        let parames = {
          functionName: "appService",
          methodName: "selectNewQuote",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          data: {

          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log("每日一语", result);
            //浏览量
            this.quote = result.data.quote;

          } else {
            console.log("每日一语加载失败");
          }
        });
      },

    },
    created() {
      //获取每日一语
      this.initHappyWord()
    },
    mounted() {

    },
  }
</script>
