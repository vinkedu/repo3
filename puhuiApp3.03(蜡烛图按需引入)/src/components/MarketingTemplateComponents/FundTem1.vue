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
    height: 300px;
    background-color: #020f3d;
    border-radius: 6.5px;
    border: 4.5px solid #5082fe;
     position: relative;
      z-index: 0;
    .productInfoBox {
      padding: 18px 23px 0;
      color: #fff;
      .name {
        font-size: 14px;
        max-height: 40px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .code {
        font-size: 12.5px;
        /*margin-top: 5px;*/
        color: rgba(255, 255, 255, 0.7);
      }
      .tags {
        span {
          display: inline-block;
          padding: 2px 4px;
          font-size: 9.4px;
          color: #5082ff;
          border: 1px solid #5082ff;
          margin-right: 7px;
          margin-top: 7px;
        }
      }
      .trend {
        display: flex;
        align-items: center;
        margin-top: 15px;
        // justify-content: center;
        .trend_1 {
          img {
            width: 46px;
            height: 46px;
          }
        }
        .trend_2 {
          padding-left: 14.5px;
          div:first-child {
            color: #999999;
            font-size: 9.4px;
          }
          div:nth-child(2) {
            color: #f12f26;
            font-size: 27.4px;
          }
        }
      }
      .describtion {
        margin-top: 8px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.7);
      }
    }
    .riskSign {
      margin-top: 10px;
      text-align: center;
      color: #fff;
      font-size: 10px;
      div {
        margin-top: 3px;
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
            <div class="name">
              {{ selectedTempProduct.productName }}
            </div>
            <div class="code">{{ selectedTempProduct.productUnique }}</div>
            <div class="tags">
              <span v-if="selectedTempProduct.thirdItem">
                {{ selectedTempProduct.thirdItem }}</span
              >
              <span>投资回报率高 </span>
            </div>
            <div class="trend">
              <div class="trend_1">
                <img src="../common/image/zoushi 2.png" alt="" />
              </div>
              <div class="trend_2">
                <div class="">近三月涨跌幅</div>
                <div>{{ selectedTempProduct.secondItem | formatNull }}</div>
              </div>
            </div>
            <div class="describtion">
              本基金由专业能力强，在其细分行业领域深耕多年、拥有丰富投资经验的基金理财经理进行投资管理。精准把握投资风口，投资潜力巨大。
            </div>
          </div>
          <div class="riskSign">
            <div>基金有风险，购买需谨慎！</div>
            <div>产品涨跌幅仅为参考，不代表实际收益</div>
          </div>
        </div>
      </div>
      <InfoCardTemplate bgColor="#021C6C"></InfoCardTemplate>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddProduct from "../common/addProduct";
import InfoCardTemplate from "../common/infoCardTemplate";

export default {
  name: "FundTem1",
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
