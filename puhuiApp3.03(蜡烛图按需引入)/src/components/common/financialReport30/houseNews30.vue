<style scoped lang="less" src="../../../../public/css/commonArticle.less"></style>
<style scoped  lang="less">
  .hotTextIcon {
    background-image: url("../image/art_tit_ic04@2x.png");
  }
  .bottom-trans-button{
    text-align: center;
    font-size: 13px;
    .bottom-trans-button-title{
      display: flex;
      align-items: center;
      justify-content: center;
      .arrowD {
        height: 5px;
        width: 10px;
        background-image: url("../image/arrow_d@2x.png");
        margin-left: 5px;
      }
      .arrowU {
        height: 5px;
        width: 10px;
        background-image: url("../image/arrow_u@2x.png");
        margin-right: 8px;
        margin-left: 5px;
      }
    }
  }
  .subTitle{
    font-size: 14px;
    color: #000;
    background: #fff;
    padding: 10px 0;
  }
  .no-news-tips{
    text-align: center;
    font-size: 12px;
    color: #999;
  }
  .hotText .hotTextList .hotTextListTitle .netTarminal {
    border-bottom: 0;
  }
  .hotText-30{
    margin: 0;
    .hotTextTitle-30{
      color: #000;
      border-bottom: 0.026667rem solid #ddd;
    }
    .hotTextList-30{
      box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);
      border-radius:4px;
      padding: 13px 10px 0;
      margin-bottom: 8px;
    }
  }
  .margin-bottom-box{
    background: #f7f7f7;
    width: 100%;
    height: 10px;
  }
</style>
<template>
  <div v-if="moduleE">
    <div class="hotText" :class="{'hotText-30':versionStyle==2}">
      <div class="hotTextTitle clearfix" :class="{'hotTextTitle-30':versionStyle==2}">
        <!--<div class="left">
          <i class="hotTextIcon icon"></i>
        </div>-->
        <div class="left">地产聚焦
          <span class="subTitle" v-if="creditCity!=''">{{creditCity | blankplace}}</span>
          <span class="subTitle" v-else> 全国</span>
        </div>
        <div class="right"
             v-if="!isWeixin && historyid!=1">
          <!--<button @click="changeHotText('hot')">换一组</button>-->
          <!--<div class="add-button" @click="addItem" v-if="houseList.length<5">添加</div>-->
        </div>
      </div>
      <div v-for="(item,index) in houseList" :key="index" >
        <div class="hotTextList" :class="{'hotTextList-30':versionStyle==2}"
             v-show="!(index>1&&recommentState)">
          <div @click="checkArticle(item.id,item.title,item)">
            <div>
              <div class="hotTextListTitle">
                <span class="netTarminal">
                  {{item.title}}
                </span>
              </div>
              <!-- <div class="hotTextListAbs">
                <span v-html="item.abstractStr"></span>
              </div> -->
              <!-- <div class="image-box"> 
                <ul class="image_list">
                  <li class="image_item"><img src="https://p3.pstatp.com/list/pgc-image/RtBvEqb1p7ExP7" alt=""></li>
                  <li class="image_item"><img src="https://p3.pstatp.com/list/pgc-image/RtBvEoYEJGgptY" alt=""></li>
                  <li class="image_item"><img src="https://p3.pstatp.com/list/pgc-image/RtBvEnVGF0MfFp" alt=""></li>
                </ul>
              </div> -->
            </div>
            <!-- <div v-else-if="index%2==1">
              <div class="hotTextListTitle_30">
                <span class="netTarminal">
                  {{item.title}}
                </span>
              </div>
              <div class="list_img_holder"> 
                  <img src="https://p3.pstatp.com/list/pgc-image/8074167992aa42a9a4ab0473a067c3d5">
              </div>
            </div> -->
          </div>
          <v-lable30 :lableList='item.tagList' :itemIndex='index' versionStyle="2" :showCloseIcon="false"></v-lable30>
        </div>
      </div>
      <div v-if="houseList==false" class="no-news-tips">暂无新闻</div>
      <div class="bottom-trans-button" @click="recommentState=!recommentState"  v-if="!showshare&&houseList.length>2">
        <div v-if="recommentState" class="bottom-trans-button-title">显示更多新闻<i class="arrowD"></i></div>
        <div v-else class="bottom-trans-button-title">收起<i class="arrowU"></i></div>
      </div>
    </div>
    <div class="margin-bottom-box" v-if="versionStyle==2"></div>
  </div>
