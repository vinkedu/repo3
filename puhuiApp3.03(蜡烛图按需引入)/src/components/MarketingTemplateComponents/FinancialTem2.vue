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
     width: 100%;
     padding: 0 20px;
    // height: 253px;
    // background-color: #fff;
    // border-radius: 5px;
     position: relative;
     z-index: 0;
    .productInfoBox {
      padding-top: 100px;
      .name{
        font-size: 14px;
        color: #fff;
        text-align: center;
        max-height: 40px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .paramesBox{
        padding-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        &>div{
          flex:8;
          text-align: center;
          font-size: 9.4px;
          color: rgba(255, 255, 255, .7)

        }
        .bg_y{
          display: inline-block;
          width: 75px;
          height: 40px;
          line-height: 40px;
          // border-radius: 40px 40px 40px 0px;
          // background-color: #F1C517;
          background: url('../common/image/rectangle.png') no-repeat;
          background-size: 75px 39px;
          margin-bottom: 8px;
        }
        .firstItem{
          font-size: 19.6px;
          color: #D90D08;
           font-weight: 600;
        }
        .secondItem,.thirdItem{
          font-size: 15.68px;
          color: #0D1554;
          font-weight: 600;
        }
      }
      .productSign{
        div{
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 10.98px;
          height: 28.23px;
          line-height: 28.23px;
          background-color: #0072DB;
          margin-top: 10px;
        }
      }
     
    }
    .riskSign {
      margin-top: 10px;
      text-align: center;
      color: #999;
      font-size: 10px;
    }
  }
}
</style>
<template>
  <div class="templateBox">
    <div
      class="templateContent"
    >
      <img class="imgStyle" :src="selectedTemp.templateSource" alt="" />
      <div class="selectProductContent">
        <AddProduct v-if="selectedTempProduct == null"></AddProduct>
        <div v-else>
          <div class="productInfoBox">
            <div class="name">{{ selectedTempProduct.productName }}</div>
            <div class="paramesBox">
              <div>
                <div class="bg_y secondItem">{{ selectedTempProduct.secondItem | formatNull }}天</div>
                <div>产品期限</div>
              </div>
              <div>
                <div class="bg_y firstItem">{{ selectedTempProduct.firstItem | formatNull }}</div>
                <div>业绩比较基准</div>
              </div>
              <div>
                <div class="bg_y thirdItem">{{ selectedTempProduct.thirdItem | formatNull }}元</div>
                <div>起购金额</div>
              </div>
            </div>
            <div class="productSign">
              <div>符合固定收益类资产管理计划</div>
              <div>投资对象中高流动性资产投资比例高</div>
              <!-- <div>固定期限理财产品，且不能提前赎回</div> -->
            </div>
          </div>
          <div class="riskSign">
            理财有风险，购买需谨慎！
            <br />
            产品业绩比较基准仅作为参考，不代表实际收益
          </div>
        </div>
      </div>

      <InfoCardTemplate bgColor='#25286B'></InfoCardTemplate>
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
