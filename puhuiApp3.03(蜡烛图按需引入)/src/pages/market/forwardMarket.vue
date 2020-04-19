<style lang="less" scoped>
</style>

<template>
  <div class="flex-wrapper">
    <v-markettable :toolTypes="toolTypes"></v-markettable>
  </div>

</template>


<script>
  import closeLoading from '../../mixins/closeLoading'
  export default {
    name: 'forwardMarket',
    mixins:[closeLoading],
    data() {
      return {
        toolTypes: [6]
      }
    },
    methods: {

    },
    created() {
      
    },
    components: {
      'v-markettable': () => import(`../../components/common/marketTable`),
    },
    computed: {

    },

    mounted() {

    }
  }
</script>