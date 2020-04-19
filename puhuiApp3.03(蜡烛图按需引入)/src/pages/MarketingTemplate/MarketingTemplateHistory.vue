<style lang="less" scoped>
.MarketingTemplateHistory {
  // padding-top: 40px;
  .content{
    padding-top: 40px;
  }
  .historyBox {
    overflow:hidden;
    padding: 13px 7.5px 0;
    &:after {
      content: " ";
      clear: both;
      display: block;
    }
    .historyItem {
      width: 50%;
      float: left;
      padding: 0 7.5px;
      font-size: 12px;
      color: #666666;
      margin-bottom: 10px;
      // & > div {
      //   margin-bottom: 10px;
      // }
      .poster {
        position: relative;
        text-align: center;
        .modalBox {
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.5);

          align-items: center;
          justify-content: center;
          .modalBtn {
            display: block;
            font-size: 14px;
            width: 100px;
            height: 32px;
            line-height: 32px;
            margin-bottom: 10px;
          }
        }
        .show {
          display: flex;
        }
        img {
          width: 166.5px;
          height: 267px;
        }
      }
      .infoBox {
        padding-top: 10px;
        padding-bottom: 5px;
        & > div {
          margin-bottom: 10px;
          padding: 0 5px;
        }
        div:last-child {
          margin-bottom: 0;
        }
      }
      .time {
        color: #999;
      }
    }
    .noMore {
      text-align: center;
      color: #adadad;
      width: 100%;
      clear: both;
    }
  }
  .blank-content {
    .blank-image-box {
      padding-top: 70px;
      text-align: center;
      img {
        width: 110px;
        height: 72px;
      }
    }
    .blank-title {
      padding-top: 16px;
      text-align: center;
      margin: 0 auto;
      height: 44px;
      font-size: 12px;
      font-family: HiraginoSansGB-W3, HiraginoSansGB;
      font-weight: normal;
      color: rgba(153, 153, 153, 1);
      line-height: 18px;
    }
  }
}
</style>
<style lang="less">
.MarketingTemplateHistory {
  .tabsBox {
    padding-bottom: 10px;
    span.van-tab__text {
      font-size: 16px;
    }
    .van-tabs__line {
      bottom: 22px;
    }
  }
}
.confirmStyle {
  border-radius: 5px;
}
</style>
<template>
  <div class="MarketingTemplateHistory">
    <van-nav-bar fixed>
      <div slot="left" @click="onBack">
        <van-icon name="arrow-left" color="#959595" size="24" />
      </div>
      <div slot="title">
        <van-tabs
          v-model="active"
          class="tabsBox"
          background="#fff"
          color="#B90901"
          title-active-color="#B90901"
          line-width="32px"
          line-height="2px"
          :border="false"
          sticky
        >
          <van-tab
            v-for="(item, index) in tabsList"
            :title="item.dictName"
            :key="index"
          >
            
          </van-tab>
        </van-tabs>
      </div>
    </van-nav-bar>
    <div class="content">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div
                  class="historyBox"
                  ref="historyBox"
                  v-if="historyList.length != 0"
                >
                  <div
                    v-for="(item, index) in historyList"
                    :key="index"
                    class="historyItem"
                  >
                    <div class="poster" @click="selectHistoryItem(index)">
                      <img :src="item.image" alt="" />
                      <div
                        @click.stop="closeModel"
                        :class="index == clickItem ? 'modalBox show' : 'modalBox '"
                      >
                        <div>
                          <van-button
                            class="modalBtn"
                            color="rgba(79,143,251,.8)"
                            round
                            type="info"
                            @click.stop="shareHistory(item)"
                            >分享</van-button
                          >
                          <van-button
                            class="modalBtn"
                            color="rgba(79,143,251,.8)"
                            round
                            type="info"
                            @click.stop="deletedHistory(item)"
                            >删除</van-button
                          >
                        </div>
                      </div>
                    </div>
                    <div class="infoBox" style="background-color:#fff">
                      <div class="van-ellipsis">
                        模板名称：{{ item.templateName }}
                      </div>
                      <div class="van-ellipsis">产品名称：{{ item.prdName }}</div>
                      <div class="van-ellipsis time">
                        {{ item.updateTime || " " }}
                      </div>
                    </div>
                  </div>

                  <div class="noMore" v-if="noMore">没有更多</div>
                </div>
                <div class="blank-content" v-else>
                  <div class="blank-image-box">
                    <img src="../../components/common/image/noSearchContent.png" />
                  </div>
                  <div class="blank-title">
                    暂无历史营销模板分享记录
                  </div>
                </div>
              </van-pull-refresh>
            </div>
  </div>
