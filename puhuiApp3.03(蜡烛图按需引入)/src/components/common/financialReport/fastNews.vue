<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .fastText {
    padding-bottom: 0;
    .fastTextTitle {
      margin-bottom: 10px;
    }
    .fastTextListAbs {
      font-size: 13px;
      color: #666;
      line-height: 16px;
    }
    .fastPart {
      height: 48px;
      overflow: hidden;
    }
    .fastButtonBox {
      background: #fff;
      margin-top: 5px;
      .fastButton {
        padding: 0;
        height: 20px;
        width: 70px;
        margin: 0 auto;
        text-align: center;
        font-size: 12px;
        color: #666;
        .arrowD {
          height: 5px;
          width: 10px;
          background-image: url("../image/arrow_d@2x.png");
          vertical-align: middle;
          margin-bottom: 3px;
        }
        .arrowU {
          height: 5px;
          width: 10px;
          background-image: url("../image/arrow_u@2x.png");
          vertical-align: middle;
          margin-bottom: 3px;
        }
      }
    }
  }
  .hotText .hotTextTitle .left .fastIcon {
    background-image: url("../image/art_tit_ic06@2x.png");
    width: 16.75px;
  }
  .refesh {
    height: 12pt;
    width: 11.9pt;
    vertical-align: middle;
    background-image: url("../image/refra@2x.png");
  }
  .imgRotate {
    /*animation (动画) :绑定选择器, 4s完成动画 linear(匀速) infinite(循环) */
    animation: que 1s linear infinite;
  }
  @keyframes que {
    /*以百分比来规定改变发生的时间 也可以通过"from"和"to",等价于0% 和 100%*/
    0% {
      /*rotate(2D旋转) scale(放大或者缩小) translate(移动) skew(翻转)*/
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  .hotText-30{
    margin: 0;
    .hotTextTitle-30{
      color: #000;
      border-bottom: 0.026667rem solid #ddd;
    }
    .hotTextList-30{
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius:4px;
      padding: 13px 10px 0;
      margin-bottom: 8px;
    }
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
</style>

<template>
  <div v-show="moduleJ">
    <div class="hotText fastText" :class="{'hotText-30':versionStyle==2}">
      <div class="hotTextTitle clearfix fastTextTitle" :class="{'hotTextTitle-30':versionStyle==2}">
        <div class="left" v-if="versionStyle!=2">
          <i class="icon fastIcon"></i>
        </div>
        <div class="left">快讯简报</div>
        <div class="right">
          <i class="refesh"
             :class="{imgRotate:imageRotate}"
             @click="changeHotText('fast')"></i>
        </div>
      </div>
      <div class="hotTextList" :class="{'hotTextList-30':versionStyle==2}"
           v-for="(item,index) in fastList"
           :key="index">
        <div v-if="index==0">
          <div class="hotTextListTitle">
            <span class="sourceTime">
              {{item.pubTime | fomatTime1}}
            </span>
          </div>
          <div class="fastTextListAbs"
               :class="{'fastPart':fastState1}">
            <span id="fastButtonBox1"
                  v-html="item.article"></span>
          </div>
          <div class="fastButtonBox"
               v-if="fastButtonShow1">
            <div class="fastButton"
                 @click="checkfast(1)"
                 v-if="fastState1">
              展开 <i class="arrowD"></i>
            </div>
            <div class="fastButton"
                 @click="checkfast(1)"
                 v-else>
              收起 <i class="arrowU"></i>
            </div>
          </div>
        </div>
        <div v-if="index==1">
          <div class="hotTextListTitle">
            <span class="sourceTime">
              {{item.pubTime | fomatTime1}}
            </span>
          </div>
          <div class="fastTextListAbs"
               :class="{'fastPart':fastState2}">
            <span id="fastButtonBox2"
                  v-html="item.article"></span>
          </div>
          <div class="fastButtonBox"
               v-if="fastButtonShow2">
            <div class="fastButton"
                 @click="checkfast(2)"
                 v-if="fastState2">
              展开 <i class="arrowD"></i>
            </div>
            <div class="fastButton"
                 @click="checkfast(2)"
                 v-else>
              收起 <i class="arrowU"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="versionStyle==2"></div>
  </div>
</template>
<script>
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'fastNews',
    mixins: [sourceOS],
    props: {
      // 样式版本
      versionStyle:{
        type:String,
        default:'1'
      }
    },
    data() {
      return {
        //快讯
        fastList: [],
        //快讯按钮显示
        fastButtonShow1: true,
        fastButtonShow2: true,
        //快讯折叠
        fastState1: true,
        fastState2: true,
        //图片旋转
        imageRotate: false,
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['moduleJ']),
    },
    created() {
      //快讯
      this.initFast();
    },
    methods: {
      //初始化快讯
      initFast() {
        let parames = {
          functionName: "appService",
          methodName: "selectNewsFlashByTime",
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          data: {
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE) {
            console.log("======>", result);
          }
          //相关推荐
          this.fastList = result.data.newsFlashList;
          setTimeout(() => {
            this.fastHeightChange()
          }, 50)
        });
      },
      //刷新快讯
      changeHotText(string) {
        if (string == 'fast') {
          this.imageRotate = true;
          setTimeout(() => {
            this.imageRotate = false;
          }, 1000);
          this.initFast();
        }
      },
      //快讯折叠
      checkfast(index) {
        if (index == 1) {
          this.fastState1 = !this.fastState1;
        }
        if (index == 2) {
          this.fastState2 = !this.fastState2;
        }
      },
      //快讯折叠
      fastHeightChange() {
        //获取屏幕宽度(viewport)
        let htmlWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        if (htmlWidth > 750) {
          htmlWidth = 750;
        }
        let pxTorem = htmlWidth / 375 * 48;
        if (document.getElementById("fastButtonBox1").offsetHeight <= pxTorem) {
          this.fastButtonShow1 = false;
        }
        else {
          this.fastButtonShow1 = true;
        }
        this.fastState1 = true;
        if (document.getElementById("fastButtonBox2").offsetHeight <= pxTorem) {
          this.fastButtonShow2 = false;
        }
        else {
          this.fastButtonShow2 = true;
        }
        this.fastState2 = true;
      },
    }
  }
</script>


