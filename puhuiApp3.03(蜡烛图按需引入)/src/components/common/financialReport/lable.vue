<style lang="less" scoped>
  .lable {
    .label-list {
      .label-item {
        max-width: 145px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 20px;
        background: rgba(16, 142, 233, 0.1);
        border-radius: 2px;
        color: #108ee9;
        display: inline-block;
        line-height: 23px;
        padding: 0 8px;
        margin: 10px 10px 10px 0;
        font-size: 10px;
      }
    }
  }
</style>
<template>
  <div class="lable">
    <div class="label-list" v-if="lableList!=null">
      <div class="label-item"
           v-for="(item,index) in lableList"
           :key="index">{{item.tagName}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lable',
    mixins: [],
    components: {},
    props: {
        //标签数组
      lableList: {
        type: Array
      },
    },
    data() {
      return {
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
  }
</script>