<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .tabs {
    font-size: 18px;
    color: #fff;
    background: #fff;
  }
  .tabs-bar {
    width: 100%;
    position: fixed;
    z-index: 1;
    max-width: 480pt;
    background: #fff;
  }
  .top-place{
    top: 211px;
  }
  .tabs-bar:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #fff;
    margin-top: -1px;
  }
  .tabs-tab {
    text-align: center;
    width: 20%;
    margin: 0 15%;
    display: inline-block;
    background: #fff;
    cursor: pointer;
    position: relative;
    color: #000;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
  .tabs-tab:first-child {
    margin: 0 8% 0 22%;
  }
  .tabs-tab:nth-child(2) {
    margin: 0 22% 0 8%;
  }
  .tabs-tab-active {
    color: #b90901;
    border-bottom: 1px solid #b90901;
  }
  .tabs-tab-active:after {
    content: "";
    display: block;
    height: 2px;
    background: #b90901;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
  }
  .tabs-top-place {
    background: #fff;
    height: 40px;
    width: 100%;
    position: fixed;
    top: 211px;
    max-width: 480pt;
  }
  .tabs-content {
    padding-top: 40px;
    color: #000;
    background: #f7f7f7;
  }
</style>
<template>
  <div class="tabs ">
    <div class="tabs-bar" :class="{'top-place':topPlaceState!=false}">
      <!--标题页的标题 v-for遍历, :class 动态绑定class-->
      <div :class="tabCls(item)"
           v-for="(item,index) in navList"
           @click="handleChange(index)"
           :key="index">
        {{item.label}}
      </div>
    </div>
    <div class="tabs-top-place" v-if="topPlaceState!=false"></div>
    <div class="tabs-content">
      <!--这里的slot就是嵌套的pane组件的内容-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {
        //将pane的标题保存到数组中
        navList: [],
        //保存父组件的value到currentValue变量中，以便在本地维护
        currentValue: this.value
      }
    },
    props: {
      //接收父组件的value
      value: {
        type: [String]
      },
        topPlaceState:{
            type:Boolean
        }
    },
    methods: {
      //使用$children遍历子组件，得到所有的pane子组件
      getTabs: function () {
        return this.$children.filter(function (item) {
          return item.$options.name === 'pane';
        })
      },
      //更新tabs
      updateNav() {
        this.navList = [];
        //设置对this的引用，在function回调里，this指向的并不是Vue实例
        var _this = this;
        //遍历每一个pane组件后，把它的label和name提取出来，构成一个Object并添加navList数组中
        this.getTabs().forEach(function (pane, index) {
          _this.navList.push({
            label: pane.label,
            name: pane.name || index
          });
          //如果没有设置name，默认设置为索引值
          if (!pane.name) {
            pane.name = index;
          }
          //设置第一个pane为当前显示的tab
          if (index === 0) {
            if (!_this.currentValue) {
              _this.currentValue = pane.name || index;
            }
          }
        });
        this.updateStatus();
      },
      //更新每个子组件pane状态
      updateStatus() {
        //给tabs赋值为所有子组件
        var tabs = this.getTabs();
        var _this = this;
        //显示当前选中的tab对应的pane组件，隐藏没有选中的
        tabs.forEach(function (tab) {
          //设置每个子组件中show
          return tab.show = tab.name === _this.currentValue;
        })
      },
      //因为计算属性不能传参，所有使用methods
      tabCls: function (item) {
        return [
          'tabs-tab',
          {
            //为当前选中的tab加一个tabs-tab-active class
            'tabs-tab-active': item.name === this.currentValue
          }
        ]
      },
      //点击tab标题触发，改变选中tab的索引
      handleChange: function (index) {
        var nav = this.navList[index];
        var name = nav.name;
        //改变当前选中的tab，触发watch
        this.currentValue = name;
        //实现子组件与父组件通信,更新value
        this.$emit('input', name);
        //触发一个自定义事件，供父级使用
        this.$emit('on-click', name);
      }
    },
    watch: {
      value: function (val) {
        this.currentValue = val;
      },
      currentValue: function () {
        //tab发生变化时，更新pane的显示状态
        this.updateStatus();
      }
    },
    mounted() {
      //查看this.getTabs()的值
      console.log(this.getTabs());
    }

  }
</script>


