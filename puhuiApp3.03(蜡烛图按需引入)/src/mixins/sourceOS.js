//执行成功
export default {
    data() {
        return {
            OS:'',
        }
    },
    methods: {

    },
    created() {
        var u = navigator.userAgent;
        if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) {// 苹果手机
            this.OS='iOS_0_0_H5';
        } else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            this.OS='Android_0_0_H5'
        }
    }
}