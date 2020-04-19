<style lang="less" scoped>
.recomentStack {
  background: #f7f7f7;
  .banner-box {
    margin-top: 46px;
    background: #fff;
    img {
      width: 100%;
    }
  }
  .table-box {
    padding: 0 13px 0 13.5px;
    background: #fff;
    margin-top: 10px;
    .v-table-views {
      border: 0;
    }
  }
  .infiniteScrollDemo {
    text-align: center;
    .loading {
      display: flex;
      .loading-icon {
        padding-top: 10px;
        margin: 0 auto;
      }
    }
    .pick-data{
      margin: 20px auto;
      width: 80%;
      height: 45px;
      background:rgba(255,255,255,1);
      box-shadow:0px 4px 16px 0px rgba(51,51,51,0.2);
      border-radius:4px;
      .title-box{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        margin-top: 1px;
        img{
          margin-left: 5px;
          width: 14px;
          height: 14px;
        }
      }
      .arrow-box{
        display: flex;
        align-items: center;
        font-size: 12px;
        img{
          width: 7px;
          height: 12px;
        }
        .left-arrow{
          margin-right: 5px;
        }
        .right-arrow{
          margin-left: 5px;
        }
      }
      .arrow-box-disable{
        color: #ddd;
      }
      
    }
  }
}
.recomentStack /deep/ .v-table-title-cell {
  margin: 0;
  border: 0 solid #ebebeb;
  color: #999;
}
.recomentStack /deep/ .v-table-body-cell {
  margin: 0;
  border: 0 solid #ebebeb;
}
.recomentStack /deep/ .v-table-row:last-child .v-table-body-cell {
  margin: 0;
  border: 0 solid #fff;
}
.recomentStack /deep/ .title-cell-class-name {
  font-size: 13px;
  color: #666;
}
.recomentStack /deep/ .title-cell-disabled {
  pointer-events: none;
}
.recomentStack /deep/ .column-cell-class-name-first {
  font-size: 14px;
  font-weight: bold;
}
.recomentStack /deep/ .column-cell-class-name-code {
  font-size: 12px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 20px;
}
.recomentStack /deep/ .column-cell-class-name-red {
  color: #b90901;
  font-size: 15px;
}
.recomentStack /deep/ .column-cell-class-name-green {
  color: #1ca601;
  font-size: 15px;
}
.recomentStack /deep/ .column-cell-class-name-pctchange-red span {
  display: inline-block;
  width: 66px;
  height: 30px;
  background: #e72e33;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
.recomentStack /deep/ .column-cell-class-name-pctchange-green span {
  display: inline-block;
  width: 66px;
  height: 30px;
  background: #00b327;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
</style>
<template>
  <div class="recomentStack flex-wrapper">
    <div class="infiniteScrollDemo">
      <van-nav-bar title="精选股票" fixed>
        <div slot="left" @click="goOuter">
          <van-icon name="arrow-left" color="#959595" size="24" />
        </div>
      </van-nav-bar>
      <div class="banner-box">
        <img src="../../components/common/image/stackBanner.png">
      </div>
      <div class="pick-data">
        <van-nav-bar>
          <div slot="left" class="arrow-box" @click="getNextDate(getDate,-1)" v-if="getDate!='2020-04-01'">
            <img src="../../components/common/image/arrow-left.png" class="left-arrow">
            前一日
          </div>
          <div slot="left" class="arrow-box arrow-box-disable" v-else>
            <van-icon name="arrow-left" color="#ddd" size="16" slot="left" />
            前一日
          </div>
          <div slot="title" class="title-box" @click="show = true">
            {{getDate}}
            <img src="../../components/common/image/data-icon.png" class="data-icon">
          </div>
          <div slot="right" class="arrow-box" @click="getNextDate(getDate,1)" v-if="getDate!=currentDate">  
            后一日
            <img src="../../components/common/image/arrow-right.png" class="right-arrow">
          </div>
          <div slot="right" class="arrow-box arrow-box-disable" v-else>
            后一日
            <img src="../../components/common/image/arrow_r@2x.png" class="right-arrow">
          </div>

        </van-nav-bar>
      </div>
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          class="page-infinite-list">
        <li class="page-infinite-listitem">
          <div class="table-box clearfix">
            <v-table is-horizontal-resize=""
                     style="width:100%"
                     multiple-sort
                     :columns="columns"
                     :table-data="tableData"
                     @sort-change="sortChange"
                     :show-vertical-border="false"
                     :row-click="rowClick"
                     :column-cell-class-name="columnCellClass"
                     row-hover-color="#fff"
                     row-click-color="#fad2d0"
                     :title-click="titleClick1">
            </v-table>
          </div>
        </li>
      </ul>
      <div v-if="loading && !showEnd"
           class="loading">
        <div class="loading-icon">
          <mt-spinner type="fading-circle"
                      color="#ffba00"
                      class="loading-icon"></mt-spinner>
          <div>加载中</div>
        </div>
      </div>
      <!-- <div v-if="showEnd">我是有底线的</div> -->
      <van-calendar v-model="show" @confirm="onConfirm" :min-date="minDate" :max-date="maxDate" :default-date="defaultDate"/>
    </div>
  </div>
</template>


<script>
import closeLoading from '../../mixins/closeLoading'
import sourceOS from '../../mixins/sourceOS'
//Vuex公共状态动作
import { mapActions } from 'vuex'
//Vuex公共状态辅助函数
import { mapState } from 'vuex'
//执行成功
const ERROR_CODE = "ERRORCODE0000";
export default {
  name: 'recomentStack',
  mixins: [sourceOS, closeLoading],
  data () {
    return {
      defaultDate: new Date(2020, 3, 1),
      minDate: new Date(2020, 3, 1),
      maxDate: new Date(2020, 10, 31),
      currentDate:'',
      getDate:'',
      toolTypes: [7],
      //显示弹出框
      popupVisible: false,
      pageIndex: 1,
      pageSize: 10,
      total: 10,
      tableData: [],
      columns: [
        { field: 'name', title: '名称', width: 50, titleAlign: 'left', columnAlign: 'left', titleCellClassName: 'title-cell-class-name title-cell-disabled', isResize: true },
        { field: 'code', title: '代码', width: 50, titleAlign: 'left', columnAlign: 'left', titleCellClassName: 'title-cell-class-name title-cell-disabled', isResize: true },
        { field: 'close', title: '上一收盘价', width: 50, titleAlign: 'left', columnAlign: 'left', titleCellClassName: 'title-cell-class-name title-cell-disabled', isResize: true },
        { field: 'pctchange1', title: '上一日涨幅', width: 50, titleAlign: 'right', columnAlign: 'right', titleCellClassName: 'title-cell-class-name', isResize: true },
      ],
      sort: 'desc',
      sortName: 'pctchange',
      loading: false,
      showEnd: false,
      show: false,
    }
  },
  methods: {
    //Vuex辅助函数，将公共状态中的方法映射成当前的this方法
    ...mapActions(['SET_STACKOBJ']),
    formatDate(date) {
      let y = date.getFullYear();
      let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return y + "-" + m + "-" + d;
    },
    onConfirm(date) {
      this.show = false;
      this.getDate = this.formatDate(date);
      this.getTableData();
    },
    goOuter(){
      var u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        Android.destoryActivity();
      }
    },
    getNextDate(date,day) {  
      var dd = new Date(date);
      dd.setDate(dd.getDate() + day);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      this.getDate= y + "-" + m + "-" + d;
      this.defaultDate= new Date(dd.getFullYear(), dd.getMonth(), dd.getDate());
      this.getTableData();
    },
    
    //加载更多
    loadMore () {
      this.loading = true;
      setTimeout(() => {
        if (this.pageIndex < this.getPages) {
          this.pageIndex += 1;
          let parame = {
            "functionName": "stockService",
            "methodName": "getStockChoiceList",
            "securityStr": null,
            "pageNo": this.pageIndex,
            "pageSize": 10,
            originSource: {
              OS: this.OS,
              version: "H5_V2.0"
            },
            "data": {
              "choiceDate": this.getDate
            }
          }
          console.log(parame);
          this.$post(JSON.stringify(parame)).then(result => {
            this.loading = false;
            if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
              console.log('股市数据查询成功==>', result);
              this.total = result.sumCount;
              //概览信息
              var newIndexToolNowList = result.data.newStockChoiceList;
              newIndexToolNowList.forEach((e) => {
                if (e != 0) {
                  this.tableData.push({
                    name: e.name,
                    close: Number(e.close).toFixed(4),
                    pctchange1: Number(e.pctchange1).toFixed(4),
                    code: e.code,
                  });
                }
              });
            }
          })
        } else {
          this.loading = false;
          this.showEnd = true;
        }
      }, 1000);

    },
    //表头控制排序
    titleClick1 () {

    },
    // titleClick (title, field) {
    //   if (field !== 'pctchange') {
    //     if (this.sort == 'desc') {
    //       document.getElementsByClassName('v-icon-up-dir')[0].className = 'v-icon-up-dir';
    //       document.getElementsByClassName('v-icon-down-dir')[0].className = 'v-icon-down-dir';
    //       this.sort = '';
    //       this.getTableData();
    //       return;
    //     }
    //     if (this.sort == '') {
    //       document.getElementsByClassName('v-icon-up-dir')[0].className = 'v-icon-up-dir checked';
    //       document.getElementsByClassName('v-icon-down-dir')[0].className = 'v-icon-down-dir';
    //       this.sort = 'asc';
    //       this.getTableData();
    //       return;
    //     }
    //     if (this.sort == 'asc') {
    //       document.getElementsByClassName('v-icon-up-dir')[0].className = 'v-icon-up-dir';
    //       document.getElementsByClassName('v-icon-down-dir')[0].className = 'v-icon-down-dir checked';
    //       this.sort = 'desc';
    //       this.getTableData();
    //       return;
    //     }
    //   }

    // },
    //获取表格数据
    getTableData () {
      this.pageIndex = 1;
      this.loading = true;
      this.showEnd = false;
      let parame = {
        "functionName": "stockService",
        "methodName": "getStockChoiceList",
        "securityStr": null,
        "pageNo": this.pageIndex,
        "pageSize": 10,
        originSource: {
          OS: this.OS,
          version: "H5_V2.0"
        },
        "data": {
          "choiceDate": this.getDate
        }
      }
      console.log('股市数据查询参数==>',parame)
      this.$post(JSON.stringify(parame)).then(result => {
        this.loading = false;
        if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
          console.log('股市数据查询结果==>', result);
          this.total = result.sumCount;
          //概览信息
          this.tableData = [];
          var newIndexToolNowList = result.data.newStockChoiceList;
          newIndexToolNowList.forEach((e) => {
            if (e != 0) {
              this.tableData.push({
                name: e.name,
                close: Number(e.close).toFixed(4),
                pctchange1: Number(e.pctchange1).toFixed(4),
                pctchange2: Number(e.pctchange2).toFixed(4),
                pctchange3: Number(e.pctchang3).toFixed(4),
                code: e.code,
              });
            }
          });
        }
      })
    },
    //换页
    pageChange (pageIndex) {
      this.pageIndex = pageIndex
      this.getTableData()
    },
    //表格数据颜色
    columnCellClass (rowIndex, columnName, rowData) {
      // 给所有行设置className
      if (columnName === 'name') {
        return 'column-cell-class-name-first';
      }
      if (columnName === 'code') {
        return 'column-cell-class-name-code';
      }
      // 给涨为红
      if (columnName === 'close' && rowData.pctchange1 >= 0) {
        return 'column-cell-class-name-red';
      }
      // 给跌
      if (columnName === 'close' && rowData.pctchange1 < 0) {
        return 'column-cell-class-name-green';
      }
      if (columnName === 'pctchange1' && rowData.pctchange1 < 0) {
        return 'column-cell-class-name-pctchange-green';
      }
      if (columnName === 'pctchange1' && rowData.pctchange1 >= 0) {
        return 'column-cell-class-name-pctchange-red';
      }
    },
    //点击行
    rowClick (rowIndex) {
      console.log(this.tableData[rowIndex]);
      this.popupVisible = true;
      var sendStackObj = {
        selectName: this.tableData[rowIndex].name,
        selectPrice: this.tableData[rowIndex].close,
        selectPctchange1: this.tableData[rowIndex].pctchange1,
        selectPctchange2: this.tableData[rowIndex].pctchange2,
        selectPctchange3: this.tableData[rowIndex].pctchange3,
        selectCode: this.tableData[rowIndex].code,
      }
      this.SET_STACKOBJ(sendStackObj);
      sessionStorage.setItem("getDate", this.getDate);
      this.$router.push({
        path: "/candlestickCharts"
      });
    },
    goDetail(){
      if(this.showEnd){
        this.$router.push({
          path: "/candlestickCharts"
        });
      }else{
        setTimeout(() => {
          this.goDetail();
        }, 1000);
      }
    },
    // 获取 table 组件每次操作后的参数（重新去请求数据）
    sortChange () {

    },
    // sortChange1 (params) {
    //   for (var key in params) {
    //     this.sort = params[key];
    //     this.sortName = key;
    //     this.getTableData();
    //   }
    // }
  },
  created () {
    this.getTableData()
  },
  components: {
    //Vuex辅助函数，将公共状态中的属性映射成当前的computed中
    ...mapState(['stackObj'])
  },
  computed: {
    getPages: function () {
      return Math.ceil(this.total / 10);
    }
  },

  mounted () {
    let date =new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    let d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    this.currentDate=y + "-" + m + "-" + d;
    this.maxDate=new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if(sessionStorage.getItem("getDate")!=null){
      this.getDate=sessionStorage.getItem("getDate");
      this.getTableData();
      // this.defaultDate=new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }else{
      this.defaultDate=new Date(date.getFullYear(), date.getMonth(), date.getDate());
      this.getDate= this.currentDate;
    }
  }
}
</script>