// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//执行成功

import Vue from 'vue'
import App from './App'
import router from './router'
import http from './api/http'
import Vuex from 'vuex'
import store from './store/'

// 引入提示框和title组件，图例
require('echarts/lib/component/dataset')
require('echarts/lib/component/title')
require('echarts/lib/component/tooltip') 
require('echarts/lib/component/toolbox') 
require('echarts/lib/component/grid') 
require('echarts/lib/component/dataZoom') 
require('echarts/lib/component/visualMap')
require('echarts/lib/component/legend')

let echarts = require('echarts/lib/echarts')

Vue.prototype.$echarts = echarts
//全局过滤器文件
import * as custom from './filter/filter'
//图片预览
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
//字体自适应
import 'lib-flexible/flexible'
//全局组件注册
import components from './components'
// vant样式引入
import { Button } from 'vant';
Vue.use(Button);
// mint-ui样式引入
import 'mint-ui/lib/style.css'
// vant样式引入
import 'vant/lib/index.css';

import { InfiniteScroll } from 'mint-ui';
import { Spinner } from 'mint-ui';
//自定义指令引入
import './directive/directive'
import { NoticeBar } from 'vant';
import { NumberKeyboard } from 'vant';
import { Field } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Icon } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Tab, Tabs } from 'vant';
import { NavBar } from 'vant';
import { Col, Row } from 'vant';
import { PullRefresh } from 'vant';
import { Search } from 'vant';
import { Overlay } from 'vant';
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import { Tag } from 'vant';
import { List } from 'vant';
import { Calendar } from 'vant';

Vue.use(Calendar);
Vue.use(List);
Vue.use(Tag);
Vue.use(animated)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Overlay);
Vue.use(Search);
Vue.use(PullRefresh);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Tab).use(Tabs);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Field);
Vue.use(NumberKeyboard);
Vue.use(NoticeBar);
Vue.component(Spinner.name, Spinner);
Vue.use(InfiniteScroll);

Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase())
    Vue.component(`v${name}`, components[key])
})
if (process.env.VUE_APP_ENV == 'development'||process.env.VUE_APP_ENV == 'test'||process.env.VUE_APP_ENV == 'uat') {
    var vConsole = new VConsole();//eslint-disable-line
}
//图片预览
var CheckPhotoOptions = {
    fullscreenEl: false, //关闭全屏按钮
    closeEl: true, //显示关闭按钮
    zoomEl: false, //关闭放大按钮
}
Vue.use(preview, CheckPhotoOptions)
//全局过滤组件
Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})
Vue.use(Vuex)
Vue.use(VueLazyload)//eslint-disable-line
Vue.use(VueLazyload, {//eslint-disable-line
    preLoad: 1.3,
    error: '../static/image/loading.gif',
    loading: '../static/image/loading.gif',
    attempt: 1
})
Vue.use(http)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
