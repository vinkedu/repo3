//执行成功
export default {
    data() {
        return {
            //分享
            showshare: false,
        }
    },
    methods: {

    },
    created() {
        var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            //在微信中打开
            this.showshare = true;
        }
    }
}