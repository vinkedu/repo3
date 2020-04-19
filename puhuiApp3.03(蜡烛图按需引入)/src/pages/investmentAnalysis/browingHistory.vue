<style lang="less" scoped>
</style>

<template>
  <div class="flex-wrapper">
    <v-radarecharts shapeType='1'
                    :appOpenid="this.$route.params.appOpenid"
                    :userid="this.$route.params.userid"
                    :fieldid="this.$route.params.fieldid"></v-radarecharts>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  //Vuex公共状态动作
  export default {
    name: "investmentAnalysis",
    mixins:[closeLoading],
    data() {
      return {

      };
    },
    components: {
      'v-radarecharts': () => import(`../../components/common/echarts/radarEcharts`),
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
