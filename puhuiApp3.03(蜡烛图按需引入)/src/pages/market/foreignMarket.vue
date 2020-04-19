<style lang="less" scoped>
</style>

<template>
  <div class="flex-wrapper">
    <v-markettable :toolTypes="toolTypes"></v-markettable>
  </div>
</template>
<script>
  import closeLoading from '../../mixins/closeLoading'
  //Vuex公共状态动作
  export default {
    name: "foreignMarket",
    mixins: [closeLoading],
    data() {
      return {
        toolTypes: [7]
      };
    },
    components: {
      'v-markettable': () => import(`../../components/common/marketTable`),
    },
    computed: {

    },
    methods: {


    },
    created() {
      
    },
    mounted() {
      console.log('hello from Vue instance!');
    }
  }
</script>
