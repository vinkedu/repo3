<style lang="less" scoped>
</style>
<style lang="less">
  @import "~@/style/varibles.less";
  .videoCourse .tabs-tab-active{
      color: @yhRed;
      border-bottom: 0
  }
  .videoCourse .tabs-tab-active:after {
    background: @yhRed;
    width: 30px;
    content: "";
    height: 2.5px;
    margin: 0 auto;
  }
</style>
<template>
  <div class="videoCourse"
       @touchend="touchEndTime()">
    <v-video></v-video>
    <yh-tabs v-model="activeKey">
      <yh-pane label="课程简介"
               name="1">
        <yh-videoCourseIntroduction></yh-videoCourseIntroduction>
      </yh-pane>
      <yh-pane label="课程选集"
               name="2">
        <yh-videoSelection></yh-videoSelection>
      </yh-pane>
    </yh-tabs>
    <yh-videoShareToWeixin></yh-videoShareToWeixin>
  </div>
</template>

<script>
  import initStartTime from '../../mixins/initStartTime'
  import initEndTime from '../../mixins/initEndTime'
  const ERROR_CODE = "ERRORCODE0000"; //执行成功
  import sourceOS from '../../mixins/sourceOS'
  import videoShareToWeixin from '../../components/common/video/videoShareToWeixin'
  import videoSelection from '../../components/common/video/videoSelection'
  import videoCourseIntroduction from '../../components/common/video/videoCourseIntroduction'
  import kvTabs from '../../components/common/tabController/tabs'
  import kvPane from '../../components/common/tabController/pane'
  import video from '../../components/common/video/video'
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'videoCourse',
    mixins: [initEndTime, initStartTime, closeLoading, sourceOS],
    components: {
      'v-video': video,
      'yh-tabs': kvTabs,
      'yh-pane': kvPane,
      'yh-videoCourseIntroduction': videoCourseIntroduction,
      'yh-videoSelection': videoSelection,
      'yh-videoShareToWeixin': videoShareToWeixin,
    },
    props: {},
    data() {
      return {
        //控制标签内容的显示与隐藏
        activeKey: '1',
        fieldid: this.$route.params.fieldid,
      }
    },
    watch: {},
    computed: {},
    methods: {
    },
    created() {

    },
    mounted() {
      let parames = {
        "moduleName": "",
        "functionName": "courseService",
        "methodName": "addCourseBrowseNum",
        "pageNo": 1,
        "pageSize": 10,
        originSource: {
          OS: this.OS,
          version: "H5_V2.0"
        },
        data: {
          "courseId": this.fieldid,
        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("浏览数据参数======>", parames);
        console.log("浏览数据结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
        }
      });
      setTimeout(() => {
        this.setStartTime(22, this.fileId, "1");
      }, 250);
    }
  }
</script>