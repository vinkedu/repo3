<style lang="less" scoped>
    .FirstComing-outer {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 1;
        max-width: 445px;
        .center-box {
            position: absolute;
            top: 45%;
            left: 50%;
            -webkit-transform: translate3d(-50%, -50%, 0);
            transform: translate3d(-50%, -50%, 0);
            z-index: 999;
            .FirstComing-box {
                width: 310px;
                height: 437px;
                text-align: center;
                border-radius: 5px;
                background-image: url("../image/firstComingBack.png");
                background-size: 100%;
                .FirstComing-box-bottom {
                    .FirstComing-box-bottom-title {
                        padding-top: 170px;
                        text-align: center;
                        font-size: 25px;
                        font-family: PingFang;
                        font-weight: bold;
                        color: rgba(0, 0, 0, 1);
                        line-height: 70px;
                    }
                    .FirstComing-box-bottom-content{
                        margin: 0 auto;
                        width: 255px;
                        text-align: justify;
                        padding-bottom: 20px;
                        .FirstComing-box-bottom-item{
                            font-size:12px;
                            font-family:PingFang;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                            line-height:25px;
                        }
                    }
                    .close-button{
                        line-height: 1;
                        white-space: nowrap;
                        cursor: pointer;
                        border-radius: 2px;
                        color: #fff;
                        -webkit-appearance: none;
                        text-align: center;
                        box-sizing: border-box;
                        outline: none;
                        margin: 0;
                        font-weight: 500;
                        -moz-user-select: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                        padding: 8px 20px;
                        color: #fff;
                        font-size: 18px;
                        width:253px;
                        height:45px;
                        border: none;
                        border-radius: 24px;
                        box-shadow:0px 0px 8px 0px rgba(116,116,116,0.5);
                        background:rgba(231,46,51,1);
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="FirstComing-outer flex-wrapper"
         v-if="firstComingState"  @touchmove.prevent>
        <div class="center-box">
            <div class="FirstComing-box">
                <div class="FirstComing-box-bottom">
                    <div class="FirstComing-box-bottom-title">
                        温馨提示
                    </div>
                    <div class="FirstComing-box-bottom-content">
                        <div class="FirstComing-box-bottom-item">
                            1. 每个版块我们会为您推荐4-5篇最热资讯；
                        </div>
                        <div class="FirstComing-box-bottom-item">
                            2. 您也可根据自己的需要，调整资讯内容；
                        </div>
                        <div class="FirstComing-box-bottom-item">
                            3. 分享后，基于千人千面模型，每位客户将阅
                        </div>
                        <div class="FirstComing-box-bottom-item">
                            &nbsp&nbsp&nbsp读到其最感兴趣的2篇资讯（头条推荐为1篇）
                        </div>
                    </div>
                    <button class="close-button" @click="closeAppletCode">知道啦</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 二维码
    import QRCode from 'qrcodejs2'
    import sourceOS from '../../../mixins/sourceOS'
    //执行成功
    const ERROR_CODE = "ERRORCODE0000";
    //Vuex公共状态辅助函数
    import {mapState} from 'vuex'
    //Vuex公共状态动作
    import {mapActions} from 'vuex'
    import closeLoading from '../../../mixins/closeLoading'

    export default {
        name: 'FirstComing',
        mixins: [closeLoading, sourceOS],
        components: {},
        props: [],
        data() {
            return {
                myGoldNumber: 0,
                openid: this.$route.params.openid,
                userid: this.$route.params.userid,
            }
        },
        watch: {},
        computed: {
            //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
            ...mapState(['firstComingState']),
            goldTransMoney: function () {
                return (this.myGoldNumber / 100).toFixed(2);
            },
        },
        methods: {
            //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
            ...mapActions(['SET_FIRSTCOMINGSTATE']),
            closeAppletCode() {
                this.SET_FIRSTCOMINGSTATE(false);
            },
        },
        created() {
        },
        mounted() {

        }
    }
</script>