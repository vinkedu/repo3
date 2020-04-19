<style lang="less" scoped>
@import "~@/style/varibles.less";
.marketing-product-list {
  background: #fff;
  .marketing-top-banner {
    background: #fff;
    height: 44px;
    width: 100%;
    position: fixed;
    top: 0;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    text-align: center;
    line-height: 44px;
    z-index: 1;
    .right-confirm {
      padding: 0 18px;
      height: 44px;
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(185, 9, 1, 1);
      line-height: 44px;
    }
    .left-back {
      height: 44px;
      display: flex;
      align-items: center;
      padding: 0 31px 0 14px;
      img {
        height: 21px;
        width: 12px;
      }
    }
  }
  .search-box {
    position: fixed;
    top: 43px;
    width: 100%;
    z-index: 1;
    .van-search__content {
      background: #fff;
    }
  }
  .sort-box {
    position: fixed;
    top: 95px;
    width: 100%;
    z-index: 1;
    background: #fff;
    .sort-content {
      height: 34px;
      .van-dropdown-menu {
        height: 34px;
        width: 56px;
        float: left;
      }
      .time-sort {
        display: flex;
        align-items: center;
        width: 100px;
        height: 34px;
        line-height: 34px;
        font-size: 12px;
        margin-left: 15px;
        img {
          height: 13px;
          width: 11px;
          margin-left: 3px;
        }
      }
      .right-button{
        margin-top: 2px;
        margin-right: 15px;
      }
    }
  }
  .marketing-content {
    padding-top: 139px;
    padding-bottom: 75px;
    background: #fff;
    .marketing-content-list {
      .marketing-content-item {
        box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
        border-radius:4px; 
        margin: 10px 14px;
        .manageProduct,.fundProduct{
          display: flex;
        }
        .right-add-icon {
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // height: 90px;
          width: 15%;
          position: relative;
          .top-icon-box {
            padding-top: 20px;
            text-align: center;
            min-height: 40px;
            img {
              width: 28px;
              height: 17px;
            }
          }
          .add-image-box {
            text-align: center;
            position: absolute;
            bottom: 18px;
            right: 14px;
            img {
              width: 24px;
              height: 24px;
            }
          }
        }
        .left-detail-introduce {
          padding: 9px 0 6px 10px;
          flex: 1;
          max-width: 85%;
          .detail-title {
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            font-size: 16px;
            font-weight: 400;
            color: rgba(68, 68, 68, 1);
            line-height: 16px;
          }
          .detail-subtitle {
            font-size: 11px;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 20px;
            padding: 3px 0 10px;
            span{
              background: #f7f7f7;
            }
            // height: 30px;
          }
          .detail-box {
            max-width: 100%;
            display: flex;
            box-sizing: border-box;
            .left {
              flex: 1;
              .left-number {
                font-size: 16px;
                font-family: HiraginoSansGB-W3, HiraginoSansGB;
                font-weight: normal;
                color: rgba(51, 51, 51, 1);
                line-height: 16px;
              }
              .left-subtitle {
                font-size: 12px;
                font-family: HiraginoSansGB-W3, HiraginoSansGB;
                font-weight: normal;
                color: rgba(153, 153, 153, 1);
                line-height: 20px;
              }
              .left-red-number {
                color: @yhRed;
                font-size: 20px;
                font-family: HiraginoSansGB-W3, HiraginoSansGB;
                font-weight: normal;
                line-height: 16px;
                font-weight: bold;
              }
            }
            .center-align {
              text-align: center;
            }
            .right-align {
              text-align: right;
            }
          }
        }
      }
      .blank-content {
        .blank-image-box {
          padding-top: 70px;
          text-align: center;
          img {
            width: 160px;
            height: 91px;
          }
        }
        .blank-title {
          padding-top: 16px;
          text-align: justify;
          margin: 0 auto;
          width: 133px;
          height: 44px;
          font-size: 12px;
          font-family: HiraginoSansGB-W3, HiraginoSansGB;
          font-weight: normal;
          color: rgba(153, 153, 153, 1);
          line-height: 18px;
        }
        
      }
    }
    .add-button-box {
          padding-top: 38px;
          text-align: center;
          button {
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            border-radius: 2px;
            color: #fff;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: none;
            margin: 0;
            font-weight: 500;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            padding: 8px 20px;
            font-size: 16px;
            border: 1px solid #b90901;
            background: #fff;
            color: #b90901;
            width: 295px;
            height: 45px;
            border-radius:4px;
            border:1px solid @yhRed;
            color: @yhRed;
          }
          button:active {
            opacity: 0.6;
          }
    }
    .button-box {
      position: fixed;
      bottom: 0;
      text-align: center;
      padding: 11px 0;
      background: #fff;
      bottom: 0;
      width: 100%;
    }
    .loading {
      display: flex;
      .loading-icon {
        padding-top: 10px;
        margin: 0 auto;
      }
    }
    .bottom-line {
      padding-top: 5px;
      color: #999;
      padding-bottom: 15px;
      text-align: center;
    }
    .whiteColor {
      color: #fff;
    }
  }
  /deep/ .van-search .van-cell {
    background: #f7f7f7;
    padding-left: 10px;
  }
}
</style>
<style lang="less">
.marketing-product-list {
  .van-dropdown-menu__title {
    font-size: 12px;
  }
}
</style>
<template>
  <div class="marketing-product-list flex-wrapper">
    <van-nav-bar fixed title="产品列表">
      <div slot="left" @click="back">
        <van-icon name="arrow-left" color="#959595" size="24" />
      </div>
    </van-nav-bar>
    <div class="search-box">
      <form action="/">
        <van-search
          v-model="searchValue"
          show-action
          placeholder="产品名称/代码"
          @search="onSearch"
          background="#fff"
        >
          <div slot="action"></div>
        </van-search>
      </form>
    </div>
    <div class="sort-box">
      <div class="sort-content clearfix">
        <!--<van-dropdown-menu>-->
          <!--<van-dropdown-item v-model="value1" :options="option1" />-->
        <!--</van-dropdown-menu>-->
        <div class="time-sort left" @click="timeSort">
          发布时间排序
          <img
            src="../../components/common/image/sortState0.png"
            v-if="timeSortState == 0"
          />
          <img
            src="../../components/common/image/sortState1.png"
            v-else-if="timeSortState == 1"
          />
          <img
            src="../../components/common/image/sortState2.png"
            v-else-if="timeSortState == 2"
          />
        </div>
        <van-button type="primary" size="small" color="rgb(231, 46, 51)" class="right right-button" plain v-if="productList.length != 0" @click="addProduct">添加产品</van-button>
      </div>
    </div>
    <div class="marketing-content">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        class="page-infinite-list"
      >
        <li class="page-infinite-listitem">
          <div class="marketing-content-list clearfix" >
            <div
              class="marketing-content-item clearfix"
              v-for="(item, index) in productList"
              :key="index"
              @click="transState(index)"
            >
              <div class="manageProduct"  v-if="item.productType == 1">
                <div class="left-detail-introduce">
                  <div class="detail-title">{{ item.productName }}</div>
                  <div class="detail-subtitle">
                    <span>
                      {{ item.productUnique2 }}
                    </span>
                  </div>
                  <div class="detail-box clearfix">
                    <div class="left">
                      <div class="left-red-number">
                        {{ item.firstItem | formatNull }}
                      </div>
                      <div class="left-subtitle">业绩比较基准</div>
                    </div>
                    <div class="left center-align">
                      <div class="left-number">
                        {{ item.secondItem | formatNull
                        }}<span v-if="item.secondItem != null">天</span>
                      </div>
                      <div class="left-subtitle">投资期限</div>
                    </div>
                    <div class="left right-align">
                      <div class="left-number">
                        {{ item.thirdItem | formatNull
                        }}<span v-if="item.thirdItem != null">元</span>
                      </div>
                      <div class="left-subtitle">起购金额</div>
                    </div>
                  </div>
                </div>
                <div class="right-add-icon">
                  <div class="top-icon-box">
                    <img src="../../components/common/image/setTop2@2x.png"  v-if="item.topStatus == 1"/>
                  </div>
                  <div class="add-image-box">
                    <img
                      src="../../components/common/image/selectedAddIcon@2x.png"
                      v-if="nowSelectedIndex == index"
                    />
                    <img
                      v-else
                      src="../../components/common/image/unSelectedAddIcon@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div class="fundProduct" v-else-if="item.productType == 2||item.productType == 3">
                <div class="left-detail-introduce">
                  <div class="detail-title">
                    {{ item.productName | formatNull }}
                  </div>
                  <div class="detail-subtitle">
                    产品代码 {{ item.productUnique }}
                  </div>
                  <div class="detail-box clearfix">
                    <div class="left">
                      <div class="left-red-number">
                        {{ item.firstItem | formatNull }}
                      </div>
                      <div class="left-subtitle">单位净值</div>
                    </div>
                    <div class="left center-align">
                      <div class="left-number">
                        {{ item.secondItem | formatNull }}
                      </div>
                      <div class="left-subtitle">近三月涨跌</div>
                    </div>
                    <div class="left right-align">
                      <div class="left-number">
                        {{ item.thirdItem | formatNull }}
                      </div>
                      <div class="left-subtitle">风险等级</div>
                    </div>
                  </div>
                </div>
                <div class="right-add-icon">
                  <div class="top-icon-box" v-if="item.topStatus == 1">
                    <img src="../../components/common/image/setTop2@2x.png" />
                  </div>
                  <div class="add-image-box">
                    <img
                      src="../../components/common/image/selectedAddIcon@2x.png"
                      v-if="nowSelectedIndex == index"
                    />
                    <img
                      src="../../components/common/image/unSelectedAddIcon@2x.png"
                      v-else
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="blank-content" v-if="productList.length == 0&&showAddState==true">
              <div class="blank-image-box">
                <img src="../../components/common/image/noSearchContent.png" />
              </div>
              <div class="blank-title">
                您暂未添加该类型的产品 请在产品管理功能中添加
              </div>
              <div class="add-button-box">
                <button @click="addProduct">添加产品</button>
              </div>
            </div>
            <div class="button-box" v-else>
              <v-button :disabled="false"
                        width="80"
                        bgColor="#E72E33"
                        height="45"
                        @click="confirm">确定</v-button>
            </div>
          </div>
        </li>
      </ul>
      
      <div v-if="loading && !showEnd" class="loading">
        <div class="loading-icon">
          <mt-spinner
            type="fading-circle"
            color="#ffba00"
            class="loading-icon"
          ></mt-spinner>
          <div>加载中</div>
        </div>
      </div>
      <div
        v-if="showEnd"
        class="bottom-line"
        :class="{ whiteColor: productList.length == 0 }"
      >
        我是有底线的
      </div>
      <!-- <div class="add-button-box" v-if="showEnd && productList.length != 0">
        <button @click="addProduct">添加产品</button>
      </div> -->
    </div>
    <div ref="qrCodeDiv" v-show="fasle"></div>
  </div>
