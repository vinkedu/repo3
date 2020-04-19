<style lang="less" scoped>
  .shareLeader {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
    max-width: 445px;
    .center-box {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 999;
      width: 100%;

      .top {
        .top-leader {
          text-align: right;
          padding: 5px 20px 15px;
          img {
            width: 71px;
            height: 110px;
          }
        }
        .comingContent {
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 30px;
          margin: 0 auto;
          width: 226px;
          height: 96px;
          border-radius: 4px;
          opacity: 0.8;
        }
        .wx-click-icon{
          background: url("../../components/common/image/wxClickIcon.png") no-repeat;
          margin: 0 auto;
          width: 108px;
          height: 41px;
          background-size: cover;
          font-size:21px;
          font-weight:normal;
          color:rgba(255,255,255,1);
          line-height:35px;
          text-align: center;
        }
      }
    }
  }
</style>
<template>
  <div class="shareLeader flex-wrapper"
       v-if="shareLeaderState"
       @click="closeDialogs">
    <div class="center-box">
      <div class="top">
        <div class="top-leader">
          <img src="../../components/common/image/编组 6@2x.png">
        </div>
        <div class="comingContent">打开浏览器，在浏览器中下载</div>
        <div class="wx-click-icon">知道啦!</div>
      </div>
    </div>

  </div>
</template>

<script>
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  import sourceOS from '../../mixins/sourceOS'
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'redPackets',
    mixins: [closeLoading, sourceOS],
    components: {},
    props: ["isshowAlert", "Message"],
    data() {
      return {
        isShowDialogs: false
      }
    },
    watch: {
      isshowAlert() {
        this.isShowDialogs = this.isshowAlert;
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['shareLeaderState']),
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SHARELEADERSTATE']),
      closeDialogs() {
        this.SET_SHARELEADERSTATE(false);
      },
    },
    created() {

    },
    mounted() {
      // this.isShowDialogs = this.isshowAlert;
    }
  }
</script>