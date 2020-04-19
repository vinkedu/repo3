<style lang="less" scoped>
  .vantPage {
  }
</style>
<template>
  <div class="vantPage">
    <van-button disabled
                type="primary">禁用状态</van-button>
  </div>
</template>

<script>
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'vantPage',
    mixins:[closeLoading],
    components: {},
    props: {},
    data() {
      return {
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() {
    }
  }
</script>