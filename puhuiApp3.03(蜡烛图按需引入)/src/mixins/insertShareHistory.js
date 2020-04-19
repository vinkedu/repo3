//执行成功
const ERROR_CODE = "ERRORCODE0000";
//微信分享
import wxapi from '@/commonJS/wxapi'
import sourceOS from '../mixins/sourceOS'
export default {
    mixins: [sourceOS],
    computed: {
        //时间转化
        formatDate1: function () {
            if (this.twosharetime != '' && this.twosharetime != null) {
                let date = new Date(this.twosharetime * 1);
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
            } else {
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
            }
        }
    },
    methods: {
        //转换时间
        transFormatTime(inputTime) {
            let date = new Date(inputTime * 1);
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
        wxShareTimeline(title1, link1, imgUrl1) {
            // 微信自定义分享到朋友圈
            let option = {
                title: title1, // 分享标题, 请自行替换
                link: link1, // 分享链接，根据自身项目决定是否需要split
                imgUrl: imgUrl1, // 分享图标, 请自行替换，需要绝对路径
                trigger: () => {
                    if (this.fromopenid == null || this.fromopenid == '') {
                        var shareUser = this.userid;
                    } else {
                        var shareUser = this.fromopenid;
                    }
                    let parameslook = {
                        "functionName": "shareService",
                        "methodName": "insertShareHistory",
                        originSource: {
                            OS: this.OS,
                            version: "H5_V1.0"
                        },
                        "data": {
                            "pubTime": this.transFormatTime(this.nowDate),
                            "pubUser": this.openid,
                            "shareTime": this.formatDate1,
                            "shareUser": shareUser,
                            "shareUserType": 2,
                            "shareWay": 2,
                            'userId': this.userid
                        }
                    }
                    this.$post(JSON.stringify(parameslook)).then(result => {
                        console.log("插入二次分享记录参数======>", parameslook);
                        console.log("插入二次分享记录结果======>", result);
                    });
                },
                success: () => {

                }
            }
            // 将配置注入通用方法
            wxapi.ShareTimeline(option)
        },
        wxShareAppMessage(title2, desc2, link2, imgUrl2) {
            // 微信自定义分享到朋友
            let option = {
                title: title2, // 分享标题, 请自行替换
                desc: desc2, // 分享描述, 请自行替换
                link: link2, // 分享链接，根据自身项目决定是否需要split
                imgUrl: imgUrl2, // 分享图标, 请自行替换，需要绝对路径
                trigger: () => {
                    if (this.fromopenid == null || this.fromopenid == '') {
                        var shareUser = this.userid;
                    } else {
                        var shareUser = this.fromopenid;
                    }
                    let parameslook = {
                        "functionName": "shareService",
                        "methodName": "insertShareHistory",
                        originSource: {
                            OS: this.OS,
                            version: "H5_V1.0"
                        },
                        "data": {
                            "pubTime": this.transFormatTime(this.nowDate),
                            "pubUser": this.openid,
                            "shareTime": this.formatDate1,
                            "shareUser": shareUser,
                            "shareUserType": 2,
                            "shareWay": 1,
                            'userId': this.userid
                        }
                    }
                    this.$post(JSON.stringify(parameslook)).then(result => {
                        console.log("插入二次分享记录参数======>", parameslook);
                        console.log("插入二次分享记录结果======>", result);
                    });
                },
                success: () => {

                }
            }
            // 将配置注入通用方法
            wxapi.ShareAppMessage(option)
        },
    },

}