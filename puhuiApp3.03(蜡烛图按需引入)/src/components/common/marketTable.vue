<style lang="less" scoped>
  .forward-market-outer-box {
    background: #f7f7f7;
    .table-box {
      padding: 0 13px 0 13.5px;
      background: #fff;
      margin-top: 10px;
      .v-table-views {
        border: 0;
      }
    }
    .nowPage {
      line-height: 32px;
      font-size: 15px;
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
    }
    .market-money {
      padding: 15px;
      width: 280px;
      border-radius: 8px;
      padding: 10px;
      left: 50%;
      background: #fff;
      font-size: 20px;
      color: #000;
      text-align: left;
      .show-big-red {
        color: #b90901;
        font-size: 23px;
      }
      .show-big-green {
        color: #1ca601;
        font-size: 23px;
      }
    }
  }
</style>
<style>
  .forward-market-outer-box .v-table-title-cell {
    margin: 0;
    border: 0 solid #ebebeb;
  }
  .forward-market-outer-box .v-table-body-cell {
    margin: 0;
    border: 0 solid #ebebeb;
  }
  .forward-market-outer-box .v-table-row:last-child .v-table-body-cell {
    margin: 0;
    border: 0 solid #fff;
  }
  .forward-market-outer-box .title-cell-class-name {
    font-size: 13px;
    color: #666;
  }
  .forward-market-outer-box .title-cell-disabled {
    pointer-events: none;
  }
  .forward-market-outer-box .column-cell-class-name-first {
    font-size: 13px;
  }
  .forward-market-outer-box .column-cell-class-name-red {
    color: #b90901;
    font-size: 15px;
  }
  .forward-market-outer-box .column-cell-class-name-green {
    color: #1ca601;
    font-size: 15px;
  }
</style>
<template>
  <div class="forward-market-outer-box flex-wrapper">
    <div class="infiniteScrollDemo">
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
                     :title-click="titleClick">
            </v-table>
          </div>
          <van-popup v-model="popupVisible">
            <div class="market-money">
              <div class="select-name">{{selectName}}</div>
              <div class="select-price">最新: <span class="show-big-red"
                      :class="{'show-big-green':selectPctchange<0}">{{selectPrice|keepFourNum}}</span></div>
              <div class="select-pctchange">涨跌幅: <span class="show-big-red"
                      :class="{'show-big-green':selectPctchange<0}">{{selectPctchange|keepFourNum}}</span></div>
              <div class="select-change">涨跌: <span class="show-big-red"
                      :class="{'show-big-green':selectPctchange<0}">{{selectChange|keepFourNum}}</span></div>
            </div>
          </van-popup>
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
      <div v-if="showEnd">我是有底线的</div>
    </div>
  </div>
</template>


