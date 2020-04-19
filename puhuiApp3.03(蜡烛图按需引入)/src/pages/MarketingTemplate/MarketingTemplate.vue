<style lang="less" scoped>
.MarketingTemplate {
  background: #fff;
  /deep/ .tabs-bar{
    padding-top: 8px;
  } 
  /deep/ .templateBox{
    padding-top: 18px;
  } 
  .top-share {
    padding-top: 8px;
    height: 40px;
    position: fixed;
    top: 0px;
    width: 100%;
    background: #fff;
    color: #000;
    z-index: 2;
    right: 0;
    width: 80px;
    .share-button {
      font-size: 13px;
      font-weight: 400;
      color: rgba(204, 204, 204, 1);
      padding: 13px 11px 9px;
    }
    .share-button-blackcolor{
      color: #000;
    }
  }
  .marketing-template-content {
    background: #fff;
    width: 100%;
    // margin-top: 40px;
    /*margin-bottom: 187px;*/
  }
  .bottom-banner {
    height: 195px;
    /*position: fixed;*/
    bottom: 0px;
    width: 100%;
    z-index: 11;
    background: #fff;
    box-shadow:0px 2px 8px 0px rgba(51,51,51,0.15);
    .bottom-banner-title {
      margin: 0 19px;
      border-bottom: 1px solid #e5e5e5;
      .left-tab {
        padding: 13px 0 8px;
        .left-tab-item {
          display: inline-block;
          margin-right: 19px;
          color: rgba(119, 119, 119, 1);
        }
        .selectedTab {
          color: rgba(0, 0, 0, 1);
          font-size: 13px;
          font-weight: bold;
        }
      }
      .right-refesh {
        padding: 13px 0 8px;
        display: flex;
        align-items: center;
        width: 65px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        img {
          width: 12px;
          margin-right: 5px;
          margin-top: 0.5px;
        }
      }
    }
    .tab,
    .tab1 {
      margin: 15px 0 15px 20px;
      background: #fff;
      height: 120px;
      width: 327px;
      white-space: nowrap;
      overflow: hidden;
      background: #fff;
      touch-action: none;
      .tab_content,
      .tab_content1 {
        height: 120px;
        .tab_item,
        .tab_item1 {
          display: inline-block;
          width: 76px;
          height: 120px;
          margin: 0 19px 0 0;
          border-radius: 4px;
          img {
            width: 76px;
            height: 122px;
            object-fit: cover;
            border-radius: 4px 4px 6px 6px;
          }
        }
        .tab_item:last-child ,
        .tab_item1:last-child {
          margin: 0;
        }
      }
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
  .button-box-position{
    height: 75px;
  }
}
</style>
<style lang="less">
  @import "~@/style/varibles.less";
  .MarketingTemplate .tabs-tab:first-child {
    margin: 0
  }
  .MarketingTemplate .tabs-tab-active{
    font-size:21px;
    font-weight:600;
    color:@yhRed;
  }
  .MarketingTemplate .tabs-tab-active:after {
    height: 2.5px;
    background:@yhRed;
    width: 21px;
    margin: 0 auto;
  }
  .MarketingTemplate .tabs-tab-active{
    border: 0;
  }
  .MarketingTemplate .yh-button {
    border-radius: 5px;
  }
</style>
<template>
  <div class="MarketingTemplate flex-wrapper">
    <div class="top-share clearfix">
      <!--<div class="right share-button" @click="goToShare" :class="{'share-button-blackcolor':selectedTempProduct}">保存/分享</div>-->
      <div class="right share-button share-button-blackcolor" @click="goToHistory">历史模板</div>
    </div>
    <yh-tabs v-model="activeKey" :topPlaceState="false">
      <yh-pane v-for="(item, index) in tabsList" :label="item.dictName" :name="tabArray[index]" :key="index">
        <div class="canvasImg" ref="imageWrapper">
          <div class="htmlToImage">
            <div class="marketing-template-content">
              <div>
                <!-- <img src="https://www.yihuisoft.com/appImage/happyNewYearEdit1.png"
                                 alt=""> -->
                <!-- <img src="http://192.168.0.106:8882/testMarketingTemplate.jpg" /> -->
                <FundTem3 v-if="selectedTemp.templateName === '基金模板3'"></FundTem3>
                <FundTem2 v-if="selectedTemp.templateName === '基金模板2'"></FundTem2>
                <FinancialTem3 v-if="selectedTemp.templateName === '理财模板3'"></FinancialTem3>
                <FinancialTem2 v-if="selectedTemp.templateName === '理财模板2'"></FinancialTem2>
                <FundTem1 v-if="selectedTemp.templateName === '基金模板'"></FundTem1>
                <FinancialTem1 v-if="selectedTemp.templateName === '理财模板'"></FinancialTem1>
              </div>
            </div>
          </div>
        </div>
      </yh-pane>
    </yh-tabs>
    <div class="bottom-banner">
      <div class="bottom-banner-title clearfix">
        <div class="left left-tab">
          <div
            class="left-tab-item"
            :class="{ selectedTab: bottomIndex == 0 }"
            @click="InitTemplateList('0')"
          >
            全部模板
          </div>
          <div class="left-tab-item" :class="{selectedTab:bottomIndex==1}" @click="InitTemplateList('1')">理财</div>
          <div class="left-tab-item" :class="{selectedTab:bottomIndex==2}" @click="InitTemplateList('2')">基金</div>
        </div>
        <div class="right right-refesh" @click="clearProduct" v-if="selectedTempProduct">
          <img src="../../components/common/image/刷新@3x.png" alt="" />
          重选产品
        </div>
      </div>
      <div class="tab" ref="tab" v-if="lastGameList.length != 0">
        <ul class="tab_content" ref="tabcontent">
          <li
            class="tab_item"
            v-for="(item, index) in lastGameList"
            ref="tabitem"
            :key="index"
          >
            <img :src="item.image" @click="selectTemplate(item, index)" />
          </li>
        </ul>
      </div>
    </div>
    <div class="button-box" v-if="selectedTempProduct">
      <v-button :disabled="false"
                width="80"
                bgColor="#E72E33"
                height="45"
                @click="goToShare">保存分享</v-button>
    </div>
    <div class="button-box-position" v-if="selectedTempProduct"></div>
  </div>
</template>

<script>
    import kvTabs from '../../components/common/tabController/tabs'
    import kvPane from '../../components/common/tabController/pane'
//Vuex公共状态辅助函数
import { mapState } from "vuex";
//Vuex公共状态动作
import { mapActions } from "vuex";
import { Dialog } from "vant";
import isWeixin from "../../mixins/isWeixin";

const ERROR_CODE = "ERRORCODE0000";
import sourceOS from "../../mixins/sourceOS";
import closeLoading from "../../mixins/closeLoading";
import FinancialTem1 from "../../components/MarketingTemplateComponents/FinancialTem1";
    import FinancialTem2 from "../../components/MarketingTemplateComponents/FinancialTem2";
    import FinancialTem3 from "../../components/MarketingTemplateComponents/FinancialTem3";
    import FundTem1 from "../../components/MarketingTemplateComponents/FundTem1";
    import FundTem2 from "../../components/MarketingTemplateComponents/FundTem2";
    import FundTem3 from "../../components/MarketingTemplateComponents/FundTem3";
export default {
  name: "MarketingTemplate",
  mixins: [closeLoading, sourceOS, isWeixin],
  components: {
    FinancialTem1,
    FinancialTem2,
      FinancialTem3,
      FundTem1,
      FundTem2,
      FundTem3,
      'yh-tabs': kvTabs,
      'yh-pane': kvPane,

  },
  props: {},
  data() {
    return {
        tabArray:["1","2","3"],
        //控制标签内容的显示与隐藏
        activeKey: '1',
      userid: this.$route.params.userid,
      selectedTempIndex: 0,
      bottomIndex: "",
      /*tabsList: [{
        dictName: "海报"
      },
      {
        dictName: "H5"
      },
      {
        dictName: "九宫格"
      },],*/
      tabsList: [
        {
          dictName: "海报"
        }
      ],
      //展示具体图片
      lastGameList: [],
      dataURL: "",
      updateDataURL: ""
    };
  },
  watch: {},
  computed: {
    //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
    ...mapState(['userInfoObj',"selectedTemp", "selectedTempProduct"])
  },
  methods: {
    //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
    ...mapActions([
      "SET_USERINFOOBJ",
      "SET_SELECTEDTEMP",
      "SET_SELECTEDTEMPIMG",
      "SET_SELECTEDTEMPPRODUCT",
      "SET_SELECTEDPRODUCTQRCODE"
    ]),
    clearProduct() {
      console.log("重选产品");
      this.SET_SELECTEDTEMPPRODUCT(null);
      this.SET_SELECTEDPRODUCTQRCODE("");
      setTimeout(()=>{
          this.gotoProductList();
      },10)
    },
      gotoProductList(){
          //   console.log('跳转至产品列表',this.selectedTemp.prdType)
          this.$router.push({ path: "/MarketingProductList/" + this.userInfoObj.id+'/'+this.selectedTemp.prdType})
      },
    onSelectTab(index, title) {
      console.log("营销模板", index, title);
    },
    goToShare() {
      console.log("保存/分享");
      if (this.selectedTempProduct) {
        // 是否已选择产品
        this.productNewImage();
      } else {
        this.$toast("请先添加产品");
      }

      // this.uploadTemplate();
    },
    InitTabScroll() {
      if (this.lastGameList) {
        let imgW = this.$refs.tabitem[0].clientWidth;
        console.log(this.$refs.tabitem[0].clientWidth);
        let width = (19 + imgW) * this.lastGameList.length;
        this.$refs.tabcontent.style.width = width + "px";
        this.$nextTick(() => {
          if (!this.scroll1) {
            this.scroll1 = new BScroll(this.$refs.tab, {
              scrollX: true,
              scrollY: false,
              eventPassthrough: "vertical"
            });
          } else {
            this.scroll1.refresh();
          }
        });
      }
    },
    async selectTemplate(item, index) {
      let info = await this.getSelectTemplateInfo(item.id);
        if (this.selectedTempProduct == null) {
        // 未选择产品
        this.SET_SELECTEDTEMP(info);
        this.selectedTempIndex = index;
        console.log("选中模板", index, this.selectedTemp);
      } else {
        // 选择产品后切换模板判断模板类型
        if (this.selectedTempProduct.productType != item.prdType) {
          Dialog.confirm({
            // title: "选择产品提示",
            confirmButtonText: "确定",
            confirmButtonColor: "#DE1716",
            width: "288",
            className: "confirmStyle",
            message: "您选择的产品不适用于该模板，切换后需要重新选择产品"
          })
            .then(() => {
              this.clearProduct();
              this.SET_SELECTEDTEMP(info);
              this.selectedTempIndex = index;
            })
            .catch(() => {
              console.log("取消");
            });
        }else{
           this.SET_SELECTEDTEMP(info);
           this.selectedTempIndex = index;
        }
        console.log("选中模板", index, this.selectedTemp);
      }
    },
    getSelectTemplateInfo(id) {
      // 获得模板详细信息
      return new Promise(resolve => {
        let parames = {
          functionName: "marketingTemplateService",
          methodName: "selectMarketingTemplateInfo",
          pageNo: 1,
          pageSize: 10,
          originSource: {
            OS: this.OS,
            version: "h5_v2.0"
          },
          data: {
            templateId: id
          }
        };
        this.$post(JSON.stringify(parames)).then(result => {
          if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
            // console.log('详情',result.data.templateInfo)
            resolve(result.data.templateInfo);
          }
        });
      });
    },
    InitTemplateList(prdType) {
        if(this.bottomIndex!=prdType){
            this.bottomIndex = prdType;
            var getPrdType="";
            if(prdType==0){
                getPrdType="";
            }else {
                getPrdType=prdType;
            }
            let parames = {
              functionName: "marketingTemplateService",
              methodName: "selectMarketingTemplates",
              pageNo: 1,
              pageSize: 10,
              originSource: {
                OS: this.OS,
                version: "h5_v3.0"
              },
              data: {
                templateType: "1",
                prdType: getPrdType
              }
            };
            this.$post(JSON.stringify(parames)).then(result => {
              console.log("获取营销模板参数======>", parames);
              console.log("获取营销模板结果======>", result);
              if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
                if (result.data.templateList.length != 0) {
                    this.lastGameList=result.data.templateList;
                  /*for (var i = 0; i < result.data.templateList.length; i++) {
                    this.lastGameList.push(result.data.templateList[i]);
                  }*/
                  this.getSelectTemplateInfo(this.lastGameList[0].id).then(res => {

                          this.SET_SELECTEDTEMPPRODUCT(null);
                    this.SET_SELECTEDTEMP(res); // 初始化页面时默认选中列表第一项
                    this.selectedTempName = this.lastGameList[0].templateName;
                  });

                  setTimeout(() => {
                    this.$nextTick(() => {
                      this.InitTabScroll();
                    });
                  }, 250);
                }
              }
            });
        }
    },
    goToHistory() {
      console.log("进入历史模板");
      this.$router.push({ path: "/MarketingTemplateHistory/" + this.userid });
    },
    productNewImage() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.pageYOffset = 0;
      setTimeout(() => {
        this.show = true;
        var getHeight = document.getElementsByClassName(
          "marketing-template-content"
        )[0].clientHeight;
        var width = document.getElementsByClassName(
          "marketing-template-content"
        )[0].offsetWidth; //dom宽
        var height = document.getElementsByClassName(
          "marketing-template-content"
        )[0].offsetHeight; //dom高
        // var scale = 4; //放大倍数
        html2canvas(this.$refs.imageWrapper, {
          allowTaint: true,
          taintTest: false,
          dpi: window.devicePixelRatio * 96,
          width: width,
          heigth: height,
          logging: true,
          backgroundColor: null,
          y: getHeight,
          useCORS: true,
          foreignObjectRendering: true
        }).then(canvas => {
          let dataURL = canvas.toDataURL("image/png", 1.0);
          this.dataURL = dataURL;
          this.updateDataURL = dataURL.replace("data:image/png;base64,", "");
          console.log(this.dataURL);
          this.uploadTemplate();
        });
      }, 50);
    },
    uploadTemplate() {
      let parames = {
        functionName: "marketingTemplateService",
        methodName: "uploadTemplate",
        pageNo: 1,
        pageSize: 10,
        originSource: {
          OS: this.OS,
          version: "h5_v2.0"
        },
        data: {
          userId: this.userid, //类型：String  必有字段  备注：用户id
          file: this.updateDataURL, //类型：String  必有字段  备注：文件的base64字符串
          ext: ".png" //类型：String  必有字段  备注：文件扩展名
        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        console.log("上传营销模板图片参数======>", parames);
        console.log("上传营销模板图片结果======>", result);
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          var imgParame = {
            smallpicUrl: result.data.smallpicUrl,
            sourceUrl: result.data.sourceUrl
          };
          this.SET_SELECTEDTEMPIMG(imgParame);
          this.$router.push({
            path: "/MarketingShare/" + this.userid + "/-1"
          });
        }
      });
    },
    getUserInfo() {
      let parames = {
        functionName: "userAppService",
        methodName: "queryUserInfo",
        pageNo: 1,
        pageSize: 10,
        originSource: {
          OS: this.OS,
          version: "h5_v2.0"
        },
        data: {
          userId: this.userid //类型：String  必有字段  备注：用户id
        }
      };
      this.$post(JSON.stringify(parames)).then(result => {
        if (result.errorCode == ERROR_CODE && result.data.codeType == 200) {
          console.log("result", result);
          let userInfo = result.data.userInfo;
          this.SET_USERINFOOBJ(userInfo);
        }
      });
    }
  },
  created() {
    this.InitTemplateList('0');
  },
  mounted() {
    this.getUserInfo();
  },
  activated() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) != "micromessenger") {
          var u = navigator.userAgent;
          if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
            //android终端
            Android.showTab();
          }
    }
  }
};
</script>
