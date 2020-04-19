<style lang="less" scoped>
    .training-enrolment-item {
        .train-item {
            background: #fff;
            padding-top: 1px;
            box-shadow:0px 2px 8px 0px rgba(51,51,51,0.2);
            border-radius:4px;
            .train-item-title {
                /*margin: 15px;*/
                font-size: 16px;
                font-weight: normal;
                color: rgba(0, 0, 0, 1);
                line-height: 1.5;
                text-align: justify;
                display: flex;
                .title{
                    flex: 1;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2; // 2即为n
                    -webkit-box-orient: vertical;
                    padding: 14px 15px 0;
                    margin-bottom: 14px;
                }
                .sign-up-label {
                    padding-top: 10px;
                    .charge-icon{
                        background:rgba(231,46,51,1);
                    }
                    .free-icon{
                        background:#2EC4B6;
                    }
                    .end-icon{
                        background:rgba(221,221,221,1);
                    }
                    .icon{
                        width:53px;
                        height:22px;
                        border-radius:50px 0px 0px 50px;
                        font-size:12px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:22px;
                        text-align: center;
                    }
                }
            }
            .train-item-content {
                border-top: 1px solid #ddd;
                padding: 10px 0;
                margin: 0 15px;
                .sign-up-detail-title {
                    font-size: 12px;
                    font-weight: normal;
                    color: rgba(153, 153, 153, 1);
                    line-height: 22px;
                    display: flex;
                    align-items: center;
                    .sign-place {
                        padding-right: 10px;
                        padding-top: 3px;
                        img {
                            width: 14px;
                            height: 11px;
                        }
                    }
                    .sign-timer {
                        padding-right: 10px;
                        padding-top: 4px;
                        img {
                            width: 14px;
                            height: 14px;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="training-enrolment-item">
        <div class="train-item">
            <div class="train-item-title word-wrap">
                <div class="title">
                    {{item.name}}
                </div>
                <div class="right sign-up-label">
                    <div v-if="item.status=='进行中'">
                        <div class="charge-icon icon"  v-if="item.chargeType=='收费'">收费</div>
                        <div class="free-icon icon" v-else>免费</div>
                    </div>
                    <div v-else>
                        <div class="end-icon icon">已结束</div>
                    </div>
                </div>
            </div>
            <div class="train-item-content clearfix">
                <div class="left sign-up-detail">
                    <div class="sign-up-detail-title"
                         v-if="item.address"><div class="sign-place">
                        <img src="../../components/common/image/signPlace.png">
                    </div>{{item.address}}</div>
                    <div class="sign-up-detail-title"
                         v-if="item.deadline">报名截止时间：{{item.deadline|fomatTime4}}</div>
                    <div class="sign-up-detail-title">
                        <div class="sign-timer">
                            <img src="../../components/common/image/signTimer.png">
                        </div>
                        <span v-if="item.startTime||item.endTime">{{item.startTime|fomatTime4}} <span v-if="item.endTime">-</span> {{item.endTime|fomatTime4}}
                      </span>
                        <span v-else>不限时间</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "training-enrolment-item",
        mixins: [],
        components: {},
        props: ["item"],
        data() {
            return {}
        },
        watch: {},
        computed: {},
        methods: {},
        created() {
        },
        mounted() {
        }
    }
</script>
    