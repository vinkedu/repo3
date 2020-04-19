<style lang="less" scoped>
  .video {
    .mod-play1er {
      position: relative;
      padding-top: 56.25%;
    }

    .mod-play1er .play1er {
      position: fixed;
      padding-top: 56.25%;
      top: 0;
      left: 0;
      right: 0;
      background: #000;
      z-index: 99;
    }

    .mod-play1er .play1er-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .mod-play1er video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0 none;
      background: #000;
      z-index: 101;
      overflow: hidden;
    }
    .mod-play1er .play1e-place-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 101;
      background: rgba(0,0,0,0.5);
      text-align: center;
      font-size: 15px;
      color: #fff;
      line-height: 211px;
    }
  }
</style>
<template>
  <div class="video">
    <div class="mod-play1er">
      <div class="play1er">
        <div class="play1er-box">
          <!--video  { src:要播放的视频的 URL; poster:在用户点击播放按钮前显示的图像; preload:视频在页面加载时进行加载，并预备播放;
          webkit-playsinline、playsinline:IOS微信浏览器支持小窗内播放}-->
          <!-- <video src="https://test.yihuisoft.com/appVideos/video/D9F23B2AF6E94B52ADADACFBFCFA1C30/hlss/lucene.m3u8"
                 type="application/x-mpegURL"
                 poster="http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg"
                 controls="controls"
                 webkit-playsinline="true"
                 playsinline="true"
                 id="video"></video> -->
          <video src=""
                 type="application/x-mpegURL"
                 poster="http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg"
                 controls="controls"
                 webkit-playsinline="true"
                 playsinline="true"
                 id="video"></video>
        </div>
        <div class="play1e-place-box" v-if="videoPayStatus==0">付费后可免费观看本视频</div>
      </div>
    </div>
  </div>
</template>
<script>
    //Vuex公共状态辅助函数
    import { mapState } from 'vuex'
  export default {
    name: 'video',
    mixins: [],
    components: {},
    props: {},
    data() {
      return {
      }
    },
    watch: {},
    computed: {
        ...mapState(['videoPayStatus']),
    },
    methods: {
    },
    created() { },
    mounted() { }
  }
</script>