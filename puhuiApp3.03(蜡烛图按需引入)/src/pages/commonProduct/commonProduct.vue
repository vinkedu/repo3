
<style lang="less" scoped>
</style>
<template>
  <div class="flex-wrapper">
    <!-- 头部固定联系栏 -->
    <v-commonManageMoneyProduct :todaytime="this.$route.params.todaytime"
                                :userid="this.$route.params.userid"
                                :fieldid="this.$route.params.fieldid"
                                :openid="this.$route.params.openid"
                                :isShare="this.$route.params.isShare"
                                :fromopenid="this.$route.params.fromopenid"
                                :twosharetime="this.$route.params.twosharetime"
                                :historyid="this.$route.params.historyid"
                                :isWXApplet="this.$route.params.isWXApplet"
                                v-if="productType==1"></v-commonManageMoneyProduct>
    <v-commonFundProduct :todaytime="this.$route.params.todaytime"
                         :userid="this.$route.params.userid"
                         :fieldid="this.$route.params.fieldid"
                         :openid="this.$route.params.openid"
                         :isShare="this.$route.params.isShare"
                         :fromopenid="this.$route.params.fromopenid"
                         :twosharetime="this.$route.params.twosharetime"
                         :historyid="this.$route.params.historyid"
                         :isWXApplet="this.$route.params.isWXApplet"
                         v-else-if="productType==2"></v-commonFundProduct>
    <v-orderInformation></v-orderInformation>
  </div>
</template>
<script>
//Vuex公共状态动作
  import { mapActions } from 'vuex'
  import orderInformation from '../../components/common/headLink/orderInformation'
  import closeLoading from '../../mixins/closeLoading'
  import linkman from '../../components/common/headLink/headLink'
  import commonManageMoneyProduct from '../../components/common/commonProduct/commonManageMoneyProduct'
  import commonFundProduct from '../../components/common/commonProduct/commonFundProduct'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "commonProduct",
    mixins: [closeLoading],
    components: {
      'v-linkman': linkman,
      'v-commonManageMoneyProduct': commonManageMoneyProduct,
      'v-commonFundProduct': commonFundProduct,
      'v-orderInformation': orderInformation,
    },
    data() {
      return {
        productType: this.$route.params.productType,
        userid: this.$route.params.userid,
      }
    },
    created() {
      // 用户基本信息获取
      let parame1 = {
        functionName: "userAppService",
        methodName: "selectUserBasicInfo",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          userId: this.userid
        }
      };
      this.$post(JSON.stringify(parame1)).then(result => {
        console.log('错误日志', result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("理财经理======>", result);
          if (result.data.userInfo) {
            if (result.data.userInfo.orgnCode != null) {
              if (result.data.userInfo.orgnCode==2||result.data.userInfo.orgnCode==3) {
                this.SET_SHOWORGNCODE(true);
              }
            }
            this.SET_USERINFONAME(result.data.userInfo.name);
            if (result.data.userInfo.headPortrait != null) {
              this.SET_HEADPORTRAIT(result.data.userInfo.headPortrait);
            } else {
              this.SET_HEADPORTRAIT("http://47.103.35.52:8181/images/appImages/841862be-32cd-4d38-8cab-d316d0bbc249.jpg");
            }
            if (result.data.userInfo.mobilePhone != null) {
              this.userinfoPhoneName = "tel:" + result.data.userInfo.mobilePhone;
              this.userinfoPhoneNamenone = result.data.userInfo.mobilePhone;
            }
          }
        }
      });
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
      ...mapActions(['SET_SHOWORGNCODE','SET_USERINFONAME','SET_HEADPORTRAIT']),
    }
  }
</script>


