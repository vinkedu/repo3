<style scoped  lang="less">
  .outer {
    position: relative;
    max-width: 445px;
    .fix-public {
      position: fixed;
      left: 0;
      top: 0;
      height: 54px;
      width: 100%;
      z-index: 0;
      text-align: center;
      z-index: 1;
    }
  }
  .noticePosition {
    margin-bottom: 40px;
  }
</style>

<template>
  <div class="outer"
       v-if="(isShare!=0)&&showshare&&(originType==1||originType==2||originType==3)"
       :class="{'noticePosition':showNoticeBar}">
    <!-- 头部固定联系栏 -->
    <div class="fix-public"
         v-if="showNoticeBar">
      <van-notice-bar :text="publicContent"
                      left-icon="volume-o" />
    </div>
    <v-getGold :originType="originType"
               :showPart="showPart"></v-getGold>
    <v-linkMan :showPart="showPart"></v-linkMan>
    <v-redPackets :isshowAlert="showAlert"
                  :Message="moneyMessage"></v-redPackets>
    <v-orderInformation></v-orderInformation>
    <v-AppletCode></v-AppletCode>
  </div>
</template>
<script>
  import isWeixin from '../../../mixins/isWeixin'
  import orderInformation from './orderInformation'
  import AppletCode from './AppletCode'
  import redPackets from './redPackets'
  import linkMan from './linkMan'
  import getGold from './getGold'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'headLink',
    mixins: [sourceOS, isWeixin],
    components: {
      'v-linkMan': linkMan,
      'v-getGold': getGold,
      'v-redPackets': redPackets,
      'v-AppletCode': AppletCode,
      'v-orderInformation': orderInformation,
    },
    props: {
      //活动或产品ID
      fieldid: {
        type: String,
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //时间戳
      todaytime: {
        type: String
      },
      //类型
      type: {
        type: String
      },
      //小程序
      isWXApplet: {
        type: String
      },
      //来源
      originType: {
        type: String
      },
    },
    data() {
      return {
        isShare:this.$route.params.isShare,
        showPart: false,
        openid: this.$route.params.openid,
        showNoticeBar: true,
        showAlert: false,
        moneyMessage: 0,
        publicContent: ' 每隔一段时间 ， 获得更多金币哦 ！',
        oldScrollTop: 0, //记录上一次滚动结束后的滚动距离
        scrollTop: 0 // 记录当前的滚动距离
      }
    },
    watch: {
      scrollTop(newValue, oldValue) {
        setTimeout(() => {
          if (newValue == window.scrollY) { //延时执行后当newValue等于window.scrollY，代表滚动结束
            this.oldScrollTop = newValue; //每次滚动结束后都要给oldScrollTop赋值
            console.log('滚动结束');
            this.showPart = false;
          }
        }, 1000); //必须使用延时器，否则每次newValue和window.scrollY都相等，无法判断，20ms刚好大于watch的侦听周期，故延时20ms
        if (this.oldScrollTop == oldValue) { //每次滚动开始时oldScrollTop与oldValue相等
          console.log('滚动开始');
          this.showPart = true;
        }
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['moduleB', 'moduleL', 'financeActivityDetail', 'financeProductDetail', 'userInfoname', 'redPacketId']),
    },
    created() {
      if (this.showshare) {
        setTimeout(() => {
          // 用户基本信息获取
          let parame1 = {
            functionName: "redPackageService",
            methodName: "getRedPacket",
            originSource: {
              OS: this.OS,
              version: "H5_V2.0"
            },
            data: {
              openId: this.openid,
              // openId: 'offfy5Kja1wq06NikwP9MVROgN_g',
              redPacketId: this.redPacketId
            }
          };
          this.$post(JSON.stringify(parame1)).then(result => {
            console.log('红包获取参数', parame1);
            console.log('红包获取结果', result);
            if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
              console.log("红包获取======>", result.data.redType);
              if (result.data.redType == 1) {
                this.moneyMessage = result.data.redPacketInfo.money;
                this.showAlert = true;
              } else {
                this.showAlert = false;
              }
            }
          })
        }, 3000);
      }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_USERINFONAME']),
      handleScroll() {
        window.addEventListener('scroll', () => {
          this.scrollTop = window.scrollY;
        })
      }
    },
    mounted() {
      this.handleScroll();
      setTimeout(() => {
        this.showNoticeBar = false;
      }, 30000);
    },
    beforeDestroy() {
      window.removeEventListener('scroll',this.handleFun); //离开当前组件别忘记移除事件监听哦
    }

  }
</script>


