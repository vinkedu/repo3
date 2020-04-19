<style lang="less" scoped>
.MarketingShare {
  position: relative;
  .center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -130px;
    width: 260px;
    /*height: 400px;*/
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    .topper-content {
      text-align: center;
      background: #f7f7f7;
      border-radius: 8px 8px 0 0;
      img {
        margin: 15px 0 15px;
        width: 180px;
      }
    }
    .bottom-title {
      .left-icon {
        padding: 20px 0 20px 20px;
        img {
          width: 38px;
          height: 36px;
        }
      }
      .right-content {
        padding: 20px 20px 20px 10px;
        .title {
          font-size: 16px;
          font-weight: 400;
          color: rgba(68, 68, 68, 1);
          line-height: 23px;
        }
        .sub-title {
          font-size: 12px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 17px;
        }
      }
    }
  }
  .topper-box {
    background: rgba(0, 0, 0, 39%);
    height: 310px;
    width: 100%;
    .topper-tab {
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 41px;
      .left-cancel {
        display: flex;
        align-items: center;
        padding: 15px 16px;
        img {
          width: 12px;
          height: 21px;
          margin-right: 10px;
        }
      }
      .right-edit {
        padding: 15px 16px;
      }
    }
    .recoment-to-friend {
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 25px;
      padding: 0 10px;
    }
  }
  .bottom-share-title {
    margin-top: 230px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 110px;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
  .share-to-weixin {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 445px;
    background: #f7f7f7;
    padding: 10px 0 0;
    .share-to-weixin-box {
      background: #f7f7f7;
      padding: 11px 14px 11px 15.5px;
      .share-title {
        font-size: 12px;
      }
      .share-icon {
        width: 196px;
        margin: 0 auto;
        .share-to-app-message-icon,
        .share-to-timing-line-icon {
          text-align: center;
          color: #666;
          font-size: 11px;
          .icon {
            height: 40px;
            width: 40px;
            margin-bottom: 7px;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="MarketingShare">
    <div class="center-content">
      <div class="topper-content">
        <img :src="selectedTempImg.smallpicUrl" />
      </div>
      <div class="bottom-title clearfix">
        <div class="left left-icon">
          <img src="../../components/common/image/warmingIcon.png" />
        </div>
        <div class="left right-content">
          <div class="title">心选分享模板</div>
          <div class="sub-title">打造一款有温度的产品海报</div>
        </div>
      </div>
    </div>
    <div class="topper-box">
      <div class="topper-tab clearfix">
        <div class="left left-cancel" @click="cancelTemplateShare">
          <img src="../../components/common/image/whiteCallBack.png" />取消
        </div>
        <div
          class="right right-edit"
          v-if="isFromMarketingTem"
          @click="continueEdit"
        >
          继续编辑
        </div>
      </div>
      <div class="recoment-to-friend">推荐给朋友</div>
    </div>
    <div class="bottom-share-title" @click="transIcon">
      <img
        src="../../components/common/image/selectedRect.png"
        v-if="selectIconState"
      />
      <img src="../../components/common/image/矩形 2@2x.png" v-else />
      微信、朋友圈分享时自动保存图片到相册
    </div>
    <div class="share-to-weixin">
      <div class="share-to-weixin-box">
        <div class="share-icon clearfix">
          <div class="share-to-app-message-icon left" @click="shareToWeixin(1)">
            <img src="../../components/common/image/微信.png" class="icon" />
            <div class="share-title">转发好友</div>
          </div>
          <div
            class="share-to-timing-line-icon right"
            @click="shareToWeixin(2)"
          >
            <img src="../../components/common/image/朋友圈.png" class="icon" />
            <div class="share-title">转发朋友圈</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Vuex公共状态辅助函数
import { mapState } from "vuex";
//Vuex公共状态动作
import { mapActions } from "vuex";
import isWeixin from "../../mixins/isWeixin";
import _ from "lodash";

const ERROR_CODE = "ERRORCODE0000";
import sourceOS from "../../mixins/sourceOS";
import closeLoading from "../../mixins/closeLoading";

export default {
  name: "MarketingShare",
  mixins: [closeLoading, sourceOS, isWeixin],
  components: {},
  props: {},
  data() {
    return {
      isFromMarketingTem:
        this.$route.params.historyTemplateId === "-1" ? true : false,
      selectIconState: false,
      userid: this.$route.params.userid
    };
  },
  watch: {},
  computed: {
    //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
    ...mapState(["selectedTemp", "selectedTempImg", "selectedTempProduct"])
  },
  methods: {
    //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
    ...mapActions([
      "SET_SELECTEDTEMP",
      "SET_SELECTEDTEMPPRODUCT",
      "SET_SELECTEDPRODUCTQRCODE"
    ]),
    shareToWeixin(index) {
      console.log("分享方式", index);
      if (this.isFromMarketingTem) { // 从模板编辑页面来
        let parames = {
          functionName: "marketingTemplateService",
          methodName: "insertMarketingTemplateUsedRecord",
          pageNo: 1,
          pageSize: 10,
          originSource: {
            OS: this.OS,
            version: "h5_v2.0"
          },
          data: {
            //类型：Object  必有字段  备注：无
            image: this.selectedTempImg.smallpicUrl, //类型：String  必有字段  备注：缩略图url
            appUserId: this.userid, //类型：Number  必有字段  备注：app用户id
            templateName: this.selectedTemp.templateName, //类型：String  必有字段  备注：模板名称
            templateType: this.selectedTemp.templateType, //类型：String  必有字段  备注：模板类型
            prdId:
              "[{prdType:" +
              this.selectedTempProduct.productType +
              "," +
              "productUnique:" +
              this.selectedTempProduct.productUnique +
              " }]", //类型：String  必有字段  备注：产品id，用json字符串：配对 产品类型，产品id，见事例

            prdName: this.selectedTempProduct.productName, //类型：String  必有字段  备注：产品名称，多个以英文逗号拼接
            templateSource: this.selectedTempImg.sourceUrl, //类型：String  必有字段  备注：模板url
            prdType: this.selectedTempProduct.productType, //类型：String  必有字段  备注：模板适用产品类型，若为多个则以英文逗号“,”分隔
            createTime: this.selectedTemp.createTime //类型：Number  必有字段  备注：创建时间时间戳
          }
        };
        console.log("保存营销模板图片参数======>", this.selectedTempImg);
        this.$post(JSON.stringify(parames)).then(result => {
          console.log("保存营销模板图片参数======>", parames);
          console.log("保存营销模板图片结果======>", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
              console.log('分享成功')
          }
        });
        var u = navigator.userAgent;
        var parameObj = {
          index: index, //分享方式，1朋友、2朋友圈
          url: this.selectedTempImg.sourceUrl, //分享图片URL
          selectedSave: this.selectIconState //是否保存图片到相册
        };
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.wxBitmapShare(
            this.selectedTempImg.sourceUrl,
            index,
            this.selectIconState
          );
        } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          window.webkit.messageHandlers.wxBitmapShare.postMessage(
            JSON.stringify(parameObj)
          );
        }
      } else { // 从历史分享来
          let parames = {
          functionName: "marketingTemplateService",
          methodName: "updateHistoryMarketingTemplate",
          pageNo: 1,
          pageSize: 10,
          originSource: {
            OS: this.OS,
            version: "h5_v2.0"
          },
          data: {
           historyId:this.$route.params.historyTemplateId
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            console.log('再次分享成功')
          }
        });
        var u = navigator.userAgent;
        var parameObj = {
          index: index, //分享方式，1朋友、2朋友圈
          url: this.selectedTempImg.sourceUrl, //分享图片URL
          selectedSave: this.selectIconState //是否保存图片到相册
        };
        if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.wxBitmapShare(
            this.selectedTempImg.sourceUrl,
            index,
            this.selectIconState
          );
        } else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          window.webkit.messageHandlers.wxBitmapShare.postMessage(
            JSON.stringify(parameObj)
          );
        }
      }
    },
    transIcon() {
      this.selectIconState = !this.selectIconState;
    },
    cancelTemplateShare() {
      if (this.isFromMarketingTem) {
        this.SET_SELECTEDTEMPPRODUCT(null);
        this.SET_SELECTEDPRODUCTQRCODE("");
        this.$router.push({
          path: "/MarketingTemplate/" + this.userid
        });
      } else {
        this.$router.go(-1);
      }
    },
    continueEdit() {
      this.$router.push({
        path: "/MarketingTemplate/" + this.userid
      });
    }
  },
  created() {
    console.log(this.$route.params.historyTemplateId);
  },
  mounted() {
      var u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
          Android.getImageUrl(this.selectedTempImg.sourceUrl);
      }

  }
};
</script>
