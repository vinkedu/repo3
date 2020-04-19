
<style lang="less" scoped>
</style>
<template>
  <div class="flex-wrapper">
    <!-- 头部固定联系栏 -->
    <v-linkman :userid="this.$route.params.userid"
               type="2"
               originType='myActivity'
               :fieldid="this.$route.params.fieldid"></v-linkman>
    <v-myactivaty :todaytime="this.$route.params.todaytime"
                  :userid="this.$route.params.userid"
                  :fieldid="this.$route.params.fieldid"
                  :openid="this.$route.params.openid"
                  :isShare="this.$route.params.isShare"
                  :fromopenid="this.$route.params.fromopenid"
                  :twosharetime="this.$route.params.twosharetime"
                  :historyid="this.$route.params.historyid"
                  :isWXApplet="this.$route.params.isWXApplet">
    </v-myactivaty>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  import linkman from '../../components/common/headLink/headLink'
  import myactivaty from '../../components/common/myActivaty'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: "myActivaty",
    mixins: [closeLoading],
    components: {
      'v-linkman': linkman,
      'v-myactivaty': myactivaty,
    },
    data() {
      return {
      }
    },
    created() {
    },

  }
</script>


