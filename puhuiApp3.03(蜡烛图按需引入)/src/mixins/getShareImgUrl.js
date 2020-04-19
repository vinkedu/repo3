//执行成功
const ERROR_CODE = "ERRORCODE0000";
//微信分享
import wxapi from '@/commonJS/wxapi'
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

    },
    created() {
        var ua = navigator.userAgent.toLowerCase();
        if ((ua.match(/MicroMessenger/i) == "micromessenger" || this.historyid == 1) && this.isWXApplet != 1) {
            setTimeout(() => {
                //微信模块显示
                //获取产品、活动数据
                let paramesProductActivity = {
                    "functionName": "shareService",
                    "methodName": "getShareFileInfo",
                    originSource: {
                        OS: this.OS,
                        version: "H5_V1.0"
                    },
                    "data": {
                        "pubTime": this.formatDate,
                        "shareUser": this.userid,
                        "userId": this.userid,
                    }
                }
                this.$post(JSON.stringify(paramesProductActivity)).then(result => {
                    if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                        if (this.isWXApplet != 1) {
                            this.dataURL = result.data.newShareHistory.shareImgurl;
                            console.log('微信分享图片',this.dataURL);
                            wxapi.wxRegister(this.wxRegCallback);
                        }
                    }
                });
            }, 250);
        }
    }
}