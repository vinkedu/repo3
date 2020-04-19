<style scoped  lang="less">
    .contentTop{
        background: #fff;
        padding: 15.5px 14px 12.5px 14px;
        .headerTitle{
            font-size: 21px;
        }
        .weather {
            margin-top: 6.5px;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .wind,
    .thunder,
    .snow,
    .sandstorm,
    .haze,
    .fog,
    .cloudy,
    .sun,
    .rain {
        width: 13px;
        height: 12px;
        margin-left: 2px;
        margin-right: 3px;
        background-size: cover;
        vertical-align: middle;
    }
    .wind {
    background-image: url("../image/wind@2x.png");
    }
    .thunder {
    background-image: url("../image/thunder@2x.png");
    }
    .snow {
    background-image: url("../image/snow@2x.png");
    }
    .sandstorm {
    background-image: url("../image/sandstorm@2x.png");
    }
    .haze {
    background-image: url("../image/haze@2x.png");
    }
    .fog {
    background-image: url("../image/fog@2x.png");
    }
    .cloudy {
    background-image: url("../image/cloudy@2x.png");
    }
    .sun {
    background-image: url("../image/sun@2x.png");
    }
    .rain {
    background-image: url("../image/rain@2x.png");
    }
</style>

<template>
    <div>
        <div class="clearfloat contentTop" v-if="isWeixin">
            <div class="headerTitle left">今日财经</div>
            <span class="right weather">
            {{creditCity|formatCityName}}
            <i class="rain" v-if="weather=='下雨'"></i>
            <i class="sun" v-else-if="weather=='晴天'"></i>
            <i class="cloudy" v-else-if="weather=='多云'"></i>
            <i class="wind" v-else-if="weather=='刮风'"></i>
            <i class="thunder" v-else-if="weather=='雷电'"></i>
            <i class="sandstorm" v-else-if="weather=='沙尘暴'"></i>
            <i class="fog" v-else-if="weather=='雾'"></i>
            <i class="haze" v-else-if="weather=='雾霾'"></i>
            <i class="snow" v-else-if="weather=='雪'"></i>
            <span v-if="low!=''">{{low|lastlimit}}-{{high}}</span>
            </span>
        </div>
    </div>
</template>
<script>
//Vuex公共状态辅助函数
import { mapState } from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
export default {
    name: "weather",
    data() {
        return {
            //微信端显示
            isWeixin:false,
        }
    },
    computed:{
        //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
        ...mapState(['creditCity','weather','low','high']),
    },
    created(){
        //判断微信环境
        var ua = navigator.userAgent.toLowerCase(); 
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            this.isWeixin=true;
        } 
    },
    mounted(){
        //获取天气
        window.getWeather = this.getWeather;
    },
    methods:{
        //获取天气
        getWeather() {
            return this.creditCity;
        },
    }
}
</script>


