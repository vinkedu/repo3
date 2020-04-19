<style lang="less" scoped>
  .out-box {
    background: #f7f7f7;

    .overBottomLine {
      padding-top: 15px;
      .bottom-line {
        width: 80%;
        margin-left: 10%;
        opacity: 0.5;
      }
      .bottomlineBox {
        text-align: center;
        background: #f7f7f7;
        width: 110px;
        margin: 0 auto;
        position: relative;
        top: -9px;
        color: #999;
        font-size: 10px;
      }
    }
  }
</style>

<template>
  <div class="flex-wrapper">
    <section class="out-box">
      <v-partmarket :todaytime="this.$route.params.todaytime"></v-partmarket>

      <div class="overBottomLine">
        <div class="bottom-line">
          <hr class="hr1px">
        </div>

        <div class="bottomlineBox">我是有底线的</div>
      </div>
    </section>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  export default {
    name: "globalMarket",
    mixins: [closeLoading],
    data() {
      return {

      };
    },
    components: {
      'v-partmarket': () => import(`../../components/common/partMarket`),
    },
    computed: {

    },
    methods: {


    },
    created() {
      
    },
    mounted() {

    }
  }
</script>
