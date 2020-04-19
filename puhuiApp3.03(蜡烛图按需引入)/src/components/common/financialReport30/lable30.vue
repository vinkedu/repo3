<style lang="less" scoped>
    .lable {
        min-height: 15px;
        .label-list {
            .label-item {
                max-width: 135px;
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
            .label-item-30{
                height: 16px;
                background:rgba(255,255,255,1);
                border-radius:2px;
                opacity:0.5;
                border:1px solid rgba(231,46,51,1);
                color: rgba(231,46,51,1);
                line-height: 15px;
                font-size: 10px;
            }
            .delete-icon-box {
                // line-height: 27px;
                // height: 43px;
                padding: 8px;
                img{
                    height: 12px;
                    width: 12px;
                }
            }
        }
    }
</style>
<template>
    <div class="lable">
        <div class="label-list clearfix">
            <div class="label-item" :class="{'label-item-30':versionStyle==2}"
                 v-for="(item,index) in lableList"
                 :key="index">{{item.tagName}}
            </div>
            <div class="delete-icon-box right" @click="deleteItem" v-if="showCloseIcon">
                <img src="../image/deleteItemIcon.png"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'lable',
        inject: ["getDeleteItem"],
        mixins: [],
        components: {},
        props: {
            //标签数组
            lableList: {
                type: Array
            },
            itemIndex: {
                type: String
            },
            showCloseIcon:{
                type:Boolean
            },
            // 样式版本
            versionStyle:{
                type:String,
                default:'1'
            }
        },
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {
            deleteItem(){
                this.getDeleteItem(this.itemIndex);
            }
        },
        created() {
        },
        mounted() {
        }
    }
</script>