</template>
<script>
    import isWeixin from '../../../mixins/isWeixin'
    import _ from "lodash";
    import { Toast } from 'vant';
  import lable30 from '../../../components/common/financialReport30/lable30'
  import sourceOS from '../../../mixins/sourceOS'
  //Vuex公共状态辅助函数
  import { mapState } from 'vuex'
  //Vuex公共状态动作
  import { mapActions } from 'vuex'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    name: 'talkEverythingNews30',
    inject: ["checkArticle", "showModule"],
      provide: function() {
          return {
              //给addTab定义一个getAdd的调用名称
              getDeleteItem: this.deleteItem,
          };
      },
    mixins: [sourceOS,isWeixin],
    components: {
      'v-lable30': lable30,
    },
    props: {
      //时间戳
      todaytime: {
        type: String
      },
      //是否为历史数据
      historyid: {
        type: String
      },
      //小程序
      isWXApplet: {
        type: String
      },
      // 样式版本
      versionStyle:{
        type:String,
        default:'1'
      }
    },
    data() {
      return {
          recommentState:true,
          lableList: [],
          //微信端显示
          isWeixin: false,
          //地产聚焦文章ID
          moduleEId: '',
          userid: this.$route.params.userid,
          place: this.$route.params.place,
          modelType:""
      }
    },
    computed: {
      //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
      //   ...mapState(['moduleG', 'hotMarketList']),
        ...mapState(['moduleE', 'houseList','creditCity']),
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
    created() {
        //判断微信环境
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            this.isWeixin=true;
            //地域新闻
            if (this.place == -1) {
                this.initHouse();
            }
        } else {
            //地域新闻
            if (this.place != -1) {
                this.SET_CITY(this.place.substring(0, this.place.length - 1));
                this.initHouse();
            } else {
                this.initHouse();
            }
        }
    },
    methods: {
      //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
        ...mapActions(['SET_HOUSELIST','SET_CITY']),
        addItem: _.throttle(function () {
          console.log("添加");
            let parame =
                {
                    "functionName": "todayFinanceService",
                    "methodName": "addNewsByModelType",
                    "pageNo": 1,
                    "pageSize": 10,
                    originSource: {
                        OS: this.OS,
                        version: "H5_V3.0"
                    },
                    "data": {
                        "userId": this.userid,
                        "modelType":this.modelType
                    }
                }
            this.$post(JSON.stringify(parame)).then(result => {
                console.log("==>新增参数", parame);
                console.log("==>新增结果", result);
                if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                    Toast("新增成功");
                    this.initHouse();
                }
            });
        }, 1000),
        deleteItem: _.throttle(function (index) {
            console.log("删除")
            let parame =
                {
                    "functionName": "todayFinanceService",
                    "methodName": "deleteNewsById",
                    "pageNo": 1,
                    "pageSize": 10,
                    originSource: {
                        OS: this.OS,
                        version: "H5_V3.0"
                    },
                    "data": {
                        "id":this.houseList[index].id,
                        "userId": this.userid,
                        "modelType":this.modelType
                    }
                }
            this.$post(JSON.stringify(parame)).then(result => {
                console.log("==>删除参数", parame);
                console.log("==>删除结果", result);
                if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                    Toast("删除成功");
                    this.initHouse();
                }
            });
        }, 1000),
      //初始化谈天说地
        initHouse(lat,lng) {
            var parame;
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                parame =
                    {
                        "functionName":"todayFinanceService",                //类型：String  必有字段  备注：无
                        "methodName":"selectEstateFocus",                //类型：String  必有字段  备注：无
                        "pageNo": 1,
                        "pageSize": 10,
                        originSource: {
                            OS: this.OS,
                            version: "H5_V3.0"
                        },
                        "data": {
                            // "userId": this.userid,
                            "lat":lat,
                            "lng":lng,
                            "type":'new',
                            count:2
                        }
                    }
            }else{
                parame =
                    {
                        "functionName":"todayFinanceService",                //类型：String  必有字段  备注：无
                        "methodName":"selectEstateFocus",                //类型：String  必有字段  备注：无
                        "pageNo": 1,
                        "pageSize": 10,
                        originSource: {
                            OS: this.OS,
                            version: "H5_V3.0"
                        },
                        "data": {
                            // "userId": this.userid,
                            city: this.creditCity,
                            count:4
                        }
                    }
            }

        this.$post(JSON.stringify(parame)).then(result => {
            console.log("==>地产聚焦参数", parame);
            console.log("==>地产聚焦结果", result);
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            this.SET_HOUSELIST(result.data.estateFocusList);
            this.modelType=result.data.modelType;
                let getString = '';
                for (var i = 0; i < result.data.estateFocusList.length; i++) {
                  getString += result.data.estateFocusList[i].id + ',';
                }
                this.moduleEId = getString.substring(0, getString.length - 1);
          }
          if (result.data.codeType == '400') {
            this.showModule('A-H-I-J-K');
          }
        });
      },
      //换一组
      /*changeHotText(string) {
        if (string == 'hot') {
          this.initHot();
        }
      },*/
    }
  }
</script>