</template>

<script>
import { Dialog } from "vant";
//Vuex公共状态辅助函数
import { mapState } from "vuex";
//Vuex公共状态动作
import { mapActions } from "vuex";
import isWeixin from "../../mixins/isWeixin";
const ERROR_CODE = "ERRORCODE0000";
import sourceOS from "../../mixins/sourceOS";
import closeLoading from "../../mixins/closeLoading";

export default {
  name: "marketing-product-list",
  mixins: [closeLoading, sourceOS, isWeixin],
  components: {},
  props: {},
  data() {
    return {
      showAddState:false,
      timeSortState: 0,
      value1: 0,
      option1: [
        { text: "全部", value: 0 },
        { text: "理财", value: 1 },
        { text: "基金", value: 2 }
      ],
      searchValue: "",
      nowSelectedIndex: -1,
      selectedIcon: false,
      pageIndex: 1,
      pageSize: 10,
      total: 10,
      loading: false,
      showEnd: false,
      productType: this.$route.params.productType,
      userid: this.$route.params.userid,
      productList: []
    };
  },
  watch: {
    // searchValue
    // eslint-disable-next-line no-unused-vars
    value1: function(val) {
      // this.initSearch(this.searchValue, this.value1, this.timeSortState);
    }
  },
  computed: {
    //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
    ...mapState(["selectedTempProduct"]),
    getPages: function() {
      return Math.ceil(this.total / 10);
    }
  },
  methods: {
    ...mapActions(["SET_SELECTEDTEMPPRODUCT", "SET_SELECTEDPRODUCTQRCODE","SET_FINANCEPRODUCT"]),
    addProduct() {
      var u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        // Android.toJumpProduct();
        Android.toJumpProduct(this.value1);
      } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        // window.webkit.messageHandlers.toJumpProduct.postMessage(null);
        window.webkit.messageHandlers.toJumpProduct.postMessage(this.value1);
      }
    },
    timeSort() {
      if (this.timeSortState == 0) {
        this.timeSortState = 1;
      } else if (this.timeSortState == 1) {
        this.timeSortState = 2;
      } else if (this.timeSortState == 2) {
        this.timeSortState = 0;
      }
      this.initSearch(this.searchValue, this.value1, this.timeSortState);
    },
    onSearch() {
      this.initSearch(this.searchValue, this.value1, this.timeSortState);
    },
    back() {
      console.log("返回路由");
      this.$router.go(-1);
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) != "micromessenger") {
        var u = navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          //android终端
          Android.showTab();
        }
      }

    },
    confirm() {
      console.log("确认");
      if (this.nowSelectedIndex == -1) {
        Dialog.confirm({
          title: "选择产品提示",
          message: "你还没有选择产品，确定要退出吗？"
        })
          .then(() => {
            console.log("返回路由");
            // this.$router.push({
            //   path: "/MarketingTemplate/" + this.userid
            // });
            this.$router.go(-1);
          })
          .catch(() => {
            console.log("取消");
          });
      } else {
          var getIndexName1,getIndexName2,getIndexName3,getCode,getId;
          if(this.productList[this.nowSelectedIndex].productType==1){
            getIndexName1="业绩比较基准";
            getIndexName2="投资期限";
            getIndexName3="起购金额";
            getCode=this.productList[this.nowSelectedIndex].productUnique2;
            getId=this.productList[this.nowSelectedIndex].productUnique;
          }else if(this.productList[this.nowSelectedIndex].productType==2){
            getIndexName1="单位净值";
            getIndexName2="近三月涨跌";
            getIndexName3="风险等级";
            getCode=this.productList[this.nowSelectedIndex].productUnique;
            getId=this.productList[this.nowSelectedIndex].productUnique2;
          }
          let getProduct={
            productType:this.productList[this.nowSelectedIndex].productType,
            index1:this.productList[this.nowSelectedIndex].firstItem,
            index2:this.productList[this.nowSelectedIndex].secondItem,
            index3:this.productList[this.nowSelectedIndex].thirdItem,
            indexName1:getIndexName1,
            indexName2:getIndexName2,
            indexName3:getIndexName3,
            name:this.productList[this.nowSelectedIndex].productName,
            id:getId,
            code:getCode
          }
          this.SET_FINANCEPRODUCT(getProduct);
          console.log("选中产品1", getProduct);
          this.$router.go(-1);
      }
    },
    loadMore() {
      console.log(1);
      this.loading = true;
      setTimeout(() => {
        if (this.pageIndex < this.getPages) {
            var getSearchType, getSearchSort;
            if (this.value1 == 0) {
                getSearchType = "";
            } else {
                getSearchType = this.value1;
            }
            if (this.timeSortState == 0) {
                getSearchSort = "desc";
            } else if (this.timeSortState == 1) {
                getSearchSort = "asc";
            } else if (this.timeSortState == 2) {
                getSearchSort = "desc";
            }
          this.pageIndex += 1;
          let parame = {
            functionName: "productManageService",
            methodName: "selectProductByPage",
            securityStr: null,
            pageNo: this.pageIndex,
            pageSize: 10,
            originSource: {
              OS: this.OS,
              version: "h5_v2.0"
            },
            data: {
              userId: this.userid,
              productName: this.searchValue,
              productType: getSearchType,
              timeOrder: getSearchSort
            }
          };
          this.$post(JSON.stringify(parame)).then(result => {
            console.log("营销模板产品接口参数==>", parame);
            console.log("营销模板产品接口结果==>", result);
            this.loading = false;
            if (
              result.errorCode == ERROR_CODE &&
              result.data.codeType != "400"
            ) {
              console.log("营销模板产品接口成功==>", result);
              this.productList = this.productList.concat(result.data.dataList);
              this.total = result.sumCount;
              this.showAddState=true;
            }else{
              this.showAddState=true;
            }
          });
        } else {
          this.loading = false;
          this.showEnd = true;
        }
      }, 1000);
    },
    transState(index) {
      console.log(index, this.productList[index]);
      this.nowSelectedIndex = index;
    },
    initSearch(searchName, searchType, searchSort) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.pageYOffset = 0;
      var getSearchType, getSearchSort;
      if (searchType == 0) {
        getSearchType = "";
      } else {
        getSearchType = searchType;
      }
      if (searchSort == 0) {
        getSearchSort = "desc";
      } else if (searchSort == 1) {
        getSearchSort = "asc";
      } else if (searchSort == 2) {
        getSearchSort = "desc";
      }
      this.nowSelectedIndex=-1;
      this.pageIndex = 1;
      this.showEnd=false;
      this.showAddState=false;
      this.loading=false;
      let parame = {
        functionName: "productManageService",
        methodName: "selectProductByPage",
        securityStr: null,
        pageNo: this.pageIndex,
        pageSize: 10,
        originSource: {
          OS: this.OS,
          version: "h5_v2.0"
        },
        data: {
          userId: this.userid,
          productName: searchName,
          productType: getSearchType,
          timeOrder: getSearchSort
        }
      };
      this.$post(JSON.stringify(parame)).then(result => {
        console.log("营销模板产品接口初始参数==>", parame);
        console.log("营销模板产品接口初始结果==>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType != "400") {
          console.log("营销模板产品接口初始成功==>", result);
          this.productList=[];
          this.productList = result.data.dataList;
          this.total = result.sumCount;
          this.showAddState=true;
          console.log("产品列表",this.productList);
        }else{
          this.showAddState=true;
        }
      });
    },
    initIOSSearch(){
      this.value1=Number(this.productType);
      this.initSearch(this.searchValue, this.value1, this.timeSortState);
    }
  },
  created() {
    this.value1=Number(this.productType);
    this.initSearch(this.searchValue, this.value1, this.timeSortState);
  },
  mounted() {
    window.initSearch=this.initSearch;
    window.initIOSSearch=this.initIOSSearch;
  }
};
</script>
