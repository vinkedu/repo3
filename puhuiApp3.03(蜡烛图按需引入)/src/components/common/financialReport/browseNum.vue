<style scoped  lang="less">
.outer-box{
    padding: 0 15px;
    .eyeBox{
        margin-top: 12.5px;
        .guankanfont {
            font-size: 13px;
            color: #9b9b9b;
            letter-spacing: 1.08px;
        }
        .guankan {
            margin: 0 3px 0 0;
            width: 16px;
            height: 10px;
            background-image: url("../image/eye@2x.png");
            vertical-align: middle;
        }
    }
}
</style>

<template>
    <div class="outer-box">
        <div class="clearfloat">
                <div class="right eyeBox">
                    <i class="guankan"></i>
                    <i class="guankanfont">{{browseNum}}</i>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'browseNum',
    data() {
        return {
        }
    },
    props:{
        //评论数
        browseNum:{
        },
    },
    methods : {
        
    },
	created () {
        
	},
	mounted () {
        
	}
 }
</script>


