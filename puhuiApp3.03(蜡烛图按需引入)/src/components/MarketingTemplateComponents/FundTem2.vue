<style lang="less" scoped>
.templateBox {
  padding: 10px 0;
  box-sizing: border-box;
  /*height: calc(100vh - 227px);*/
  /*overflow-y: scroll;*/
  height: 490px;
}
.templateContent {
  width: 288px;
  height: 470px;
  position: relative;
  // background-color: #ddd;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  .imgStyle {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index:0;
    border-radius: 8px;
    box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
}
  .selectProductContent {
    width: 266px;
    height: 234px;
    /*background-color: #020f3d;*/
    border-radius: 6.5px;
    /*border: 4.5px solid #5082fe;*/
     position: relative;
      z-index: 0;
    .productInfoBox {
      color: #fff;
      padding-right: 50px;
      .name-and-code-box{
        height: 60px;
        .name {
          font-size: 14px;
          margin-top: 20px;
          padding: 0 15px 0 10px;
          text-align: center;
          max-height: 40px;
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
        }
        .code {
          font-size: 14px;
          text-align: center;
        }
      }

      .trend {
        width: 152px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .trend_1 {
          img {
            width: 46px;
            height: 46px;
          }
        }
        .trend_2 {
          padding-left: 14.5px;
          div:first-child {
            color: #fff;
            font-size: 9.4px;
          }
          div:nth-child(2) {
            font-size:27px;
            color:rgba(250,197,87,1);
            line-height:33px;
            font-weight: bold;
          }
        }
      }
      .tags {
        padding-top: 16px;
        display: flex;
        span {
          flex: 1;
          display: inline-block;
          padding: 2px 4px;
          margin-right: 7px;
          margin-top: 7px;
          font-size:10px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(105,23,69,1);
          line-height:14px;
        }
        span:last-child {
          margin-right: 0;
        }
      }
      .describtion {
        padding-top: 13px;
        width:214px;
        height:57px;
        font-size:11px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(254,250,223,0.8);
      }
    }
  }
}
</style>
<template>
  <div class="templateBox">
    <div class="templateContent">
      <img class="imgStyle" :src="selectedTemp.templateSource" alt="" />

      <div class="selectProductContent">
        <AddProduct v-if="selectedTempProduct == null"></AddProduct>
        <div v-else>
          <div class="productInfoBox">
            <div class="name-and-code-box">
              <div class="name">
                {{ selectedTempProduct.productName }}
              </div>
              <div class="code">{{ selectedTempProduct.productUnique }}</div>
            </div>
            <div class="trend">
              <div class="trend_1">
                <img src="../common/image/fundIcon2.png" alt="" />
              </div>
              <div class="trend_2">
                <div class="">近三月涨跌幅</div>
                <div>{{ selectedTempProduct.secondItem | formStockChange | formatNull }}</div>
              </div>
            </div>
            <div class="tags">
              <span v-if="selectedTempProduct.thirdItem">
                {{ selectedTempProduct.thirdItem }}</span
              >
              <span>申购费用低</span>
              <span>投资回报高</span>
            </div>
            <div class="describtion">
              本基金由专业能力强，在其细分行业领域深耕多年、拥有丰富投资经验的基金理财经理进行投资管理。精准把握投资风口，投资潜力巨大。
            </div>
          </div>
        </div>
      </div>
      <InfoCardTemplate bgColor="rgb(0,0,255,0)" signColor="#444" addClass="true"></InfoCardTemplate>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddProduct from "../common/addProduct";
import InfoCardTemplate from "../common/infoCardTemplate";

export default {
  name: "FundTem2",
  data() {
    return {};
  },
  components: {
    AddProduct,
    InfoCardTemplate
  },
  computed: {
    ...mapState(["selectedTemp", "selectedTempProduct"])
  }
};
</script>
