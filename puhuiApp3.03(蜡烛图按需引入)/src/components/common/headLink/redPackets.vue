<style lang="less" scoped>
  .redPackets-outer {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
    max-width: 445px;
    .center-box {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      z-index: 999;
      .redPackets-box {
        width: 400px;
        height: 400px;
        animation: bounce 0.8s ease-out;
        text-align: center;
        position: relative;
        .redPackets {
          width: 225px;
          height: 225px;
          background: rgba(0, 0, 0, 0);
        }
        .redPackets-title {
          padding-top: 10px;
          font-size: 18px;
          color: #fff;
        }
        .get-gold {
          position: absolute;
          top: 35%;
          left: 50%;
          -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
          color: #ffda76;
          font-size: 16px;
          .get-gold-number {
            font-size: 25px;
            color: #fff;
          }
        }
      }
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(0);
    }
    60% {
      transform: scale(1.1);
    }
    85% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
<template>
  <div class="redPackets-outer flex-wrapper"
       v-if="isShowDialogs"
       @click="closeDialogs">
    <div class="center-box">
      <div class="redPackets-box">
        <img src="../image/编组@3x.png"
             class="redPackets">
        <div class="redPackets-title">
          恭喜您获得理财经理的红包！
        </div>
        <div class="get-gold">
          获得 <span class="get-gold-number">{{Message}}</span> 金币
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import sourceOS from '../../../mixins/sourceOS'
  import closeLoading from '../../../mixins/closeLoading'
  export default {
    name: 'redPackets',
    mixins: [closeLoading,sourceOS],
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
    computed: {},
    methods: {
      closeDialogs() {
        this.isShowDialogs = false;
      },
    },
    created() {
      
    },
    mounted() { }
  }
</script>