</template>

<script>
import closeLoading from "../../mixins/closeLoading";
import sourceOS from "../../mixins/sourceOS";
import { Dialog } from "vant";
import { mapActions } from "vuex";
const ERROR_CODE = "ERRORCODE0000";
export default {
  name: "MarketingTemplateHistory",
  mixins: [closeLoading, sourceOS],
  components: {},
  props: {},
  data() {
    return {
      timmer: null,
      isLoading: false,
      appUserId: this.$route.params.userid,
      clickItem: null,
      headerHeight:'',
      active: 2,
      pageNo: 1,
      pageSize: 10,
      sumCount: 0,
      tabsList: [
        { dictName: "海报" }
        // { dictName: "H5" },
        // { dictName: "九宫格" }
      ],
      historyList: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapActions(["SET_SELECTEDTEMPIMG"]),
    onBack() {
      // 返回
      this.$router.go(-1);
    },
    onRefresh() {
      //下拉刷新
      this.pageNo = 1;

      this.historyList = [];
      this.noMore = false;
      this.getHistoryList();
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    closeModel() {
      // 关闭模态框
      this.clickItem = -1;
      this.noMore = false;
      console.log(this.clickItem);
    },
    shareHistory(item) {
      // 分享
      console.log("分享", item);
      var imgParame = {
        smallpicUrl: item.image,
        sourceUrl: item.templateSource
      };
      this.SET_SELECTEDTEMPIMG(imgParame);
      this.$router.push({
        path: "/MarketingShare/" + this.userid + "/" + item.id
      });
    },
    selectHistoryItem(index) {
      // 点击选的历史模板
      this.clickItem = index;
    },
    deletedHistory(item) {
      // 删除历史记录
      console.log("删除", item.id);
      Dialog.confirm({
        confirmButtonText: "删除",
        confirmButtonColor: "#DE1716",
        width: "288",
        className: "confirmStyle",
        message: "确定删除该模板？"
      })
        .then(() => {
          let parames = {
            functionName: "marketingTemplateService",
            methodName: "deleteHistoryMarketingTemplate",
            originSource: {
              OS: this.OS,
              version: "h5_v2.0"
            },
            pageNo: 1,
            pageSize: 10,
            data: {
              historyId: item.id
            }
          };
          this.$post(JSON.stringify(parames)).then(result => {
            if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
              this.$toast("删除成功");
              this.pageNo = 1;
              this.historyList = [];
              this.getHistoryList();
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    getMarketingTemplate() {
      let parames = {
        functionName: "newSysDictService",
        methodName: "queryDict",
        originSource: {
          OS: this.OS,
          version: "h5_v2.0"
        },
        data: {
          dictTypeCode: "PRODUCT_TYPE"
        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("result,", result);
        }
      });
    },
    getHistoryList() {
      //获取历史营销模板列表
      if (this.noMore) {
        return;
      }
      let parame = {
        functionName: "marketingTemplateService",
        methodName: "selectHistoryMarketingTemplates",
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        originSource: {
          OS: this.OS,
          version: "h5_v2.0"
        },
        data: {
          appUserId: this.appUserId,
          templateType: "1"
        }
      };
      this.$post(JSON.stringify(parame)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          this.closeModel(); //关闭所有模态框
          this.historyList.push(...result.data.historyList);
          console.log("模板列表", this.historyList);
          if (
            result.data.historyList.length < this.pageSize ||
            this.historyList.length == result.sumCount
          ) {
            // 无更多
            this.noMore = true;
          }
        }
      });
    }
  },
  created() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) != "micromessenger") {
      var u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        //android终端
        Android.hideTab();
      }
    }
    
    let that = this;
    window.onscroll = function() {
      // 监听滚动
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollHeight - (scrollTop + windowHeight) < 200) {
        console.log("200 :", 200);
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          that.pageNo++;
          that.getHistoryList();
        }, 500);
      }
    };
  },

  mounted() {
    this.getHistoryList();
    this.headerHeight = document.querySelector('.header').offsetHeight
  // console.log('object :', document.querySelector('.header').offsetHeight);
    // window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>
