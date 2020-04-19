<style scoped lang="less">
  .everydaymony {
    font-size: 16px;
    color: #000;
    padding-bottom: 5px;
    height: 50px;
    .name-code-padding-bottom {
        padding: 20px 0 0;
      .productname {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 70%;
        font-size: 16px;
      }
      .showMoreLength{
        max-width: 90%;
      }
      .productcodeBox {
        padding: 3px 3px;
        background: #f7f7f7;
        width: 23%;
        .productcode {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 100%;
          font-size: 10px;
          color: #666;
          border-radius: 3px;
          height: 14px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .rightTypeIcon {
      width: 42px;
      height: 42px;
    }
  }
  .manageProductIcon {
    background: url("./image/manageProductIcon.png") no-repeat;
    background-size: 43px 43px;
    background-position: 100% 0;
  }
  .fundProductIcon {
    background: url("./image/fundProductIcon.png") no-repeat;
    background-size: 43px 43px;
    background-position: 100% 0;
  }
</style>
<template>
  <div class="everydaymony clearfix"
       :class="{manageProductIcon:origin=='product'&&productType==1,fundProductIcon:origin=='product'&&productType==2}">
    <div class="name-code-padding-bottom clearfix">
      <div class="left productname" :class="{showMoreLength:!showCode}">{{name}}</div>
      <div class="left productcodeBox"
           v-show="showCode">
        <div class="productcode">{{code}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "NameCodeLine",
    data() {
      return {};
    },
    props: {
      //名称
      name: {
        type: String
      },
      //编号
      code: {
        type: String
      },
      //显示编号
      showCode: {
        type: Boolean
      },
      origin: {
        type: String
      },
      productType: {
        type: String
      }

    },
    computed: {

    },
    methods: {

    },
    created() { },
    mounted() { }
  };
</script>


