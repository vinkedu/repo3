<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .pane{
    }
</style>
<template>
    <div class="pane clearfix" v-show="show">        
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'pane',
    data(){
        return {
            //控制标签内容的显示与隐藏
            show:true
        }
    },
    //props为来自父组件的变量，实现父组件与子组件通信
    props:{
        //设置pane的标识
        name:{
            type:String
        },
        //label是设置标题
        label:{
            type:String,
            default:''
        }
    },
    methods:{
        updateNav:function(){
            //$parent 父链，通知父组件（tabs）进行更新。
            this.$parent.updateNav();
        }
    },
    //监听label
    watch:{
        //label更新时通知（tabs）父组件更新
        label(){
            this.updateNav();
        }
    },
    mounted(){
        //初始化tabs父组件
        this.updateNav();
    }
}
</script>


