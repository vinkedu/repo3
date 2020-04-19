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
  // background-color: #ddd;
  margin: 0 auto;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
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
    width: 243px;
    height: 253px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    z-index: 10;
    .productInfoBox {
      padding-top: 10px;
      text-align: center;
      .name {
        font-size: 16px;
        font-weight: 600;
        color: #000;
        padding: 0 10px;
        max-height: 40px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .thirdItem {
        margin-top: 5px;
        font-size: 12.5px;
        color: #666;

        span {
          padding: 2px 4px;
          border-radius: 2px;
          border: 1px solid rgba(102, 102, 102, 1);
        }
      }
      .firstItem {
        margin-top: 15px;
        span {
          font-size: 10.9px;
          color: #999;
        }
        div {
          font-size: 31.36px;
          color: #e81209;
        }
      }
      .secondItem {
        margin-top: 8px;
        span {
          font-size: 10.9px;
          color: #999;
        }
        div {
          font-size: 23.52px;
          color: #000;
        }
      }
    }
    .riskSign {
      margin-top: 5px;
      text-align: center;
      color: #999;
      font-size: 10px;
    }
  }
  /deep/ .infoCardTemplate{
    box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
    border-radius:0 0 8px 8px;
  }
}
</style>
<template>
  <div class="templateBox">
    <div class="templateContent">
      <!-- :style="'background-image:url(' + selectedTemp.templateSource + ');'" -->
      <img class="imgStyle" :src="selectedTemp.templateSource" alt="" />
      <div class="selectProductContent">
        <AddProduct v-if="selectedTempProduct == null"></AddProduct>
        <div v-else>
          <div class="productInfoBox">
            <div class="name">{{ selectedTempProduct.productName }}</div>
            <div class="thirdItem">
              <span>
                {{ selectedTempProduct.thirdItem | formatNull }}元起购</span
              >
            </div>
            <div class="firstItem">
              <span>业绩比较基准</span>
              <div>{{ selectedTempProduct.firstItem | formatNull }}</div>
            </div>
            <div class="secondItem">
              <span>产品期限</span>
              <div>{{ selectedTempProduct.secondItem | formatNull }}天</div>
            </div>
          </div>
          <div class="riskSign">
            理财有风险，购买需谨慎！
            <br />
            产品业绩比较基准仅作为参考，不代表实际收益
          </div>
        </div>
      </div>

      <InfoCardTemplate signColor="#444"></InfoCardTemplate>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddProduct from "../common/addProduct";
import InfoCardTemplate from "../common/infoCardTemplate";
export default {
  name: "FinancialTem1",
  data() {
    return {};
  },
  components: {
    AddProduct,
    InfoCardTemplate
  },
  computed: {
    ...mapState(["selectedTemp", "selectedTempProduct"])
  },
  mounted() {
    console.log("1", this.selectedTempProduct == null);
  }
};
</script>
