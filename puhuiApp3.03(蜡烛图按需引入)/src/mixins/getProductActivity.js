//Vuex公共状态动作
import { mapActions } from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
import sourceOS from '../mixins/sourceOS'
export default {
    mixins: [sourceOS],
    computed: {
        //时间转化
        formatDate: function () {
            let date = new Date(this.todaytime * 1);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? "0" + MM : MM;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let m = date.getMinutes();
            m = m < 10 ? "0" + m : m;
            let s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
        },
    },
    methods: {
        //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
        ...mapActions(['SET_MODULEB', 'SET_MODULEL', 'SET_FINANCEPRODUCT', 'SET_FINANCEACTIVITY', 'SET_REDPACKETID']),
        //微信模块显示
        WeixinShowPart() {
            //获取产品、活动数据
            let paramesProductActivity = {
                "functionName": "shareService",
                "methodName": "getShareFileInfo",
                originSource: {
                    OS: this.OS,
                    version: "H5_V2.0"
                },
                "data": {
                    "pubTime": this.formatDate,
                    "shareUser": this.userid,
                    "userId": this.userid,
                }
            }
            console.log('微信记录参数', paramesProductActivity);
            this.$post(JSON.stringify(paramesProductActivity)).then(result => {
                console.log('微信记录结果', result.data);
                if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                    if (this.isWXApplet != 1) {
                        this.SET_FINANCEPRODUCT(result.data.newWorldWideList.B);
                        if (result.data.newWorldWideList.B == null) {
                            this.SET_MODULEB(false);
                        } else {
                            this.SET_MODULEB(true);
                        }
                        //我的活动
                        this.SET_FINANCEACTIVITY(result.data.newWorldWideList.L);
                        if (result.data.newWorldWideList.L == null) {
                            this.SET_MODULEL(false);
                        } else {
                            this.SET_MODULEL(true);
                        }
                        // 红包id获取
                        this.SET_REDPACKETID(result.data.newShareHistory.redPacketId);
                        console.log('红包id获取参数得到',result.data.newShareHistory.redPacketId)
                    }
                }
                if (result.data.codeType == '400') {
                    this.showModule('A-H-I-J-K');
                }
            });
        },
        //模块显示
        showModule(str) {
            this.SET_MODULEB(RegExp(/B/).test(str));
            this.SET_MODULEL(RegExp(/L/).test(str));
        },

    },
    created() {
        var ua = navigator.userAgent.toLowerCase();
        if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
            setTimeout(() => {
                //微信模块显示
                this.WeixinShowPart();
            }, 250);
        } else {
            if (this.userid != -1) {
                this.SET_MODULEB(true);
                this.SET_MODULEL(true);
            }
        }
    }
}