import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router)

export default new VueRouter({
    // mode: 'history',
    // mode: 'history',
    // base: '/dist/',
    routes: [
        {
            path: '/test',
            redirect: {
                path: '/financialReport30/1585905300000/502/28/o5D4fwR9-WZDqPDYBaT_mqteVaPc/-1',
            }
        },
        //今日财经
        {
            path: "/financialReport/:todaytime/:userid/:fieldid/:openid/:place",
            component: resolve => require(['@/pages/financialReport/financialReport.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        //小程序今日财经
        {
            path: "/financialReportWXApplet/:todaytime/:userid/:fieldid/:openid/:place/:isWXApplet",
            component: resolve => require(['@/pages/financialReport/financialReport.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        //小程序今日财经具体文章
        {
            path: '/componentTwo/:todaytime/:userid/:fieldid/:openid/:isShare/:isWXApplet/:haveBackBtn',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //小程序外部具体文章
        {
            path: '/componentTwo/:todaytime/:userid/:fieldid/:openid/:isShare/:isWXApplet',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //今日财经历史记录
        {
            path: "/financialReportHistory/:todaytime/:userid/:fieldid/:openid/:place/:historyid",
            component: resolve => require(['@/pages/financialReport/financialReport.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        //具体文章历史记录
        {
            path: '/componentTwoHistory/:todaytime/:userid/:fieldid/:openid/:isShare/:historyid',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //iOS具体文章历史记录
        {
            path: '/componentTwoIOSHistory/:todaytime/:userid/:fieldid/:openid/:isShare/:historyid/:showFromSource',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        // 二次分享财经
        {
            path: "/financialReportTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:place",
            component: resolve => require(['@/pages/financialReport/financialReport.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        // 二次分享具体文章
        {
            path: '/componentTwoTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        // 二次分享名片
        {
            path: '/sharemanTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/shareman/shareman.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },

        //二次分享我的活动
        {
            path: '/myactivatyTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/myActivaty/myActivaty.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //二次分享我的产品(old)
        {
            path: '/myproductTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/myProduct/myProduct.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //二次分享公共产品(new)
        {
            path: '/commonproductTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:productType/:openid/:isShare',
            component: resolve => require(['@/pages/commonProduct/commonProduct.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //二次分享晚间播报
        {
            path: '/eveningBroadcastingTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/eveningBroadcasting/eveningBroadcasting.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //二次分享投资分析图
        {
            path: '/investmentAnalysisTwoShare/:todaytime/:userid/:fieldid/:appOpenid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/investmentAnalysis/investmentAnalysis.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //具体文章
        {
            path: '/componentTwo/:todaytime/:userid/:fieldid/:openid/:isShare',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //iOS具体文章
        {
            path: '/componentTwoIOS/:todaytime/:userid/:fieldid/:openid/:isShare/:showFromSource',
            component: resolve => require(['@/pages/article/componentTwo.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //小程序今日财经地域新闻
        {
            path: '/componentThree/:todaytime/:userid/:fieldid/:openid/:isShare/:isWXApplet/:haveBackBtn',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //小程序外部地域新闻
        {
            path: '/componentThree/:todaytime/:userid/:fieldid/:openid/:isShare/:isWXApplet',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //地域新闻
        {
            path: '/componentThree/:todaytime/:userid/:fieldid/:openid/:isShare',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        // 二次分享地域新闻
        {
            path: '/componentThreeTwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //iOS地域新闻
        {
            path: '/componentThreeIOS/:todaytime/:userid/:fieldid/:openid/:isShare/:showFromSource',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //地域新闻历史记录
        {
            path: '/componentThreeHistory/:todaytime/:userid/:fieldid/:openid/:isShare/:historyid',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //iOS地域新闻历史记录
        {
            path: '/componentThreeIOSHistory/:todaytime/:userid/:fieldid/:openid/:isShare/:historyid/:showFromSource',
            component: resolve => require(['@/pages/article/componentThree.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //个人名片
        {
            path: '/shareman/:todaytime/:userid/:fieldid/:openid/:isShare',
            component: resolve => require(['@/pages/shareman/shareman.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //历史产品数据
        {
            path: '/productcenter/:userid/:productid',
            component: resolve => require(['@/pages/product/ProductCenter.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //我的活动
        {
            path: '/myactivaty/:todaytime/:userid/:fieldid/:openid/:isShare',
            component: resolve => require(['@/pages/myActivaty/myActivaty.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //我的产品(old)
        {
            path: '/myproduct/:todaytime/:userid/:fieldid/:openid/:isShare',
            component: resolve => require(['@/pages/myProduct/myProduct.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //公共产品(new)
        {
            path: '/commonproduct/:todaytime/:userid/:fieldid/:productType/:openid/:isShare',
            component: resolve => require(['@/pages/commonProduct/commonProduct.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //过渡页
        {
            path: "/see/:nowDate/:userid/:shareArticleId/:openid/:type",
            component: resolve => require(['@/pages/coming/coming.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //财经、文章二度加载
        {
            path: "/see/:nowDate/:userid/:shareArticleId/:openid/:twosharetime/:type",
            component: resolve => require(['@/pages/coming/coming.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //投资分析过渡页
        {
            path: "/seeInvestmentAnalysis/:nowDate/:userid/:shareArticleId/:appOpenid/:openid/:type",
            component: resolve => require(['@/pages/coming/coming.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //投资分析二度加载
        {
            path: "/seeInvestmentAnalysis/:nowDate/:userid/:shareArticleId/:appOpenid/:openid/:twosharetime/:type",
            component: resolve => require(['@/pages/coming/coming.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //公共产品过渡页
        {
            path: "/seeCommonProduct/:nowDate/:userid/:shareArticleId/:appOpenid/:openid/:productType/:type",
            component: resolve => require(['@/pages/coming/coming.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //公共产品二度加载
        {
            path: "/seeCommonProduct/:nowDate/:userid/:shareArticleId/:appOpenid/:openid/:twosharetime/:productType/:type",
            component: resolve => require(['@/pages/coming/coming.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //晚间播报
        {
            path: "/eveningBroadcasting/:todaytime/:userid/:fieldid/:openid/:isShare",
            component: resolve => require(['@/pages/eveningBroadcasting/eveningBroadcasting.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //小程序晚间播报
        {
            path: "/eveningBroadcasting/:todaytime/:userid/:fieldid/:openid/:isShare/:isWXApplet",
            component: resolve => require(['@/pages/eveningBroadcasting/eveningBroadcasting.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //历史晚间播报
        {
            path: "/eveningBroadcastingHistory/:todaytime/:userid/:fieldid/:openid/:isShare/:historyid",
            component: resolve => require(['@/pages/eveningBroadcasting/eveningBroadcasting.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //投资分析图
        {
            path: "/investmentAnalysis/:todaytime/:userid/:fieldid/:appOpenid/:openid/:isShare",
            component: resolve => require(['@/pages/investmentAnalysis/investmentAnalysis.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //小程序投资分析图
        {
            path: "/investmentAnalysis/:todaytime/:userid/:fieldid/:appOpenid/:openid/:isShare/:isWXApplet",
            component: resolve => require(['@/pages/investmentAnalysis/investmentAnalysis.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //历史投资分析图
        {
            path: "/investmentAnalysis/:todaytime/:userid/:fieldid/:appOpenid/:openid/:isShare/:historyid",
            component: resolve => require(['@/pages/investmentAnalysis/investmentAnalysis.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //浏览记录图
        {
            path: "/browingHistory/:userid/:fieldid/:appOpenid",
            component: resolve => require(['@/pages/investmentAnalysis/browingHistory.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //全球市场数据
        {
            path: "/globalMarket",
            component: resolve => require(['@/pages/market/globalMarket.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //期货市场数据
        {
            path: "/forwardMarket",
            component: resolve => require(['../../src/pages/market/forwardMarket.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //外汇市场数据
        {
            path: "/foreignMarket",
            component: resolve => require(['../../src/pages/market/foreignMarket.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //vant页面
        {
            path: "/vantPage",
            component: resolve => require(['../../src/pages/vantPage/vantPage.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //视频页面
        {
            path: "/videoCourse/:todaytime/:userid/:fieldid/:openid/:isShare",
            component: resolve => require(['../../src/pages/videoCourse/videoCourse.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        // 二次分享视频页面
        {
            path: "/videoCourse/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:isShare",
            component: resolve => require(['../../src/pages/videoCourse/videoCourse.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //常见问题
        {
            path: "/frequentQuestion",
            component: resolve => require(['../../src/pages/frequentQuestion/frequentQuestion.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        // 营销模板产品列表
        {
            path: "/commonProductList/:userid/:todaytime",
            component: resolve => require(['../../src/pages/commonProduct/commonProductList.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        //  营销模板产品详情
        {
            path: '/commonProductItem/:userid/:fieldid/:productType',
            component: resolve => require(['../../src/pages/commonProduct/commonProductItem.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  报名列表
        {
            path: '/TrainingEnrolmentList/:userid',
            component: resolve => require(['../../src/pages/TrainingEnrolment/TrainingEnrolmentList.vue'], resolve),
            meta: {
                keepAlive: true // 不需要被缓存
            },
        },
        //  历史报名列表
        {
            path: '/TrainingEnrolmentHistoryList/:userid',
            component: resolve => require(['../../src/pages/TrainingEnrolment/TrainingEnrolmentHistoryList.vue'], resolve),
            meta: {
                keepAlive: true // 不需要被缓存
            },
        },
        //  报名详情
        {
            path: '/TrainingDetail/:userid/:traningid/:orginType',
            component: resolve => require(['../../src/pages/TrainingEnrolment/TrainingEnrolmentDetail.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  PDF阅读器
        {
            path: '/PDFReadPage/:userid/:traningid/:orginType',
            component: resolve => require(['../../src/pages/PDFTool/PDFReadPage.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  营销模板编辑页面
        {
            path: '/MarketingTemplate/:userid',
            component: resolve => require(['../../src/pages/MarketingTemplate/MarketingTemplate.vue'], resolve),
            meta: {
                keepAlive: true // 不需要被缓存
            },
        },
        //  营销模板历史模板
        {
            path: '/MarketingTemplateHistory/:userid/',
            component: resolve => require(['../../src/pages/MarketingTemplate/MarketingTemplateHistory.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  营销模板分享页面
        {
            path: '/MarketingShare/:userid/:historyTemplateId',
            component: resolve => require(['../../src/pages/MarketingTemplate/MarketingShare.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  营销模板产品列表
        {
            path: '/MarketingProductList/:userid/:productType',
            component: resolve => require(['../../src/pages/MarketingTemplate/MarketingProductList'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //新版本今日财经3.0
        {
            path: "/financialReport30/:todaytime/:userid/:fieldid/:openid/:place",
            component: resolve => require(['@/pages/financialReport/financialReport30.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        //新版本今日财经3.0历史记录
        {
            path: "/financialReport30History/:todaytime/:userid/:fieldid/:openid/:place/:historyid",
            component: resolve => require(['@/pages/financialReport/financialReport30.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        // 二次分享新版本今日财经3.0
        {
            path: "/financialReport30TwoShare/:todaytime/:userid/:fieldid/:fromopenid/:twosharetime/:openid/:place",
            component: resolve => require(['@/pages/financialReport/financialReport30.vue'], resolve),
            meta: {
                keepAlive: true // 需要被缓存
            },
        },
        //过渡页
        {
            path: "/see30/:nowDate/:userid/:shareArticleId/:openid/:type",
            component: resolve => require(['@/pages/coming/coming30.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //财经、文章二度加载
        {
            path: "/see30/:nowDate/:userid/:shareArticleId/:openid/:twosharetime/:type",
            component: resolve => require(['@/pages/coming/coming30.vue'], resolve),
            meta: {
                keepAlive: false // 需要被缓存
            },
        },
        //  新闻首页
        {
            path: '/HomeNewsList/:todaytime/:userid/:nowTypeIndex/:city',
            component: resolve => require(['../../src/pages/HomeNewsList/HomeNewsList.vue'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  推荐股票首页
        {
            path: '/recomentStack',
            component: resolve => require(['../../src/pages/recomentStack/recomentStack'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  蜡烛图
        {
            path: '/candlestickCharts',
            component: resolve => require(['../../src/pages/candlestickCharts/candlestickCharts'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //  营销模板产品列表
        {
            path: '/financialProductList/:userid/:productType',
            component: resolve => require(['../../src/pages/financialReport/financialProductList'], resolve),
            meta: {
                keepAlive: false // 不需要被缓存
            },
        },
        //错误页面
        {
          path: '/*', // 错误页面 注意：必须写在最后面
          component: resolve => require(['../../src/pages/errorPage/error.vue'], resolve)
        }
    ]
})