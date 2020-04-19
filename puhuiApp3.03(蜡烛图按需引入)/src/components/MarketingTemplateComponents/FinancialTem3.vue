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
     position: relative;
     z-index: 0;
    .productInfoBox {
      height: 300px;
      padding-top: 65px;
      .name{
        font-size:14px;
        font-family:Helvetica;
        color:rgba(67,47,142,1);
        line-height:17px;
        font-weight: bold;
        height: 32px;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .paramesBox{
        align-items: center;
        justify-content: center;
        .first-item{
          padding: 5px 0 0 50px;
          display: flex;
          align-items: center;
        }
        .second-item{
          padding: 30px 0 30px 60px;
        }
        .inline-item{
          display: flex;
          align-items: center;
        }
        .firstItem{
          display: inline-block;
          height:33px;
          font-size:28px;
          font-family:Helvetica;
          color:rgba(255,219,57,1);
          line-height:34px;
          font-weight: bold;
          padding-left: 10px;
          font-style: italic;
        }
        .secondItem,.thirdItem{
          font-size:16px;
          font-family:Helvetica;
          color:rgba(255,219,57,1);
          line-height:19px;
          display: inline-block;
          width: 60px;
          margin-left: 10px;
          font-style: italic;
        }
        .thirdItem{
          width: 95px;
        }
        .paramesBox-number1{
          display: inline-block;
          width:30px;
          height:25px;
          font-size:9.4px;
          font-family:Helvetica;
          color:rgba(255,255,255,0.8);
          line-height:13px;
          text-align: right;
        }
        .paramesBox-number2{
          display: inline-block;
          width:25px;
          height:25px;
          font-size:9.4px;
          font-family:Helvetica;
          color:rgba(255,255,255,0.8);
          line-height:13px;
          text-align: justify;
        }

      }
      .productSign{
        padding: 10px 0 0 20px ;
        width:180px;
        height:57px;
        font-size:11px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:19px;
      }
     
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
              <div class="first-item">
                <div class="paramesBox-number1">业绩比较基准</div>
                <div class="firstItem">{{ selectedTempProduct.firstItem | formatNull }}</div>
              </div>
              <div class="second-item">
                <div class="inline-item">
                  <div class="paramesBox-number2">产品期限</div>
                  <div class="secondItem"><span class="number-italic">{{ selectedTempProduct.secondItem | formatNull }}</span>天</div>
                  <div class="paramesBox-number2">起购金额</div>
                  <div class="thirdItem"><span class="number-italic">{{ selectedTempProduct.thirdItem | fundMoneyFormat }}</span>元</div>
                </div>
              </div>
            </div>
            <div class="productSign">
              “财富人生，你我同行。{{userInfoObj.name}}为您臻选投资产品，给您的财富增值保驾护航！”
            </div>
          </div>
          <!--<div class="riskSign">
            理财有风险，购买需谨慎！
            <br />
            产品业绩比较基准仅作为参考，不代表实际收益
          </div>-->
        </div>
      </div>

      <InfoCardTemplate bgColor='rgb(0,0,255,0)' signColor="#444" ></InfoCardTemplate>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddProduct from "../common/addProduct";
import InfoCardTemplate from "../common/infoCardTemplate";
export default {
  name: "FinancialTem3",
  data() {
    return {};
  },
  components: {
    AddProduct,
    InfoCardTemplate
  },
  computed: {
    ...mapState(["selectedTemp", "selectedTempProduct","userInfoObj"])
  },
  mounted() {
    console.log("1", this.selectedTempProduct == null);
  }
};
</script>