<script>
  import sourceOS from '../../mixins/sourceOS'
  //执行成功
  const ERROR_CODE = "ERRORCODE0000";
  export default {
    props: {
      //微信用户ID
      toolTypes: {
        type: Array,
      },
    },
    name: 'sort-by-multiple-columns',
    mixins: [sourceOS],
    data() {
      return {
        //显示弹出框
        popupVisible: false,
        pageIndex: 1,
        pageSize: 10,
        total: 10,
        tableData: [],
        columns: [
          { field: 'name', title: '名称', width: 80, titleAlign: 'left', columnAlign: 'left', titleCellClassName: 'title-cell-class-name title-cell-disabled', isResize: true },
          // formatter: function (rowData, rowIndex, pagingIndex, field) {
          //   return rowIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (rowIndex + 1) + '</span>' : rowIndex + 1
          // }          
          { field: 'price', title: '最新', width: 50, titleAlign: 'right', columnAlign: 'right', titleCellClassName: 'title-cell-class-name title-cell-disabled', isResize: true },
          { field: 'pctchange', title: '涨跌幅%', width: 50, titleAlign: 'right', columnAlign: 'right', titleCellClassName: 'title-cell-class-name', orderBy: 'desc', isResize: true },
          { field: 'change', title: '涨跌', width: 50, titleAlign: 'right', columnAlign: 'right', titleCellClassName: 'title-cell-class-name title-cell-disabled', isResize: true }
        ],
        sort: 'desc',
        sortName: 'pctchange',
        loading: false,
        showEnd: false,
        selectName: '',
        selectPrice: '',
        selectPctchange: '',
        selectChange: '',
      }
    },
    methods: {
      //加载更多
      loadMore() {
        console.log(1);
        this.loading = true;
        setTimeout(() => {
          if (this.pageIndex < this.getPages) {
            this.pageIndex += 1;
            if (this.sort == '') {
              var dataObj = {
                "toolTypes": this.toolTypes
              }
            } else {
              var dataObj = {
                "sort": this.sort,
                "sortName": this.sortName,
                "toolTypes": this.toolTypes
              };
            }
            let parame = {
              "functionName": "newIndexToolNowService",
              "methodName": "selectNewIndexToolNowInfoList",
              "pageNo": this.pageIndex,
              "pageSize": 10,
              originSource: {
                OS: this.OS,
                version: "H5_V1.0"
              },
              "data": dataObj
            }
            console.log(parame);
            this.$post(JSON.stringify(parame)).then(result => {
              this.loading = false;
              if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
                console.log('股市数据查询成功==>', result);
                this.total = result.sumCount;
                //概览信息
                var newIndexToolNowList = result.data.newIndexToolNowList;
                newIndexToolNowList.forEach((e, i) => {
                  if (e != 0) {
                    this.tableData.push({
                      name: e.name,
                      price: Number(e.price).toFixed(4),
                      pctchange: Number(e.pctchange).toFixed(4),
                      change: Number(e.change).toFixed(4),
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
      titleClick(title, field) {
        if (field == 'pctchange') {
          if (this.sort == 'desc') {
            document.getElementsByClassName('v-icon-up-dir')[0].className = 'v-icon-up-dir';
            document.getElementsByClassName('v-icon-down-dir')[0].className = 'v-icon-down-dir';
            this.sort = '';
            this.getTableData();
            return;
          }
          if (this.sort == '') {
            document.getElementsByClassName('v-icon-up-dir')[0].className = 'v-icon-up-dir checked';
            document.getElementsByClassName('v-icon-down-dir')[0].className = 'v-icon-down-dir';
            this.sort = 'asc';
            this.getTableData();
            return;
          }
          if (this.sort == 'asc') {
            document.getElementsByClassName('v-icon-up-dir')[0].className = 'v-icon-up-dir';
            document.getElementsByClassName('v-icon-down-dir')[0].className = 'v-icon-down-dir checked';
            this.sort = 'desc';
            this.getTableData();
            return;
          }
        }

      },
      //获取表格数据
      getTableData() {
        this.pageIndex = 1;
        this.loading = true;
        this.showEnd = false;
        if (this.sort == '') {
          var dataObj = {
            "toolTypes": this.toolTypes
          }
        } else {
          var dataObj = {
            "sort": this.sort,
            "sortName": this.sortName,
            "toolTypes": this.toolTypes
          };
        }
        let parame = {
          "functionName": "newIndexToolNowService",
          "methodName": "selectNewIndexToolNowInfoList",
          "pageNo": this.pageIndex,
          "pageSize": 10,
          originSource: {
            OS: this.OS,
            version: "H5_V1.0"
          },
          "data": dataObj
        }
        console.log(parame)
        this.$post(JSON.stringify(parame)).then(result => {
          this.loading = false;
          if (result.errorCode == ERROR_CODE && result.data.codeType != '400') {
            console.log('股市数据查询成功==>', result);
            this.total = result.sumCount;
            //概览信息
            this.tableData = [];
            var newIndexToolNowList = result.data.newIndexToolNowList;
            newIndexToolNowList.forEach((e, i) => {
              if (e != 0) {
                this.tableData.push({
                  name: e.name,
                  price: Number(e.price).toFixed(4),
                  pctchange: Number(e.pctchange).toFixed(4),
                  change: Number(e.change).toFixed(4),
                });
              }
            });
          }
        })
      },
      //换页
      pageChange(pageIndex) {
        this.pageIndex = pageIndex
        this.getTableData()
      },
      //表格数据颜色
      columnCellClass(rowIndex, columnName, rowData) {
        // 给所有行设置className
        if (columnName === 'name') {
          return 'column-cell-class-name-first';
        }
        // 给涨为红
        if (columnName !== 'name' && rowData.pctchange >= 0) {
          return 'column-cell-class-name-red';
        }
        // 给跌
        if (columnName !== 'name' && rowData.pctchange < 0) {
          return 'column-cell-class-name-green';
        }
      },
      //点击行
      rowClick(rowIndex, rowData) {
        console.log(rowIndex);
        console.log(rowData);
        this.popupVisible = true;
        this.selectName = rowData.name;
        this.selectPrice = rowData.price;
        this.selectPctchange = rowData.pctchange;
        this.selectChange = rowData.change;
      },
      // 获取 table 组件每次操作后的参数（重新去请求数据）
      sortChange(params) {
        for (var key in params) {
          this.sort = params[key];
          this.sortName = key;
          this.getTableData();
        }
      }
    },
    created() {
      this.getTableData()
    },
    components: {
    },
    computed: {
      getPages: function () {
        return Math.ceil(this.total / 10);
      }
    },

    mounted() {

    }
  }
</script>