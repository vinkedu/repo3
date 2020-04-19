<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .likeIcon {
    background-image: url("../image/art_tit_ic05@2x.png");
  }
</style>
<template>
  <div>
    <div class="hotText"
         v-if="moduleI">
      <div class="hotTextTitle clearfix">
        <div class="left">
          <i class="likeIcon icon"></i>
        </div>
        <div class="left">猜您喜欢</div>
        <div class="right">
          <button @click="changeHotText('like')">换一组</button>
        </div>
      </div>
      <div class="hotTextList"
           v-for="(item,index) in relevantList"
           :key="index"
           @click="checkArticle(item.id,item.title,relevantList[index])">
        <div class="hotTextListTitle">
          <span class="netTarminal">
            {{item.title}}
          </span>
        </div>
        <div class="hotTextListAbs">
          <span v-html="item.abstractStr"></span>
        </div>
        <v-lable :lableList='item.tagList'></v-lable>
        <!-- <div class="publishTime">{{item.author}} · {{item.pubTime | fomatTime}}</div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import lable from '../../../components/common/financialReport/lable'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'maylike',
    inject: ["checkArticle"],
    mixins: [sourceOS],
    components: {
      'v-lable': lable,
    },
    props: {
      //时间戳
      todaytime: {
        type: String
      },
      //理财经理ID
      userid: {
        type: String,
      },
      //微信用户ID
      openid: {
        type: String,
      },
    },
    data() {
      return {
        //猜您喜欢
        relevantList: [],
        lableList: ['股指普涨股指股指普涨股指股指普涨股指', '指数涨逾指数涨逾指数涨逾指数涨逾指数涨逾指数涨逾'],
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      ...mapState(['moduleI']),
      //时间转化
      formatDate: function () {
        let date = new Date(this.todaytime * 1);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        let s = date.getSeconds();
        s = s < 10 ? "0" + s : s;
        return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
      },
    },
    created() {
      //猜您喜欢
      this.maylike();
    },
    methods: {
      //换一组
      changeHotText(string) {
        if (string == 'like') {
          this.maylike();
        }
      },
      //猜您喜欢文章数据获取
      maylike() {
        let parames = {
          functionName: "appService",
          methodName: "selectGuessLike",
          originSource: {
            OS: this.OS,
            version: "H5_V2.2"
          },
          data: {
            userId: this.userid, // 用户ID
            openId: this.openid, // 微信用户ID
            pubTime: this.formatDate // 当前时间
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE) {
            console.log("猜您喜欢======>", result);
            this.relevantList = result.data.guessLikeList;
          }
        });
      },
    }
  }
</script>


