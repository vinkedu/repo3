<style scoped lang="less">
  .flex-wrapper {
    background-color: #f7f7f7;
    .bank-product {
      text-align: left;
      padding: 15px;
      background: #fff;
      margin: 5px 0;
      font-size: 14px;
      color: #666666;
      letter-spacing: -0.34px;
      .productplace {
        margin-bottom: 5px;
      }
      .text-center {
        text-align: center;
        font-weight: bold;
      }
    }
    .productinfo {
      background: #fff;
      padding: 0 24px;
      .profitpersent {
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: center;
        color: #ef6567;
        .number {
          font-size: 48px;
          color: #ef6567;
          letter-spacing: 0.24px;
          text-align: center;
        }
        .persent {
          padding-bottom: 5px;
          vertical-align: bottom;
          font-size: 24px;
          letter-spacing: 0.24px;
          text-align: center;
          line-height: 67px;
        }
        .font {
          margin-top: 10px;
          color: #c3c3c3;
          font-size: 12px;
          color: #a4aab3;
          letter-spacing: -0.13px;
          text-align: center;
        }
      }
      .hr1px {
        opacity: 0.6;
        color: #9b9b9b;
      }
      .producttype {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .flex1 {
          padding: 10px;
          .top {
            color: #c3c3c3;
            margin-bottom: 5px;
            font-size: 12px;
            color: #a4aab3;
            letter-spacing: -0.13px;
          }
          .bottom {
            font-size: 13px;
            font-size: 16px;
            color: #666666;
            letter-spacing: -0.39px;
          }
        }
        .left {
          text-align: left;
        }
        .center {
          text-align: center;
        }
        .right {
          text-align: right;
        }
      }
    }
    .rmb {
      margin: 10px 5px 10px;
      background: #fff;
      position: relative;
      padding: 5px 18px 0px;

      .productrmb {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .flex1 {
          padding: 10px;
          .top {
            margin-bottom: 5px;
            font-size: 12px;
            color: #a4aab3;
            letter-spacing: -0.29px;
          }
          .bottom {
            font-size: 16px;
            color: #666666;
            letter-spacing: -0.33px;
          }
        }
        .left {
          text-align: left;
        }
        .center {
          text-align: center;
        }
        .right {
          text-align: right;
        }
      }
      .semi-circle1 {
        position: absolute;
        top: 60px;
        left: 0;
        width: 10px;
        height: 20px;
        background-color: #f7f7f7;
        border-radius: 0 10px 10px 0; /* 左上、右上、右下、左下 */
      }
      .semi-circle2 {
        position: absolute;
        top: 60px;
        right: 0;
        width: 10px;
        height: 20px;
        background-color: #f7f7f7;
        border-radius: 10px 0 0 10px; /* 左上、右上、右下、左下 */
      }
      .hr1px {
        background: #f7f7f7;
        opacity: 1;
        height: 2px;
      }
      .productdate {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #a4aab3;
        letter-spacing: -0.34px;
        padding-bottom: 10px;
        .date {
          padding-top: 10px;
        }
      }
    }
    .checkinfo {
      background: #fff;
      margin: 0 6px;
      background: #ffffff;
      border-radius: 8px 8px 0 0;
      padding: 14px 18px 0;
      .develop {
        display: inline-block;
        font-size: 18px;
        color: #666666;
        letter-spacing: -0.43px;
        text-align: center;
        padding-bottom: 10px;
      }
      .right {
        float: right;
      }
      .todown {
        width: 16px;
        height: 12px;
        margin: 10px 5px;
        background-size: cover;
        background-image: url("../../assets/image/downto.jpeg");
      }
      .toup {
        width: 16px;
        height: 12px;
        margin: 10px 5px;
        background-size: cover;
        background-image: url("../../assets/image/upto.jpeg");
      }
    }
    .round {
      border-radius: 8px 8px;
    }
    .openinfo {
      border-radius: 0 0 8px 8px;
      margin: 0 6px;
      background: #fff;
      padding: 0 18px;
      .row:first-child {
        border-top: 1px solid #f7f7f7;
      }
      .row {
        border-bottom: 1px solid #f7f7f7;
        padding: 10px 0;
        color: #c3c3c3;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #929292;
        letter-spacing: -0.34px;
        span:last-child {
          float: right;
          text-align: right;
          i {
            float: right;
          }
        }
      }
    }
  }
