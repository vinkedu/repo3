<style scoped lang="less">
.addProduct{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn_box{
        width: 129.5px;
        height: 73px;
        position: relative;
        // border: 1px dotted #fff;
    }
}
    
</style>
<template>
   <div class="addProduct" >
       <div class="btn_box" :style="`top:${top}px;left:${left}px`" @click="gotoProductList">
            <img src="../common/image/addProduct.png" alt="">
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
 import { mapState } from "vuex";
/**
 * top 
 * left
 * 按钮框的偏移量
 */
export default {
   name: 'addProduct',
   props:{
    top: {
      type: String,
      default: 0
    },
    left: {
      type: String,
      default: 0
    },
   },
   data() {
       return {}
   },
  components: {},
  computed:{
       ...mapState(['userInfoObj','selectedTemp'])
  },
  methods:{
      gotoProductList(){
        //   console.log('跳转至产品列表',this.selectedTemp.prdType)
            this.$router.push({ path: "/MarketingProductList/" + this.userInfoObj.id+'/'+this.selectedTemp.prdType})
      }
  }
}
</script>


