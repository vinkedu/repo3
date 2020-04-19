//Vuex公共状态辅助函数
import { mapState } from 'vuex'
//Vuex公共状态动作
import { mapActions } from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
import sourceOS from '../mixins/sourceOS'
export default {
    mixins: [sourceOS],
    data() {
        return {
            endLookId: '',
        }
    },
    computed: {
        //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
        ...mapState(['shareLookId']),
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
        //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
        ...mapActions(['SET_SHARELOOKID']),
        setStartTime(index, filedIdParame, isShare) {
            this.nowSameTime = Date.parse(new Date());
            var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                if (this.fromopenid == null || this.fromopenid == '') {
                    var shareUser = this.userid;
                } else {
                    var shareUser = this.fromopenid;
                }
                //查看时间
                let parames = {
                    functionName: "shareService",
                    methodName: "insertShareHistoryLook",
                    originSource: {
                        OS: this.OS,
                        version: "H5_V1.0"
                    },
                    data: {
                        openId: this.openid, //用户openid
                        fileId: filedIdParame, // 活动ID
                        shareUser: shareUser, // 用户ID
                        pubTime: this.formatDate1, // 分享时间，不是查看时间
                        isShare: isShare,
                        startTime: this.transFormatTime(this.nowSameTime),
                        userId: this.userid
                    }
                };
                this.$post(JSON.stringify(parames)).then(result => {
                    console.log("插入分享记录参数======>", parames);
                    console.log("插入分享记录结果======>", result);
                    if (result.errorCode == ERROR_CODE) {
                        this.SET_SHARELOOKID(result.data.shareLookId);
                        console.log('记录文章查看记录开始参数前的结果=====>', result.data.shareLookId)
                        console.log('记录文章查看记录开始参数前的结果得到的参数=====>', this.shareLookId)
                        let parame1 = {
                            "functionName": "productService",
                            "methodName": "addFinanceProductLook",
                            originSource: {
                                OS: this.OS,
                                version: "H5_V1.0"
                            },
                            "data": {
                                userId: this.userid,
                                personType: '',
                                openId: this.openid,
                                functionType: index,
                                city: '',
                                startTime: this.transFormatTime(this.nowSameTime),
                                shareLookId: this.shareLookId
                            }
                        }
                        this.$post(JSON.stringify(parame1)).then(result => {
                            if (result.errorCode == ERROR_CODE && result.data.codeType == '200') {
                                console.log('记录文章查看记录开始参数=====>', parame1)
                                console.log('记录文章查看记录开始结果=====>', result)
                                this.endLookId = result.data.lookId;
                            }
                        });
                    }
                });
            }
        }
    },

}