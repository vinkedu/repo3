//执行成功
const ERROR_CODE = "ERRORCODE0000";
import sourceOS from '../mixins/sourceOS'
export default {
    mixins: [sourceOS],
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
        touchEndTime() {
            this.throttle(this.initEndTime(), 1000);
        },
        //节流器
        throttle(fn, delay) {
            // 记录上一次函数触发的时间
            var lastTime = 0;
            return function () {
                // 记录当前函数触发的时间
                var nowTime = Date.now();
                if (nowTime - lastTime > delay) {
                    // 修正this指向问题
                    fn.call(this);
                    // 同步时间
                    lastTime = nowTime;
                }
            }
        },
        initEndTime() {
            //结束时间
            var lookEndTime = Date.parse(new Date());
            //微信中插入分享记录
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                let parame2 = {
                    "functionName": "productService",
                    "methodName": "updateEndTimeById",
                    originSource: {
                        OS: this.OS,
                        version: "H5_V1.0"
                    },
                    "data": {
                        "id": this.endLookId,
                        'pubTime': this.transFormatTime(lookEndTime)
                    }
                }
                this.$post(JSON.stringify(parame2)).then(result => {
                    console.log("结束记录参数======>", parame2);
                    console.log("结束记录结果======>", result);
                    if (result.errorCode == ERROR_CODE && result.data.codeType == '200') {
                        console.log('查看结束记录成功', result)
                    }
                });
            }
        },
    },

}