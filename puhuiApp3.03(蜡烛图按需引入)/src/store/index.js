import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        stackObj:{},
        //课程购买状态
        videoPayStatus:0,
        //谈天说地模块
        moduleN: true,
        //谈天说地数据
        talkEverythingList:[],
        //财经百科模块
        moduleM: true,
        //金融市场数据
        financeMarketList:[],
        //财经百科模块
        moduleO: true,
        //财经百科数据
        financeEconomicsList:[],
        CommentArticleIndex:'',
        hotTodayList30:[],
        firstComingState: false,
        selectedTempImg:{},
        //选中产品信息对象
        selectedTempProduct:null,
        QRcode:'',
        selectedTemp:{},
        //用户信息对象
        userInfoObj:{},
        //引导转发
        shareLeaderState: false,
        // 预约产品名
        orderProductName:'',
        //报名框状态
        signUpState: '',
        //产品代码
        productCode: '',
        // 产品类型
        productType: '',
        // 机构号
        showOrgnCode: false,
        //红包id
        redPacketId: '',
        isAppletCode: false,
        // 预约信息显示
        showOrder:false,
        //课程详情
        courseInfo:{},
        //城市名
        creditCity: '',
        //分享查看ID
        shareLookId: '',
        //分享文章ID
        shareArticleId: '',
        //机构号
        orgnCode: '',
        //地域新闻模块
        moduleH: true,
        //行情概览模块
        moduleK: true,
        //快讯概览模块
        moduleJ: true,
        //猜您喜欢模块
        moduleI: true,
        //宏观经济数据
        economyList: [],
        //宏观经济模块
        moduleD: true,
        //地产聚焦模块
        moduleE: true,
        //地产聚焦数据
        houseList: [],
        //股市盘点模块
        moduleF: true,
        //股市盘点数据
        stockList: [],
        //市场热闻模块
        moduleG: true,
        //市场热文数据
        hotMarketList: [],
        //天气
        weather: '',
        //最高气温
        high: "",
        //最低气温
        low: "",
        //头条推荐
        hotTodayRes: {},
        //用户头像
        headPortrait: "",
        //理财顾问说
        commentary: '',
        //删除文章编号
        deleteproductid: "",
        //头条推荐模块
        moduleC: true,
        //产品模块
        moduleB: false,
        //用户名
        userInfoname: '',
        //活动推荐 
        moduleL: false,
        //产品详情
        financeProductDetail:{},
        //活动详情
        financeActivityDetail: {},
        //今日财经产品ID
        financeProductId:0,
        //今日财经活动ID
        financeActivityId:0,
        //换肤
        skin:1,
        //产品数据状态
        productDataState:false,
        //活动数据状态
        activityDataState:false,
        //晚间播报数据
        newBroadCast:{},
        //配置建议数据
        newRiskAllocationList: [],
        //风险偏好数据
        riskPreferenceList:[],
        //市场竞争百分比
        marketPercent:'',
        //活动分享图片路径
        shareActivityUrl:'',
        //产品分享图片路径
        shareProductUrl:'',
    },
    mutations: {
        "SET_STACKOBJ":function(state,stackObj){
            state.stackObj  = stackObj;
        },
        "SET_VIDEOPAYSTATUS":function(state,videoPayStatus){
            state.videoPayStatus  = videoPayStatus
        },
        "SET_MODULEN":function(state,moduleN){
            state.moduleN  = moduleN
        },
        "SET_TALKEVERYTHINGLIST":function(state,talkEverythingList){
            state.talkEverythingList  = talkEverythingList
        },
        "SET_MODULEM":function(state,moduleM){
            state.moduleM  = moduleM
        },
        "SET_FINANCEMARKETLIST":function(state,financeMarketList){
            state.financeMarketList  = financeMarketList
        },
        "SET_MODULEO":function(state,moduleO){
            state.moduleO  = moduleO
        },
        "SET_FINANCEECONOMICSLIST":function(state,financeEconomicsList){
            state.financeEconomicsList  = financeEconomicsList
        },
        "SET_COMMENTARTICLEINDEX":function(state,CommentArticleIndex){
            state.CommentArticleIndex  = CommentArticleIndex
        },
        "SET_HOTTODAYLIST30":function(state,hotTodayList30){
            state.hotTodayList30  = hotTodayList30
        },
        "SET_FIRSTCOMINGSTATE":function(state,firstComingState){
            state.firstComingState  = firstComingState
        },
        "SET_USERINFOOBJ":function(state,userInfoObj){
            state.userInfoObj  = userInfoObj
        },
        "SET_SELECTEDTEMPIMG": function (state, selectedTempImg) {
            state.selectedTempImg = selectedTempImg;
        },
        "SET_SELECTEDTEMPPRODUCT": function (state, selectedTempProduct) {
            state.selectedTempProduct = selectedTempProduct;
        },
        "SET_SELECTEDPRODUCTQRCODE": function (state, QRcode) {
            state.QRcode = QRcode;
        },
        "SET_SELECTEDTEMP": function (state, selectedTemp) {
            state.selectedTemp = selectedTemp;
        },
        "SET_SHARELEADERSTATE": function (state, shareLeaderState) {
            state.shareLeaderState = shareLeaderState;
        },
        "SET_ORDERPRODUCTNAME": function(state, orderProductName) {
            state.orderProductName = orderProductName;
        },
        "SET_SIGNUPSTATE": function(state, signUpState) {
            state.signUpState = signUpState;
        },
        "SET_PRODUCTCODE": function(state, productCode) {
            state.productCode = productCode;
        },
        "SET_PRODUCTTYPE": function(state, productType) {
            state.productType = productType;
        },
        "SET_SHOWORGNCODE": function(state, showOrgnCode) {
            state.showOrgnCode = showOrgnCode;
        },
        "SET_REDPACKETID": function(state, redPacketId) {
            state.redPacketId = redPacketId;
        },
        "SET_APPLETCODE": function(state, isAppletCode) {
            state.isAppletCode = isAppletCode;
        },
        "SET_SHOWORDER": function(state, showOrder) {
            state.showOrder = showOrder;
        },
        "SET_COURSEINFO": function(state, courseInfo) {
            state.courseInfo = courseInfo;
        },
        "SET_CITY": function(state, city) {
            state.creditCity = city;
        },
        "SET_SHARELOOKID": function(state, shareLookId) {
            state.shareLookId = shareLookId;
        },
        "SET_SHAREARTICLEID": function(state, shareArticleId) {
            state.shareArticleId = shareArticleId;
        },
        "SET_ORGNCODE": function(state, orgnCode) {
            state.orgnCode = orgnCode;
        },
        "SET_MODULEH": function(state, moduleH) {
            state.moduleH = moduleH;
        },
        "SET_MODULEK": function(state, moduleK) {
            state.moduleK = moduleK;
        },
        "SET_MODULEJ": function(state, moduleJ) {
            state.moduleJ = moduleJ;
        },
        "SET_MODULEI": function(state, moduleI) {
            state.moduleI = moduleI;
        },
        "SET_ECONOMYLIST": function(state, economyList) {
            state.economyList = economyList;
        },
        "SET_MODULED": function(state, moduleD) {
            state.moduleD = moduleD;
        },
        "SET_MODULEE": function(state, moduleE) {
            state.moduleE = moduleE;
        },
        "SET_HOUSELIST": function(state, houseList) {
            state.houseList = houseList;
        },
        "SET_MODULEF": function(state, moduleF) {
            state.moduleF = moduleF;
        },
        "SET_STOCKLIST": function(state, stockList) {
            state.stockList = stockList;
        },
        "SET_MODULEG": function(state, moduleG) {
            state.moduleG = moduleG;
        },
        "SET_HOTMARKETLIST": function(state, hotMarketList) {
            state.hotMarketList = hotMarketList;
        },
        "SET_WEATHER": function(state, weather) {
            state.weather = weather;
        },
        "SET_HIGH": function(state, high) {
            state.high = high;
        },
        "SET_LOW": function(state, low) {
            state.low = low;
        },
        "SET_HOTTODAYRES": function(state, hotTodayRes) {
            state.hotTodayRes = hotTodayRes;
        },
        "SET_HEADPORTRAIT": function(state, headPortrait) {
            state.headPortrait = headPortrait;
        },
        "SET_COMMENTARY": function(state, commentary) {
            state.commentary = commentary;
        },
        "SET_DELETEPRODUCTID": function(state, deleteproductid) {
            state.deleteproductid = deleteproductid;
        },
        "SET_MODULEC": function(state, moduleC) {
            state.moduleC = moduleC;
        },
        "SET_MODULEB": function(state, moduleB) {
            state.moduleB = moduleB;
        },
        "SET_USERINFONAME": function(state, userInfoname) {
            state.userInfoname = userInfoname;
        },
        "SET_MODULEL": function(state, moduleL) {
            state.moduleL = moduleL;
        },
        "SET_FINANCEPRODUCT": function (state, financeProductDetail) {
            state.financeProductDetail = financeProductDetail;
        },
        "SET_FINANCEACTIVITY": function (state, financeActivityDetail) {
            state.financeActivityDetail = financeActivityDetail;
        }, 
        "SET_FINANCEPRODUCTID": function (state, financeProductId) {
            state.financeProductId = financeProductId;
        },
        "SET_FINANCEACTIVITYID": function (state, financeActivityId) {
            state.financeActivityId = financeActivityId;
        },
        "SET_SKIN": function (state, skin) {
            state.skin = skin;
        },
        "CHANGE_SKIN": function (state) {
            if(state.skin<3){
                state.skin++;
            }
            else if(state.skin==3){
                state.skin=1;
            }
        },
        "SET_PRODUCTDATASTATE": function (state) {
            state.productDataState = true;
        },
        "SET_ACTIVITYDATASTATE": function (state) {
            state.activityDataState = true;
        },
        "SET_NEWBROADCAST": function (state, newBroadCast) {
            state.newBroadCast = newBroadCast;
        },
        "SET_NEWRISKALLOCATIONLIST": function (state, newRiskAllocationList) {
            state.newRiskAllocationList = newRiskAllocationList;
        },
        "SET_RISKPREFERENCELIST": function (state, riskPreferenceList) {
            state.riskPreferenceList = riskPreferenceList;
        },
        "SET_MARKETPERCENT": function (state, marketPercent) {
            state.marketPercent = marketPercent;
        },
        "SET_SHAREACITIVITYURL": function (state, shareActivityUrl) {
            state.shareActivityUrl = shareActivityUrl;
        },
        "SET_SHAREPRODUCTURL": function (state, shareProductUrl) {
            state.shareProductUrl = shareProductUrl;
        },
    },
    getters: {

    },
    actions: {
        "SET_STACKOBJ":function({ commit },stackObj){
            commit("SET_STACKOBJ", stackObj)
        },
        "SET_VIDEOPAYSTATUS":function({ commit },videoPayStatus){
            commit("SET_VIDEOPAYSTATUS", videoPayStatus)
        },
        "SET_MODULEN":function({ commit },moduleN){
            commit("SET_MODULEN", moduleN)
        },
        "SET_TALKEVERYTHINGLIST":function({ commit },talkEverythingList){
            commit("SET_TALKEVERYTHINGLIST", talkEverythingList)
        },
        "SET_MODULEM":function({ commit },moduleM){
            commit("SET_MODULEM", moduleM)
        },
        "SET_FINANCEMARKETLIST":function({ commit },financeMarketList){
            commit("SET_FINANCEMARKETLIST", financeMarketList)
        },
        "SET_MODULEO":function({ commit },moduleO){
            commit("SET_MODULEO", moduleO)
        },
        "SET_FINANCEECONOMICSLIST":function({ commit },financeEconomicsList){
            commit("SET_FINANCEECONOMICSLIST", financeEconomicsList)
        },
        "SET_COMMENTARTICLEINDEX":function({ commit },CommentArticleIndex){
            commit("SET_COMMENTARTICLEINDEX", CommentArticleIndex)
        },
        "SET_HOTTODAYLIST30":function({ commit },hotTodayList30){
            commit("SET_HOTTODAYLIST30", hotTodayList30)
        },
        "SET_FIRSTCOMINGSTATE":function({ commit },firstComingState){
            commit("SET_FIRSTCOMINGSTATE", firstComingState)
        },
        "SET_USERINFOOBJ":function({ commit },userInfoObj){
            commit("SET_USERINFOOBJ", userInfoObj)
        },
        "SET_SELECTEDTEMPIMG": function ({ commit }, selectedTempImg) {
            commit("SET_SELECTEDTEMPIMG", selectedTempImg)
        },
        "SET_SELECTEDTEMPPRODUCT": function ({ commit }, selectedTempProduct) {
            commit("SET_SELECTEDTEMPPRODUCT", selectedTempProduct)
        },
        "SET_SELECTEDPRODUCTQRCODE": function ({ commit }, QRcode) {
            commit("SET_SELECTEDPRODUCTQRCODE", QRcode)
        },
        "SET_SELECTEDTEMP": function ({ commit }, selectedTemp) {
            commit("SET_SELECTEDTEMP", selectedTemp)
        },
        "SET_SHARELEADERSTATE": function ({ commit }, shareLeaderState) {
            commit("SET_SHARELEADERSTATE", shareLeaderState)
        },
        "SET_ORDERPRODUCTNAME": function({ commit }, orderProductName) {
            commit("SET_ORDERPRODUCTNAME", orderProductName)
        },
        "SET_SIGNUPSTATE":  function({ commit }, signUpState) {
            commit("SET_SIGNUPSTATE", signUpState)
        },
        "SET_PRODUCTCODE": function({ commit }, productCode) {
            commit("SET_PRODUCTCODE", productCode)
        },
        "SET_PRODUCTTYPE": function({ commit }, productType) {
            commit("SET_PRODUCTTYPE", productType)
        },
        "SET_SHOWORGNCODE": function({ commit }, showOrgnCode) {
            commit("SET_SHOWORGNCODE", showOrgnCode)
        },
        "SET_REDPACKETID": function({ commit }, redPacketId) {
            commit("SET_REDPACKETID", redPacketId)
        },
        "SET_APPLETCODE": function({ commit }, isAppletCode) {
            commit("SET_APPLETCODE", isAppletCode)
        },
        "SET_SHOWORDER": function({ commit }, showOrder) {
            commit("SET_SHOWORDER", showOrder)
        },
        "SET_COURSEINFO": function({ commit }, courseInfo) {
            commit("SET_COURSEINFO", courseInfo)
        },
        "SET_CITY": function({ commit }, city) {
            commit("SET_CITY", city)
        },
        "SET_SHARELOOKID": function({ commit }, shareLookId) {
            commit("SET_SHARELOOKID", shareLookId)
        },
        "SET_SHAREARTICLEID": function({ commit }, shareArticleId) {
            commit("SET_SHAREARTICLEID", shareArticleId)
        },
        "SET_ORGNCODE": function({ commit }, orgnCode) {
            commit("SET_ORGNCODE", orgnCode)
        },
        "SET_MODULEH": function({ commit }, moduleH) {
            commit("SET_MODULEH", moduleH)
        },
        "SET_MODULEK": function({ commit }, moduleK) {
            commit("SET_MODULEK", moduleK)
        },
        "SET_MODULEJ": function({ commit }, moduleJ) {
            commit("SET_MODULEJ", moduleJ)
        },
        "SET_MODULEI": function({ commit }, moduleI) {
            commit("SET_MODULEI", moduleI)
        },
        "SET_ECONOMYLIST": function({ commit }, economyList) {
            commit("SET_ECONOMYLIST", economyList)
        },
        "SET_MODULED": function({ commit }, moduleD) {
            commit("SET_MODULED", moduleD)
        },
        "SET_MODULEE": function({ commit }, moduleE) {
            commit("SET_MODULEE", moduleE)
        },
        "SET_HOUSELIST": function({ commit }, houseList) {
            commit("SET_HOUSELIST", houseList)
        },
        "SET_MODULEF": function({ commit }, moduleF) {
            commit("SET_MODULEF", moduleF)
        },
        "SET_STOCKLIST": function({ commit }, stockList) {
            commit("SET_STOCKLIST", stockList)
        },
        "SET_MODULEG": function({ commit }, moduleG) {
            commit("SET_MODULEG", moduleG)
        },
        "SET_HOTMARKETLIST": function({ commit }, hotMarketList) {
            commit("SET_HOTMARKETLIST", hotMarketList)
        },
        "SET_WEATHER": function({ commit }, weather) {
            commit("SET_WEATHER", weather)
        },
        "SET_HIGH": function({ commit }, high) {
            commit("SET_HIGH", high)
        },
        "SET_LOW": function({ commit }, low) {
            commit("SET_LOW", low)
        },
        "SET_HOTTODAYRES": function({ commit }, hotTodayRes) {
            commit("SET_HOTTODAYRES", hotTodayRes)
        },
        "SET_HEADPORTRAIT": function({ commit }, headPortrait) {
            commit("SET_HEADPORTRAIT", headPortrait)
        },
        "SET_COMMENTARY": function({ commit }, commentary) {
            commit("SET_COMMENTARY", commentary)
        },
        "SET_DELETEPRODUCTID": function({ commit }, deleteproductid) {
            commit("SET_DELETEPRODUCTID", deleteproductid)
        },
        "SET_MODULEC": function({ commit }, moduleC) {
            commit("SET_MODULEC", moduleC)
        },
        "SET_MODULEB": function({ commit }, moduleB) {
            commit("SET_MODULEB", moduleB)
        },
        "SET_USERINFONAME": function({ commit }, userInfoname) {
            commit("SET_USERINFONAME", userInfoname)
        },
        "SET_MODULEL": function({ commit }, moduleL) {
            commit("SET_MODULEL", moduleL)
        },
        "SET_FINANCEPRODUCT": function ({ commit }, financeProductDetail) {
            commit("SET_FINANCEPRODUCT", financeProductDetail)
        },
        "SET_FINANCEACTIVITY": function ({ commit }, financeActivityDetail) {
            commit("SET_FINANCEACTIVITY", financeActivityDetail)
        },
        "SET_FINANCEPRODUCTID": function ({ commit }, financeProductId) {
            commit("SET_FINANCEPRODUCTID", financeProductId)
        },
        "SET_FINANCEACTIVITYID": function ({ commit }, financeActivityId) {
            commit("SET_FINANCEACTIVITYID", financeActivityId)
        },
        "SET_SKIN": function ({ commit }, skin) {
            commit("SET_SKIN", skin)
        },
        "CHANGE_SKIN": function ({ commit }) {
            commit("CHANGE_SKIN")
        },
        "SET_PRODUCTDATASTATE": function ({ commit }) {
            commit("SET_PRODUCTDATASTATE")
        },
        "SET_ACTIVITYDATASTATE": function ({ commit }) {
            commit("SET_ACTIVITYDATASTATE")
        },
        "SET_NEWBROADCAST":  function ({ commit }, newBroadCast) {
            commit("SET_NEWBROADCAST", newBroadCast)
        },
        "SET_NEWRISKALLOCATIONLIST":  function ({ commit }, newRiskAllocationList) {
            commit("SET_NEWRISKALLOCATIONLIST", newRiskAllocationList)
        },
        "SET_RISKPREFERENCELIST": function ({ commit }, riskPreferenceList) {
            commit("SET_RISKPREFERENCELIST", riskPreferenceList)
        },
        "SET_MARKETPERCENT": function ({ commit }, marketPercent) {
            commit("SET_MARKETPERCENT", marketPercent)
        },
        "SET_SHAREACITIVITYURL": function ({ commit }, shareActivityUrl) {
            commit("SET_SHAREACITIVITYURL", shareActivityUrl)
        },
        "SET_SHAREPRODUCTURL": function ({ commit }, shareProductUrl) {
            commit("SET_SHAREPRODUCTURL", shareProductUrl)
        },
    }
});
export default store