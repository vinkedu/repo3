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
    width: 210px;
    height: 220px;
    border-radius: 6.5px;
    position: relative;
    z-index: 0;
    margin-right: 5px;
    .productInfoBox {
      color: #fff;
      .name {
        font-size:14px;
        font-weight:bold;
        color:rgba(0,0,0,1);
        line-height:21px;
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
        font-weight:bold;
        color:rgba(0,0,0,1);
        text-align: center;
        padding-bottom: 10px;
      }
      .tags {
        display: flex;
        span {
          flex: 1;
          height:24px;
          display: inline-block;
          font-size: 10px;
          color: #fff;
          margin-right: 7px;
          margin-top: 7px;
          background:rgba(255,178,54,1);
          border-radius:5px;
          text-align: right;
          padding: 5px;
        }
        span:last-child {
          margin-right: 0;
        }
      }
      .trend {
        display: flex;
        align-items: center;
        margin-top: 20px;
        background:rgba(255,244,224,1);
        border-radius:5px;
        .trend_1 {
          width: 220px;
          height: 103px;
          padding: 23px 20px;
          .trend_1_left {
            margin-top: 4px;
            img {
              width: 38px;
              height: 38px;
            }
          }
          .trend_1_right {
            padding-left: 25px;
            div:first-child{
              color: #999999;
              font-size: 9.4px;
            }
            div:nth-child(2) {
              font-size:27px;
              color:rgba(241,47,38,1);
              line-height:33px;
              font-weight: bold;
              padding-left: 10px;
            }
            div:nth-child(2).greenColor{
              color: #06C3B8
            }
          }
        }
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
            <div class="code">({{ selectedTempProduct.productUnique }})</div>
            <div class="tags">
              <span v-if="selectedTempProduct.thirdItem">
                {{ selectedTempProduct.thirdItem }}</span
              >
              <span>申购费用低</span>
              <span>投资回报高</span>
            </div>
            <div class="trend">
              <div class="trend_1 clearfix">
                <div class="trend_1_left left">
                  <img src="../common/image/fundIcon3.png"/>
                </div>
                <div class="trend_1_right left">
                  <div>近三月涨跌幅</div>
                  <div :class="{'greenColor':selectedTempProduct.secondItem<0}">{{ selectedTempProduct.secondItem | formStockChange | formatNull }}</div>
                </div>
              </div>
            </div>
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
  name: "FundTem3",
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