</style>


<template>
  <div class="flex-wrapper">
    <v-oldpeoplecard :userid="this.$route.params.userid"></v-oldpeoplecard>
    <!-- 个人详细信息 -->
    <div class="bank-product"
         v-if="codetype!=400">
      <p class="productplace">{{financeProduct.fxjgms}} | {{financeProduct.cpms}}</p>
      <p class="productid">{{financeProduct.cpdjbm}}</p>
    </div>

    <div class="bank-product"
         v-if="codetype==400">
      <p class="text-center">该产品已下架</p>
    </div>
    <div class="productinfo"
         v-if="codetype!=400">
      <div class="profitpersent">
        <i class="number">{{financeProduct.yjkhzdnsyl | lastlimit}}</i>
        <i class="persent">%</i>
        <br>
        <i class="font">预计年化收益率</i>
      </div>
      <hr class="hr1px">
      <div class="producttype">
        <div class="flex1 left">
          <div class="top">产品期限</div>
          <div class="bottom">{{financeProduct.qxms}}</div>
        </div>
        <div class="flex1 center">
          <div class="top">收益类型</div>
          <div class="bottom">{{financeProduct.cpsylxms}}</div>
        </div>
        <div class="flex1 right">
          <div class="top">起购金额</div>
          <div class="bottom">{{financeProduct.qdxsje | formatBankNumber}}元</div>
        </div>
      </div>
    </div>
    <div style="background:#f7f7f7;"
         v-if="codetype!=400">
      <div class="rmb">
        <div class="productrmb">
          <div class="flex1 left">
            <div class="top">产品币种</div>
            <div class="bottom">{{financeProduct.mjbz}}</div>
          </div>
          <div class="flex1 center">
            <div class="top">产品风险等级</div>
            <div class="bottom">{{financeProduct.fxdjms}}</div>
          </div>
          <div class="flex1 right">
            <div class="top">产品开放日</div>
            <div class="bottom">国家工作日</div>
          </div>
        </div>
        <div class="semi-circle1"></div>
        <div class="semi-circle2"></div>
        <hr class="hr1px">
        <div class="productdate">
          <div class="date">产品募集期: {{financeProduct.mjqsrq | format}}-{{financeProduct.mjjsrq | format}}</div>
          <div class="date">产品到期日: {{financeProduct.cpyjzzrq | format}}</div>
        </div>
      </div>
      <div class="checkinfo"
           style="padding-top:14px;"
           :class="{'round':isround === true}">
        <div class="develop">信息概览</div>
        <i class="right todown"
           :class="{'toup':toup === true}"
           @click="showallinfo"></i>
      </div>
      <div class="openinfo"
           v-show="openproductinfo">
        <div class="row">
          <span>产品名称</span>
          <span>{{financeProduct.cpms|ellipsis1}}</span>
        </div>
        <div class="row">
          <span>产品代码</span>
          <span>{{financeProduct.id}}</span>
        </div>
        <div class="row">
          <span>产品币种</span>
          <span>{{financeProduct.mjbz}}</span>
        </div>
        <div class="row">
          <span>预计年化收益率</span>
          <span>{{financeProduct.yjkhzdnsyl}}</span>
        </div>
        <div class="row">
          <span>份额面值</span>
          <span>{{financeProduct.qdxsje|threeNumberAPointer}}</span>
        </div>
        <div class="row">
          <span>产品期限</span>
          <span>{{financeProduct.qxms}}</span>
        </div>
        <div class="row">
          <span>试用对象</span>
          <span>{{financeProduct.tzzlxms}}</span>
        </div>
        <div class="row">
          <span>销售状态</span>
          <span>{{financeProduct.cpztms}}</span>
        </div>
        <div class="row">
          <span>产品类型</span>
          <span>{{financeProduct.tzlxms}}</span>
        </div>
        <div class="row">
          <span>收益类型</span>
          <span>{{financeProduct.cpsylxms}}</span>
        </div>
        <div class="row">
          <span>风险等级</span>
          <span>{{financeProduct.fxdjms}}</span>
        </div>
        <div class="row">
          <span>产品销售期</span>
          <span>{{financeProduct.cpqsrq | format}}-{{financeProduct.cpyjzzrq | format}}</span>
        </div>
        <div class="row">
          <span>产品到期日</span>
          <span>{{financeProduct.cpyjzzrq | format}}</span>
        </div>
        <div class="row clearfix"
             v-show="financeProduct.jyqd!='--'">
          <span>交易渠道</span>
          <span>
            <i>{{financeProduct.jyqd}}</i>
          </span>
        </div>
        <div class="row"
             v-show="financeProduct.jysj!='--'">
          <span>交易时间</span>
          <span>{{financeProduct.jysj}}</span>
        </div>
        <div class="row"
             v-show="financeProduct.gdsj!='--'">
          <span>挂单时间</span>
          <span>{{financeProduct.gdsj}}</span>
        </div>
        <div class="row"
             v-show="financeProduct.yjdqbjdzrq!='--'">
          <span>预计到期本金到账日期</span>
          <span>{{financeProduct.yjdqbjdzrq}}</span>
        </div>
        <div class="row"
             v-show="financeProduct.fxgz!='--'">
          <span>付息规则</span>
          <span>{{financeProduct.fxgz}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import sourceOS from '../../mixins/sourceOS'
  import closeLoading from '../../mixins/closeLoading'
  import oldpeoplecard from '../../components/common/oldPeopleCard'
  const ERROR_CODE = "ERRORCODE0000"; //执行成功
  export default {
    name: "ProductCenter",
    mixins: [closeLoading, sourceOS],
    components: {
      'v-oldpeoplecard': oldpeoplecard,
    },
    data() {
      return {
        //展开变量
        userinfoPhoneName: "",
        issell: false,
        isbuy: false,
        pdfShow: true,
        isround: false,
        isround1: false,
        isround2: false,
        toup: false,
        toup1: false,
        toup2: false,
        openproductinfo: true,
        openproductinfo1: false,
        openproductinfo2: false,
        userid: this.$route.params.userid,
        productid: this.$route.params.productid,
        financeProduct: {},
        codetype: 400
      };
    },
    computed: {

    },
    methods: {
      showallinfo() {
        if (this.openproductinfo == false) {
          this.openproductinfo = true;
          this.toup = true;
          this.isround = false;
        } else {
          this.openproductinfo = false;
          this.toup = false;
          this.isround = true;
        }
      },
      showallinfo1() {
        if (this.openproductinfo1 == false) {
          this.openproductinfo1 = true;
          this.toup1 = true;
          this.isround1 = false;
        } else {
          this.openproductinfo1 = false;
          this.toup1 = false;
          this.isround1 = true;
        }
      },
      showallinfo2() {
        if (this.openproductinfo2 == false) {
          this.openproductinfo2 = true;
          this.toup2 = true;
          this.isround2 = false;
        } else {
          this.openproductinfo2 = false;
          this.toup2 = false;
          this.isround2 = true;
        }
      },
      checkpdf() {
        window.location.href = "http://192.168.4.129:3000/image/pdf/qq.pdf";
      }
    },
    created() {
      let parame2 = {
        functionName: "shareService",
        methodName: "selectFinanceDetailsById",
        originSource: {
          OS: this.OS,
          version: "H5_V1.0"
        },
        data: {
          id: this.productid
        }
      };
      this.$post(JSON.stringify(parame2)).then(result => {
        if (result.errorCode == ERROR_CODE) {
          console.log("123123======>", result);
          this.codetype = result.data.codeType;
          this.financeProduct = result.data.financeProduct;
        }
      });
    },
    mounted() {

    }
  };
</script>

